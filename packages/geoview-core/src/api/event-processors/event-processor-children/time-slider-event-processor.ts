import { AbstractEventProcessor } from '@/api/event-processors/abstract-event-processor';
import {
  ITimeSliderState,
  TimeSliderLayerSet,
  TypeTimeSliderValues,
} from '@/core/stores/store-interface-and-intial-values/time-slider-state';
import { getLocalizedValue } from '@/core/utils/utilities';
import { AbstractGeoViewLayer } from '@/geo/layer/geoview-layers/abstract-geoview-layers';
import { WMS } from '@/geo/layer/geoview-layers/raster/wms';
import { TypeFeatureInfoLayerConfig, TypeLayerEntryConfig, layerEntryIsGroupLayer } from '@/geo/map/map-schema-types';
import { EsriImage } from '@/geo/layer/geoview-layers/raster/esri-image';
import { AppEventProcessor } from './app-event-processor';
import { MapEventProcessor } from './map-event-processor';
import { UIEventProcessor } from './ui-event-processor';
import { GVWMS } from '@/geo/layer/gv-layers/raster/gv-wms';
import { GVEsriImage } from '@/geo/layer/gv-layers/raster/gv-esri-image';
import { AbstractGVLayer } from '@/geo/layer/gv-layers/abstract-gv-layer';

// GV Important: See notes in header of MapEventProcessor file for information on the paradigm to apply when working with UIEventProcessor vs UIState

export class TimeSliderEventProcessor extends AbstractEventProcessor {
  // **********************************************************
  // Static functions for Typescript files to access store actions
  // **********************************************************
  // GV Typescript MUST always use the defined store actions below to modify store - NEVER use setState!
  // GV Some action does state modifications AND map actions.
  // GV ALWAYS use map event processor when an action modify store and IS NOT trap by map state event handler

  // #region
  /**
   * Shortcut to get the TimeSlider state for a given map id
   * @param {string} mapId - The mapId
   * @returns {ITimeSliderState | undefined} The Time Slider state. Forcing the return to also be 'undefined', because
   *                                         there will be no timeSliderState if the TimeSlider plugin isn't active.
   *                                         This helps the developers making sure the existence is checked.
   */
  protected static getTimesliderState(mapId: string): ITimeSliderState | undefined {
    // Return the time slider state
    return super.getState(mapId).timeSliderState;
  }

  /**
   * Gets time slider layers.
   * @param {string} mapId - The map id of the state to act on
   * @returns {TimeSliderLayerSet | undefined} The time slider layer set or undefined
   */
  static getTimeSliderLayers(mapId: string): TimeSliderLayerSet | undefined {
    return this.getTimesliderState(mapId)?.timeSliderLayers;
  }

  /**
   * Gets filter(s) for a layer.
   * @param {string} mapId - The map id of the state to act on
   * @param {string} layerPath - The path of the layer
   * @returns {string | undefined} The time slider filter(s) for the layer
   */
  static getTimeSliderFilter(mapId: string, layerPath: string): string | undefined {
    return this.getTimesliderState(mapId)?.sliderFilters[layerPath];
  }

  /**
   * Checks if the layer has time slider values. If there are, adds the time slider layer and applies filters.
   * @param {string} mapId - The map id of the state to act on
   * @param {TypeLayerEntryConfig} layerConfig - The layer path of the layer to add to the state
   */
  static checkInitTimeSliderLayerAndApplyFilters(mapId: string, layerConfig: TypeLayerEntryConfig): void {
    // If there is no TimeSlider
    if (!this.getTimesliderState(mapId)) return;

    // Get the time slider values
    const timeSliderValues = this.getInitialTimeSliderValues(mapId, layerConfig);

    // If any
    if (timeSliderValues) {
      // Add the time slider in store
      this.#addTimeSliderLayerAndApplyFilters(mapId, layerConfig.layerPath, timeSliderValues);
    }
  }

