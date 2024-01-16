/*! Package:geoview-footer-panel: 0.1.0 - "aa1e8967c1a959179b4833b8813771f4e1294045" - 2024-01-16T19:38:42.309Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{80161:(e,t,n)=>{var a=n(76014),o=n(84580),r=n(42910),i=n(64188),s=n(16167),u=n(91267),l=n(64057),c=n(21284),d=n(89498),f=n(9354);const p=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","layers","details","data-table","time-slider","geoChart"]},"minItems":0,"default":["legend","layers","details","data-table"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),v=JSON.parse('{"tabs":{"defaultTabs":["legend","layers","details","data-table"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var m=n(96021),g=n(86865),E=n(29541);function y(e){var t=e.mapId,n=window.cgpv,a=n.api,o=n.react,r=o.useState,i=o.useEffect,s=r(),u=(0,g.Z)(s,2),l=u[0],d=u[1],f=r([]),p=(0,g.Z)(f,2),v=p[0],y=p[1],h=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&y((0,m.Z)(a.maps[t].layer.layerOrder).reverse())},b=function(){return h()},A=function(e){(0,c.UKz)(e)&&y((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},L=function(e){(0,c.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){h(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,b,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,A,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,L,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,b),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,A),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,L)}}),[]),i((function(){d(a.maps[t].legend.createLegend({layerIds:v,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[v]),(0,E.jsx)("div",{children:l})}var h=n(77797),b=n(65922),A=n.n(b);function L(e){var t=e.mapId,n=window.cgpv,a=n.api,o=n.react,r=o.useState,i=o.useEffect,s=r(null),u=(0,g.Z)(s,2),l=u[0],c=u[1],d=function(){var e=(0,h.Z)(A().mark((function e(){var a;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.api.maps[t].dataTable.createDataPanel();case 2:a=e.sent,c(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){setTimeout((function(){d()}),1e3)};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,f,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,f)}}),[]),(0,E.jsx)("div",{children:l})}function T(e){var t=e.mapId,n=window.cgpv,a=n.api,o=n.react,r=o.useState,i=o.useEffect,s=r(),u=(0,g.Z)(s,2),l=u[0],d=u[1],f=r([]),p=(0,g.Z)(f,2),v=p[0],y=p[1],h=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&y((0,m.Z)(a.maps[t].layer.layerOrder).reverse())},b=function(){return h()},A=function(e){(0,c.UKz)(e)&&y((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},L=function(e){(0,c.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){h(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,b,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,A,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,L,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,b),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,A),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,L)}}),[]),i((function(){d(a.maps[t].layers.createLayers({layerIds:v,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[v]),(0,E.jsx)("div",{children:l})}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var N=function(e){(0,i.Z)(n,e);var t=D(n);function n(){var e;(0,a.Z)(this,n);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return e=t.call.apply(t,[this].concat(i)),(0,l.Z)((0,r.Z)(e),"schema",(function(){return p})),(0,l.Z)((0,r.Z)(e),"defaultConfig",(function(){return(0,c.ZQJ)(v)})),(0,l.Z)((0,r.Z)(e),"translations",(0,c.ZQJ)({en:{footerPanel:{legend:"Legend",layers:"Layers",details:"Details",dataTable:"DataTable",timeSlider:"Time Slider",geochart:"Chart"}},fr:{footerPanel:{legend:"Légende",layers:"Couches",details:"Détails",dataTable:"Données",timeSlider:"Curseur Temporel",geochart:"Graphique"}}})),e}return(0,o.Z)(n,[{key:"onAdd",value:function(){var e,t,n=this,a=(null===(e=this.configObj)||void 0===e?void 0:e.tabs.defaultTabs)||[],o=0;if(a.includes("legend")&&(this.map().footerTabs.createFooterTab({id:"legend",value:o,label:"footerPanel.legend",content:function(){return(0,E.jsx)(y,{mapId:n.pluginProps.mapId})},icon:(0,E.jsx)(f.HubOutlinedIcon,{})}),o++),a.includes("layers")&&(this.map().footerTabs.createFooterTab({id:"layers",value:o,label:"footerPanel.layers",content:function(){return(0,E.jsx)(T,{mapId:n.pluginProps.mapId})},icon:(0,E.jsx)(f.LayersOutlinedIcon,{})}),o++),a.includes("details")){var r=o;this.map().footerTabs.createFooterTab({id:"details",value:r,label:"footerPanel.details",content:function(){var e;return null===(e=n.map())||void 0===e?void 0:e.details.createDetails(n.pluginProps.mapId)},icon:(0,E.jsx)(f.InfoOutlinedIcon,{})}),o++}a.includes("data-table")&&(this.map().footerTabs.createFooterTab({id:"data-table",value:o,label:"footerPanel.dataTable",content:function(){return(0,E.jsx)(L,{mapId:n.pluginProps.mapId})},icon:(0,E.jsx)(f.StorageIcon,{})}),o++),a.includes("time-slider")&&this.api.plugin.loadScript("time-slider").then((function(e){n.api.plugin.addPlugin("time-slider",n.pluginProps.mapId,e,(0,c.ZQJ)({mapId:n.pluginProps.mapId}))})),a.includes("geoChart")&&this.api.plugin.loadScript("geochart").then((function(e){n.api.plugin.addPlugin("geochart",n.pluginProps.mapId,e,(0,c.ZQJ)({mapId:n.pluginProps.mapId}))}));for(var i=null===(t=this.configObj)||void 0===t?void 0:t.tabs.customTabs,s=0;s<i.length;s++){var u=i[s];this.map().footerTabs.createFooterTab({id:u.id,value:o,label:u.title,content:u.contentHTML}),o++}}},{key:"onRemove",value:function(){}}]),n}(d.V);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["footer-panel"]=(0,c.RFZ)(N)}},e=>{var t;t=80161,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map