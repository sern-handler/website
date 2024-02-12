"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[384],{5788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>m});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),o=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=o(e.components);return t.createElement(d.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=o(r),u=a,m=s["".concat(d,".").concat(u)]||s[u]||y[u]||i;return r?t.createElement(m,l(l({ref:n},g),{},{components:r})):t.createElement(m,l({ref:n},g))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var d in n)hasOwnProperty.call(n,d)&&(p[d]=n[d]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var t=r(5072),a=(r(1504),r(5788));const i={id:"SernEventPlugin",title:"Interface: SernEventPlugin<T>",sidebar_label:"SernEventPlugin",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/SernEventPlugin",id:"api/interfaces/SernEventPlugin",title:"Interface: SernEventPlugin<T>",description:"Type parameters",source:"@site/docs/api/interfaces/SernEventPlugin.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SernEventPlugin",permalink:"/docs/api/interfaces/SernEventPlugin",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SernEventPlugin",title:"Interface: SernEventPlugin<T>",sidebar_label:"SernEventPlugin",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"SernEventCommand",permalink:"/docs/api/interfaces/SernEventCommand"},next:{title:"SernEventsMapping",permalink:"/docs/api/interfaces/SernEventsMapping"}},d={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"execute",id:"execute",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"name",id:"name",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"type",id:"type",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4}],g={toc:o},s="wrapper";function y(e){let{components:n,...r}=e;return(0,a.yg)(s,(0,t.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"T")),(0,a.yg)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,a.yg)("a",{parentName:"td",href:"/docs/api/modules#serneventsmapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping"))," = keyof ",(0,a.yg)("a",{parentName:"td",href:"/docs/api/modules#serneventsmapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping")))))),(0,a.yg)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},(0,a.yg)("inlineCode",{parentName:"a"},"Plugin"))),(0,a.yg)("p",{parentName:"li"},"\u21b3 ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"SernEventPlugin"))))),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"description"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.yg)("p",null,"will be removed in the next update"),(0,a.yg)("h4",{id:"inherited-from"},"Inherited from"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#description"},"description")),(0,a.yg)("h4",{id:"defined-in"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L33"},"src/handler/plugins/plugin.ts:33")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"execute"},"execute"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"execute"),": (",(0,a.yg)("inlineCode",{parentName:"p"},"args"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/modules#serneventsmapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping")),"[",(0,a.yg)("inlineCode",{parentName:"p"},"T"),"]",", ",(0,a.yg)("inlineCode",{parentName:"p"},"controller"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Controller"},(0,a.yg)("inlineCode",{parentName:"a"},"Controller")),") => ",(0,a.yg)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.yg)("h4",{id:"type-declaration"},"Type declaration"),(0,a.yg)("p",null,"\u25b8 (",(0,a.yg)("inlineCode",{parentName:"p"},"args"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"controller"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.yg)("h5",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"args")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/api/modules#serneventsmapping"},(0,a.yg)("inlineCode",{parentName:"a"},"SernEventsMapping")),"[",(0,a.yg)("inlineCode",{parentName:"td"},"T"),"]")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"controller")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/docs/api/interfaces/Controller"},(0,a.yg)("inlineCode",{parentName:"a"},"Controller")))))),(0,a.yg)("h5",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Awaitable"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"Result"),"<",(0,a.yg)("inlineCode",{parentName:"p"},"void"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"void"),">",">"),(0,a.yg)("h4",{id:"defined-in-1"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L91"},"src/handler/plugins/plugin.ts:91")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"name"},"name"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"name"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"T")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,a.yg)("p",null,"will be removed in the next update"),(0,a.yg)("h4",{id:"overrides"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#name"},"name")),(0,a.yg)("h4",{id:"defined-in-2"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L89"},"src/handler/plugins/plugin.ts:89")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"type"},"type"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"type"),": ",(0,a.yg)("a",{parentName:"p",href:"/docs/api/enums/PluginType#event"},(0,a.yg)("inlineCode",{parentName:"a"},"Event"))),(0,a.yg)("h4",{id:"overrides-1"},"Overrides"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin"},"Plugin"),".",(0,a.yg)("a",{parentName:"p",href:"/docs/api/interfaces/Plugin#type"},"type")),(0,a.yg)("h4",{id:"defined-in-3"},"Defined in"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L90"},"src/handler/plugins/plugin.ts:90")))}y.isMDXComponent=!0}}]);