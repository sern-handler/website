"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},l="Create a new project",i={unversionedId:"guide/walkthrough/new-project",id:"guide/walkthrough/new-project",title:"Create a new project",description:"Running this will install our CLI. (you'll probably want to download this)",source:"@site/docs/guide/walkthrough/new-project.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/new-project",permalink:"/fr/docs/guide/walkthrough/new-project",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/new-project.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Goal",permalink:"/fr/docs/guide/walkthrough/goal"},next:{title:"CLI",permalink:"/fr/docs/guide/walkthrough/cli"}},c={},p=[{value:"Create a new bot",id:"create-a-new-bot",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-new-project"},"Create a new project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @sern/cli\n")),(0,o.kt)("p",null,"Running this will install our CLI. (you'll probably want to download this)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"helps manage your applications "),(0,o.kt)("li",{parentName:"ul"},"plugs you into the sern ecosystem. ")),(0,o.kt)("h3",{id:"create-a-new-bot"},"Create a new bot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm create @sern/bot\n")),(0,o.kt)("p",null,"and follow the interactive prompts. "),(0,o.kt)("p",null,"if somehow you need help, feel free to ask ",(0,o.kt)("a",{parentName:"p",href:"https://sern.dev.discord"},"here")))}d.isMDXComponent=!0}}]);