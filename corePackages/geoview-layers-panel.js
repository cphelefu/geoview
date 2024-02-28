/*! Package:geoview-layers-panel: 0.1.0 - "5d99e871dcf65aee69bb441f3ad0501bd3e649f6" - 2024-02-28T14:55:38.231Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[596],{42160:(e,t,r)=>{r.d(t,{c:()=>d});var n=r(81144),a=r(9332),o=r(51112),i=r(61992),s=r(36704),c=r(38424),l=r(6976);function u(e,t,r){return t=(0,i.c)(t),(0,o.c)(e,p()?Reflect.construct(t,r||[],(0,i.c)(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=function(e){function t(){var e;(0,n.c)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=u(this,t,[].concat(a)),(0,l.c)((0,s.c)(e),"buttonPanel",void 0),(0,l.c)((0,s.c)(e),"buttonProps",void 0),(0,l.c)((0,s.c)(e),"panelProps",void 0),e}return(0,c.c)(t,e),(0,a.c)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){var e,t;this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.buttonPanel=(null===(e=this.map())||void 0===e?void 0:e.appBarButtons.createAppbarPanel(this.buttonProps,this.panelProps,null))||void 0;var r=this.onCreateContent();null===(t=this.buttonPanel)||void 0===t||null===(t=t.panel)||void 0===t||t.changeContent(r)}},{key:"onRemove",value:function(){var e;this.api&&this.buttonPanel&&(null===(e=this.map())||void 0===e||e.appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId))}}]),t}(r(19515).k)},28304:(e,t,r)=>{var n=r(81144),a=r(9332),o=r(51112),i=r(61992),s=r(36704),c=r(38424),l=r(6976),u=r(78424),p=r(42160),d=r(12672),f=r(21211),h=r(89568),v=r(18968),y=r(25336),g=r(24792),x=r.n(g),m=r(46315);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,l.c)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(e){var t=e.mapId,r=e.setAddLayerVisible,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=a.maps[t].getDisplayLanguage(),c=a.layerTypes,l=c.ESRI_DYNAMIC,p=c.ESRI_FEATURE,d=c.GEOJSON,f=c.GEOPACKAGE,g=c.WMS,b=c.WFS,j=c.OGC_FEATURE,C=c.XYZ_TILES,P=c.GEOCORE,L=i.useState,w=i.useEffect,I=i.useRef,O=o.elements,S=O.Select,A=O.Stepper,N=O.TextField,k=O.Button,T=O.ButtonGroup,R=O.Autocomplete,D=O.CircularProgressBase,U=O.Box,F=O.IconButton,G=O.CloseIcon,B=O.FileUploadIcon,_=L(0),M=(0,h.c)(_,2),W=M[0],V=M[1],Y=L(""),z=(0,h.c)(Y,2),J=z[0],K=z[1],Q=L(""),X=(0,h.c)(Q,2),Z=X[0],H=X[1],q=L(""),$=(0,h.c)(q,2),ee=$[0],te=$[1],re=L([]),ne=(0,h.c)(re,2),ae=ne[0],oe=ne[1],ie=L(""),se=(0,h.c)(ie,2),ce=se[0],le=se[1],ue=L([]),pe=(0,h.c)(ue,2),de=pe[0],fe=pe[1],he=L(!1),ve=(0,h.c)(he,2),ye=ve[0],ge=ve[1],xe=L(!1),me=(0,h.c)(xe,2),be=me[0],Ee=me[1],je=I(null),Ce={buttonGroup:{paddingTop:12,gap:6}},Pe=function(){return ee===l||ee===b||ee===g},Le=[[l,"ESRI Dynamic Service"],[p,"ESRI Feature Service"],[d,"GeoJSON"],[f,"GeoPackage"],[g,"OGC Web Map Service (WMS)"],[b,"OGC Web Feature Service (WFS)"],[j,"OGC API Features"],[C,"XYZ Raster Tiles"],[P,"GeoCore"]],we={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Ie=function(e){v.QE.logTraceCoreAPIEvent("LAYER-STEPPER - snackbarEventOpenListenerFunction",e),(0,u.uke)(e)&&e.message&&"validation.layer.loadfailed"===e.message.value&&ge(!1)};w((function(){return v.QE.logTraceUseEffect("LAYER-STEPPER - mount",t),a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,Ie,t),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,Ie)}}),[a.event,a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t]);var Oe=function(e){switch(e){case l:return{err:"ESRI Map",capability:"Map"};case p:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},Se=function(e){ge(!1),a.utilities.showError(t,"".concat(e," ").concat(we[s].errorEmpty),!1)},Ae=function(e){ge(!1),a.utilities.showError(t,"".concat(e," ").concat(we[s].errorServer),!1)},Ne=function(e,r,n){ge(!1);var o="".concat(e," ").concat(we[s].errorProj," ").concat(r,", ").concat(we[s].only," ").concat(n.join(", "));a.utilities.showError(t,o,!1)},ke=function(){var e=(0,y.c)(x().mark((function e(){var r,n,o,i,s,c,l,u,p,d,f,v;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.projection.projections[a.maps[t].getMapState().currentProjection].getCode(),n=[],e.prev=2,i=J.split("?"),s=(0,h.c)(i,2),c=s[0],l=s[1],u=new URLSearchParams(l),p=(null===(o=u.get("layers"))||void 0===o?void 0:o.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(c,"");case 8:if(d=e.sent,(n=d.Capability.Layer.CRS).includes(r)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){if(t.Layer&&t.Layer.length>0)t.Layer.forEach((function(t){e(t)}));else for(var r=0;r<p.length;r++)t.Name===p[r]&&f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(le(f[0][1]),fe([{layerId:f[0][0]}])):oe(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?Ne("WMS",r,n):Ae("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=(0,y.c)(x().mark((function e(){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(J);case 3:t=e.sent,1===(r=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(le(r[0][1]),fe([{layerId:r[0][0]}])):oe(r),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),Ae("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,y.c)(x().mark((function e(){var t,r,n,a,o,i,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["id","title"],e.next=3,fetch("".concat(J,"/?f=json"));case 3:if(200===(r=e.sent).status){e.next=7;break}return Ae("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,r.json();case 9:if(n=e.sent,!t.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return fe([{layerId:n.id}]),le(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(J,"/collections?f=json"));case 19:return o=e.sent,e.next=22,o.json();case 22:if(i=e.sent,a.every((function(e){return Object.keys(i).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=i.collections.map((function(e){return[e.id,e.title]}))).length?(le(s[0][1]),fe([{layerId:s[0][0]}])):oe(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),Ae("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),De=function(){try{if(!(-1===J.indexOf("/")&&32===J.replaceAll("-","").length))throw new Error("err");le(""),fe([{layerId:J}])}catch(e){return Ae("GeoCore UUID"),!1}return!0},Ue=function(){var e=(0,y.c)(x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(J);case 3:if(!(r=e.sent).capabilities.includes(Oe(t).capability)){e.next=8;break}"layers"in r?1===(n=r.layers.map((function(e){return[e.id,e.name]}))).length?(le(n[0][1]),fe([{layerId:n[0][0]}])):oe(n):(le(r.name),fe([{layerId:r.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),Ae(Oe(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){for(var e=["{x}","{y}","{z}"],t=0;t<e.length;t+=1)if(!J.includes(e[t]))return Ae("XYZ Tile"),!1;var r=J;return le(""),fe([{layerId:J,source:{dataAccessPath:{en:r,fr:r}}}]),!0},Ge=function(){var e=(0,y.c)(x().mark((function e(){var t,r,n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(J);case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,["FeatureCollection","Feature"].includes(r.type)){e.next=9;break}throw new Error("err");case 9:n=J.split("/").pop(),a=J.replace(n,""),ce||le(n),fe([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),Ae("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=(0,y.c)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge(!0),t=!0,void 0!==ee){e.next=8;break}t=!1,ge(!1),Se(we[s].service),e.next=49;break;case 8:if(ee!==g){e.next=14;break}return e.next=11,ke();case 11:t=e.sent,e.next=49;break;case 14:if(ee!==b){e.next=20;break}return e.next=17,Te();case 17:t=e.sent,e.next=49;break;case 20:if(ee!==j){e.next=26;break}return e.next=23,Re();case 23:t=e.sent,e.next=49;break;case 26:if(ee!==C){e.next=30;break}t=Fe(),e.next=49;break;case 30:if(ee!==l){e.next=36;break}return e.next=33,Ue(l);case 33:t=e.sent,e.next=49;break;case 36:if(ee!==p){e.next=42;break}return e.next=39,Ue(p);case 39:t=e.sent,e.next=49;break;case 42:if(ee!==d){e.next=48;break}return e.next=45,Ge();case 45:t=e.sent,e.next=49;break;case 48:ee===f?(r=void 0,n=void 0,r=J.split("/").pop(),n=J.replace(r,""),ce||le(r),fe([{layerId:r,source:{dataAccessPath:{en:n,fr:n}}}]),t=!0):ee===P&&(t=De());case 49:t&&(ge(!1),V(2));case 50:case"end":return e.stop()}var r,n}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){ge(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){v.QE.logTraceCoreAPIEvent("LAYER-STEPPER - EVENT_LAYER_ADDED"),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),ge(!1),r(!1)}),"".concat(t,"/").concat(e));var n=!0,o=ce,i=J;if(ee!==l&&ee!==p||(i=a.geoUtilities.getMapServerUrl(J)),ee===g){var c=J.split("?");i=(0,h.c)(c,1)[0]}""===ce&&(n=!1,Se(Pe()?we[s].layer:we[s].name));var u={geoviewLayerId:e,geoviewLayerName:{en:o,fr:o},geoviewLayerType:ee,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:de};ee!==d&&ee!==C&&ee!==f||(u.metadataAccessPath={en:"",fr:""}),ee===P&&delete u.metadataAccessPath,ee===j&&(u.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(J),fr:a.geoUtilities.getOGCServerUrl(J)}),n&&(ee===P&&setTimeout((function(){ge(!1),r(!1)}),3e3),u.geoviewLayerId?a.maps[t].layer.layerOrder.push(u.geoviewLayerId):void 0!==u.listOfLayerEntryConfig&&u.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[t].layer.layerOrder.unshift(e.layerId)})),a.maps[t].layer.addGeoviewLayer(u))},Me=function(){V((function(e){return e-1}))},We=function(e){var t=URL.createObjectURL(e);H(e.name),K(t);var r=e.name.split(".")[0];te(""),oe([]),le(r),fe([])},Ve=function(e){le(e.target.value)},Ye=function(e){var r;if(e.preventDefault(),e.stopPropagation(),Ee(!1),null!==(r=e.dataTransfer)&&void 0!==r&&r.files){var n=e.dataTransfer.files[0],o=n.name.toUpperCase();o.endsWith(".JSON")||o.endsWith(".GEOJSON")||o.endsWith(".GPKG")||o.endsWith(".CSV")?We(n):a.utilities.showError(t,we[s].errorFile,!1)}};function ze(e){var t=e.isFirst,r=void 0!==t&&t,n=e.isLast,a=void 0!==n&&n,o=e.handleNext;return ye?(0,m.jsx)(U,{sx:{padding:10},children:(0,m.jsx)(D,{})}):(0,m.jsxs)(T,{sx:Ce.buttonGroup,children:[(0,m.jsx)(k,{variant:"contained",type:"text",onClick:o,children:a?we[s].finish:we[s].continue}),!r&&(0,m.jsx)(k,{variant:"contained",type:"text",onClick:Me,children:we[s].back})]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(U,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(F,{color:"primary",onClick:function(){return r(!1)},children:(0,m.jsx)(G,{})})}),(0,m.jsx)(A,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:W,orientation:"vertical",steps:[{stepLabel:{children:we[s].stepOne},stepContent:{children:(0,m.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return Ye(e)},onDragOver:function(e){return(t=e).preventDefault(),void t.stopPropagation();var t},onDragEnter:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target!==je.current&&Ee(!0));var t},onDragLeave:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target===je.current&&Ee(!1));var t},children:[be&&(0,m.jsx)("div",{ref:je,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,m.jsxs)("h3",{children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),we[s].dropzone]})}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&We(e.target.files[0])},accept:".gpkg, .json, .geojson, .csv"})}),(0,m.jsxs)(k,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,m.jsx)(B,{}),(0,m.jsx)("span",{children:we[s].upload})]}),(0,m.jsx)("p",{style:{textAlign:"center"},children:(0,m.jsx)("small",{children:we[s].drop})}),(0,m.jsx)("p",{style:{textAlign:"center"},children:we[s].or}),(0,m.jsx)(N,{sx:{width:"100%"},label:we[s].url,variant:"standard",value:Z,onChange:function(e){H(e.target.value.trim()),K(e.target.value.trim()),te(""),oe([]),le(""),fe([])},multiline:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isFirst:!0,handleNext:function(){var e,r,n=!0;""===J.trim()&&(n=!1,ge(!1),a.utilities.showError(t,we[s].errorNone,!1)),n&&(e=Z.toUpperCase().split("/"),r=parseInt(e[e.length-1],10),Z.toUpperCase().endsWith("MAPSERVER")||Z.toUpperCase().endsWith("MAPSERVER/")?te(l):-1!==Z.toUpperCase().indexOf("FEATURESERVER")||-1!==Z.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(r)?te(p):-1!==e.indexOf("WFS")?te(b):Z.toUpperCase().endsWith(".JSON")||Z.toUpperCase().endsWith(".GEOJSON")?te(d):Z.toUpperCase().endsWith(".GPKG")?te(f):-1!==Z.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==Z.toUpperCase().indexOf("{Z}/{Y}/{X}")?te(C):-1===Z.indexOf("/")&&32===Z.replaceAll("-","").length?te(P):-1!==Z.toUpperCase().indexOf("WMS")&&te(g),V(1))}})]})}},{stepLabel:{children:we[s].stepTwo},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S,{fullWidth:!0,labelId:"service-type-label",value:ee,onChange:function(e){te(e.target.value),oe([]),fe([])},label:we[s].service,inputLabel:{id:"service-type-label"},menuItems:Le.map((function(e){var t=(0,h.c)(e,2),r=t[0];return{key:r,item:{value:r,children:t[1]}}}))}),(0,m.jsx)(ze,{handleNext:Be})]})}},{stepLabel:{children:we[s].stepThree},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[0===ae.length&&(0,m.jsx)(N,{label:we[s].name,variant:"standard",value:ce,onChange:Ve}),ae.length>1&&(0,m.jsx)(R,{fullWidth:!0,multiple:Pe(),disableClearable:!Pe(),id:"service-layer-label",options:ae,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,m.jsx)("span",E(E({},e),{},{children:t[1]}))},onChange:function(e,t){Pe()?(fe(t.map((function(e){return{layerId:"".concat(e[0])}}))),le(t.map((function(e){return e[1]})).join(", "))):(fe([{layerId:"".concat(t[0])}]),le(t[1]))},renderInput:function(e){return(0,m.jsx)(N,E(E({},e),{},{label:we[s].layerSelect}))}}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isLast:!Pe(),handleNext:Pe()?function(){var e=!0;0===de.length&&(e=!1,Se(we[s].layer)),e&&V(3)}:_e})]})}},Pe()?{stepLabel:{children:we[s].stepFour},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{sx:{width:"100%"},label:we[s].name,variant:"standard",value:ce,onChange:Ve}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isLast:!0,handleNext:_e})]})}}:null]})]})};var C=r(34400);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,l.c)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const w=function(e){var t=e.mapId,r=e.title,n=e.layerIds,a=e.setReorderLayersVisible,o=e.setMapLayers,i=window.cgpv,s=i.api,c=i.ui.elements,l=c.List,u=c.ListItem,p=c.ListItemButton,d=c.ListItemIcon,v=c.HandleIcon,y=c.ListItemText,g=c.Box,x=c.IconButton,b=c.CloseIcon,E=s.maps[t].displayLanguage,j={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},P=function(e){return s.maps[t].layer.geoviewLayers[e].geoviewLayerName[E]};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(x,{className:"style3",onClick:function(){return a(!1)},children:(0,m.jsx)(b,{})})}),(0,m.jsx)(g,{sx:j.titleBar,children:r}),(0,m.jsx)(C._y,{onDragEnd:function(e){var r=e.destination,a=e.source;if(r){var i=(0,f.c)(n),c=i.splice(a.index,1),l=(0,h.c)(c,1)[0];i.splice(r.index,0,l),s.maps[t].layer.moveLayer(l,r.index),o(i)}},children:(0,m.jsx)(C.SS,{droppableId:"droppable",children:function(e){return(0,m.jsxs)(l,L(L({sx:j.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,t){return(0,m.jsx)(C.wf,{draggableId:e,index:t,children:function(t,r){return(0,m.jsx)(u,L(L(L({innerref:t.innerRef,sx:r.isDragging?j.draggingListItem:j.regularListItem},t.draggableProps),t.dragHandleProps),{},{children:(0,m.jsxs)(p,{children:[(0,m.jsx)(d,{children:(0,m.jsx)(v,{sx:j.handleIcon})}),(0,m.jsx)(y,{primaryTypographyProps:j.listItemText,primary:P(e)})]})}))}},e)})),e.placeholder]}))}})})]})};const I=function(e){var t=e.mapId,r=e.buttonPanel,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=i.useState,c=i.useEffect,l=s(!1),p=(0,h.c)(l,2),d=p[0],y=p[1],g=s(!1),x=(0,h.c)(g,2),b=x[0],E=x[1],C=s([]),P=(0,h.c)(C,2),L=P[0],I=P[1],O=s(),S=(0,h.c)(O,2),A=S[0],N=S[1],k=s(null),T=(0,h.c)(k,2),R=T[0],D=T[1],U=s(!1),F=(0,h.c)(U,2),G=F[0],B=F[1],_=s(!1),M=(0,h.c)(_,2),W=M[0],V=M[1],Y=o.elements,z=Y.IconButton,J=Y.AddIcon,K=Y.Box,Q=Y.ExpandMoreIcon,X=Y.ExpandLessIcon,Z=Y.VisibilityIcon,H=Y.VisibilityOffIcon,q=Y.Menu,$=Y.MenuItem,ee=Y.MenuIcon,te=Y.ListItemIcon,re=Y.ListItemText,ne=Y.ReorderIcon,ae=a.maps[t].getDisplayLanguage(),oe=(0,u.Itl)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),ie={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},se=Boolean(R),ce=function(){var e;v.QE.logTraceCoreAPIEvent("PANEL-CONTENT - updateLayers"),void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&I((0,f.c)(a.maps[t].layer.layerOrder).reverse())};c((function(){return v.QE.logTraceUseEffect("PANEL-CONTENT - mount 1"),a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,ce,t),a.event.on(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,ce,"".concat(t,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,ce),a.event.off(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,t,ce)}}),[]),c((function(){}),[L]),c((function(){v.QE.logTraceUseEffect("PANEL-CONTENT - mount 2");var e=function(){v.QE.logTraceCoreAPIEvent("PANEL-CONTENT - setAddLayerVisibleListenerFunction"),y(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(t,"/").concat(r.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(t,"/").concat(r.buttonPanelId),e)}}),[a,r.buttonPanelId,t]),c((function(){N(null)}),[G]),c((function(){N(null)}),[W]);var le=function(){D(null)},ue=function(e){B(e),le()},pe=function(e){V(!e),le()};return c((function(){if(b){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}else window.onscroll=function(){}}),[b]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(q,{anchorEl:R,open:se,onClose:le,children:[(0,m.jsxs)($,{onClick:function(){return ue(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(Q,{})}),(0,m.jsx)(re,{children:oe[ae].expandAll})]}),(0,m.jsxs)($,{onClick:function(){return ue(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(X,{})}),(0,m.jsx)(re,{children:oe[ae].collapseAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(Z,{})}),(0,m.jsx)(re,{children:oe[ae].showAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(H,{})}),(0,m.jsx)(re,{children:oe[ae].hideAll})]}),(0,m.jsxs)($,{onClick:function(){return E(!0),void le()},children:[(0,m.jsx)(te,{children:(0,m.jsx)(ne,{})}),(0,m.jsx)(re,{children:oe[ae].reorderLayers})]})]}),(0,m.jsxs)(K,{sx:ie.mainContainer,children:[d&&(0,m.jsx)(j,{mapId:t,setAddLayerVisible:y}),b&&(0,m.jsx)(w,{mapId:t,title:oe[ae].reorderLayers,layerIds:L,setMapLayers:I,setReorderLayersVisible:E}),(0,m.jsxs)(K,{sx:ie.topControls,style:{display:d||b?"none":"flex"},children:[(0,m.jsx)("div",{children:(0,m.jsx)(z,{color:"primary",onClick:function(e){D(e.currentTarget)},children:(0,m.jsx)(ee,{})})}),(0,m.jsxs)(K,{onClick:function(){y((function(e){return!e}))},children:[oe[ae].addLayer,(0,m.jsx)(z,{children:(0,m.jsx)(J,{})})]})]}),(0,m.jsx)("div",{style:{display:d||b?"none":"block"},children:A})]})]})},O=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),S=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function A(e,t,r){return t=(0,i.c)(t),(0,o.c)(e,N()?Reflect.construct(t,r||[],(0,i.c)(e).constructor):t.apply(e,r))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var k=function(e){function t(){var e;(0,n.c)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=A(this,t,[].concat(a)),(0,l.c)((0,s.c)(e),"schema",(function(){return O})),(0,l.c)((0,s.c)(e),"defaultConfig",(function(){return(0,u.Itl)(S)})),(0,l.c)((0,s.c)(e),"translations",(0,u.Itl)({en:{layersPanel:{title:"Layers"}},fr:{layersPanel:{title:"Couches"}}})),e}return(0,c.c)(t,e),(0,a.c)(t,[{key:"onCreateButtonProps",value:function(){return{id:"layersPanelButton",tooltip:"layersPanel.title",tooltipPlacement:"right",children:(0,m.jsx)(d.LayersOutlinedIcon,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"layersPanel.title",icon:(0,m.jsx)(d.LayersOutlinedIcon,{}),width:350,status:null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large}}},{key:"onCreateContent",value:function(){return(0,m.jsx)(I,{buttonPanel:this.buttonPanel,mapId:this.pluginProps.mapId})}}]),t}(p.c);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["layers-panel"]=(0,u.Utj)(k)}},e=>{var t;t=28304,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map