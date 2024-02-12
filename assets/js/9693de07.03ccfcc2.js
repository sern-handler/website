"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2912],{5788:(e,n,r)=>{r.d(n,{Iu:()=>d,yg:()=>y});var t=r(1504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=i,y=c["".concat(o,".").concat(u)]||c[u]||g[u]||a;return r?t.createElement(y,l(l({ref:n},d),{},{components:r})):t.createElement(y,l({ref:n},d))}));function y(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8672:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=r(5072),i=(r(1504),r(5788));const a={id:"Dependencies",title:"Interface: Dependencies",sidebar_label:"Dependencies",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"api/interfaces/Dependencies",id:"api/interfaces/Dependencies",title:"Interface: Dependencies",description:"Properties",source:"@site/docs/api/interfaces/Dependencies.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/Dependencies",permalink:"/docs/api/interfaces/Dependencies",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"Dependencies",title:"Interface: Dependencies",sidebar_label:"Dependencies",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"CoreModuleStore",permalink:"/docs/api/interfaces/CoreModuleStore"},next:{title:"DependencyConfiguration",permalink:"/docs/api/interfaces/DependencyConfiguration"}},o={},p=[{value:"Properties",id:"properties",level:2},{value:"@sern/client",id:"sernclient",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"@sern/emitter",id:"sernemitter",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"@sern/errors",id:"sernerrors",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"@sern/logger",id:"sernlogger",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"@sern/modules",id:"sernmodules",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"@sern/store",id:"sernstore",level:3},{value:"Defined in",id:"defined-in-5",level:4}],d={toc:p},c="wrapper";function g(e){let{components:n,...r}=e;return(0,i.yg)(c,(0,t.c)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"sernclient"},"@sern/client"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"@sern/client"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("inlineCode",{parentName:"p"},"__module"),">"),(0,i.yg)("h4",{id:"defined-in"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L40"},"src/types/handler.ts:40")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sernemitter"},"@sern/emitter"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"@sern/emitter"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("a",{parentName:"p",href:"/docs/api/classes/SernEmitter"},(0,i.yg)("inlineCode",{parentName:"a"},"SernEmitter")),">"),(0,i.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L42"},"src/types/handler.ts:42")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sernerrors"},"@sern/errors"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"@sern/errors"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ErrorHandling"},(0,i.yg)("inlineCode",{parentName:"a"},"ErrorHandling")),">"),(0,i.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L45"},"src/types/handler.ts:45")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sernlogger"},"@sern/logger"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.yg)("strong",{parentName:"p"},"@sern/logger"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Logging"},(0,i.yg)("inlineCode",{parentName:"a"},"Logging")),"<",(0,i.yg)("inlineCode",{parentName:"p"},"unknown"),">",">"),(0,i.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L41"},"src/types/handler.ts:41")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sernmodules"},"@sern/modules"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"@sern/modules"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/ModuleManager"},(0,i.yg)("inlineCode",{parentName:"a"},"ModuleManager")),">"),(0,i.yg)("h4",{id:"defined-in-4"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L44"},"src/types/handler.ts:44")),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"sernstore"},"@sern/store"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"@sern/store"),": ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/modules#singleton"},(0,i.yg)("inlineCode",{parentName:"a"},"Singleton")),"<",(0,i.yg)("a",{parentName:"p",href:"/docs/api/classes/ModuleStore"},(0,i.yg)("inlineCode",{parentName:"a"},"ModuleStore")),">"),(0,i.yg)("h4",{id:"defined-in-5"},"Defined in"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/c1f6906/src/types/handler.ts#L43"},"src/types/handler.ts:43")))}g.isMDXComponent=!0}}]);