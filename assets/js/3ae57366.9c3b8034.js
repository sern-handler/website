"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2639],{1629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={sidebar_position:3},o="Transition from v2 to v3",a={id:"guide/walkthrough/transition",title:"Transition from v2 to v3",description:"v3 comes with the new Service api. To make sure to enable intellisense",source:"@site/docs/guide/walkthrough/transition.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/transition",permalink:"/docs/guide/walkthrough/transition",draft:!1,unlisted:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/transition.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CLI",permalink:"/docs/guide/walkthrough/cli"},next:{title:"First Command",permalink:"/docs/guide/walkthrough/first-command"}},c={},d=[];function l(e){const n={a:"a",br:"br",code:"code",h1:"h1",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"transition-from-v2-to-v3",children:"Transition from v2 to v3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",metastring:'title="src/index.ts"',children:"- Sern.makeDependencies({ build: () => {} })\n+ await makeDependencies({ build: () => {} })\n"})}),"\n",(0,i.jsxs)(n.p,{children:["v3 comes with the new ",(0,i.jsx)(n.a,{href:"../walkthrough/services",children:"Service api"}),". To make sure to enable intellisense\ninclude a dependencies.d.ts file into compilation. ",(0,i.jsx)(n.a,{href:"../../../blog/3.0.0",children:"Click here for all new features"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"/**\n * This file serves as intellisense for sern projects.\n * Types are declared here for dependencies to function properly\n * Service(s) api rely on this file to provide a better developer experience.\n */\n\nimport { SernEmitter, Logging, CoreModuleStore, ModuleManager, ErrorHandling, CoreDependencies, Singleton } from '@sern/handler'\nimport { Client } from 'discord.js'\n\ndeclare global {\n   interface Dependencies extends CoreDependencies {\n        '@sern/client': Singleton<Client>\n   }\n}\n\nexport {}\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A standard project file tree: ",(0,i.jsx)(n.br,{})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"file tree",src:t(1256).A+"",width:"314",height:"311"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1256:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/fs-1675f5c97d48bdee5c5937e7a51a9489.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);