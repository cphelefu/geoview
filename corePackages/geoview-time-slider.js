/*! Package:geoview-time-slider: 0.1.0 - "1a897cee4f36ab172b6fb3b37978740e8c8fcba4" - 2024-04-22T16:27:31.530Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{96026:(e,t,i)=>{i.d(t,{b:()=>f});var r=i(21137),n=i(80473),o=i(99906),l=i(32222),a=i(10705),s=i(4031),c=i(39933),u=i(16028);function d(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,p()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var f=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=d(this,t,[].concat(n)),(0,s.A)(e,"value",void 0),(0,s.A)(e,"footerProps",void 0),e}return(0,a.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){u.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}])}(c.G)},28773:(e,t,i)=>{var r=i(80473),n=i(21137),o=i(99906),l=i(32222),a=i(10705),s=i(4031),c=i(82069),u=i(56836),d=i(67753),p=i(96026),f=i(99101),g=i(12612),m=i(78683),h=i(74871),v=i(3384),y=i(62541),x=i(16028),w=i(16150),S=i(16865),b=i(84181),j=i(35851),A=i(23652),P=i(37431),D=i(26166),L=i(20027),I=i(68487),T=i(3121),k=i(9208),O=i(19774),E=i(21120),C=i(91433),F=i(32019),R=i(67309),M=i(80678);const V=["className","children","classes","IconComponent","input","inputProps","variant"],N=["root"],z=(0,M.jsx)(C.A,{}),B=D.forwardRef((function(e,t){const i=(0,F.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=E.A,input:a=z,inputProps:s}=i,c=(0,P.A)(i,V),u=(0,O.A)(),d=(0,k.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,I.A)({root:["root"]},R.w,t)})((0,A.A)({},i,{classes:o})),f=(0,P.A)(o,N);return(0,M.jsx)(D.Fragment,{children:D.cloneElement(a,(0,A.A)({inputComponent:T.Ay,inputProps:(0,A.A)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,L.A)(p.root,a.props.className,r)}))})}));B.muiName="Select";const U=B;var H=i(85632),G=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function J(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function K(e){x.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.api,l=t.react,a=t.ui,s=l.useState,c=l.useRef,u=l.useEffect,d=l.useCallback,p=a.elements,f=p.Grid,m=p.Slider,v=p.Typography,w=p.Checkbox,A=p.Tooltip,P=p.IconButton,D=p.LockIcon,L=p.LockOpenIcon,I=p.ArrowLeftIcon,T=p.PlayArrowIcon,k=p.PauseIcon,O=p.ArrowRightIcon,E=p.SwitchRightIcon,C=p.SwitchLeftIcon,F=(0,S.A)(),R=G(F),V=s(!1),N=(0,g.A)(V,2),z=N[0],B=N[1],q=c(),K=c(),Y=c(),W=(0,h.Gg)(),_=W.setTitle,Q=W.setDefaultValue,X=W.setDescription,$=W.setValues,Z=W.setLocked,ee=W.setReversed,te=W.setDelay,ie=W.setFiltering,re=(0,y.t)(),ne=(0,h.ky)()[r],oe=ne.title,le=ne.description,ae=ne.name,se=ne.defaultValue,ce=ne.discreteValues,ue=ne.range,de=ne.minAndMax,pe=ne.field,fe=ne.fieldAlias,ge=ne.filtering,me=ne.singleHandle,he=ne.values,ve=ne.delay,ye=ne.locked,xe=ne.reversed;u((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===oe&&_(r,(0,H.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===le&&X(r,(0,H.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ye&&Z(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===xe&&ee(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&Q(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e;x.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,r);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):$(r,[new Date(ue[0]).getTime()]))}),[i,r,ue,ie,$]);var we,Se=ue.map((function(e){return new Date(e).getTime()})),be=de[1]-de[0],je=new Date(de[1]).getDate()-new Date(de[0]).getDate(),Ae=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===je&&be<864e5?we="day":0===Ae&&(we="year");var Pe=[];if(ue.length<4&&ce){var De=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;Pe=[de[0],de[0]+De,de[0]+2*De,de[0]+3*De,de[1]]}else Pe=ue.length<6||me?Se:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Le=[],Ie=0;Ie<Pe.length;Ie++)Le.push({value:Pe[Ie],label:we?"".concat("day"===we?new Date(Pe[Ie]).toTimeString().split(" ")[0]:new Date(Pe[Ie]).toISOString().slice(5,10)):new Date(Pe[Ie]).toISOString().slice(0,10)});function Te(){if(me&&!ce){var e,t=Se.indexOf(he[0]);e=Se[t]===de[0]?Se.length-1:t-1,$(r,[Se[e]])}else if(me){var i=(de[1]-de[0])/20,n=he[0]-i<de[0]?de[1]:he[0]-i;$(r,[n])}else{var o=(0,g.A)(he,2),l=o[0],a=o[1];if(!Y.current){if(a-l>(de[1]-de[0])/5)return Y.current=(de[1]-de[0])/5,void $(r,[a-Y.current,a]);Y.current=a-l}if(ye&&xe){if(l===de[0]&&(l=a),(l-=Y.current)<de[0])l=(0,g.A)(de,1)[0]}else if(ye){if((a-=Y.current)<l&&(a=l),a===l)a=(0,g.A)(de,2)[1]}else{if(a>K.current&&l===K.current?a=K.current:a-=Y.current,a<=de[0])a=(0,g.A)(de,2)[1];if((l=a-Y.current)<de[0])l=(0,g.A)(de,1)[0];l<K.current&&a>K.current&&(l=K.current)}$(r,[l,a])}}function ke(){if(me&&!ce){var e,t=Se.indexOf(he[0]);e=Se[t]===de[1]?0:t+1,$(r,[Se[e]])}else if(me){var i=(de[1]-de[0])/20,n=he[0]+i>de[1]?de[0]:he[0]+i;$(r,[n])}else{var o=(0,g.A)(he,2),l=o[0],a=o[1];if(!Y.current){if(a-l>(de[1]-de[0])/5)return Y.current=(de[1]-de[0])/5,void $(r,[l,l+Y.current]);Y.current=a-l}if(ye&&xe){if((l+=Y.current)>=a)l=(0,g.A)(de,1)[0]}else if(ye){if(a===de[1]&&(a=l),(a+=Y.current)>de[1])a=(0,g.A)(de,2)[1]}else{if(l<K.current&&a===K.current?l=K.current:l+=Y.current,l>=de[1])l=(0,g.A)(de,1)[0];if((a=l+Y.current)>de[1])a=(0,g.A)(de,2)[1];a>K.current&&l<K.current&&(a=K.current)}$(r,[l,a])}}function Oe(){return xe?ye?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",re):ye?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",re)}u((function(){x.vF.logTraceUseEffect("TIME-SLIDER - values filtering",he,ge),z&&(q.current=xe?window.setTimeout((function(){return Te()}),ve):window.setTimeout((function(){return ke()}),ve))}),[he,ge,xe,ye]),u((function(){x.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",z),z&&(xe?Te():ke())}),[z]);var Ee=d((function(e){x.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(q.current),B(!1),Y.current=void 0,$(r,e)}),[r,$]),Ce=d((function(e){return x.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",we),"day"===we?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===we?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[we]);return(0,M.jsx)(f,{children:(0,M.jsxs)("div",{style:R.rightPanelContainer,children:[(0,M.jsxs)(f,{container:!0,sx:R.rightPanelBtnHolder,children:[(0,M.jsx)(f,{item:!0,xs:9,children:(0,M.jsxs)(v,{component:"div",sx:J(J({},R.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(oe||ae),void 0!==we&&" (".concat("day"===we?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,M.jsx)(f,{item:!0,xs:3,children:(0,M.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,M.jsx)(A,{title:ge?o.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,M.jsx)(w,{checked:ge,onChange:function(e,t){return ie(r,i=t),void(i||(clearInterval(q.current),B(!1)));var i}})})})})]}),(0,M.jsx)(f,{item:!0,xs:12,children:(0,M.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,M.jsx)(m,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:he,marks:Le,step:ce?.1:null,onChangeCommitted:Ee,onValueDisplay:Ce},he[1]?he[1]+he[0]:he[0])})}),(0,M.jsx)(f,{item:!0,xs:12,children:(0,M.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!me&&(0,M.jsx)(P,{className:"style1","aria-label":Oe(),tooltip:Oe(),tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),void Z(r,!ye)},children:ye?(0,M.jsx)(D,{}):(0,M.jsx)(L,{})}),(0,M.jsx)(P,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return K.current=xe?he[1]:he[0],void Te()},children:(0,M.jsx)(I,{})}),(0,M.jsx)(P,{className:"style1","aria-label":z?o.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",re),tooltip:z?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!ge,onClick:function(){return clearTimeout(q.current),K.current=xe?he[1]:he[0],void B(!z)},children:z?(0,M.jsx)(k,{}):(0,M.jsx)(T,{})}),(0,M.jsx)(P,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:z||!ge,onClick:function(){return e=(0,g.A)(he,1),K.current=e[0],void ke();var e},children:(0,M.jsx)(O,{})}),(0,M.jsx)(P,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),ee(r,!xe),void(z&&(xe?Te():ke()))},children:xe?(0,M.jsx)(E,{}):(0,M.jsx)(C,{})}),(0,M.jsxs)(b.A,{sx:{width:"150px"},children:[(0,M.jsx)(j.A,{variant:"standard",children:o.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",re)}),(0,M.jsxs)(U,{defaultValue:ve,inputProps:{name:"timeDelay",onChange:function(e){return function(e){te(r,e.target.value)}(e)}},children:[(0,M.jsx)("option",{value:500,children:"0.5s"}),(0,M.jsx)("option",{value:750,children:"0.75s"}),(0,M.jsx)("option",{value:1e3,children:"1.0s"}),(0,M.jsx)("option",{value:1500,children:"1.5s"}),(0,M.jsx)("option",{value:2e3,children:"2.0s"}),(0,M.jsx)("option",{value:3e3,children:"3.0s"}),(0,M.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),le&&(0,M.jsx)(f,{item:!0,xs:12,children:(0,M.jsx)(v,{component:"div",sx:{px:"20px",py:"5px"},children:le})}),fe&&(0,M.jsx)(f,{item:!0,xs:12,children:(0,M.jsx)(v,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function Y(e){var t=e.mapId,i=e.configObj,r=window.cgpv.react,n=r.useState,o=r.useCallback,l=r.useMemo,a=r.useEffect,s=n(),c=(0,g.A)(s,2),u=c[0],p=c[1],f=(0,v.wE)(),S=(0,h.ky)(),b=(0,y.DR)(),j=o((function(e){x.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),p(e.layerPath)}),[]),A=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},P=l((function(){x.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",S);return f.map((function(e){return{layerPath:e,timeSliderLayerInfo:S[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:A(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,M.jsxs)(d.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(A(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[S,f]);return a((function(){x.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",P,u),u&&!P.map((function(e){return e.layerPath})).includes(u)&&p("")}),[P,u]),(0,M.jsxs)(m.PE,{selectedLayerPath:u,onLayerListClicked:j,layerList:P,children:[u&&(0,M.jsx)(K,{mapId:t,config:i,layerPath:u},u),!u&&(0,M.jsx)(d.Paper,{sx:{padding:"2rem"},children:(0,M.jsx)(d.Box,{className:"guideBox",children:(0,M.jsx)(w.Ay,{options:{wrapper:"article"},children:b.footerPanel.children.timeSlider.content})})})]})}const W=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),_=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function Q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function X(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(i),!0).forEach((function(t){(0,s.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function $(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,Z()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function Z(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Z=function(){return!!e})()}var ee=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=$(this,t,[].concat(r)),(0,s.A)(e,"schema",(function(){return W})),(0,s.A)(e,"defaultConfig",(function(){return(0,c.NK)(_)})),(0,s.A)(e,"translations",(0,c.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"}}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"}}}})),(0,s.A)(e,"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(r).layerTemporalDimension[r];f.d.getMapViewerLayerAPI(e.pluginProps.mapId).geoviewLayer(r).setTemporalDimension(r,X(X({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,M.jsx)(d.TimeSliderIcon,{}),content:(0,M.jsx)(Y,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,a.A)(t,e),(0,r.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,c.KX)(ee)}},e=>{var t;t=28773,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map