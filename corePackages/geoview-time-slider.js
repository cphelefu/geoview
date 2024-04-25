/*! Package:geoview-time-slider: 0.1.0 - "a6cff22cb5def5c30bbc4298e7ff6ad417263090" - 2024-04-25T18:18:56.666Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{96026:(e,t,i)=>{i.d(t,{b:()=>f});var r=i(21137),n=i(80473),l=i(99906),o=i(32222),a=i(10705),s=i(4031),c=i(39933),u=i(16028);function d(e,t,i){return t=(0,o.A)(t),(0,l.A)(e,p()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return e=d(this,t,[].concat(n)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,a.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},32169:(e,t,i)=>{var r=i(80473),n=i(21137),l=i(99906),o=i(32222),a=i(10705),s=i(4031),c=i(82069),u=i(98702),d=i(79944),p=i(96026),f=i(99101),g=i(12612),m=i(78683),v=i(74871),h=i(3384),y=i(16028),x=i(74538),w=i(33728),S=i(97258),A=i(23652),b=i(37431),j=i(26166),D=i(87286),P=i(41288),L=i(64616),I=i(6865),T=i(89771),O=i(24937),k=i(46774),E=i(84494),C=i(59796),F=i(80678);const M=["className","children","classes","IconComponent","input","inputProps","variant"],R=["root"],V=(0,F.jsx)(k.A,{}),N=j.forwardRef((function(e,t){const i=(0,E.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:l={},IconComponent:o=O.A,input:a=V,inputProps:s}=i,c=(0,b.A)(i,M),u=(0,T.A)(),d=(0,I.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,P.A)({root:["root"]},C.w,t)})((0,A.A)({},i,{classes:l})),f=(0,b.A)(l,R);return(0,F.jsx)(j.Fragment,{children:j.cloneElement(a,(0,A.A)({inputComponent:L.Ay,inputProps:(0,A.A)({children:n,classes:f,IconComponent:o,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,D.A)(p.root,a.props.className,r)}))})}));N.muiName="Select";const z=N;var B=i(85632),U=i(62541),H=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function G(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function J(e){y.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,l=t.api,o=t.react,a=t.ui,s=o.useState,c=o.useRef,u=o.useEffect,d=o.useCallback,p=a.elements,f=p.Grid,m=p.Slider,h=p.Typography,A=p.Checkbox,b=p.Tooltip,j=p.IconButton,D=p.LockIcon,P=p.LockOpenIcon,L=p.ArrowLeftIcon,I=p.PlayArrowIcon,T=p.PauseIcon,O=p.ArrowRightIcon,k=p.SwitchRightIcon,E=p.SwitchLeftIcon,C=(0,x.A)(),M=H(C),R=s(!1),V=(0,g.A)(R,2),N=V[0],G=V[1],J=c(),K=c(),Y=c(),W=(0,v.Gg)(),_=W.setTitle,Q=W.setDefaultValue,X=W.setDescription,$=W.setValues,Z=W.setLocked,ee=W.setReversed,te=W.setDelay,ie=W.setFiltering,re=(0,U.t)(),ne=(0,v.ky)()[r],le=ne.title,oe=ne.description,ae=ne.name,se=ne.defaultValue,ce=ne.discreteValues,ue=ne.range,de=ne.minAndMax,pe=ne.field,fe=ne.fieldAlias,ge=ne.filtering,me=ne.singleHandle,ve=ne.values,he=ne.delay,ye=ne.locked,xe=ne.reversed;u((function(){var e;y.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===le&&_(r,(0,B.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===oe&&X(r,(0,B.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ye&&Z(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===xe&&ee(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&Q(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e;y.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,r);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):$(r,[new Date(ue[0]).getTime()]))}),[i,r,ue,ie,$]);var we,Se=ue.map((function(e){return new Date(e).getTime()})),Ae=de[1]-de[0],be=new Date(de[1]).getDate()-new Date(de[0]).getDate(),je=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===be&&Ae<864e5?we="day":0===je&&(we="year");var De=[];if(ue.length<4&&ce){var Pe=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;De=[de[0],de[0]+Pe,de[0]+2*Pe,de[0]+3*Pe,de[1]]}else De=ue.length<6||me?Se:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Le=[],Ie=0;Ie<De.length;Ie++)Le.push({value:De[Ie],label:we?"".concat("day"===we?new Date(De[Ie]).toTimeString().split(" ")[0]:new Date(De[Ie]).toISOString().slice(5,10)):new Date(De[Ie]).toISOString().slice(0,10)});function Te(){if(me&&!ce){var e,t=Se.indexOf(ve[0]);e=Se[t]===de[0]?Se.length-1:t-1,$(r,[Se[e]])}else if(me){var i=(de[1]-de[0])/20,n=ve[0]-i<de[0]?de[1]:ve[0]-i;$(r,[n])}else{var l=(0,g.A)(ve,2),o=l[0],a=l[1];if(!Y.current){if(a-o>(de[1]-de[0])/5)return Y.current=(de[1]-de[0])/5,void $(r,[a-Y.current,a]);Y.current=a-o}if(ye&&xe){if(o===de[0]&&(o=a),(o-=Y.current)<de[0])o=(0,g.A)(de,1)[0]}else if(ye){if((a-=Y.current)<o&&(a=o),a===o)a=(0,g.A)(de,2)[1]}else{if(a>K.current&&o===K.current?a=K.current:a-=Y.current,a<=de[0])a=(0,g.A)(de,2)[1];if((o=a-Y.current)<de[0])o=(0,g.A)(de,1)[0];o<K.current&&a>K.current&&(o=K.current)}$(r,[o,a])}}function Oe(){if(me&&!ce){var e,t=Se.indexOf(ve[0]);e=Se[t]===de[1]?0:t+1,$(r,[Se[e]])}else if(me){var i=(de[1]-de[0])/20,n=ve[0]+i>de[1]?de[0]:ve[0]+i;$(r,[n])}else{var l=(0,g.A)(ve,2),o=l[0],a=l[1];if(!Y.current){if(a-o>(de[1]-de[0])/5)return Y.current=(de[1]-de[0])/5,void $(r,[o,o+Y.current]);Y.current=a-o}if(ye&&xe){if((o+=Y.current)>=a)o=(0,g.A)(de,1)[0]}else if(ye){if(a===de[1]&&(a=o),(a+=Y.current)>de[1])a=(0,g.A)(de,2)[1]}else{if(o<K.current&&a===K.current?o=K.current:o+=Y.current,o>=de[1])o=(0,g.A)(de,1)[0];if((a=o+Y.current)>de[1])a=(0,g.A)(de,2)[1];a>K.current&&o<K.current&&(a=K.current)}$(r,[o,a])}}function ke(){return xe?ye?l.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",re):ye?l.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",re)}u((function(){y.vF.logTraceUseEffect("TIME-SLIDER - values filtering",ve,ge),N&&(J.current=xe?window.setTimeout((function(){return Te()}),he):window.setTimeout((function(){return Oe()}),he))}),[ve,ge,xe,ye]),u((function(){y.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",N),N&&(xe?Te():Oe())}),[N]);var Ee=d((function(e){y.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(J.current),G(!1),Y.current=void 0,$(r,e)}),[r,$]),Ce=d((function(e){return y.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",we),"day"===we?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===we?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[we]);return(0,F.jsx)(f,{children:(0,F.jsxs)("div",{children:[(0,F.jsxs)(f,{container:!0,sx:M.rightPanelBtnHolder,children:[(0,F.jsx)(f,{item:!0,xs:9,children:(0,F.jsxs)(h,{component:"div",sx:q(q({},M.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(le||ae),void 0!==we&&" (".concat("day"===we?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,F.jsx)(f,{item:!0,xs:3,children:(0,F.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,F.jsx)(b,{title:ge?l.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,F.jsx)(A,{checked:ge,onChange:function(e,t){return ie(r,i=t),void(i||(clearInterval(J.current),G(!1)));var i}})})})})]}),(0,F.jsx)(f,{item:!0,xs:12,children:(0,F.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,F.jsx)(m,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:ve,marks:Le,step:ce?.1:null,onChangeCommitted:Ee,onValueDisplay:Ce},ve[1]?ve[1]+ve[0]:ve[0])})}),(0,F.jsx)(f,{item:!0,xs:12,children:(0,F.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,F.jsx)(j,{className:"style1","aria-label":ke(),tooltip:ke(),tooltipPlacement:"top",onClick:function(){return clearTimeout(J.current),void Z(r,!ye)},children:ye?(0,F.jsx)(D,{}):(0,F.jsx)(P,{})}),(0,F.jsx)(j,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:N||!ge,onClick:function(){return K.current=xe?ve[1]:ve[0],void Te()},children:(0,F.jsx)(L,{})}),(0,F.jsx)(j,{className:"style1","aria-label":N?l.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",re):l.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",re),tooltip:N?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ge,onClick:function(){return clearTimeout(J.current),K.current=xe?ve[1]:ve[0],void G(!N)},children:N?(0,F.jsx)(T,{}):(0,F.jsx)(I,{})}),(0,F.jsx)(j,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:N||!ge,onClick:function(){return e=(0,g.A)(ve,1),K.current=e[0],void Oe();var e},children:(0,F.jsx)(O,{})}),(0,F.jsx)(j,{className:"style1","aria-label":l.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(J.current),ee(r,!xe),void(N&&(xe?Te():Oe()))},children:xe?(0,F.jsx)(k,{}):(0,F.jsx)(E,{})}),(0,F.jsxs)(w.A,{sx:{width:"150px"},children:[(0,F.jsx)(S.A,{variant:"standard",children:l.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",re)}),(0,F.jsxs)(z,{defaultValue:he,inputProps:{name:"timeDelay",onChange:function(e){return function(e){te(r,e.target.value)}(e)}},children:[(0,F.jsx)("option",{value:500,children:"0.5s"}),(0,F.jsx)("option",{value:750,children:"0.75s"}),(0,F.jsx)("option",{value:1e3,children:"1.0s"}),(0,F.jsx)("option",{value:1500,children:"1.5s"}),(0,F.jsx)("option",{value:2e3,children:"2.0s"}),(0,F.jsx)("option",{value:3e3,children:"3.0s"}),(0,F.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),oe&&(0,F.jsx)(f,{item:!0,xs:12,children:(0,F.jsx)(h,{component:"div",sx:{px:"20px",py:"5px"},children:oe})}),fe&&(0,F.jsx)(f,{item:!0,xs:12,children:(0,F.jsx)(h,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function K(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useState,l=r.useCallback,o=r.useMemo,a=r.useEffect,s=n(),c=(0,g.A)(s,2),u=c[0],p=c[1],f=(0,h.wE)(),x=(0,v.ky)(),w=l((function(e){y.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),p(e.layerPath)}),[]),S=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},A=o((function(){y.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",x);return f.map((function(e){return{layerPath:e,timeSliderLayerInfo:x[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:S(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,F.jsxs)(d.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(S(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[x,f]);a((function(){y.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",A,u),u&&!A.map((function(e){return e.layerPath})).includes(u)&&p("")}),[A,u]);return(0,F.jsx)(m.PE,{selectedLayerPath:u,onLayerListClicked:w,layerList:A,onGuideIsOpen:function(e){e&&p("")},guideContentIds:["timeSlider"],children:u&&(0,F.jsx)(J,{mapId:t,config:i,layerPath:u},u)})}const Y=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),W=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function _(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(e,t,i){return t=(0,o.A)(t),(0,l.A)(e,$()?Reflect.construct(t,i||[],(0,o.A)(e).constructor):t.apply(e,i))}function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return($=function(){return!!e})()}var Z=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return e=X(this,t,[].concat(r)),(0,s.A)(e,"schema",(function(){return Y})),(0,s.A)(e,"defaultConfig",(function(){return(0,c.NK)(W)})),(0,s.A)(e,"translations",(0,c.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),(0,s.A)(e,"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(r).layerTemporalDimension[r];f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(r).setTemporalDimension(r,Q(Q({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,F.jsx)(d.TimeSliderIcon,{}),content:(0,F.jsx)(K,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,a.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,c.KX)(Z)}},e=>{var t;t=32169,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map