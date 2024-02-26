/*! Package:geoview-swiper: 0.1.0 - "b840bb0373b0c4baec0aa2b25c3f6ee3102142e0" - 2024-02-26T21:18:56.217Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[858],{75624:(e,t,n)=>{var r=n(81144),o=n(9332),a=n(51112),i=n(36704),s=n(51616),l=n(61992),u=n(38424),c=n(6976),d=n(78424),f=n(57032),p=n(19515),g=n(46315);function h(e,t,n){return t=(0,l.c)(t),(0,a.c)(e,m()?Reflect.construct(t,n||[],(0,l.c)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var y=function(e){function t(){return(0,r.c)(this,t),h(this,t,arguments)}return(0,u.c)(t,e),(0,o.c)(t,[{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"<div>Content for Map Plugin on map id ".concat(this.pluginProps.mapId," goes here...</div>"))}},{key:"onAdd",value:function(){var e=document.createElement("div");e.setAttribute("id","".concat(this.pluginProps.mapId,"-").concat(this.pluginId));var t=document.getElementById("mapbox-".concat(this.pluginProps.mapId));null==t||t.prepend(e);var n=this.onCreateContent();(0,f.C)(e).render((0,g.jsx)(d.UX_.Provider,{value:{mapId:this.pluginProps.mapId},children:n}))}},{key:"onRemove",value:function(){this.api}}]),t}(p.k),v=n(21304),b=n(18968);const w=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Swiper Config Schema","type":"object","version":1,"comments":"Configuration for GeoView swiper package.","additionalProperties":false,"properties":{"orientation":{"type":"string","enum":["vertical","horizontal"],"description":"Orientation of the swiper bar.","default":"vertical"},"keyboardOffset":{"type":"number","minimum":10,"maximum":100,"description":"The offset value when swiper is moved from the keyboard.","default":10},"layers":{"type":"array","items":{"type":"string"}},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["orientation","layers","suportedLanguages"]}'),S=JSON.parse('{"orientation":"vertical","keyboardOffset":10,"layers":[],"suportedLanguages":["en","fr"]}');var x=n(21211),D=n(25336),P=n(89568),E=n(24792),O=n.n(E),C=n(56736),T=n.n(C),M=n(68816),j=n(80092),N=n(64008),k=n(63056),I=n.n(k),L={layerSwipe:{position:"absolute",width:"100%",height:"100%"},handle:{backgroundColor:"rgba(50,50,50,0.75)",color:"#fff",width:"24px",height:"24px"},bar:{position:"absolute",backgroundColor:"rgba(50,50,50,0.75)",zIndex:151,boxSizing:"content-box",margin:0,padding:"0!important"},vertical:{width:"8px",height:"100%",cursor:"col-resize",top:"0px!important","& .handleContainer":{position:"relative",width:"58px",height:"24px",zIndex:1,top:"50%",left:"-25px","& .handleR":{transform:"rotate(90deg)",float:"right"},"& .handleL":{transform:"rotate(90deg)",float:"left"}}},horizontal:{width:"100%",height:"8px",cursor:"col-resize",left:"0px!important","& .handleContainer":{position:"relative",height:"58px",width:"24px",zIndex:1,left:"50%",top:"-24px","& .handleL":{verticalAlign:"top",marginBottom:"8px"}}}};function R(e){var t,n=e.mapId,r=e.config,o=window.cgpv,a=o.api,i=o.ui,s=o.react,l=s.useEffect,u=s.useState,c=s.useRef,d=s.useCallback,f=i.elements,p=f.Box,h=f.Tooltip,m=f.HandleIcon,y=r.orientation,v=a.maps[n],w=c((null===(t=v.map)||void 0===t?void 0:t.getSize())||[0,0]),S=c(50),E=c(),C=u([]),k=(0,P.c)(C,2),R=k[0],W=k[1],A=u(w.current[0]/2),X=(0,P.c)(A,2),Y=X[0],U=X[1],_=u(w.current[1]/2),B=(0,P.c)(_,2),V=B[0],G=B[1],z=(0,M.Cg)(),F=d((function(e){b.QE.logTraceUseCallback("GEOVIEW-SWIPER - prerender",e);var t=e,n=t.context,r=(w.current[0]+6)*S.current/100,o=(w.current[1]+6)*S.current/100,a=(0,N.getRenderPixel)(t,[0,0]),i="vertical"===y?(0,N.getRenderPixel)(t,[r,0]):(0,N.getRenderPixel)(t,[w.current[0],0]),s="vertical"===y?(0,N.getRenderPixel)(t,[0,w.current[1]]):(0,N.getRenderPixel)(t,[0,o]),l="vertical"===y?(0,N.getRenderPixel)(t,[r,w.current[1]]):(0,N.getRenderPixel)(t,[w.current[0],o]);n.save(),n.beginPath(),n.moveTo(a[0],a[1]),n.lineTo(s[0],s[1]),n.lineTo(l[0],l[1]),n.lineTo(i[0],i[1]),n.closePath(),n.clip()}),[y]);function H(e){var t=e,n=t.context;n instanceof WebGLRenderingContext?"postrender"===t.type&&n.disable(n.SCISSOR_TEST):t.target.getClassName&&"ol-layer"!==t.target.getClassName()&&t.target.get("declutter")?setTimeout((function(){n.restore()}),0):n.restore()}var Q=function(){var e=window.getComputedStyle(E.current),t=new DOMMatrixReadOnly(e.transform);return[t.m41,t.m42]},q=I()((function(){w.current=v.map.getSize()||[0,0];var e="vertical"===y?w.current[0]:w.current[1],t="vertical"===y?Q()[0]:Q()[1];S.current=t/e*100,"vertical"===y&&U(t),"vertical"===y&&G(t),R.forEach((function(e){e.changed()}))}),100),K=I()((function(e){if(e.ctrlKey&&"ArrowLeft ArrowRight ArrowUp ArrowDown".includes(e.key)){var t=Q(),n="ArrowLeft"===e.key||"ArrowUp"===e.key?-10:10;t[0]=t[0]<=10?10:t[0]>=w.current[0]-10?w.current[0]-10:t[0],t[1]=t[1]<=10?10:t[1]>=w.current[1]-10?w.current[1]-10:t[1],E.current.style.transform="vertical"===y?"translate(".concat(t[0]+n,"px, 0px)"):"translate(0px, ".concat(t[1]+n,"px)"),setTimeout((function(){return q()}),75)}}),100),J=d(function(){var e=(0,D.c)(O().mark((function e(t){var n,r;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.layer.getOLLayerByLayerPathAsync(t);case 3:(n=e.sent)?(W((function(e){return[].concat((0,x.c)(e),[n])})),n.on(["precompose","prerender"],F),n.on(["postcompose","postrender"],H),n.changed()):b.QE.logError("SWIPER - Failed to find layer to attach layer events",t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b.QE.logError("SWIPER - Failed to attach layer events",null===(r=v.layer)||void 0===r?void 0:r.geoviewLayers,t,e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[v,F]);return l((function(){return b.QE.logTraceUseEffect("GEOVIEW-SWIPER - layerPaths",z),z.forEach((function(e){J(e)})),function(){b.QE.logTraceUseEffectUnmount("GEOVIEW-SWIPER - layerPaths",z),z.forEach((function(e){try{var t=v.layer.getOLLayerByLayerPath(e);t?(t.un(["precompose","prerender"],F),t.un(["postcompose","postrender"],H),t.changed()):b.QE.logError("SWIPER - Failed to find layer to un-attach layer events",e)}catch(t){b.QE.logError("SWIPER - Failed to un-attach layer events",e,t)}})),W([])}}),[v,z,J,F]),l((function(){b.QE.logTraceUseEffect("GEOVIEW-SWIPER - mount",n);var e=null==E?void 0:E.current,t=function(){document.getElementById(n).classList.contains("map-focus-trap")&&(null==e||e.addEventListener("keydown",K))},r=function(){null==e||e.removeEventListener("keydown",K)};return null==e||e.addEventListener("focusin",t),null==e||e.addEventListener("focusout",r),function(){b.QE.logTraceUseEffectUnmount("GEOVIEW-SWIPER - unmount",n),null==e||e.removeEventListener("focusout",r),null==e||e.removeEventListener("focusin",t)}}),[n,K]),z.length>0?(0,g.jsx)(p,{sx:L.layerSwipe,children:(0,g.jsx)(T(),{axis:"vertical"===y?"x":"y",bounds:"parent",defaultPosition:{x:"vertical"===y?Y:0,y:"vertical"===y?0:V},onStop:function(){return q()},onDrag:function(){return q()},nodeRef:E,children:(0,g.jsx)(p,{sx:["vertical"===y?L.vertical:L.horizontal,L.bar],tabIndex:0,ref:E,children:(0,g.jsx)(h,{title:(0,j.getLocalizedMessage)(n,"swiper.tooltip"),children:(0,g.jsxs)(p,{className:"handleContainer",children:[(0,g.jsx)(m,{sx:L.handle,className:"handleL"}),(0,g.jsx)(m,{sx:L.handle,className:"handleR"})]})})})})}):(0,g.jsx)(p,{})}function W(e,t,n){return t=(0,l.c)(t),(0,a.c)(e,A()?Reflect.construct(t,n||[],(0,l.c)(e).constructor):t.apply(e,n))}function A(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(A=function(){return!!e})()}var X=function(e){function t(){var e;(0,r.c)(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=W(this,t,[].concat(o)),(0,c.c)((0,i.c)(e),"schema",(function(){return w})),(0,c.c)((0,i.c)(e),"defaultConfig",(function(){return(0,d.Itl)(S)})),(0,c.c)((0,i.c)(e),"translations",(0,d.Itl)({en:{swiper:{tooltip:"Drag to see underlying layer",menu:"Swiper"}},fr:{swiper:{tooltip:"Faites glisser pour voir les couches sous-jacentes",menu:"Balayage"}}})),(0,c.c)((0,i.c)(e),"activateForLayer",(function(t){try{e.map().layer.getOLLayerByLayerPath(t),v.a.addLayerPath(e.pluginProps.mapId,t)}catch(e){b.QE.logError(e)}})),(0,c.c)((0,i.c)(e),"deActivateForLayer",(function(t){v.a.removeLayerPath(e.pluginProps.mapId,t)})),(0,c.c)((0,i.c)(e),"deActivateAll",(function(){v.a.removeAll(e.pluginProps.mapId)})),e}return(0,u.c)(t,e),(0,o.c)(t,[{key:"onAdd",value:function(){v.a.setLayerPaths(this.pluginProps.mapId,this.configObj.layers),(0,s.c)((0,l.c)(t.prototype),"onAdd",this).call(this)}},{key:"onCreateContent",value:function(){return(0,g.jsx)(R,{mapId:this.pluginProps.mapId,config:this.configObj})}}]),t}(y);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins.swiper=(0,d.Utj)(X)},19312:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.r(t),n.d(t,{clsx:()=>o,default:()=>a});const a=o},70280:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(60940)),o=f(n(91220)),a=f(n(51056)),i=f(n(19312)),s=n(7344),l=n(82708),u=n(15232),c=f(n(46256)),d=f(n(89852));function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function h(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class m extends r.Component{static getDerivedStateFromProps(e,t){let{position:n}=e,{prevPropsPosition:r}=t;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,d.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(e){super(e),h(this,"onDragStart",((e,t)=>{(0,d.default)("Draggable: onDragStart: %j",t);if(!1===this.props.onStart(e,(0,l.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})})),h(this,"onDrag",((e,t)=>{if(!this.state.dragging)return!1;(0,d.default)("Draggable: onDrag: %j",t);const n=(0,l.createDraggableData)(this,t),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:e,y:t}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,a]=(0,l.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=a,r.slackX=this.state.slackX+(e-r.x),r.slackY=this.state.slackY+(t-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(e,n))return!1;this.setState(r)})),h(this,"onDragStop",((e,t)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(e,(0,l.createDraggableData)(this,t)))return!1;(0,d.default)("Draggable: onDragStop: %j",t);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:e,y:t}=this.props.position;n.x=e,n.y=t}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},!e.position||e.onDrag||e.onStop||console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!==(e=null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current)&&void 0!==e?e:a.default.findDOMNode(this)}render(){const{axis:e,bounds:t,children:n,defaultPosition:o,defaultClassName:a,defaultClassNameDragging:u,defaultClassNameDragged:d,position:f,positionOffset:p,scale:h,...m}=this.props;let y={},v=null;const b=!Boolean(f)||this.state.dragging,w=f||o,S={x:(0,l.canDragX)(this)&&b?this.state.x:w.x,y:(0,l.canDragY)(this)&&b?this.state.y:w.y};this.state.isElementSVG?v=(0,s.createSVGTransform)(S,p):y=(0,s.createCSSTransform)(S,p);const x=(0,i.default)(n.props.className||"",a,{[u]:this.state.dragging,[d]:this.state.dragged});return r.createElement(c.default,g({},m,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(n),{className:x,style:{...n.props.style,...y},transform:v}))}}t.default=m,h(m,"displayName","Draggable"),h(m,"propTypes",{...c.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:u.dontSetMe,style:u.dontSetMe,transform:u.dontSetMe}),h(m,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},46256:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(60940)),o=c(n(91220)),a=c(n(51056)),i=n(7344),s=n(82708),l=n(15232),u=c(n(89852));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p={start:"touchstart",move:"touchmove",stop:"touchend"},g={start:"mousedown",move:"mousemove",stop:"mouseup"};let h=g;class m extends r.Component{constructor(){super(...arguments),f(this,"dragging",!1),f(this,"lastX",NaN),f(this,"lastY",NaN),f(this,"touchIdentifier",null),f(this,"mounted",!1),f(this,"handleDragStart",(e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;const t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=t;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();const r=(0,i.getTouchIdentifier)(e);this.touchIdentifier=r;const o=(0,s.getControlPosition)(e,r,this);if(null==o)return;const{x:a,y:l}=o,c=(0,s.createCoreData)(this,a,l);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(e,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(n),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(n,h.move,this.handleDrag),(0,i.addEvent)(n,h.stop,this.handleDragStop))})),f(this,"handleDrag",(e=>{const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX,t=r-this.lastY;if([e,t]=(0,s.snapToGrid)(this.props.grid,e,t),!e&&!t)return;n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);(0,u.default)("DraggableCore: handleDrag: %j",o);if(!1!==this.props.onDrag(e,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(e){const t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}})),f(this,"handleDragStop",(e=>{if(!this.dragging)return;const t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:n,y:r}=t;if(Array.isArray(this.props.grid)){let e=n-this.lastX||0,t=r-this.lastY||0;[e,t]=(0,s.snapToGrid)(this.props.grid,e,t),n=this.lastX+e,r=this.lastY+t}const o=(0,s.createCoreData)(this,n,r);if(!1===this.props.onStop(e,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,u.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,h.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,h.stop,this.handleDragStop))})),f(this,"onMouseDown",(e=>(h=g,this.handleDragStart(e)))),f(this,"onMouseUp",(e=>(h=g,this.handleDragStop(e)))),f(this,"onTouchStart",(e=>(h=p,this.handleDragStart(e)))),f(this,"onTouchEnd",(e=>(h=p,this.handleDragStop(e))))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,i.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:t}=e;(0,i.removeEvent)(t,g.move,this.handleDrag),(0,i.removeEvent)(t,p.move,this.handleDrag),(0,i.removeEvent)(t,g.stop,this.handleDragStop),(0,i.removeEvent)(t,p.stop,this.handleDragStop),(0,i.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!==(e=this.props)&&void 0!==e&&e.nodeRef?null===(t=this.props)||void 0===t||null===(t=t.nodeRef)||void 0===t?void 0:t.current:a.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}t.default=m,f(m,"displayName","DraggableCore"),f(m,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),f(m,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},56736:(e,t,n)=>{const{default:r,DraggableCore:o}=n(70280);e.exports=r,e.exports.default=r,e.exports.DraggableCore=o},7344:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addClassName=u,t.addEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n},t.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t));e.body&&u(e.body,"react-draggable-transparent-selection")},t.createCSSTransform=function(e,t){const n=l(e,t,"px");return{[(0,o.browserPrefixToKey)("transform",o.default)]:n}},t.createSVGTransform=function(e,t){return l(e,t,"")},t.getTouch=function(e,t){return e.targetTouches&&(0,r.findInArray)(e.targetTouches,(e=>t===e.identifier))||e.changedTouches&&(0,r.findInArray)(e.changedTouches,(e=>t===e.identifier))},t.getTouchIdentifier=function(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier},t.getTranslation=l,t.innerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingTop),t-=(0,r.int)(n.paddingBottom),t},t.innerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,r.int)(n.paddingLeft),t-=(0,r.int)(n.paddingRight),t},t.matchesSelector=s,t.matchesSelectorAndParentsTo=function(e,t,n){let r=e;do{if(s(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},t.offsetXYFromParent=function(e,t,n){const r=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),o=(e.clientX+t.scrollLeft-r.left)/n,a=(e.clientY+t.scrollTop-r.top)/n;return{x:o,y:a}},t.outerHeight=function(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderTopWidth),t+=(0,r.int)(n.borderBottomWidth),t},t.outerWidth=function(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,r.int)(n.borderLeftWidth),t+=(0,r.int)(n.borderRightWidth),t},t.removeClassName=c,t.removeEvent=function(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null},t.removeUserSelectStyles=function(e){if(!e)return;try{if(e.body&&c(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var r=n(15232),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(4648));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}let i="";function s(e,t){return i||(i=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(t){return(0,r.isFunction)(e[t])}))),!!(0,r.isFunction)(e[i])&&e[i](t)}function l(e,t,n){let{x:r,y:o}=e,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const e="".concat("string"==typeof t.x?t.x:t.x+n),r="".concat("string"==typeof t.y?t.y:t.y+n);a="translate(".concat(e,", ").concat(r,")")+a}return a}function u(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function c(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},4648:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.browserPrefixToKey=o,t.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},t.default=void 0,t.getPrefix=r;const n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const r=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!r)return"";if(t in r)return"";for(let e=0;e<n.length;e++)if(o(t,n[e])in r)return n[e];return""}function o(e,t){return t?"".concat(t).concat(function(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):"-"===e[r]?n=!0:t+=e[r];return t}(e)):e}t.default=r()},89852:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){0}},82708:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},t.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},t.createCoreData=function(e,t,n){const o=!(0,r.isNum)(e.lastX),i=a(e);return o?{node:i,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:i,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}},t.createDraggableData=function(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}},t.getBoundPosition=function(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:i}=e.props;i="string"==typeof i?i:function(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}(i);const s=a(e);if("string"==typeof i){const{ownerDocument:e}=s,t=e.defaultView;let n;if(n="parent"===i?s.parentNode:e.querySelector(i),!(n instanceof t.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=n,l=t.getComputedStyle(s),u=t.getComputedStyle(a);i={left:-s.offsetLeft+(0,r.int)(u.paddingLeft)+(0,r.int)(l.marginLeft),top:-s.offsetTop+(0,r.int)(u.paddingTop)+(0,r.int)(l.marginTop),right:(0,o.innerWidth)(a)-(0,o.outerWidth)(s)-s.offsetLeft+(0,r.int)(u.paddingRight)-(0,r.int)(l.marginRight),bottom:(0,o.innerHeight)(a)-(0,o.outerHeight)(s)-s.offsetTop+(0,r.int)(u.paddingBottom)-(0,r.int)(l.marginBottom)}}(0,r.isNum)(i.right)&&(t=Math.min(t,i.right));(0,r.isNum)(i.bottom)&&(n=Math.min(n,i.bottom));(0,r.isNum)(i.left)&&(t=Math.max(t,i.left));(0,r.isNum)(i.top)&&(n=Math.max(n,i.top));return[t,n]},t.getControlPosition=function(e,t,n){const r="number"==typeof t?(0,o.getTouch)(e,t):null;if("number"==typeof t&&!r)return null;const i=a(n),s=n.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,o.offsetXYFromParent)(r||e,s,n.props.scale)},t.snapToGrid=function(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]};var r=n(15232),o=n(7344);function a(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}},15232:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dontSetMe=function(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))},t.findInArray=function(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]},t.int=function(e){return parseInt(e,10)},t.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},t.isNum=function(e){return"number"==typeof e&&!isNaN(e)}}},e=>{var t;t=75624,e(e.s=t)}]);
//# sourceMappingURL=geoview-swiper.js.map