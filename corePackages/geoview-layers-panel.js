/*! Package:geoview-layers-panel: 0.1.0 - "f9e183683cd863312f051109209f0f5e26a6903d" - 2024-02-29T21:29:17.559Z */
"use strict";(self.webpackChunkgeoview_core=self.webpackChunkgeoview_core||[]).push([[617],{999:(e,t,r)=>{r.d(t,{i:()=>d});var n=r(61567),a=r(64507),o=r(25676),i=r(6280),s=r(75395),l=r(40943),c=r(693);function u(e,t,r){return t=(0,i.A)(t),(0,o.A)(e,p()?Reflect.construct(t,r||[],(0,i.A)(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}var d=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=u(this,t,[].concat(a)),(0,c.A)((0,s.A)(e),"buttonPanel",void 0),(0,c.A)((0,s.A)(e),"buttonProps",void 0),(0,c.A)((0,s.A)(e),"panelProps",void 0),e}return(0,l.A)(t,e),(0,a.A)(t,[{key:"onCreateButtonProps",value:function(){var e=window.cgpv.ui.elements.MapIcon;return{id:"somePluginButton",tooltip:"Some tooltip",tooltipPlacement:"right",children:this.react.createElement(e),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"Some title",icon:'<i class="material-icons">map</i>',width:"80vw",status:null===(e=this.configObj)||void 0===e?void 0:e.isOpen}}},{key:"onCreateContent",value:function(){return this.react.createElement("div",void 0,"Content for AppBar Plugin on map id ".concat(this.pluginProps.mapId," goes here..."))}},{key:"onAdd",value:function(){var e,t;this.buttonProps=this.onCreateButtonProps(),this.panelProps=this.onCreateContentProps(),this.buttonPanel=(null===(e=this.map())||void 0===e?void 0:e.appBarButtons.createAppbarPanel(this.buttonProps,this.panelProps,null))||void 0;var r=this.onCreateContent();null===(t=this.buttonPanel)||void 0===t||null===(t=t.panel)||void 0===t||t.changeContent(r)}},{key:"onRemove",value:function(){var e;this.api&&this.buttonPanel&&(null===(e=this.map())||void 0===e||e.appBarButtons.removeAppbarPanel(this.buttonPanel.buttonPanelId))}}]),t}(r(27157).G)},78832:(e,t,r)=>{var n=r(61567),a=r(64507),o=r(25676),i=r(6280),s=r(75395),l=r(40943),c=r(693),u=r(69857),p=r(999),d=r(21334),f=r(18466),h=r(89246),v=r(37104),y=r(89765),g=r(48134),x=r.n(g),m=r(80678);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const j=function(e){var t=e.mapId,r=e.setAddLayerVisible,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=a.maps[t].getDisplayLanguage(),l=a.layerTypes,c=l.ESRI_DYNAMIC,p=l.ESRI_FEATURE,d=l.GEOJSON,f=l.GEOPACKAGE,g=l.WMS,b=l.WFS,j=l.OGC_FEATURE,E=l.XYZ_TILES,C=l.GEOCORE,P=i.useState,L=i.useEffect,O=i.useRef,w=o.elements,I=w.Select,S=w.Stepper,N=w.TextField,k=w.Button,T=w.ButtonGroup,R=w.Autocomplete,D=w.CircularProgressBase,U=w.Box,F=w.IconButton,G=w.CloseIcon,B=w.FileUploadIcon,_=P(0),M=(0,h.A)(_,2),W=M[0],V=M[1],Y=P(""),z=(0,h.A)(Y,2),K=z[0],J=z[1],X=P(""),H=(0,h.A)(X,2),Z=H[0],q=H[1],Q=P(""),$=(0,h.A)(Q,2),ee=$[0],te=$[1],re=P([]),ne=(0,h.A)(re,2),ae=ne[0],oe=ne[1],ie=P(""),se=(0,h.A)(ie,2),le=se[0],ce=se[1],ue=P([]),pe=(0,h.A)(ue,2),de=pe[0],fe=pe[1],he=P(!1),ve=(0,h.A)(he,2),ye=ve[0],ge=ve[1],xe=P(!1),me=(0,h.A)(xe,2),be=me[0],Ae=me[1],je=O(null),Ee={buttonGroup:{paddingTop:12,gap:6}},Ce=function(){return ee===c||ee===b||ee===g},Pe=[[c,"ESRI Dynamic Service"],[p,"ESRI Feature Service"],[d,"GeoJSON"],[f,"GeoPackage"],[g,"OGC Web Map Service (WMS)"],[b,"OGC Web Feature Service (WFS)"],[j,"OGC API Features"],[E,"XYZ Raster Tiles"],[C,"GeoCore"]],Le={en:{finish:"Finish",continue:"Continue",back:"Back",or:"or",dropzone:"Drop Here",upload:"Choose a File",drop:"Drop the file to upload",url:"Enter URL or UUID",layer:"Layer",stepOne:"Upload a File or enter URL/UUID",stepTwo:"Select format",stepThree:"Configure layer",stepFour:"Enter Name",service:"Service Type",name:"Name",layerSelect:"Select Layer",errorEmpty:"cannot be empty",errorNone:"No file or source added",errorFile:"Only geoJSON and GeoPackage files can be used",errorServer:"source is not valid",errorProj:"does not support current map projection",only:"only"},fr:{finish:"Finir",continue:"Continuer",back:"Retour",or:"ou",dropzone:"Déposez ici",upload:"Choisir un fichier",drop:"Déposez le fichier à télécharger",url:"Entrer l'URL ou l'UUID",layer:"Couche",stepOne:"Ajouter un fichier ou entrer l'URL/UUID",stepTwo:"Sélectionnez le format",stepThree:"Configurer la couche",stepFour:"Entrez le nom",service:"Type de service",name:"Nom",layerSelect:"Sélectionner la couche",errorEmpty:"ne peut être vide",errorNone:"Pas de fichier ou de source ajouté",errorFile:"Seuls les fichiers geoJSON et GeoPackage peuvent être utilisés",errorServer:"source n'est pas valide",errorProj:"ne prend pas en charge la projection cartographique actuelle",only:"seulement"}},Oe=function(e){v.vF.logTraceCoreAPIEvent("LAYER-STEPPER - snackbarEventOpenListenerFunction",e),(0,u.syS)(e)&&e.message&&"validation.layer.loadfailed"===e.message.value&&ge(!1)};L((function(){return v.vF.logTraceUseEffect("LAYER-STEPPER - mount",t),a.event.on(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,Oe,t),function(){a.event.off(a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t,Oe)}}),[a.event,a.eventNames.SNACKBAR.EVENT_SNACKBAR_OPEN,t]);var we=function(e){switch(e){case c:return{err:"ESRI Map",capability:"Map"};case p:return{err:"ESRI Feature",capability:"Query"};default:return{err:"",capability:""}}},Ie=function(e){ge(!1),a.utilities.showError(t,"".concat(e," ").concat(Le[s].errorEmpty),!1)},Se=function(e){ge(!1),a.utilities.showError(t,"".concat(e," ").concat(Le[s].errorServer),!1)},Ne=function(e,r,n){ge(!1);var o="".concat(e," ").concat(Le[s].errorProj," ").concat(r,", ").concat(Le[s].only," ").concat(n.join(", "));a.utilities.showError(t,o,!1)},ke=function(){var e=(0,y.A)(x().mark((function e(){var r,n,o,i,s,l,c,u,p,d,f,v;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.projection.projections[a.maps[t].getMapState().currentProjection].getCode(),n=[],e.prev=2,i=K.split("?"),s=(0,h.A)(i,2),l=s[0],c=s[1],u=new URLSearchParams(c),p=(null===(o=u.get("layers"))||void 0===o?void 0:o.split(","))||[""],e.next=8,a.geoUtilities.getWMSServiceMetadata(l,"");case 8:if(d=e.sent,(n=d.Capability.Layer.CRS).includes(r)){e.next=12;break}throw new Error("proj");case 12:f=[],v=function e(t){if(t.Layer&&t.Layer.length>0)t.Layer.forEach((function(t){e(t)}));else for(var r=0;r<p.length;r++)t.Name===p[r]&&f.push([t.Name,t.Title])},d.Capability.Layer&&v(d.Capability.Layer),1===f.length?(ce(f[0][1]),fe([{layerId:f[0][0]}])):oe(f),e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),"proj"===e.t0.message?Ne("WMS",r,n):Se("WMS"),e.abrupt("return",!1);case 22:return e.abrupt("return",!0);case 23:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(){return e.apply(this,arguments)}}(),Te=function(){var e=(0,y.A)(x().mark((function e(){var t,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getWFSServiceMetadata(K);case 3:t=e.sent,1===(r=t.FeatureTypeList.FeatureType.map((function(e){return[e.Name["#text"].split(":")[1],e.Title["#text"]]}))).length?(ce(r[0][1]),fe([{layerId:r[0][0]}])):oe(r),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),Se("WFS"),e.abrupt("return",!1);case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,y.A)(x().mark((function e(){var t,r,n,a,o,i,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["id","title"],e.next=3,fetch("".concat(K,"/?f=json"));case 3:if(200===(r=e.sent).status){e.next=7;break}return Se("OGC API Feature"),e.abrupt("return",!1);case 7:return e.next=9,r.json();case 9:if(n=e.sent,!t.every((function(e){return Object.keys(n).includes(e)}))){e.next=15;break}return fe([{layerId:n.id}]),ce(n.title),e.abrupt("return",!0);case 15:return e.prev=15,a=["collections","links"],e.next=19,fetch("".concat(K,"/collections?f=json"));case 19:return o=e.sent,e.next=22,o.json();case 22:if(i=e.sent,a.every((function(e){return Object.keys(i).includes(e)}))){e.next=26;break}throw new Error("err");case 26:1===(s=i.collections.map((function(e){return[e.id,e.title]}))).length?(ce(s[0][1]),fe([{layerId:s[0][0]}])):oe(s),e.next=34;break;case 30:return e.prev=30,e.t0=e.catch(15),Se("OGC API Feature"),e.abrupt("return",!1);case 34:return e.abrupt("return",!0);case 35:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}(),De=function(){try{if(!(-1===K.indexOf("/")&&32===K.replaceAll("-","").length))throw new Error("err");ce(""),fe([{layerId:K}])}catch(e){return Se("GeoCore UUID"),!1}return!0},Ue=function(){var e=(0,y.A)(x().mark((function e(t){var r,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.geoUtilities.getESRIServiceMetadata(K);case 3:if(!(r=e.sent).capabilities.includes(we(t).capability)){e.next=8;break}"layers"in r?1===(n=r.layers.map((function(e){return[e.id,e.name]}))).length?(ce(n[0][1]),fe([{layerId:n[0][0]}])):oe(n):(ce(r.name),fe([{layerId:r.id}])),e.next=9;break;case 8:throw new Error("err");case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),Se(we(t).err),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),Fe=function(){for(var e=["{x}","{y}","{z}"],t=0;t<e.length;t+=1)if(!K.includes(e[t]))return Se("XYZ Tile"),!1;var r=K;return ce(""),fe([{layerId:K,source:{dataAccessPath:{en:r,fr:r}}}]),!0},Ge=function(){var e=(0,y.A)(x().mark((function e(){var t,r,n,a;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(K);case 3:return t=e.sent,e.next=6,t.json();case 6:if(r=e.sent,["FeatureCollection","Feature"].includes(r.type)){e.next=9;break}throw new Error("err");case 9:n=K.split("/").pop(),a=K.replace(n,""),le||ce(n),fe([{layerId:n,source:{dataAccessPath:{en:a,fr:a}}}]),e.next=19;break;case 15:return e.prev=15,e.t0=e.catch(0),Se("GeoJSON"),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),Be=function(){var e=(0,y.A)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge(!0),t=!0,void 0!==ee){e.next=8;break}t=!1,ge(!1),Ie(Le[s].service),e.next=49;break;case 8:if(ee!==g){e.next=14;break}return e.next=11,ke();case 11:t=e.sent,e.next=49;break;case 14:if(ee!==b){e.next=20;break}return e.next=17,Te();case 17:t=e.sent,e.next=49;break;case 20:if(ee!==j){e.next=26;break}return e.next=23,Re();case 23:t=e.sent,e.next=49;break;case 26:if(ee!==E){e.next=30;break}t=Fe(),e.next=49;break;case 30:if(ee!==c){e.next=36;break}return e.next=33,Ue(c);case 33:t=e.sent,e.next=49;break;case 36:if(ee!==p){e.next=42;break}return e.next=39,Ue(p);case 39:t=e.sent,e.next=49;break;case 42:if(ee!==d){e.next=48;break}return e.next=45,Ge();case 45:t=e.sent,e.next=49;break;case 48:ee===f?(r=void 0,n=void 0,r=K.split("/").pop(),n=K.replace(r,""),le||ce(r),fe([{layerId:r,source:{dataAccessPath:{en:n,fr:n}}}]),t=!0):ee===C&&(t=De());case 49:t&&(ge(!1),V(2));case 50:case"end":return e.stop()}var r,n}),e)})));return function(){return e.apply(this,arguments)}}(),_e=function(){ge(!0);var e=a.generateId();a.event.on(a.eventNames.LAYER.EVENT_LAYER_ADDED,(function(){v.vF.logTraceCoreAPIEvent("LAYER-STEPPER - EVENT_LAYER_ADDED"),a.event.off(a.eventNames.LAYER.EVENT_LAYER_ADDED,t),ge(!1),r(!1)}),"".concat(t,"/").concat(e));var n=!0,o=le,i=K;if(ee!==c&&ee!==p||(i=a.geoUtilities.getMapServerUrl(K)),ee===g){var l=K.split("?");i=(0,h.A)(l,1)[0]}""===le&&(n=!1,Ie(Ce()?Le[s].layer:Le[s].name));var u={geoviewLayerId:e,geoviewLayerName:{en:o,fr:o},geoviewLayerType:ee,metadataAccessPath:{en:i,fr:i},listOfLayerEntryConfig:de};ee!==d&&ee!==E&&ee!==f||(u.metadataAccessPath={en:"",fr:""}),ee===C&&delete u.metadataAccessPath,ee===j&&(u.metadataAccessPath={en:a.geoUtilities.getOGCServerUrl(K),fr:a.geoUtilities.getOGCServerUrl(K)}),n&&(ee===C&&setTimeout((function(){ge(!1),r(!1)}),3e3),u.geoviewLayerId?a.maps[t].layer.layerOrder.push(u.geoviewLayerId):void 0!==u.listOfLayerEntryConfig&&u.listOfLayerEntryConfig.forEach((function(e){e.layerId&&a.maps[t].layer.layerOrder.unshift(e.layerId)})),a.maps[t].layer.addGeoviewLayer(u))},Me=function(){V((function(e){return e-1}))},We=function(e){var t=URL.createObjectURL(e);q(e.name),J(t);var r=e.name.split(".")[0];te(""),oe([]),ce(r),fe([])},Ve=function(e){ce(e.target.value)},Ye=function(e){var r;if(e.preventDefault(),e.stopPropagation(),Ae(!1),null!==(r=e.dataTransfer)&&void 0!==r&&r.files){var n=e.dataTransfer.files[0],o=n.name.toUpperCase();o.endsWith(".JSON")||o.endsWith(".GEOJSON")||o.endsWith(".GPKG")||o.endsWith(".CSV")?We(n):a.utilities.showError(t,Le[s].errorFile,!1)}};function ze(e){var t=e.isFirst,r=void 0!==t&&t,n=e.isLast,a=void 0!==n&&n,o=e.handleNext;return ye?(0,m.jsx)(U,{sx:{padding:10},children:(0,m.jsx)(D,{})}):(0,m.jsxs)(T,{sx:Ee.buttonGroup,children:[(0,m.jsx)(k,{variant:"contained",type:"text",onClick:o,children:a?Le[s].finish:Le[s].continue}),!r&&(0,m.jsx)(k,{variant:"contained",type:"text",onClick:Me,children:Le[s].back})]})}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(U,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(F,{color:"primary",onClick:function(){return r(!1)},children:(0,m.jsx)(G,{})})}),(0,m.jsx)(S,{sx:{position:"relative",top:"-30px",zIndex:1},activeStep:W,orientation:"vertical",steps:[{stepLabel:{children:Le[s].stepOne},stepContent:{children:(0,m.jsxs)("div",{className:"dropzone",style:{position:"relative"},onDrop:function(e){return Ye(e)},onDragOver:function(e){return(t=e).preventDefault(),void t.stopPropagation();var t},onDragEnter:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target!==je.current&&Ae(!0));var t},onDragLeave:function(e){return(t=e).preventDefault(),t.stopPropagation(),void(t.target===je.current&&Ae(!1));var t},children:[be&&(0,m.jsx)("div",{ref:je,style:{backgroundColor:"rgba(128,128,128,.95)",position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:9999,textAlign:"center",color:"black",fontSize:24},children:(0,m.jsxs)("h3",{children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),Le[s].dropzone]})}),(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"file",id:"fileUpload",style:{display:"none"},onChange:function(e){e.target.files&&We(e.target.files[0])},accept:".gpkg, .json, .geojson, .csv"})}),(0,m.jsxs)(k,{type:"text",onClick:function(){var e;return null===(e=document.getElementById("fileUpload"))||void 0===e?void 0:e.click()},className:"",children:[(0,m.jsx)(B,{}),(0,m.jsx)("span",{children:Le[s].upload})]}),(0,m.jsx)("p",{style:{textAlign:"center"},children:(0,m.jsx)("small",{children:Le[s].drop})}),(0,m.jsx)("p",{style:{textAlign:"center"},children:Le[s].or}),(0,m.jsx)(N,{sx:{width:"100%"},label:Le[s].url,variant:"standard",value:Z,onChange:function(e){q(e.target.value.trim()),J(e.target.value.trim()),te(""),oe([]),ce(""),fe([])},multiline:!0}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isFirst:!0,handleNext:function(){var e,r,n=!0;""===K.trim()&&(n=!1,ge(!1),a.utilities.showError(t,Le[s].errorNone,!1)),n&&(e=Z.toUpperCase().split("/"),r=parseInt(e[e.length-1],10),Z.toUpperCase().endsWith("MAPSERVER")||Z.toUpperCase().endsWith("MAPSERVER/")?te(c):-1!==Z.toUpperCase().indexOf("FEATURESERVER")||-1!==Z.toUpperCase().indexOf("MAPSERVER")&&!Number.isNaN(r)?te(p):-1!==e.indexOf("WFS")?te(b):Z.toUpperCase().endsWith(".JSON")||Z.toUpperCase().endsWith(".GEOJSON")?te(d):Z.toUpperCase().endsWith(".GPKG")?te(f):-1!==Z.toUpperCase().indexOf("{Z}/{X}/{Y}")||-1!==Z.toUpperCase().indexOf("{Z}/{Y}/{X}")?te(E):-1===Z.indexOf("/")&&32===Z.replaceAll("-","").length?te(C):-1!==Z.toUpperCase().indexOf("WMS")&&te(g),V(1))}})]})}},{stepLabel:{children:Le[s].stepTwo},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(I,{fullWidth:!0,labelId:"service-type-label",value:ee,onChange:function(e){te(e.target.value),oe([]),fe([])},label:Le[s].service,inputLabel:{id:"service-type-label"},menuItems:Pe.map((function(e){var t=(0,h.A)(e,2),r=t[0];return{key:r,item:{value:r,children:t[1]}}}))}),(0,m.jsx)(ze,{handleNext:Be})]})}},{stepLabel:{children:Le[s].stepThree},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[0===ae.length&&(0,m.jsx)(N,{label:Le[s].name,variant:"standard",value:le,onChange:Ve}),ae.length>1&&(0,m.jsx)(R,{fullWidth:!0,multiple:Ce(),disableClearable:!Ce(),id:"service-layer-label",options:ae,getOptionLabel:function(e){return"".concat(e[1]," (").concat(e[0],")")},renderOption:function(e,t){return(0,m.jsx)("span",A(A({},e),{},{children:t[1]}))},onChange:function(e,t){Ce()?(fe(t.map((function(e){return{layerId:"".concat(e[0])}}))),ce(t.map((function(e){return e[1]})).join(", "))):(fe([{layerId:"".concat(t[0])}]),ce(t[1]))},renderInput:function(e){return(0,m.jsx)(N,A(A({},e),{},{label:Le[s].layerSelect}))}}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isLast:!Ce(),handleNext:Ce()?function(){var e=!0;0===de.length&&(e=!1,Ie(Le[s].layer)),e&&V(3)}:_e})]})}},Ce()?{stepLabel:{children:Le[s].stepFour},stepContent:{children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(N,{sx:{width:"100%"},label:Le[s].name,variant:"standard",value:le,onChange:Ve}),(0,m.jsx)("br",{}),(0,m.jsx)(ze,{isLast:!0,handleNext:_e})]})}}:null]})]})};var E=r(61396);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const L=function(e){var t=e.mapId,r=e.title,n=e.layerIds,a=e.setReorderLayersVisible,o=e.setMapLayers,i=window.cgpv,s=i.api,l=i.ui.elements,c=l.List,u=l.ListItem,p=l.ListItemButton,d=l.ListItemIcon,v=l.HandleIcon,y=l.ListItemText,g=l.Box,x=l.IconButton,b=l.CloseIcon,A=s.maps[t].displayLanguage,j={titleBar:{position:"relative",top:"-30px",zIndex:1},draggableList:{top:"-30px"},regularListItem:{color:"text.primary",padding:0},draggingListItem:{color:"text.primary",padding:0,background:"rgb(235,235,235,0.5)"},listItemText:{fontSize:14,noWrap:!0},handleIcon:{margin:"8px 0px"}},C=function(e){return s.maps[t].layer.geoviewLayers[e].geoviewLayerName[A]};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g,{sx:{display:"flex",justifyContent:"end",zIndex:2},children:(0,m.jsx)(x,{className:"style3",onClick:function(){return a(!1)},children:(0,m.jsx)(b,{})})}),(0,m.jsx)(g,{sx:j.titleBar,children:r}),(0,m.jsx)(E.JY,{onDragEnd:function(e){var r=e.destination,a=e.source;if(r){var i=(0,f.A)(n),l=i.splice(a.index,1),c=(0,h.A)(l,1)[0];i.splice(r.index,0,c),s.maps[t].layer.moveLayer(c,r.index),o(i)}},children:(0,m.jsx)(E.gL,{droppableId:"droppable",children:function(e){return(0,m.jsxs)(c,P(P({sx:j.draggableList},e.droppableProps),{},{innerref:e.innerRef,children:[n.map((function(e,t){return(0,m.jsx)(E.sx,{draggableId:e,index:t,children:function(t,r){return(0,m.jsx)(u,P(P(P({innerref:t.innerRef,sx:r.isDragging?j.draggingListItem:j.regularListItem},t.draggableProps),t.dragHandleProps),{},{children:(0,m.jsxs)(p,{children:[(0,m.jsx)(d,{children:(0,m.jsx)(v,{sx:j.handleIcon})}),(0,m.jsx)(y,{primaryTypographyProps:j.listItemText,primary:C(e)})]})}))}},e)})),e.placeholder]}))}})})]})};const O=function(e){var t=e.mapId,r=e.buttonPanel,n=window.cgpv,a=n.api,o=n.ui,i=n.react,s=i.useState,l=i.useEffect,c=s(!1),p=(0,h.A)(c,2),d=p[0],y=p[1],g=s(!1),x=(0,h.A)(g,2),b=x[0],A=x[1],E=s([]),C=(0,h.A)(E,2),P=C[0],O=C[1],w=s(),I=(0,h.A)(w,2),S=I[0],N=I[1],k=s(null),T=(0,h.A)(k,2),R=T[0],D=T[1],U=s(!1),F=(0,h.A)(U,2),G=F[0],B=F[1],_=s(!1),M=(0,h.A)(_,2),W=M[0],V=M[1],Y=o.elements,z=Y.IconButton,K=Y.AddIcon,J=Y.Box,X=Y.ExpandMoreIcon,H=Y.ExpandLessIcon,Z=Y.VisibilityIcon,q=Y.VisibilityOffIcon,Q=Y.Menu,$=Y.MenuItem,ee=Y.MenuIcon,te=Y.ListItemIcon,re=Y.ListItemText,ne=Y.ReorderIcon,ae=a.maps[t].getDisplayLanguage(),oe=(0,u.NKs)({en:{addLayer:"Add Layer",expandAll:"Expand Groups",collapseAll:"Collapse Groups",showAll:"Show All",hideAll:"Hide All",reorderLayers:"Reorder Layers"},fr:{addLayer:"Ajouter Couche",expandAll:"Élargir les groupes",collapseAll:"Réduire les groupes",showAll:"Montrer tout",hideAll:"Cacher tout",reorderLayers:"Réorganiser les couches"}}),ie={mainContainer:{display:"flex",flexDirection:"column",height:"inherit"},topControls:{display:"flex",flexDirection:"row",justifyContent:"space-between"},addLayerSection:{display:"flex",alignItems:"center",marginTop:"auto",justifyContent:"end"}},se=Boolean(R),le=function(){var e;v.vF.logTraceCoreAPIEvent("PANEL-CONTENT - updateLayers"),void 0!==(null===(e=a.maps[t].layer)||void 0===e?void 0:e.layerOrder)&&O((0,f.A)(a.maps[t].layer.layerOrder).reverse())};l((function(){return v.vF.logTraceUseEffect("PANEL-CONTENT - mount 1"),a.event.on(a.eventNames.MAP.EVENT_MAP_LOADED,le,t),a.event.on(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,le,"".concat(t,"/LegendsLayerSet")),function(){a.event.off(a.eventNames.MAP.EVENT_MAP_LOADED,t,le),a.event.off(a.eventNames.GET_LEGENDS.LEGEND_LAYERSET_UPDATED,t,le)}}),[]),l((function(){}),[P]),l((function(){v.vF.logTraceUseEffect("PANEL-CONTENT - mount 2");var e=function(){v.vF.logTraceCoreAPIEvent("PANEL-CONTENT - setAddLayerVisibleListenerFunction"),y(!1)};return a.event.on(a.eventNames.PANEL.EVENT_PANEL_CLOSE,e,"".concat(t,"/").concat(r.buttonPanelId)),function(){a.event.off(a.eventNames.PANEL.EVENT_PANEL_CLOSE,"".concat(t,"/").concat(r.buttonPanelId),e)}}),[a,r.buttonPanelId,t]),l((function(){N(null)}),[G]),l((function(){N(null)}),[W]);var ce=function(){D(null)},ue=function(e){B(e),ce()},pe=function(e){V(!e),ce()};return l((function(){if(b){var e=window.scrollX,t=window.scrollY;window.onscroll=function(){window.scrollTo(e,t)}}else window.onscroll=function(){}}),[b]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(Q,{anchorEl:R,open:se,onClose:ce,children:[(0,m.jsxs)($,{onClick:function(){return ue(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(X,{})}),(0,m.jsx)(re,{children:oe[ae].expandAll})]}),(0,m.jsxs)($,{onClick:function(){return ue(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(H,{})}),(0,m.jsx)(re,{children:oe[ae].collapseAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!0)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(Z,{})}),(0,m.jsx)(re,{children:oe[ae].showAll})]}),(0,m.jsxs)($,{onClick:function(){return pe(!1)},children:[(0,m.jsx)(te,{children:(0,m.jsx)(q,{})}),(0,m.jsx)(re,{children:oe[ae].hideAll})]}),(0,m.jsxs)($,{onClick:function(){return A(!0),void ce()},children:[(0,m.jsx)(te,{children:(0,m.jsx)(ne,{})}),(0,m.jsx)(re,{children:oe[ae].reorderLayers})]})]}),(0,m.jsxs)(J,{sx:ie.mainContainer,children:[d&&(0,m.jsx)(j,{mapId:t,setAddLayerVisible:y}),b&&(0,m.jsx)(L,{mapId:t,title:oe[ae].reorderLayers,layerIds:P,setMapLayers:O,setReorderLayersVisible:A}),(0,m.jsxs)(J,{sx:ie.topControls,style:{display:d||b?"none":"flex"},children:[(0,m.jsx)("div",{children:(0,m.jsx)(z,{color:"primary",onClick:function(e){D(e.currentTarget)},children:(0,m.jsx)(ee,{})})}),(0,m.jsxs)(J,{onClick:function(){y((function(e){return!e}))},children:[oe[ae].addLayer,(0,m.jsx)(z,{children:(0,m.jsx)(K,{})})]})]}),(0,m.jsx)("div",{style:{display:d||b?"none":"block"},children:S})]})]})},w=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","title":"GeoView Layers/Legend Config Schema","type":"object","version":1,"comments":"Configuration for GeoView layers package.","additionalProperties":false,"properties":{"reorderable":{"type":"boolean","default":true,"description":"Specifies if the items in the legend can be reordered."},"allowImport":{"type":"boolean","default":true,"description":"Specifies if the user-added layers are allowed."},"isOpen":{"type":"object","description":"Specifies whether the legend is opened by default on initial loading of the map for small, medium, and large viewports.","properties":{"large":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for large viewports."},"medium":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for medium viewports."},"small":{"type":"boolean","default":false,"description":"Whether the legend is opened by default on initial loading of the map for small viewports."}},"additionalProperties":false},"suportedLanguages":{"type":"array","uniqueItems":true,"items":{"type":"string","enum":["en","fr"]},"default":["en","fr"],"description":"ISO 639-1 code indicating the languages supported by the configuration file.","minItems":1},"version":{"type":"string","enum":["1.0"],"description":"The schema version used to validate the configuration file. The schema should enumerate the list of versions accepted by this version of the viewer."}},"required":["suportedLanguages"]}'),I=JSON.parse('{"reorderable":true,"allowImport":true,"isOpen":{"small":false,"medium":false,"large":false},"suportedLanguages":["en","fr"]}');function S(e,t,r){return t=(0,i.A)(t),(0,o.A)(e,N()?Reflect.construct(t,r||[],(0,i.A)(e).constructor):t.apply(e,r))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var k=function(e){function t(){var e;(0,n.A)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=S(this,t,[].concat(a)),(0,c.A)((0,s.A)(e),"schema",(function(){return w})),(0,c.A)((0,s.A)(e),"defaultConfig",(function(){return(0,u.NKs)(I)})),(0,c.A)((0,s.A)(e),"translations",(0,u.NKs)({en:{layersPanel:{title:"Layers"}},fr:{layersPanel:{title:"Couches"}}})),e}return(0,l.A)(t,e),(0,a.A)(t,[{key:"onCreateButtonProps",value:function(){return{id:"layersPanelButton",tooltip:"layersPanel.title",tooltipPlacement:"right",children:(0,m.jsx)(d.LayersOutlinedIcon,{}),visible:!0}}},{key:"onCreateContentProps",value:function(){var e;return{title:"layersPanel.title",icon:(0,m.jsx)(d.LayersOutlinedIcon,{}),width:350,status:null===(e=this.configObj)||void 0===e||null===(e=e.isOpen)||void 0===e?void 0:e.large}}},{key:"onCreateContent",value:function(){return(0,m.jsx)(O,{buttonPanel:this.buttonPanel,mapId:this.pluginProps.mapId})}}]),t}(p.i);window.geoviewPlugins=window.geoviewPlugins||{},window.geoviewPlugins["layers-panel"]=(0,u.KXH)(k)}},e=>{var t;t=78832,e(e.s=t)}]);
//# sourceMappingURL=geoview-layers-panel.js.map