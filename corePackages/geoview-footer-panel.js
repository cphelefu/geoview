/*! Package:geoview-footer-panel: 0.1.0 - "bf8098c12cd3bafc5926a554f8ba3230a62bffb9" - 2023-11-06T17:33:33.035Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[435],{46253:(e,t,n)=>{var a=n(52908),r=n(42037),o=n(63684),i=n(98512),s=n(57694),c=n(30452),u=n(89568),l=n(44647),f=n(75918);const d=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Footer Config Schema","type":"object","version":1,"comments":"Configuration for GeoView footer package.","additionalProperties":true,"properties":{"tabs":{"type":"object","description":"Available tabs","properties":{"defaultTabs":{"type":"array","items":{"type":"string","enum":["legend","layers","details","data-table","time-slider"]},"minItems":0,"default":["legend","layers","details","data-table"],"uniqueItems":true,"description":"Defaut tabs of footer panel to use"},"customTabs":{"type":"array","items":{"type":"object","properties":{"defaultTabs":{"type":"string"},"contentHTML":{"type":"string"}}},"minItems":0,"default":[],"uniqueItems":true,"description":"Custom tabs of footer panel to use"}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."},"collapsed":{"type":"boolean","default":true,"description":"State of footer panel when map is loaded"}},"required":["suportedLanguages","tabs"]}'),v=JSON.parse('{"tabs":{"defaultTabs":["legend","layers","details","data-table"],"customTabs":[]},"suportedLanguages":["en","fr"]}');var E=n(59195),p=n(29541),m=window;function g(e){var t=e.mapId,n=m.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o([]),c=(0,E.Z)(s,2),u=c[0],f=c[1],d=o(),v=(0,E.Z)(d,2),g=v[0],y=v[1],A=o([]),L=(0,E.Z)(A,2),_=L[0],N=L[1],T=o(null),b=(0,E.Z)(T,2),h=b[0],D=b[1],I=function(e){if((0,l.gNW)(e)&&"at_long_lat"===e.queryType){var n=e.resultSets,r=[];Object.keys(n).forEach((function(e){var o,i=(0,l.dIw)(a.maps[t].layer.registeredLayers[e].layerName,t),s=null===(o=n[e])||void 0===o?void 0:o.data.at_long_lat;null!=s&&s.length&&(null==s?void 0:s.length)>0&&r.push({layerPath:e,layerName:i,features:s})})),r.length>0?f(r):f([])}else f([])},R=function(e){if((0,l.gux)(e)){var t=e.coordinates;D(e.handlerName),N(t.lnglat)}else N([])};return i((function(){return a.event.on(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,I,"".concat(t,"/FeatureInfoLayerSet")),a.event.on(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,R,t),function(){a.event.off(a.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,t,I),a.event.off(a.eventNames.MAP.EVENT_MAP_SINGLE_CLICK,t,R)}}),[]),i((function(){y(a.maps[t].details.createDetails(t,u,{mapId:t,location:_,handlerName:h}))}),[u,_]),(0,p.jsx)("div",{children:g})}var y=n(27909),A=window;function L(e){var t=e.mapId,n=A.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),c=(0,E.Z)(s,2),u=c[0],f=c[1],d=o([]),v=(0,E.Z)(d,2),m=v[0],g=v[1],L=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&g((0,y.Z)(a.maps[t].layer.layerOrder).reverse())},_=function(){return L()},N=function(e){(0,l.UKz)(e)&&g((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},T=function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){L(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,_,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,N,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,T,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,_),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,N),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,T)}}),[]),i((function(){f(a.maps[t].legend.createLegend({layerIds:m,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[m]),(0,p.jsx)("div",{children:u})}var _=n(67016),N=n(91241),T=n.n(N),b=window;function h(e){var t=e.mapId,n=b.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(null),c=(0,E.Z)(s,2),u=c[0],l=c[1],f=function(){var e=(0,_.Z)(T().mark((function e(){var a;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.api.maps[t].dataTable.createDataPanel();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){setTimeout((function(){f()}),1e3)};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,d,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,d)}}),[]),(0,p.jsx)("div",{children:u})}var D=window;function I(e){var t=e.mapId,n=D.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(),c=(0,E.Z)(s,2),u=c[0],f=c[1],d=o([]),v=(0,E.Z)(d,2),m=v[0],g=v[1],A=function(){var e;void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&g((0,y.Z)(a.maps[t].layer.layerOrder).reverse())},L=function(){return A()},_=function(e){(0,l.UKz)(e)&&g((function(t){return t.filter((function(t){return t!==e.geoviewLayer.geoviewLayerId}))}))},N=function(e){(0,l.riW)(e)&&a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){A(),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))}),"".concat(t,"/").concat(e.layerConfig.geoviewLayerId))};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,L,t),a.event.on(a.eventNames.LAYER.EVENT_REMOVE_LAYER,_,t),a.event.on(a.eventNames.LAYER.EVENT_ADD_LAYER,N,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,L),a.event.off(a.eventNames.LAYER.EVENT_REMOVE_LAYER,t,_),a.event.off(a.eventNames.LAYER.EVENT_ADD_LAYER,t,N)}}),[]),i((function(){f(a.maps[t].layers.createLayers({layerIds:m,isRemoveable:!1,canSetOpacity:!0,canZoomTo:!0}))}),[m]),(0,p.jsx)("div",{children:u})}var R=window;function w(e){var t=e.mapId,n=R.cgpv,a=n.api,r=n.react,o=r.useState,i=r.useEffect,s=o(null),c=(0,E.Z)(s,2),u=c[0],l=c[1],f=function(){var e=(0,_.Z)(T().mark((function e(){var a;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.api.maps[t].timeSlider.createTimeSlider();case 2:a=e.sent,l(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){setTimeout((function(){f()}),1e3)};return i((function(){return a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,d,t),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,d)}}),[]),(0,p.jsx)("div",{children:u})}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var r=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.Z)(this,n)}}var Z=window,V=function(e){(0,i.Z)(n,e);var t=O(n);function n(e,r){var i;return(0,a.Z)(this,n),i=t.call(this,e,r),(0,u.Z)((0,o.Z)(i),"schema",(function(){return d})),(0,u.Z)((0,o.Z)(i),"defaultConfig",(function(){return(0,l.ZQJ)(v)})),(0,u.Z)((0,o.Z)(i),"translations",(0,l.ZQJ)({en:{legend:"Legend",layers:"Layers",details:"Details",dataTable:"DataTable",timeSlider:"Time Slider"},fr:{legend:"Légende",layers:"Couches",details:"Détails",dataTable:"Données",timeSlider:"Curseur Temporel"}})),(0,u.Z)((0,o.Z)(i),"added",(function(){var e=(0,o.Z)(i),t=e.configObj,n=e.pluginProps.mapId,a=Z.cgpv;if(a){var r=a.api,s=r.maps[n],c=s.displayLanguage,u=s.footerTabs,d=null==t?void 0:t.tabs.defaultTabs,v=0;if(d.includes("legend")&&(u.createFooterTab({value:v,label:i.translations[c].legend,content:function(){return(0,p.jsx)(L,{mapId:n})},icon:(0,p.jsx)(f.HubOutlinedIcon,{})}),v++),d.includes("layers")&&(u.createFooterTab({value:v,label:i.translations[c].layers,content:function(){return(0,p.jsx)(I,{mapId:n})},icon:(0,p.jsx)(f.LayersOutlinedIcon,{})}),v++),d.includes("details")){var E=v;u.createFooterTab({value:E,label:i.translations[c].details,content:function(){return(0,p.jsx)(g,{mapId:n})},icon:(0,p.jsx)(f.InfoOutlinedIcon,{})}),v++,r.event.on(r.eventNames.GET_FEATURE_INFO.ALL_QUERIES_DONE,(function(e){if((0,l.gNW)(e)){var t=e.resultSets,n=[];Object.keys(t).forEach((function(e){n=n.concat(t[e])})),n.length>0&&u.selectFooterTab(E)}}),"".concat(n,"/FeatureInfoLayerSet"))}d.includes("data-table")&&(u.createFooterTab({value:v,label:i.translations[c].dataTable,content:function(){return(0,p.jsx)(h,{mapId:n})},icon:(0,p.jsx)(f.StorageIcon,{})}),v++),d.includes("time-slider")&&(u.createFooterTab({value:v,label:i.translations[c].timeSlider,content:function(){return(0,p.jsx)(w,{mapId:n})}}),v++);for(var m=null==t?void 0:t.tabs.customTabs,y=0;y<m.length;y++){var A=m[y];u.createFooterTab({value:v,label:A.title,content:A.contentHTML}),v++}}})),i.buttonPanel=null,i}return(0,r.Z)(n,[{key:"removed",value:function(){Z.cgpv}}]),n}(l.Vw$);Z.plugins=Z.plugins||{},Z.plugins["footer-panel"]=(0,l.RFZ)(V)}},e=>{var t;t=46253,e(e.s=t)}]);
//# sourceMappingURL=geoview-footer-panel.js.map