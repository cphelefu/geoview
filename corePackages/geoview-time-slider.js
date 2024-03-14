/*! Package:geoview-time-slider: 0.1.0 - "3c38b67d489c50f61a40f21d11275c928f8bff44" - 2024-03-14T15:00:26.458Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[405],{52568:(e,t,i)=>{i.d(t,{b:()=>m});var n=i(80669),r=i(23133),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(18755),d=i(78330);function p(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,f()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var m=function(e){function t(){var e;(0,n.A)(this,t);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return e=p(this,t,[].concat(r)),(0,c.A)((0,a.A)(e),"value",void 0),(0,c.A)((0,a.A)(e),"footerProps",void 0),e}return(0,s.A)(t,e),(0,r.A)(t,[{key:"onCreateContentProps",value:function(){return{id:"some-id",value:this.value,label:"Some label",content:"<div>Content for Footer plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>")}}},{key:"onAdd",value:function(){var e,t;this.value=null===(e=this.map())||void 0===e?void 0:e.footerBarApi.tabs.length,this.footerProps=this.onCreateContentProps(),null===(t=this.map())||void 0===t||t.footerBarApi.createTab(this.footerProps)}},{key:"onRemove",value:function(){var e;this.value&&(null===(e=this.map())||void 0===e||e.footerBarApi.removeTab(this.footerProps.id))}},{key:"onSelected",value:function(){d.vF.logTraceCore("FOOTER-PLUGIN - onSelected")}}]),t}(u.G)},92064:(e,t,i)=>{var n=i(23133),r=i(80669),o=i(82734),l=i(59290),a=i(17089),s=i(99317),c=i(73963),u=i(15303),d=i(68541),p=i(52568),f=i(40048),m=i(55467),g=i(3761),h=i(44315),v=i(78330),y=i(86179),x=i(96073),A=i(91808),j=i(30227),b=i(26166),w=i(20027),S=i(34343),P=i(12575),D=i(16606),L=i(28124),k=i(29506),O=i(3871),T=i(24061),I=i(43431),C=i(80678);const F=["className","children","classes","IconComponent","input","inputProps","variant"],E=["root"],R=(0,C.jsx)(O.A,{}),V=b.forwardRef((function(e,t){const i=(0,T.A)({name:"MuiNativeSelect",props:e}),{className:n,children:r,classes:o={},IconComponent:l=k.A,input:a=R,inputProps:s}=i,c=(0,j.A)(i,F),u=(0,L.A)(),d=(0,D.A)({props:i,muiFormControl:u,states:["variant"]}),p=(e=>{const{classes:t}=e;return(0,S.A)({root:["root"]},I.w,t)})((0,A.A)({},i,{classes:o})),f=(0,j.A)(o,E);return(0,C.jsx)(b.Fragment,{children:b.cloneElement(a,(0,A.A)({inputComponent:P.Ay,inputProps:(0,A.A)({children:r,classes:f,IconComponent:l,variant:d.variant,type:void 0},s,a?a.props.inputProps:{}),ref:t},c,{className:(0,w.A)(p.root,a.props.className,n)}))})}));V.muiName="Select";const M=V;var N=i(27994),z=function(e){return{panelHeaders:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",marginBottom:"20px"},rightPanelContainer:{border:"2px solid ".concat(e.palette.primary.main),borderRadius:"5px",backgroundColor:e.palette.common.white},rightPanelBtnHolder:{marginTop:"20px",marginBottom:"9px",boxShadow:"0px 12px 9px -13px #E0E0E0"},timeSliderInstructionsTitle:{fontSize:e.palette.geoViewFontSize.lg,fontWeight:"600",lineHeight:"1.5em"},timeSliderInstructionsBody:{fontSize:"1rem"}}};function B(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function H(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?B(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function G(e){var t=window.cgpv,i=e.config,n=e.layerPath,r=e.mapId,o=t.react,l=t.ui,a=o.useState,s=o.useRef,c=o.useEffect,u=l.elements,d=u.Grid,p=u.Slider,g=u.Typography,v=u.Checkbox,A=u.Tooltip,j=u.IconButton,b=u.LockIcon,w=u.LockOpenIcon,S=u.ArrowLeftIcon,P=u.PlayArrowIcon,D=u.PauseIcon,L=u.ArrowRightIcon,k=u.SwitchRightIcon,O=u.SwitchLeftIcon,T=(0,m.A)(),I=z(T),F=a(!1),E=(0,f.A)(F,2),R=E[0],V=E[1],B=s(),G=s(),U=s(),J=(0,h.Gg)(),Q=J.setTitle,q=J.setDefaultValue,K=J.setDescription,Y=J.setValues,W=J.setLocked,_=J.setReversed,X=J.setDelay,$=J.setFiltering,Z=(0,h.ky)()[n],ee=Z.title,te=Z.description,ie=Z.name,ne=Z.defaultValue,re=Z.range,oe=Z.minAndMax,le=Z.field,ae=Z.fieldAlias,se=Z.filtering,ce=Z.singleHandle,ue=Z.values,de=Z.delay,pe=Z.locked,fe=Z.reversed;c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));void 0===ee&&Q(n,(0,N.getLocalizedValue)(null==t?void 0:t.title,r)||""),void 0===te&&K(n,(0,N.getLocalizedValue)(null==t?void 0:t.description,r)||""),void 0===pe&&W(n,void 0!==(null==t?void 0:t.locked)&&(null==t?void 0:t.locked)),void 0===fe&&_(n,void 0!==(null==t?void 0:t.reversed)&&(null==t?void 0:t.reversed)),void 0===ne&&q(n,(null==t?void 0:t.defaultValue)||"")}),[]),c((function(){var e,t=null==i||null===(e=i.sliders)||void 0===e?void 0:e.find((function(e){return e.layerPaths.includes(n)}));null!=t&&t.defaultValue&&(Array.isArray(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue[0]).getTime(),new Date(null==t?void 0:t.defaultValue[1]).getTime()]):re.includes(null==t?void 0:t.defaultValue)?Y(n,[new Date(null==t?void 0:t.defaultValue).getTime()]):Y(n,[new Date(re[0]).getTime()]))}),[i,n,re,$,Y]);var me,ge=re.map((function(e){return new Date(e).getTime()})),he=oe[1]-oe[0],ve=new Date(oe[1]).getDate()-new Date(oe[0]).getDate(),ye=new Date(oe[1]).getFullYear()-new Date(oe[0]).getFullYear();0===ve&&he<864e5?me="day":0===ye&&(me="year");var xe=[];xe=re.length<6||ce?ge:[oe[0],new Date(re[Math.round(re.length/4)]).getTime(),new Date(re[Math.round(re.length/2)]).getTime(),new Date(re[Math.round(3*re.length/4)]).getTime(),oe[1]];for(var Ae=[],je=0;je<xe.length;je++)Ae.push({value:xe[je],label:me?"".concat("day"===me?new Date(xe[je]).toTimeString().split(" ")[0]:new Date(xe[je]).toISOString().slice(5,10)):new Date(xe[je]).toISOString().slice(0,10)});function be(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[0]?ge.length-1:t-1,Y(n,[ge[e]])}else{var i=(0,f.A)(ue,2),r=i[0],o=i[1];if(!U.current){if(o-r>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void Y(n,[o-U.current,o]);U.current=o-r}if(pe&&fe){if(r===oe[0]&&(r=o),(r-=U.current)<oe[0])r=(0,f.A)(oe,1)[0]}else if(pe){if((o-=U.current)<r&&(o=r),o===r)o=(0,f.A)(oe,2)[1]}else{if(o>G.current&&r===G.current?o=G.current:o-=U.current,o<=oe[0])o=(0,f.A)(oe,2)[1];if((r=o-U.current)<oe[0])r=(0,f.A)(oe,1)[0];r<G.current&&o>G.current&&(r=G.current)}Y(n,[r,o])}}function we(){if(ce){var e,t=ge.indexOf(ue[0]);e=ge[t]===oe[1]?0:t+1,Y(n,[ge[e]])}else{var i=(0,f.A)(ue,2),r=i[0],o=i[1];if(!U.current){if(o-r>(oe[1]-oe[0])/5)return U.current=(oe[1]-oe[0])/5,void Y(n,[r,r+U.current]);U.current=o-r}if(pe&&fe){if((r+=U.current)>=o)r=(0,f.A)(oe,1)[0]}else if(pe){if(o===oe[1]&&(o=r),(o+=U.current)>oe[1])o=(0,f.A)(oe,2)[1]}else{if(r<G.current&&o===G.current?r=G.current:r+=U.current,r>=oe[1])r=(0,f.A)(oe,1)[0];if((o=r+U.current)>oe[1])o=(0,f.A)(oe,2)[1];o>G.current&&r<G.current&&(o=G.current)}Y(n,[r,o])}}function Se(){return fe?pe?(0,N.getLocalizedMessage)(r,"timeSlider.slider.unlockRight"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.lockRight"):pe?(0,N.getLocalizedMessage)(r,"timeSlider.slider.unlockLeft"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.lockLeft")}return c((function(){R&&(B.current=fe?window.setTimeout((function(){return be()}),de):window.setTimeout((function(){return we()}),de))}),[ue,se,fe,pe]),c((function(){R&&(fe?be():we())}),[R]),(0,C.jsx)(d,{children:(0,C.jsxs)("div",{style:I.rightPanelContainer,children:[(0,C.jsxs)(d,{container:!0,sx:I.rightPanelBtnHolder,children:[(0,C.jsx)(d,{item:!0,xs:9,children:(0,C.jsxs)(g,{component:"div",sx:H(H({},I.panelHeaders),{},{paddingLeft:"20px",paddingTop:"10px"}),children:["".concat(ee||ie),void 0!==me&&" (".concat("day"===me?new Date(ne).toLocaleDateString():new Date(ne).getFullYear(),")")]})}),(0,C.jsx)(d,{item:!0,xs:3,children:(0,C.jsx)("div",{style:{textAlign:"right",marginRight:"25px"},children:(0,C.jsx)(A,{title:se?(0,N.getLocalizedMessage)(r,"timeSlider.slider.disableFilter"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.enableFilter"),placement:"top",enterDelay:1e3,children:(0,C.jsx)(v,{checked:se,onChange:function(e,t){return $(n,i=t),void(i||(clearInterval(B.current),V(!1)));var i}})})})})]}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)("div",{style:{textAlign:"center",paddingTop:"20px"},children:(0,C.jsx)(p,{sliderId:n,mapId:r,style:{width:"80%",color:"primary"},min:oe[0],max:oe[1],value:ue,valueLabelFormat:function(e){return function(e){return"day"===me?new Date(e).toTimeString().split(" ")[0].replace(/^0/,""):"year"===me?new Date(e).toISOString().slice(5,10):new Date(e).toISOString().slice(0,10)}(e)},marks:Ae,step:ce?null:.1,customOnChange:function(e){return function(e){clearTimeout(B.current),V(!1),U.current=void 0,Y(n,e)}(e)}},ue[1]?ue[1]+ue[0]:ue[0])})}),(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsxs)("div",{style:{textAlign:"center",paddingTop:"20px"},children:[!ce&&(0,C.jsx)(j,{className:"style1","aria-label":Se(),tooltip:Se(),tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),void W(n,!pe)},children:pe?(0,C.jsx)(b,{}):(0,C.jsx)(w,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.back"),tooltip:"timeSlider.slider.back",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return G.current=fe?ue[1]:ue[0],void be()},children:(0,C.jsx)(S,{})}),(0,C.jsx)(j,{className:"style1","aria-label":R?(0,N.getLocalizedMessage)(r,"timeSlider.slider.pauseAnimation"):(0,N.getLocalizedMessage)(r,"timeSlider.slider.playAnimation"),tooltip:R?"timeSlider.slider.pauseAnimation":"timeSlider.slider.playAnimation",tooltipPlacement:"top",disabled:!se,onClick:function(){return clearTimeout(B.current),G.current=fe?ue[1]:ue[0],void V(!R)},children:R?(0,C.jsx)(D,{}):(0,C.jsx)(P,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.forward"),tooltip:"timeSlider.slider.forward",tooltipPlacement:"top",disabled:R||!se,onClick:function(){return e=(0,f.A)(ue,1),G.current=e[0],void we();var e},children:(0,C.jsx)(L,{})}),(0,C.jsx)(j,{className:"style1","aria-label":(0,N.getLocalizedMessage)(r,"timeSlider.slider.changeDirection"),tooltip:"timeSlider.slider.changeDirection",tooltipPlacement:"top",onClick:function(){return clearTimeout(B.current),_(n,!fe),void(R&&(fe?be():we()))},children:fe?(0,C.jsx)(k,{}):(0,C.jsx)(O,{})}),(0,C.jsxs)(y.A,{sx:{width:"150px"},children:[(0,C.jsx)(x.A,{variant:"standard",children:(0,N.getLocalizedMessage)(r,"timeSlider.slider.timeDelay")}),(0,C.jsxs)(M,{defaultValue:de,inputProps:{name:"timeDelay",onChange:function(e){return function(e){X(n,e.target.value)}(e)}},children:[(0,C.jsx)("option",{value:500,children:"0.5s"}),(0,C.jsx)("option",{value:750,children:"0.75s"}),(0,C.jsx)("option",{value:1e3,children:"1.0s"}),(0,C.jsx)("option",{value:1500,children:"1.5s"}),(0,C.jsx)("option",{value:2e3,children:"2.0s"}),(0,C.jsx)("option",{value:3e3,children:"3.0s"}),(0,C.jsx)("option",{value:5e3,children:"5.0s"})]})]})]})}),te&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:te})}),ae&&(0,C.jsx)(d,{item:!0,xs:12,children:(0,C.jsx)(g,{component:"div",sx:{px:"20px",py:"5px"},children:"".concat(ae," (").concat(le,")")})})]})})}function U(e){var t=e.mapId,i=e.configObj,n=window.cgpv.react,r=n.useState,o=n.useCallback,l=n.useMemo,a=n.useEffect,s=(0,m.A)(),c=z(s),p=r(),y=(0,f.A)(p,2),x=y[0],A=y[1],j=(0,h.wE)(),b=(0,h.ky)(),w=o((function(e){v.vF.logTraceUseCallback("TIME-SLIDER-PANEL - handleLayerList"),A(e.layerPath)}),[]),S=l((function(){return v.vF.logTraceUseMemo("TIME-SLIDER-PANEL - memoLayersList",b),j.map((function(e){return{layerPath:e,timeSliderLayerInfo:b[e]}})).filter((function(e){return e&&e.timeSliderLayerInfo})).map((function(e){return{layerName:e.timeSliderLayerInfo.name,layerPath:e.layerPath,tooltip:e.timeSliderLayerInfo.name,layerStatus:"loaded",queryStatus:"processed"}}))}),[j,b]);return a((function(){v.vF.logTraceUseEffect("TIME-SLIDER-PANEL - memoLayersList",S,x),x&&!S.map((function(e){return e.layerPath})).includes(x)&&A("")}),[S,x]),(0,C.jsxs)(g.PE,{selectedLayerPath:x,onLayerListClicked:w,layerList:S,children:[x&&(0,C.jsx)(G,{mapId:t,config:i,layerPath:x},x),!x&&(0,C.jsxs)(d.Paper,{sx:{padding:"2rem"},children:[(0,C.jsx)(d.Typography,{variant:"h3",gutterBottom:!0,sx:c.timeSliderInstructionsTitle,children:(0,u.Jv8)(t,"timeSlider.instructions")}),(0,C.jsx)(d.Typography,{component:"p",sx:c.timeSliderInstructionsBody,children:(0,u.Jv8)(t,"timeSlider.instructions")})]})]})}const J=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Time Slider Config Schema","type":"object","version":1,"comments":"Configuration for GeoView time slider package.","additionalProperties":false,"properties":{"sliders":{"type":"array","items":{"type":"object","properties":{"title":{"type":"object","properties":{"en":{"type":"string","default":"Time slider title","description":"The English version of the string."},"fr":{"type":"string","default":"Titre du curseur temporel","description":"The French version of the string. "}}},"description":{"type":"object","properties":{"en":{"type":"string","default":"Time slider description","description":"The English version of the string."},"fr":{"type":"string","default":"Description du curseur temporel","description":"The French version of the string. "}}},"locked":{"type":"boolean","default":false,"description":"Lock handle"},"reversed":{"type":"boolean","default":false,"description":"Reverse direction of the slider animation"},"defaultValue":{"type":"string","default":false,"description":"Initial value on slider"}}}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1}},"required":["sliders","suportedLanguages"]}'),Q=JSON.parse('{"suportedLanguages":["en","fr"],"sliders":[]}');function q(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function K(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?q(Object(i),!0).forEach((function(t){(0,c.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function Y(e,t,i){return t=(0,l.A)(t),(0,o.A)(e,W()?Reflect.construct(t,i||[],(0,l.A)(e).constructor):t.apply(e,i))}function W(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(W=function(){return!!e})()}var _=function(e){function t(){var e;(0,r.A)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return e=Y(this,t,[].concat(n)),(0,c.A)((0,a.A)(e),"schema",(function(){return J})),(0,c.A)((0,a.A)(e),"defaultConfig",(function(){return(0,u.NKs)(Q)})),(0,c.A)((0,a.A)(e),"translations",(0,u.NKs)({en:{timeSlider:{title:"Time Slider",panel:{noLayers:"No layers with temporal data"},slider:{unlockRight:"Unlock right handle",unlockLeft:"Unlock left handle",lockRight:"Lock right handle",lockLeft:"Lock left handle",disableFilter:"Disable Filtering",enableFilter:"Enable Filtering",pauseAnimation:"Pause animation",playAnimation:"Play animation",back:"Back",forward:"Forward",changeDirection:"Change animation direction",timeDelay:"Animation time delay"},instructions:"Time Slider Instructions"}},fr:{timeSlider:{title:"Curseur Temporel",panel:{noLayers:"Pas de couches avec des données temporelles"},slider:{unlockRight:"Déverrouiller la poignée droite",unlockLeft:"Déverrouiller la poignée gauche",lockRight:"Verrouiller la poignée droite",lockLeft:"Verrouiller la poignée gauche",disableFilter:"Désactiver le filtrage",enableFilter:"Activer le filtrage",pauseAnimation:"Pause de l'animation",playAnimation:"Jouer l'animation",back:"Retour",forward:"En avant",changeDirection:"Changer la direction de l'animation",timeDelay:"Délai d'animation"},instructions:"Instructions Curseur Temporel"}}})),(0,c.A)((0,a.A)(e),"onCreateContentProps",(function(){return e.configObj.sliders.forEach((function(t){if(t.temporalDimension){var i={field:t.temporalDimension.field,default:t.temporalDimension.default,unitSymbol:t.temporalDimension.unitSymbol,nearestValues:t.temporalDimension.nearestValues,range:u.FHQ.dateUtilities.createRangeOGC(t.temporalDimension.range),singleHandle:t.temporalDimension.singleHandle};u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(t.layerPaths[0]).setTemporalDimension(t.layerPaths[0],i)}if(t.defaultValue){var n=t.layerPaths[0],r=u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).layerTemporalDimension[n];u.FHQ.maps[e.pluginProps.mapId].layer.geoviewLayer(n).setTemporalDimension(n,K(K({},r),{},{default:t.defaultValue}))}})),{id:"time-slider",value:e.value,label:"timeSlider.title",icon:(0,C.jsx)(d.TimeSliderIcon,{}),content:(0,C.jsx)(U,{mapId:e.pluginProps.mapId,configObj:e.configObj})}})),e}return(0,s.A)(t,e),(0,n.A)(t)}(p.b);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["time-slider"]=(0,u.KXH)(_)}},e=>{var t;t=92064,e(e.s=t)}]);
//# sourceMappingURL=geoview-time-slider.js.map