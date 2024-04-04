/*! Package:geoview-time-slider: 0.1.0 - "7f4d9aec76a38d8918596f8e0b87660252219c8f" - 2024-04-04T14:20:02.898Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{52568:(e,t,i)=>{i.d(t,{b:()=>m});var r=i(80669),n=i(23133),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(18755),d=i(78330);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=p(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,n.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},45093:(e,t,i)=>{var r=i(23133),n=i(80669),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(73943),d=i(89268),p=i(9613),f=i(52568),m=i(40048),g=i(41955),h=i(3761),v=i(44315),y=i(41959),x=i(78330),w=i(98459),A=i(67201),S=i(91808),j=i(30227),b=i(26166),P=i(20027),D=i(32777),L=i(54279),O=i(80038),T=i(9028),k=i(18554),I=i(62423),C=i(17173),F=i(69983),E=i(80678);const R=["className","children","classes","IconComponent","input","inputProps","variant"],V=["root"],M=(0,E.jsx)(I.A,{}),z=b.forwardRef((function(e,t){const i=(0,C.A)({name:"MuiNativeSelect",props:e}),{className:r,children:n,classes:o={},IconComponent:l=k.A,input:a=M,inputProps:s}=i,c=(0,j.A)(i,R),u=(0,T.A)(),d=(0,O.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,D.A)({root:["root"]},F.w,t)})((0,S.A)({},i,{classes:o})),f=(0,j.A)(o,V);return(0,E.jsx)(b.Fragment,{children:b.cloneElement(a,(0,S.A)({inputComponent:L.Ay,inputProps:(0,S.A)({children:n,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,P.A)(p.root,a.props.className,r)}))})}));z.muiName="Select";const N=z;var B=i(27994),H=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function G(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function U(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?G(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):G(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Q(e){var t=window.cgpv,i=e.config,r=e.layerPath,n=e.mapId,o=t.api,l=t.react,a=t.ui,s=l.useState,c=l.useRef,u=l.useEffect,d=a.elements,p=d.Grid,f=d.Slider,h=d.Typography,x=d.Checkbox,S=d.Tooltip,j=d.IconButton,b=d.LockIcon,P=d.LockOpenIcon,D=d.ArrowLeftIcon,L=d.PlayArrowIcon,O=d.PauseIcon,T=d.ArrowRightIcon,k=d.SwitchRightIcon,I=d.SwitchLeftIcon,C=(0,g.A)(),F=H(C),R=s(!1),V=(0,m.A)(R,2),M=V[0],z=V[1],G=c(),Q=c(),q=c(),J=(0,v.Gg)(),K=J.setTitle,Y=J.setDefaultValue,W=J.setDescription,_=J.setValues,X=J.setLocked,$=J.setReversed,Z=J.setDelay,ee=J.setFiltering,te=(0,y.t)(),ie=(0,v.ky)()[r],re=ie.title,ne=ie.description,oe=ie.name,le=ie.defaultValue,ae=ie.discreteValues,se=ie.range,ce=ie.minAndMax,ue=ie.field,de=ie.fieldAlias,pe=ie.filtering,fe=ie.singleHandle,me=ie.values,ge=ie.delay,he=ie.locked,ve=ie.reversed;u((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));void 0===re&&K(r,(0,B.getLocalizedValue)(null==t?void 0:t.title,te)||""),void 0===ne&&W(r,(0,B.getLocalizedValue)(null==t?void 0:t.description,te)||""),void 0===he&&X(r,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===ve&&$(r,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===le&&Y(r,(null==t?void 0:t.defaultValue)||"")}),[]),u((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(r)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?_(r,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):se.includes(null==t?void 0:t.defaultValue)?_(r,[new Date(null==t?void 0:t.defaultValue).getTime()]):_(r,[new Date(se[0]).getTime()]))}),[i,r,se,ee,_]);var ye,xe=se.map((function(e){return new Date(e).getTime()})),we=ce[1]-ce[0],Ae=new Date(ce[1]).getDate()-new Date(ce[0]).getDate(),Se=new Date(ce[1]).getFullYear()-new Date(ce[0]).getFullYear();0===Ae&&we<864e5?ye="day":0===Se&&(ye="year");var je=[];if(se.length<4&&ae){var be=(new Date(se[se.length-1]).getTime()-new Date(se[0]).getTime())/4;je=[ce[0],ce[0]+be,ce[0]+2*be,ce[0]+3*be,ce[1]]}else je=se.length<6||fe?xe:[ce[0],new Date(se[Math.round(se.length/4)]).getTime(),new Date(se[Math.round(se.length/2)]).getTime(),new Date(se[Math.round(3*se.length/4)]).getTime(),ce[1]];for(var Pe=[],De=0;De<je.length;De++)Pe.push({value:je[De],label:ye?"".concat("day"===ye?new Date(je[De]).toTimeString().split(" ")[0]:new Date(je[De]).toISOString().slice(5,10)):new Date(je[De]).toISOString().slice(0,10)});function Le(){if(fe&&!ae){var e,t=xe.indexOf(me[0]);e=xe[t]===ce[0]?xe.length-1:t-1,_(r,[xe[e]])}else if(fe){var i=(ce[1]-ce[0])/20,n=me[0]-i<ce[0]?ce[1]:me[0]-i;_(r,[n])}else{var o=(0,m.A)(me,2),l=o[0],a=o[1];if(!q.current){if(a-l>(ce[1]-ce[0])/5)return q.current=(ce[1]-ce[0])/5,void _(r,[a-q.current,a]);q.current=a-l}if(he&&ve){if(l===ce[0]&&(l=a),(l-=q.current)<ce[0])l=(0,m.A)(ce,1)[0]}else if(he){if((a-=q.current)<l&&(a=l),a===l)a=(0,m.A)(ce,2)[1]}else{if(a>Q.current&&l===Q.current?a=Q.current:a-=q.current,a<=ce[0])a=(0,m.A)(ce,2)[1];if((l=a-q.current)<ce[0])l=(0,m.A)(ce,1)[0];l<Q.current&&a>Q.current&&(l=Q.current)}_(r,[l,a])}}function Oe(){if(fe&&!ae){var e,t=xe.indexOf(me[0]);e=xe[t]===ce[1]?0:t+1,_(r,[xe[e]])}else if(fe){var i=(ce[1]-ce[0])/20,n=me[0]+i>ce[1]?ce[0]:me[0]+i;_(r,[n])}else{var o=(0,m.A)(me,2),l=o[0],a=o[1];if(!q.current){if(a-l>(ce[1]-ce[0])/5)return q.current=(ce[1]-ce[0])/5,void _(r,[l,l+q.current]);q.current=a-l}if(he&&ve){if((l+=q.current)>=a)l=(0,m.A)(ce,1)[0]}else if(he){if(a===ce[1]&&(a=l),(a+=q.current)>ce[1])a=(0,m.A)(ce,2)[1]}else{if(l<Q.current&&a===Q.current?l=Q.current:l+=q.current,l>=ce[1])l=(0,m.A)(ce,1)[0];if((a=l+q.current)>ce[1])a=(0,m.A)(ce,2)[1];a>Q.current&&l<Q.current&&(a=Q.current)}_(r,[l,a])}}function Te(){return ve?he?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockRight",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockRight",te):he?o.utilities.core.getLocalizedMessage("timeSlider.slider.unlockLeft",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.lockLeft",te)}return u((function(){M&&(G.current=ve?window.setTimeout((function(){return Le()}),ge):window.setTimeout((function(){return Oe()}),ge))}),[me,pe,ve,he]),u((function(){M&&(ve?Le():Oe())}),[M]),(0,E.jsx)(p,{children:(0,E.jsxs)("div",{style:F.rightPanelContainer,children:[(0,E.jsxs)(p,{container:!0,sx:F.rightPanelBtnHolder,children:[(0,E.jsx)(p,{item:!0,xs:9,children:(0,E.jsxs)(h,{component:"div",sx:U(U({},F.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(re||oe),void 0!==ye&&" (".concat("day"===ye?new Date(le).toLocaleDateString():new Date(le).getFullYear(),")")]})}),(0,E.jsx)(p,{item:!0,xs:3,children:(0,E.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,E.jsx)(S,{title:pe?o.utilities.core.getLocalizedMessage("timeSlider.slider.disableFilter",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.enableFilter",te),placement:"top",enterDelay:1e3,children:(0,E.jsx)(x,{checked:pe,onChange:function(e,t){return ee(r,i=t),void(i||(clearInterval(G.current),z(!1)));var i}})})})})]}),(0,E.jsx)(p,{item:!0,xs:12,children:(0,E.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,E.jsx)(f,{sliderId:r,mapId:n,style:{width:"80%",color:"primary"},min:ce[0],max:ce[1],value:me,valueLabelFormat:function(e){return function(e){return"day"===ye?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===ye?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Pe,step:ae?.1:null,customOnChange:function(e){return function(e){clearTimeout(G.current),z(!1),q.current=void 0,_(r,e)}(e)}},me[1]?me[1]+me[0]:me[0])})}),(0,E.jsx)(p,{item:!0,xs:12,children:(0,E.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!fe&&(0,E.jsx)(j,{className:"style1","aria-label":Te(),tooltip:Te(),tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),void X(r,!he)},children:he?(0,E.jsx)(b,{}):(0,E.jsx)(P,{})}),(0,E.jsx)(j,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.back",te),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:M||!pe,onClick:function(){return Q.current=ve?me[1]:me[0],void Le()},children:(0,E.jsx)(D,{})}),(0,E.jsx)(j,{className:"style1","aria-label":M?o.utilities.core.getLocalizedMessage("timeSlider.slider.pauseAnimation",te):o.utilities.core.getLocalizedMessage("timeSlider.slider.playAnimation",te),tooltip:M?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!pe,onClick:function(){return clearTimeout(G.current),Q.current=ve?me[1]:me[0],void z(!M)},children:M?(0,E.jsx)(O,{}):(0,E.jsx)(L,{})}),(0,E.jsx)(j,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.forward",te),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:M||!pe,onClick:function(){return e=(0,m.A)(me,1),Q.current=e[0],void Oe();var e},children:(0,E.jsx)(T,{})}),(0,E.jsx)(j,{className:"style1","aria-label":o.utilities.core.getLocalizedMessage("timeSlider.slider.changeDirection",te),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(G.current),$(r,!ve),void(M&&(ve?Le():Oe()))},children:ve?(0,E.jsx)(k,{}):(0,E.jsx)(I,{})}),(0,E.jsxs)(w.A,{sx:{width:"150px"},children:[(0,E.jsx)(A.A,{variant:"standard",children:o.utilities.core.getLocalizedMessage("timeSlider.slider.timeDelay",te)}),(0,E.jsxs)(N,{defaultValue:ge,inputProps:{name:"timeDelay",onChange:function(e){return function(e){Z(r,e.target.value)}(e)}},children:[(0,E.jsx)("option",{value:500,children:"0.5s"}),(0,E.jsx)("option",{value:750,children:"0.75s"}),(0,E.jsx)("option",{value:1e3,children:"1.0s"}),(0,E.jsx)("option",{value:1500,children:"1.5s"}),(0,E.jsx)("option",{value:2e3,children:"2.0s"}),(0,E.jsx)("option",{value:3e3,children:"3.0s"}),(0,E.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),ne&&(0,E.jsx)(p,{item:!0,xs:12,children:(0,E.jsx)(h,{component:"div",sx:{px:"20px",py:"5px"},children:ne})}),de&&(0,E.jsx)(p,{item:!0,xs:12,children:(0,E.jsx)(h,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(de," (").concat(ue,")")})})]})})}function q(e){var t=e.mapId,i=e.configObj,r=window.cgpv,n=r.api,o=r.react,l=o.useState,a=o.useCallback,s=o.useMemo,c=o.useEffect,u=(0,g.A)(),d=H(u),f=l(),w=(0,m.A)(f,2),A=w[0],S=w[1],j=(0,v.wE)(),b=(0,v.ky)(),P=(0,y.t)(),D=a((function(e){x.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),S(e.layerPath)}),[]),L=function(e){return e.filtering?1===e.values.length?new Date(e.values[0]).toISOString().slice(0,19):"".concat(new Date(e.values[0]).toISOString().slice(0,19)," - ").concat(new Date(e.values[1]).toISOString().slice(0,19)):null},O=s((function(){x.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",b);return j.map((function(e){return{layerPath:e,timeSliderLayerInfo:b[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,layerFeatures:L(e.timeSliderLayerInfo),tooltip:(t=e.timeSliderLayerInfo,(0,E.jsxs)(p.Box,{sx:{display:"flex",alignContent:"center","& svg ":{width:"0.75em",height:"0.75em"}},children:[t.name,t.filtering&&": ".concat(L(t))]})),layerStatus:"loaded",queryStatus:"processed"};var t}))}),[b,j]);return c((function(){x.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",O,A),A&&!O.map((function(e){return e.layerPath})).includes(A)&&S("")}),[O,A]),(0,E.jsxs)(h.PE,{selectedLayerPath:A,onLayerListClicked:D,layerList:O,children:[A&&(0,E.jsx)(Q,{mapId:t,config:i,layerPath:A},A),!A&&(0,E.jsxs)(p.Paper,{sx:{padding:"2rem"},children:[(0,E.jsx)(p.Typography,{variant:"h3",gutterBottom:!0,sx:d.timeSliderInstructionsTitle,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)}),(0,E.jsx)(p.Typography,{component:"p",sx:d.timeSliderInstructionsBody,children:n.utilities.core.getLocalizedMessage("timeSlider.instructions",P)})]})]})}const J=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),K=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function Y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function W(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function _(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,X()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function X(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(X=function(){return!!e})()}var $=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=_(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"schema",(function(){return J})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NK)(K)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NK)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:d.FHQ.utilities.date.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var r=t.layerPaths[0],n=d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).layerTemporalDimension[r];d.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(r).setTemporalDimension(r,W(W({},n),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,E.jsx)(p.TimeSliderIcon,{}),content:(0,E.jsx)(q,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,r.A)(t)}(f.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KX)($)}},e=>{var t;t=45093,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map