  /**
   * Adds a time slider layer to the state
   * @param {string} mapId - The map id of the state to act on
   * @param {string} layerPath - The layer path of the layer to add to the state
   * @param {TypeTimeSliderValues} timeSliderValues - The time slider values to add and apply filters
   */
  static #addTimeSliderLayerAndApplyFilters(mapId: string, layerPath: string, timeSliderValues: TypeTimeSliderValues): void {
    // If there is no TimeSlider
    if (!this.getTimesliderState(mapId)) return;

    // Create set part (because that's how it works for now)
    const timeSliderLayer = { [layerPath]: timeSliderValues };

    // Add it
    this.getTimesliderState(mapId)?.setterActions.addTimeSliderLayer(timeSliderLayer);

    const { defaultValue, field, filtering, minAndMax, values } = timeSliderLayer[layerPath];
    this.updateFilters(mapId, layerPath, defaultValue, field, filtering, minAndMax, values);

    // Make sure tab is visible
    UIEventProcessor.showTab(mapId, 'time-slider');
  }

  /**
   * Removes a time slider layer from the state
   * @param {string} mapId - The map id of the state to act on
   * @param {string} layerPath - The layer path of the layer to remove from the state
   */
  static removeTimeSliderLayer(mapId: string, layerPath: string): void {
    // Redirect
    this.getTimesliderState(mapId)?.setterActions.removeTimeSliderLayer(layerPath);

    // If there are no layers with time dimension, hide tab
    if (!this.getTimesliderState(mapId) || !Object.keys(this.getTimesliderState(mapId)!.timeSliderLayers).length)
      UIEventProcessor.hideTab(mapId, 'time-slider');
  }

  /**
   * Get initial values for a layer's time slider states
   *
   * @param {string} mapId - The id of the map
   * @param {TypeLayerEntryConfig} layerConfig - The layer path of the layer to add to the state
   * @returns {TimeSliderLayer | undefined}
   */
  static getInitialTimeSliderValues(mapId: string, layerConfig: TypeLayerEntryConfig): TypeTimeSliderValues | undefined {
    // Get the layer using the map event processor, If no temporal dimension OR layerPath, return undefined
    if (!layerConfig.layerPath) return undefined;
    const geoviewLayer = MapEventProcessor.getMapViewerLayerAPI(mapId).getGeoviewLayerHybrid(layerConfig.layerPath)!;

    // If a group
    if (layerEntryIsGroupLayer(layerConfig)) return undefined;

    // Cast the layer
    const geoviewLayerCasted = geoviewLayer as AbstractGeoViewLayer | AbstractGVLayer;

    // Get the temporal dimension information
    const temporalDimensionInfo = geoviewLayerCasted.getTemporalDimension(layerConfig.layerPath);

    // If no temporal dimension information
    if (!temporalDimensionInfo || !temporalDimensionInfo.range) return undefined;

    // Set defaults values from temporal dimension
    const { range } = temporalDimensionInfo.range;
    const defaultValueIsArray = Array.isArray(temporalDimensionInfo.default);
    const defaultValue = defaultValueIsArray ? temporalDimensionInfo.default[0] : temporalDimensionInfo.default;
    const minAndMax: number[] = [new Date(range[0]).getTime(), new Date(range[range.length - 1]).getTime()];
    const { field, singleHandle, nearestValues } = temporalDimensionInfo;

    // If the field type has an alias, use that as a label
    let fieldAlias = field;
    let localizedAliasFields;
    let localizedOutFields;
    const { featureInfo } = layerConfig.source!;
    if (featureInfo) {
      const { aliasFields, outfields } = featureInfo as TypeFeatureInfoLayerConfig;
      localizedOutFields = getLocalizedValue(outfields, AppEventProcessor.getDisplayLanguage(mapId))?.split(',');
      localizedAliasFields = getLocalizedValue(aliasFields, AppEventProcessor.getDisplayLanguage(mapId))?.split(',');
    }
    const fieldIndex = localizedOutFields ? localizedOutFields.indexOf(field) : -1;
    if (fieldIndex !== -1 && localizedAliasFields && localizedOutFields && localizedAliasFields?.length === localizedOutFields?.length)
      fieldAlias = localizedAliasFields![fieldIndex];

    // eslint-disable-next-line no-nested-ternary
    const values = singleHandle
      ? [new Date(temporalDimensionInfo.default).getTime()]
      : defaultValueIsArray
      ? [new Date(temporalDimensionInfo.default[0]).getTime(), new Date(temporalDimensionInfo.default[1]).getTime()]
      : [...minAndMax];

    return {
      range,
      defaultValue,
      discreteValues: nearestValues === 'discrete',
      minAndMax,
      field,
      fieldAlias,
      singleHandle,
      filtering: true,
      values,
      delay: 1000,
      locked: undefined,
      reversed: undefined,
    };
  }

  /**
   * Sets the selected layer path
   * @param {string} mapId - The map id of the state to act on
   * @param {string} layerPath - The layer path to use
   */
  static setSelectedLayerPath(mapId: string, layerPath: string): void {
    // Redirect
    this.getTimesliderState(mapId)?.setterActions.setSelectedLayerPath(layerPath);
  }

  /**
   * Sets the filter for the layer path
   * @param {string} mapId - The map id of the state to act on
   * @param {string} layerPath - The layer path to use
   * @param {string} filter - The filter
   */
  static addOrUpdateSliderFilter(mapId: string, layerPath: string, filter: string): void {
    const curSliderFilters = this.getTimesliderState(mapId)?.sliderFilters;
    this.getTimesliderState(mapId)?.setterActions.setSliderFilters({ ...curSliderFilters, [layerPath]: filter });
  }

  // #endregion

  // **********************************************************
  // Static functions for Store Map State to action on API
  // **********************************************************
  // GV NEVER add a store action who does set state AND map action at a same time.
  // GV Review the action in store state to make sure

  // #region
  /**
   * Filter the layer provided in the layerPath variable according to current states (filtering and values)
   *
   * @param {string} mapId - The id of the map
   * @param {string} layerPath - The path of the layer to filter
   * @param {string} defaultValue - The default value to use if filters are off
   * @param {string} field - The field to filter the layer by
   * @param {boolean} filtering - Whether the layer should be filtered or returned to default
   * @param {number[]} minAndMax - Minimum and maximum values of slider
   * @param {number[]} values - Filter values to apply
   * @returns {void}
   */
  static updateFilters(
    mapId: string,
    layerPath: string,
    defaultValue: string,
    field: string,
    filtering: boolean,
    minAndMax: number[],
    values: number[]
  ): void {
    // Get the layer using the map event processor
    const geoviewLayer = MapEventProcessor.getMapViewerLayerAPI(mapId).getGeoviewLayerHybrid(layerPath)!;

    let filter: string;
    if (geoviewLayer instanceof WMS || geoviewLayer instanceof GVWMS) {
      if (filtering) {
        const newValue = `${new Date(values[0]).toISOString().slice(0, new Date(values[0]).toISOString().length - 5)}Z`;
        filter = `${field}=date '${newValue}'`;
      } else {
        filter = `${field}=date '${defaultValue}'`;
      }
    } else if (geoviewLayer instanceof EsriImage || geoviewLayer instanceof GVEsriImage) {
      if (filtering) {
        filter = `time=${minAndMax[0]},${values[0]}`;
      } else {
        filter = `time=${minAndMax[0]},${defaultValue}`;
      }
    } else if (filtering) {
      filter = `${field} >= date '${new Date(values[0]).toISOString()}'`;
      if (values.length > 1) {
        filter += ` and ${field} <= date '${new Date(values[1]).toISOString()}'`;
      }
    } else {
      filter = `${field} >= date '${new Date(minAndMax[0]).toISOString()}'`;
      if (values.length > 1) {
        filter += `and ${field} <= date '${new Date(minAndMax[1]).toISOString()}'`;
      }
    }

    this.getTimesliderState(mapId)?.setterActions.setFiltering(layerPath, filtering);
    this.getTimesliderState(mapId)?.setterActions.setValues(layerPath, values);
    this.addOrUpdateSliderFilter(mapId, layerPath, filter);
    MapEventProcessor.applyLayerFilters(mapId, layerPath);
  }
  // #endregion
}
