/*! Package:geoview-time-slider: 0.1.0 - "b7f7d8b6e46826d30e36d6c596afa3187718c4c7" - 2024-06-12T20:05:32.124Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{46483:(e,t,i)=>{i.d(t,{b:()=>f});var n=i(70640),r=i(32814),a=i(71149),o=i(99979),l=i(38096),s=i(64426),c=i(50196),u=i(60854);function d(e,t,i){return t=(0,o.A)(t),(0,a.A)(e,p()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return e=d(this,t,[].concat(r)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,l.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){this.value=this.mapViewer().footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),this.mapViewer().footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){this.value&&this.mapViewer().footerBarApi.removeTab(this.footerProps.id)}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},63535:(e,t,i)=>{var n=i(70640),r=i(32814),a=i(71149),o=i(66138),l=i(99979),s=i(38096),c=i(64426),u=i(76262),d=i(34028),p=i(98874),f=i(46483),g=i(98030),m=i(6106),h=i(47361),v=i(78383),y=i(21160),w=i(28187),b=i(91140),x=i(55950),S=i(60854),A=i(86358),P=i(93428),j=i(56670),D=i(51559),L=i(73342),T=i(30538),I=i(87286),k=i(99430),O=i(70124),E=i(52117),C=i(96631),V=i(56749),F=i(85082),M=i(70042),R=i(49824),N=i(97282);const z=["className","children","classes","IconComponent","input","inputProps","variant"],B=["root"],G=(0,N.jsx)(F.A,{}),H=T.forwardRef((function(e,t){const i=(0,M.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:a={},IconComponent:o=V.A,input:l=G,inputProps:s}=i,c=(0,L.A)(i,z),u=(0,C.A)(),d=(0,E.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,k.A)({root:["root"]},R.w,t)})((0,D.A)({},i,{classes:a})),f=(0,L.A)(a,B);return(0,N.jsx)(T.Fragment,{children:T.cloneElement(l,(0,D.A)({inputComponent:O.Ay,inputProps:(0,D.A)({children:r,classes:f,IconComponent:o,variant:d.variant,type:void 0},s,l?l.props.inputProps:{}),ref:t},c,{className:(0,I.A)(p.root,l.props.className,n)}))})}));H.muiName="Select";const U=H;var K=i(79913),Y=i(31726),W=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function J(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function _(e){S.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,a=t.react,o=t.ui,l=a.useState,s=a.useRef,c=a.useEffect,u=a.useCallback,d=o.elements,p=d.Grid,f=d.Slider,g=d.Typography,m=d.Checkbox,v=d.Tooltip,w=d.IconButton,D=d.LockIcon,L=d.LockOpenIcon,T=d.ArrowLeftIcon,I=d.PlayArrowIcon,k=d.PauseIcon,O=d.ArrowRightIcon,E=d.SwitchRightIcon,C=d.SwitchLeftIcon,V=(0,A.A)(),F=W(V),M=l(!1),R=(0,h.A)(M,2),z=R[0],B=R[1],G=s(),H=s(),q=s(),_=(0,y.Gg)(),X=_.setTitle,$=_.setDefaultValue,Q=_.setDescription,Z=_.setValues,ee=_.setLocked,te=_.setReversed,ie=_.setDelay,ne=_.setFiltering,re=(0,Y.t)(),ae=(0,y.ky)()[n],oe=ae.title,le=ae.description,se=ae.defaultValue,ce=ae.discreteValues,ue=ae.range,de=ae.minAndMax,pe=ae.field,fe=ae.fieldAlias,ge=ae.filtering,me=ae.singleHandle,he=ae.values,ve=ae.delay,ye=ae.locked,we=ae.reversed,be=(0,b.Yo)(),xe=x.K.findLayerByPath(be,n).layerName;c((function(){var e;S.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===oe&&X(n,(0,K.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===le&&Q(n,(0,K.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ye&&ee(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===we&&te(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&$(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e;S.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,n);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Z(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?Z(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):Z(n,[new Date(ue[0]).getTime()]))}),[i,n,ue,ne,Z]);var Se,Ae=ue.map((function(e){return new Date(e).getTime()})),Pe=de[1]-de[0],je=new Date(de[1]).getDate()-new Date(de[0]).getDate(),De=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===je&&Pe<864e5?Se="day":0===De&&(Se="year");var Le=[];if(ue.length<4&&ce){var Te=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;Le=[de[0],de[0]+Te,de[0]+2*Te,de[0]+3*Te,de[1]]}else Le=ue.length<6||me?Ae:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Ie=[],ke=0;ke<Le.length;ke++)Ie.push({value:Le[ke],label:Se?"".concat("day"===Se?new Date(Le[ke]).toTimeString().split(" ")[0]:new Date(Le[ke]).toISOString().slice(5,10)):new Date(Le[ke]).toISOString().slice(0,10)});function Oe(){if(me&&!ce){var e,t=Ae.indexOf(he[0]);e=Ae[t]===de[0]?Ae.length-1:t-1,Z(n,[Ae[e]])}else if(me){var i=(de[1]-de[0])/20,r=he[0]-i<de[0]?de[1]:he[0]-i;Z(n,[r])}else{var a=(0,h.A)(he,2),o=a[0],l=a[1];if(!q.current){if(l-o>(de[1]-de[0])/5)return q.current=(de[1]-de[0])/5,void Z(n,[l-q.current,l]);q.current=l-o}if(ye&&we){if(o===de[0]&&(o=l),(o-=q.current)<de[0])o=(0,h.A)(de,1)[0]}else if(ye){if((l-=q.current)<o&&(l=o),l===o)l=(0,h.A)(de,2)[1]}else{if(l>H.current&&o===H.current?l=H.current:l-=q.current,l<=de[0])l=(0,h.A)(de,2)[1];if((o=l-q.current)<de[0])o=(0,h.A)(de,1)[0];o<H.current&&l>H.current&&(o=H.current)}Z(n,[o,l])}}function Ee(){if(me&&!ce){var e,t=Ae.indexOf(he[0]);e=Ae[t]===de[1]?0:t+1,Z(n,[Ae[e]])}else if(me){var i=(de[1]-de[0])/20,r=he[0]+i>de[1]?de[0]:he[0]+i;Z(n,[r])}else{var a=(0,h.A)(he,2),o=a[0],l=a[1];if(!q.current){if(l-o>(de[1]-de[0])/5)return q.current=(de[1]-de[0])/5,void Z(n,[o,o+q.current]);q.current=l-o}if(ye&&we){if((o+=q.current)>=l)o=(0,h.A)(de,1)[0]}else if(ye){if(l===de[1]&&(l=o),(l+=q.current)>de[1])l=(0,h.A)(de,2)[1]}else{if(o<H.current&&l===H.current?o=H.current:o+=q.current,o>=de[1])o=(0,h.A)(de,1)[0];if((l=o+q.current)>de[1])l=(0,h.A)(de,2)[1];l>H.current&&o<H.current&&(l=H.current)}Z(n,[o,l])}}function Ce(){return we?ye?(0,K.getLocalizedMessage)("timeSlider.slider.unlockRight",re):(0,K.getLocalizedMessage)("timeSlider.slider.lockRight",re):ye?(0,K.getLocalizedMessage)("timeSlider.slider.unlockLeft",re):(0,K.getLocalizedMessage)("timeSlider.slider.lockLeft",re)}c((function(){S.vF.logTraceUseEffect("TIME-SLIDER - values filtering",he,ge),z&&(G.current=we?window.setTimeout((function(){return Oe()}),ve):window.setTimeout((function(){return Ee()}),ve))}),[he,ge,we,ye]),c((function(){S.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",z),z&&(we?Oe():Ee())}),[z]);var Ve=u((function(e){S.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",n),clearTimeout(G.current),B(!1),q.current=void 0,Z(n,e)}),[n,Z]),Fe=u((function(e){return S.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",Se),"day"===Se?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===Se?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[Se]);return(0,N.jsx)(p,{children:(0,N.jsxs)("div",{children:[(0,N.jsxs)(p,{container:!0,sx:F.rightPanelBtnHolder,children:[(0,N.jsx)(p,{item:!0,xs:9,children:(0,N.jsxs)(g,{component:"div",sx:J(J({},F.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(oe||xe),void 0!==Se&&" (".concat("day"===Se?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,N.jsx)(p,{item:!0,xs:3,children:(0,N.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,N.jsx)(v,{title:ge?(0,K.getLocalizedMessage)("timeSlider.slider.disableFilter",re):(0,K.getLocalizedMessage)("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,N.jsx)(m,{checked:ge,onChange:function(e,t){return ne(n,i=t),void(i||(clearInterval(G.current),B(!1)));var i}})})})})]}),(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,N.jsx)(f,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:he,marks:Ie,step:ce?.1:null,onChangeCommitted:Ve,onValueDisplay:Fe},he[1]?he[1]+he[0]:he[0])})}),(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,N.jsx)(w,{className:"buttonOutline","aria-label":Ce(),tooltip:Ce(),tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),void ee(n,!ye)},children:ye?(0,N.jsx)(D,{}):(0,N.jsx)(L,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return H.current=we?he[1]:he[0],void Oe()},children:(0,N.jsx)(T,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":z?(0,K.getLocalizedMessage)("timeSlider.slider.pauseAnimation",re):(0,K.getLocalizedMessage)("timeSlider.slider.playAnimation",re),tooltip:z?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ge,onClick:function(){return clearTimeout(G.current),H.current=we?he[1]:he[0],void B(!z)},children:z?(0,N.jsx)(k,{}):(0,N.jsx)(I,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return e=(0,h.A)(he,1),H.current=e[0],void Ee();var e},children:(0,N.jsx)(O,{})}),(0,N.jsx)(w,{className:"buttonOutline","aria-label":(0,K.getLocalizedMessage)("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),te(n,!we),void(z&&(we?Oe():Ee()))},children:we?(0,N.jsx)(E,{}):(0,N.jsx)(C,{})}),(0,N.jsxs)(P.A,{sx:{width:"150px"},children:[(0,N.jsx)(j.A,{variant:"standard",children:(0,K.getLocalizedMessage)("timeSlider.slider.timeDelay",re)}),(0,N.jsxs)(U,{defaultValue:ve,inputProps:{name:"timeDelay",onChange:function(e){return function(e){ie(n,e.target.value)}(e)}},children:[(0,N.jsx)("option",{value:500,children:"0.5s"}),(0,N.jsx)("option",{value:750,children:"0.75s"}),(0,N.jsx)("option",{value:1e3,children:"1.0s"}),(0,N.jsx)("option",{value:1500,children:"1.5s"}),(0,N.jsx)("option",{value:2e3,children:"2.0s"}),(0,N.jsx)("option",{value:3e3,children:"3.0s"}),(0,N.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),le&&(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:le})}),fe&&(0,N.jsx)(p,{item:!0,xs:12,children:(0,N.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function X(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useState,a=n.useCallback,o=n.useMemo,l=n.useEffect,s=r(),c=(0,h.A)(s,2),u=c[0],d=c[1],f=(0,w.wE)(),g=(0,y.ky)(),m=(0,b.Yo)(),A=a((function(e){S.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),d(e.layerPath)}),[]),P=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},j=o((function(){S.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",g);return f.map((function(e){return{layerPath:e,timeSliderLayerInfo:g[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:x.K.findLayerByPath(m,e.layerPath).layerName,layerPath:e.layerPath,layerFeatures:P(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,i=x.K.findLayerByPath(m,e.layerPath).layerName,(0,N.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[i,t.filtering&&": ".concat(P(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t,i}))}),[m,g,f]);l((function(){S.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",j,u),u&&!j.map((function(e){return e.layerPath})).includes(u)&&d("")}),[j,u]);var D=a((function(e){e&&d("")}),[d]);return(0,N.jsx)(v.PE,{selectedLayerPath:u,onLayerListClicked:A,layerList:j,onGuideIsOpen:D,guideContentIds:["timeSlider"],children:u&&(0,N.jsx)(_,{mapId:t,config:i,layerPath:u},u)})}const $=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}}},"required":["sliders"]}'),Q={sliders:[]};function Z(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function ee(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function te(e,t,i){return t=(0,l.A)(t),(0,a.A)(e,ie()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function ie(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(ie=function(){return!!e})()}function ne(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}var re=new WeakSet,ae=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return ne(e=te(this,t,[].concat(r)),re),(0,c.A)(e,"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"schema",value:function(){return $}},{key:"defaultConfig",value:function(){return(0,u.NK)(Q)}},{key:"onCreateContentProps",value:function(){var e=this;return this.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.P.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var n=t.layerPaths[0],r=g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).getTemporalDimension(n);g.d.getMapViewerLayerAPI(e.pluginProps.mapId).getGeoviewLayerHybrid(n).setTemporalDimension(n,ee(ee({},r),{},{default:t.defaultValue}))}})),{id:"time-slider",value:this.value,label:"timeSlider.title",icon:(0,N.jsx)(p.TimeSliderIcon,{}),content:(0,N.jsx)(X,{mapId:this.pluginProps.mapId,configObj:this.configObj})}}},{key:"onAdd",value:function(){var e=this;this.mapViewer().onMapLayersProcessed((function(){var t=e.mapViewer().layer.getLayerEntryConfigIds(),i=function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i;throw new TypeError("Private element is not present on this object")}(re,e,oe).call(e,t);i&&i.forEach((function(t){var i=e.mapViewer().layer.getLayerEntryConfig(t);m.t.checkInitTimeSliderLayerAndApplyFilters(e.pluginProps.mapId,i)}))})),(0,o.A)((0,l.A)(t.prototype),"onAdd",this).call(this)}}])}(f.b);function oe(e){var t=this;return e.filter((function(e){return t.mapViewer().layer.getGeoviewLayerHybrid(e).getTemporalDimension(e)}))}window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(ae)}},e=>{var t;t=63535,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map