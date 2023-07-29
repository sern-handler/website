"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[1388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:7},o=void 0,l={unversionedId:"guide/walkthrough/dependency-injection",id:"guide/walkthrough/dependency-injection",title:"dependency-injection",description:"This contains version 2 code. Please view transitioning to v3",source:"@site/docs/guide/walkthrough/dependency-injection.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/dependency-injection",permalink:"/fr/docs/guide/walkthrough/dependency-injection",draft:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/dependency-injection.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Autocomplete",permalink:"/fr/docs/guide/walkthrough/autocomplete"},next:{title:"The SernEmitter class",permalink:"/fr/docs/guide/walkthrough/sern-emitter"}},s={},c=[{value:"Adding dependencies to root",id:"adding-dependencies-to-root",level:2},{value:"Init",id:"init",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"This contains version 2 code. Please view ",(0,i.kt)("a",{parentName:"p",href:"../transition"},"transitioning to v3")," ")),(0,i.kt)("p",null,"Since version 2.0.0, dependency injection, thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/molszanski/iti"},"iti"),", is a feature to customize your bot's utilities and structures."),(0,i.kt)("p",null,"Minimal setup for any project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const client = new Client({\n    ...options\n})\nSern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n")),(0,i.kt)("p",null,"For any typescript project, you'll need to add an interface to get intellisense and typings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n")),(0,i.kt)("p",null,"Full Dependency Injection setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const client = new Client({\n    ...options\n})\n\ninterface MyDependencies extends Dependencies {\n    '@sern/client': Singleton<Client>\n}\n\nexport const useContainer = Sern.makeDependencies<MyDependencies>({\n    build: root => \n        root.add({ \n            '@sern/client': single(() => client)\n        })\n})\n\n")),(0,i.kt)("p",null,"Everything else is handled. However, you may want customize things."),(0,i.kt)("h2",{id:"adding-dependencies-to-root"},"Adding dependencies to root"),(0,i.kt)("p",null,"Each sern built dependency must implement its contracts."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/logger"),": Log data. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/Logging"},"Logging")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/errors"),": Handling errors and lifetime. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/ErrorHandling"},"ErrorHandling")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/modules"),": Managing all command modules. ",(0,i.kt)("a",{parentName:"li",href:"../../api/interfaces/ModuleManager"},"ModuleManager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sern/emitter"),": is the key to emit events and occurences in a project. ",(0,i.kt)("a",{parentName:"li",href:"../../api/classes/SernEmitter"},"SernEmitter"))),(0,i.kt)("p",null," You may also add disposers so that when the application crashes, the targeted dependency calls that function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export const useContainer = Sern.makeDependencies<MyDependencies>({\n   build: root => \n       root.add({ \n           '@sern/client': single(() => client)\n       })\n       .addDisposer({ '@sern/client': client => client.destroy() })\n})\n\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Below is v3 api.")),(0,i.kt)("h2",{id:"init"},"Init"),(0,i.kt)("p",null,"Do you need to perform intializing behavor for a dependency? "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Init } from '@sern/handler'; \nclass Database implements Init {\n    init() {\n        await this.connect()\n        console.log('Connected');\n    }\n}\n\n")),(0,i.kt)("p",null,"Modify you Dependencies interface: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/dependencies.d.ts"',title:'"src/dependencies.d.ts"'},"import type { Initializable } from '@sern/handler'\n\ninterface Dependencies extends CoreDependencies {\n    database: Initializable<Database>\n}\n\n")),(0,i.kt)("p",null,"Make sure its been added:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'},"await makeDependencies({ \n    build: root => root \n        .add({ database => new Database() })\n})\n")))}u.isMDXComponent=!0}}]);