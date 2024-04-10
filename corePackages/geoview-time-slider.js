/*! Package:geoview-time-slider: 0.1.0 - "90bf7a6210fe066f72aba271876ec2808b897d14" - 2024-04-10T01:49:19.266Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{52568:(e,t,i)=>{i.d(t,{b:()=>m});var r=i(80669),n=i(23133),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(18755),d=i(78330);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=p(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},45093:(e,t,i)=>{var r=i(23133),n=i(80669),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(73943),d=i(12974),p=i(83229),f=i(52568),m=i(40048),g=i(41955),h=i(54205),v=i(56377),y=i(31658),x=i(41959),S=i(78330),w=i(98459),A=i(67201),b=i(91808),j=i(30227),D=i(26166),P=i(20027),L=i(32777),T=i(54279),I=i(80038),k=i(9028),O=i(18554),C=i(62423),E=i(17173),F=i(69983),R=i(80678);const M=["className","children","classes","IconComponent","input","inputProps","variant"],V=["root"],z=(0,R.jsx)(C.A,{}),N=D.forwardRef((function(e,t){const i=(0,E.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=O.A,input:a=z,inputProps:s}=i,c=(0,j.A)(i,M),u=(0,k.A)(),d=(0,I.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,L.A)({root:["root"]},F.w,t)})((0,b.A)({},i,{classes:o})),f=(0,j.A)(o,V);return(0,R.jsx)(D.Fragment,{children:D.cloneElement(a,(0,b.A)({inputComponent:T.Ay,inputProps:(0,b.A)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,P.A)(p.root,a.props.className,r)}))})}));N.muiName="Select";const B=N;var H=i(27994),U=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function G(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Q(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function q(e){S.vF.logTraceRender("geoview-time-slider/time-slider",e);var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.api,l=t.react,a=t.ui,s=l.useState,c=l.useRef,u=l.useEffect,d=l.useCallback,p=a.elements,f=p.Grid,h=p.Slider,y=p.Typography,b=p.Checkbox,j=p.Tooltip,D=p.IconButton,P=p.LockIcon,L=p.LockOpenIcon,T=p.ArrowLeftIcon,I=p.PlayArrowIcon,k=p.PauseIcon,O=p.ArrowRightIcon,C=p.SwitchRightIcon,E=p.SwitchLeftIcon,F=(0,g.A)(),M=U(F),V=s(!1),z=(0,m.A)(V,2),N=z[0],G=z[1],q=c(),J=c(),K=c(),Y=(0,v.Gg)(),W=Y.setTitle,_=Y.setDefaultValue,X=Y.setDescription,$=Y.setValues,Z=Y.setLocked,ee=Y.setReversed,te=Y.setDelay,ie=Y.setFiltering,re=(0,x.t)(),ne=(0,v.ky)()[r],oe=ne.title,le=ne.description,ae=ne.name,se=ne.defaultValue,ce=ne.discreteValues,ue=ne.range,de=ne.minAndMax,pe=ne.field,fe=ne.fieldAlias,me=ne.filtering,ge=ne.singleHandle,he=ne.values,ve=ne.delay,ye=ne.locked,xe=ne.reversed;u((function(){var e;S.vF.logTraceUseEffect("TIME-SLIDER - mount");var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===oe&&W(r,(0,H.getLocalizedValue)(null==t?void 0:t.title,re)||""),void 0===le&&X(r,(0,H.getLocalizedValue)(null==t?void 0:t.description,re)||""),void 0===ye&&Z(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===xe&&ee(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===se&&_(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e;S.vF.logTraceUseEffect("TIME-SLIDER - config layerPath",i,r);var t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):ue.includes(null==t?void 0:t.defaultValue)?$(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):$(r,[new Date(ue[0]).getTime()]))}),[i,r,ue,ie,$]);var Se,we=ue.map((function(e){return new Date(e).getTime()})),Ae=de[1]-de[0],be=new Date(de[1]).getDate()-new Date(de[0]).getDate(),je=new Date(de[1]).getFullYear()-new Date(de[0]).getFullYear();0===be&&Ae<864e5?Se="day":0===je&&(Se="year");var De=[];if(ue.length<4&&ce){var Pe=(new Date(ue[ue.length-1]).getTime()-new Date(ue[0]).getTime())/4;De=[de[0],de[0]+Pe,de[0]+2*Pe,de[0]+3*Pe,de[1]]}else De=ue.length<6||ge?we:[de[0],new Date(ue[Math.round(ue.length/4)]).getTime(),new Date(ue[Math.round(ue.length/2)]).getTime(),new Date(ue[Math.round(3*ue.length/4)]).getTime(),de[1]];for(var Le=[],Te=0;Te<De.length;Te++)Le.push({value:De[Te],label:Se?"".concat("day"===Se?new Date(De[Te]).toTimeString().split(" ")[0]:new Date(De[Te]).toISOString().slice(5,10)):new Date(De[Te]).toISOString().slice(0,10)});function Ie(){if(ge&&!ce){var e,t=we.indexOf(he[0]);e=we[t]===de[0]?we.length-1:t-1,$(r,[we[e]])}else if(ge){var i=(de[1]-de[0])/20,n=he[0]-i<de[0]?de[1]:he[0]-i;$(r,[n])}else{var o=(0,m.A)(he,2),l=o[0],a=o[1];if(!K.current){if(a-l>(de[1]-de[0])/5)return K.current=(de[1]-de[0])/5,void $(r,[a-K.current,a]);K.current=a-l}if(ye&&xe){if(l===de[0]&&(l=a),(l-=K.current)<de[0])l=(0,m.A)(de,1)[0]}else if(ye){if((a-=K.current)<l&&(a=l),a===l)a=(0,m.A)(de,2)[1]}else{if(a>J.current&&l===J.current?a=J.current:a-=K.current,a<=de[0])a=(0,m.A)(de,2)[1];if((l=a-K.current)<de[0])l=(0,m.A)(de,1)[0];l<J.current&&a>J.current&&(l=J.current)}$(r,[l,a])}}function ke(){if(ge&&!ce){var e,t=we.indexOf(he[0]);e=we[t]===de[1]?0:t+1,$(r,[we[e]])}else if(ge){var i=(de[1]-de[0])/20,n=he[0]+i>de[1]?de[0]:he[0]+i;$(r,[n])}else{var o=(0,m.A)(he,2),l=o[0],a=o[1];if(!K.current){if(a-l>(de[1]-de[0])/5)return K.current=(de[1]-de[0])/5,void $(r,[l,l+K.current]);K.current=a-l}if(ye&&xe){if((l+=K.current)>=a)l=(0,m.A)(de,1)[0]}else if(ye){if(a===de[1]&&(a=l),(a+=K.current)>de[1])a=(0,m.A)(de,2)[1]}else{if(l<J.current&&a===J.current?l=J.current:l+=K.current,l>=de[1])l=(0,m.A)(de,1)[0];if((a=l+K.current)>de[1])a=(0,m.A)(de,2)[1];a>J.current&&l<J.current&&(a=J.current)}$(r,[l,a])}}function Oe(){return xe?ye?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",re):ye?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",re)}u((function(){S.vF.logTraceUseEffect("TIME-SLIDER - values filtering",he,me),N&&(q.current=xe?window.setTimeout((function(){return Ie()}),ve):window.setTimeout((function(){return ke()}),ve))}),[he,me,xe,ye]),u((function(){S.vF.logTraceUseEffect("TIME-SLIDER - isPlaying",N),N&&(xe?Ie():ke())}),[N]);var Ce=d((function(e){S.vF.logTraceUseCallback("TIME-SLIDER - handleSliderChange",r),clearTimeout(q.current),G(!1),K.current=void 0,$(r,e)}),[r,$]),Ee=d((function(e){return S.vF.logTraceUseCallback("TIME-SLIDER - handleLabelFormat",Se),"day"===Se?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===Se?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}),[Se]);return(0,R.jsx)(f,{children:(0,R.jsxs)("div",{style:M.rightPanelContainer,children:[(0,R.jsxs)(f,{container:!0,sx:M.rightPanelBtnHolder,children:[(0,R.jsx)(f,{item:!0,xs:9,children:(0,R.jsxs)(y,{component:"div",sx:Q(Q({},M.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(oe||ae),void 0!==Se&&" (".concat("day"===Se?new Date(se).toLocaleDateString():new Date(se).getFullYear(),")")]})}),(0,R.jsx)(f,{item:!0,xs:3,children:(0,R.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,R.jsx)(j,{title:me?o.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",re),placement:"top",enterDelay:1e3,children:(0,R.jsx)(b,{checked:me,onChange:function(e,t){return ie(r,i=t),void(i||(clearInterval(q.current),G(!1)));var i}})})})})]}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,R.jsx)(h,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:de[0],max:de[1],value:he,marks:Le,step:ce?.1:null,onChangeCommitted:Ce,onValueDisplay:Ee},he[1]?he[1]+he[0]:he[0])})}),(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ge&&(0,R.jsx)(D,{className:"style1","aria-label":Oe(),tooltip:Oe(),tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),void Z(r,!ye)},children:ye?(0,R.jsx)(P,{}):(0,R.jsx)(L,{})}),(0,R.jsx)(D,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.back",re),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:N||!me,onClick:function(){return J.current=xe?he[1]:he[0],void Ie()},children:(0,R.jsx)(T,{})}),(0,R.jsx)(D,{className:"style1","aria-label":N?o.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",re):o.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",re),tooltip:N?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!me,onClick:function(){return clearTimeout(q.current),J.current=xe?he[1]:he[0],void G(!N)},children:N?(0,R.jsx)(k,{}):(0,R.jsx)(I,{})}),(0,R.jsx)(D,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.forward",re),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:N||!me,onClick:function(){return e=(0,m.A)(he,1),J.current=e[0],void ke();var e},children:(0,R.jsx)(O,{})}),(0,R.jsx)(D,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",re),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(q.current),ee(r,!xe),void(N&&(xe?Ie():ke()))},children:xe?(0,R.jsx)(C,{}):(0,R.jsx)(E,{})}),(0,R.jsxs)(w.A,{sx:{width:"150px"},children:[(0,R.jsx)(A.A,{variant:"standard",children:o.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",re)}),(0,R.jsxs)(B,{defaultValue:ve,inputProps:{name:"timeDelay",onChange:function(e){return function(e){te(r,e.target.value)}(e)}},children:[(0,R.jsx)("option",{value:500,children:"0.5s"}),(0,R.jsx)("option",{value:750,children:"0.75s"}),(0,R.jsx)("option",{value:1e3,children:"1.0s"}),(0,R.jsx)("option",{value:1500,children:"1.5s"}),(0,R.jsx)("option",{value:2e3,children:"2.0s"}),(0,R.jsx)("option",{value:3e3,children:"3.0s"}),(0,R.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),le&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(y,{component:"div",sx:{px:"20px",py:"5px"},children:le})}),fe&&(0,R.jsx)(f,{item:!0,xs:12,children:(0,R.jsx)(y,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(fe," (").concat(pe,")")})})]})})}function J(e){var t=e.mapId,i=e.configObj,r=window.cgpv,n=r.api,o=r.react,l=o.useState,a=o.useCallback,s=o.useMemo,c=o.useEffect,u=(0,g.A)(),d=U(u),f=l(),w=(0,m.A)(f,2),A=w[0],b=w[1],j=(0,y.wE)(),D=(0,v.ky)(),P=(0,x.t)(),L=a((function(e){S.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),b(e.layerPath)}),[]),T=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},I=s((function(){S.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",D);return j.map((function(e){return{layerPath:e,timeSliderLayerInfo:D[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:T(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,R.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(T(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[D,j]);return c((function(){S.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",I,A),A&&!I.map((function(e){return e.layerPath})).includes(A)&&b("")}),[I,A]),(0,R.jsxs)(h.PE,{selectedLayerPath:A,onLayerListClicked:L,layerList:I,children:[A&&(0,R.jsx)(q,{mapId:t,config:i,layerPath:A},A),!A&&(0,R.jsxs)(p.Paper,{sx:{padding:"2rem"},children:[(0,R.jsx)(p.Typography,{variant:"h3",gutterBottom:!0,sx:d.timeSliderInstructionsTitle,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)}),(0,R.jsx)(p.Typography,{component:"p",sx:d.timeSliderInstructionsBody,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)})]})]})}const K=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),Y=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function _(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function X(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,$()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return($=function(){return!!e})()}var Z=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=X(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"schema",(function(){return K})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NK)(Y)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).layerTemporalDimension[r];d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).setTemporalDimension(r,_(_({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,R.jsx)(p.TimeSliderIcon,{}),content:(0,R.jsx)(J,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,r.A)(t)}(f.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)(Z)}},e=>{var t;t=45093,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map