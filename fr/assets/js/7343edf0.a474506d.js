"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={id:"ControlPlugin",title:"Interface: ControlPlugin<Args>",sidebar_label:"ControlPlugin",sidebar_position:0,custom_edit_url:null},i=void 0,o={unversionedId:"api/interfaces/ControlPlugin",id:"api/interfaces/ControlPlugin",title:"Interface: ControlPlugin<Args>",description:"Type parameters",source:"@site/docs/api/interfaces/ControlPlugin.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ControlPlugin",permalink:"/fr/docs/api/interfaces/ControlPlugin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ControlPlugin",title:"Interface: ControlPlugin<Args>",sidebar_label:"ControlPlugin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"ContextMenuUser",permalink:"/fr/docs/api/interfaces/ContextMenuUser"},next:{title:"Controller",permalink:"/fr/docs/api/interfaces/Controller"}},p={},s=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-1",level:4}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Args")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[] = ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"execute"},"execute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"execute"),": (...",(0,a.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Args"),") => ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/modules#pluginresult"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginResult"))),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"...args"),"): ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/modules#pluginresult"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginResult"))),(0,a.kt)("h5",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"...args")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Args"))))),(0,a.kt)("h5",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/modules#pluginresult"},(0,a.kt)("inlineCode",{parentName:"a"},"PluginResult"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-plugin.ts#L73"},"src/types/core-plugin.ts:73")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("a",{parentName:"p",href:"/fr/docs/api/enums/PluginType#control"},(0,a.kt)("inlineCode",{parentName:"a"},"Control"))),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-plugin.ts#L72"},"src/types/core-plugin.ts:72")))}c.isMDXComponent=!0}}]);