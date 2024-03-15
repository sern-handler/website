"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2407],{1150:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=s(4848),r=s(8453);const t={sidebar_position:6},l="Services",a={id:"guide/walkthrough/services",title:"Services",description:"This is version 3 api only!!",source:"@site/docs/guide/walkthrough/services.md",sourceDirName:"guide/walkthrough",slug:"/guide/walkthrough/services",permalink:"/docs/guide/walkthrough/services",draft:!1,unlisted:!1,editUrl:"https://github.com/sern-handler/website/edit/main/docs/guide/walkthrough/services.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/guide/walkthrough/plugins"},next:{title:"Autocomplete",permalink:"/docs/guide/walkthrough/autocomplete"}},c={},d=[{value:"Safety",id:"safety",level:2},{value:"Related api",id:"related-api",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",tabitem:"tabitem",tabs:"tabs",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"services",children:"Services"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"This is version 3 api only!!"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"TLDR: The direct upgrade to useContainer. if you set up a bot with create-bot, check dependencies.d.ts.\nDependencies are the types that Services uses."})}),"\n",(0,i.jsx)(n.p,{children:"You need someway to use dependencies in your command module. Services to the rescue!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="src/dependencies.d.ts"',children:"import { CoreDependencies, Singleton } from '@sern/handler'\nimport { Client } from 'discord.js'\n\ninterface Dependencies extends CoreDependencies { \n    '@sern/client': Singleton<Client>\n}\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Recall, some keys in Dependencies are special."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Special key dependency must implement its contracts."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@sern/client"}),": Your discord client. -> ",(0,i.jsx)(n.a,{href:"../../api/interfaces/Emitter",children:"Emitter"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@sern/logger"}),": Log data -> ",(0,i.jsx)(n.a,{href:"../../api/interfaces/Logging",children:"Logging"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@sern/errors"}),": Handling errors and lifetime -> ",(0,i.jsx)(n.a,{href:"../../api/interfaces/ErrorHandling",children:"ErrorHandling"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@sern/modules"}),": Managing all command modules -> ",(0,i.jsx)(n.a,{href:"../../api/interfaces/ModuleManager",children:"ModuleManager"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@sern/emitter"}),": is the key to emit events and occurences in a project -> ",(0,i.jsx)(n.a,{href:"../../api/interfaces/Emitter",children:"Emitter"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Lets try to access the client you provided."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="src/commands/ping.ts"',children:"import { Service } from '@sern/handler'\n\nexport default commandModule({ \n   // ...\n    execute: (ctx) => {\n        //Client!\n        const client = Service('@sern/client');\n    }\n   // \n})\n"})}),"\n",(0,i.jsx)(n.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,i.jsx)(n.h2,{id:"safety",children:"Safety"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Services cannot be called in other services while makeDependencies is forming."}),"\n"]}),"\n",(0,i.jsxs)(n.tabs,{children:["\n",(0,i.jsxs)(n.tabitem,{value:"good",label:"A good example",children:["\n",(0,i.jsx)(n.p,{children:"Lets pass a logger into our database."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts" showLineNumbers',children:"await makeDependencies({ \n    build: root => root\n        //Overriding the default logger provided.\n        .upsert({ '@sern/logger': single(() => new Logger()) })\n\n        // Wiring our logger into the database.\n        .add(ctx =>  {\n            return { database: single(() => new Database(ctx['sern/logger']))) }\n        })\n})\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.tabitem,{value:"bad",label:"Don't do this",children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts" showLineNumbers',children:"await makeDependencies({ \n    build: root => root\n        //Overriding the default logger provided.\n        .upsert({ '@sern/logger': single(() => new Logger()) })\n\n        // Wiring our logger into the database.\n        // We wire our database incorrectly. Logger should be passed INTO the constructor\n        .add({ database: single(() => new Database()) })\n})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts" showLineNumbers',children:"import { Service, makeDependencies } from '@sern/handler';\n\n//Calling Service prematurely!\nconst logger = Service('@sern/logger');\n\nclass Database {\n    \n    constructor() {\n        this.logger = logger\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This is a code smell anyway. It breaks encapsulation and defeats the purpose of wiring dependencies\n\n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Services can only be used after sern has made dependencies."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Calling a service before will crash your application."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Services can be safely used outside of commandModules."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Be careful to not cause too many side effects."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"You will need to wire dependencies together."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.tabs,{children:["\n",(0,i.jsxs)(n.tabitem,{value:"good",label:"A good example",children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts" showLineNumbers',children:"await makeDependencies(...pass your options here)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="commands/ping.ts" showLineNumbers',children:"// This is guaranteed to be defined if configured correctly\nimport { Service } from '@sern/handler';\nconst client = Service('@sern/client');\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.tabitem,{value:"bad",label:"Don't do this",children:["\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts" showLineNumbers',children:"import { Service, makeDependencies } from '@sern/handler';\n/* DON'T USE SERVICES BEFORE CALLING makeDependencies */\nconst logger = Service('@sern/logger');\n\nawait makeDependencies()\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Services can only be used after sern has made dependencies.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Calling a service before will crash your application."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Services can be safely used outside of commandModules.\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Be careful to not cause too many side effects."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"related-api",children:"Related api"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.code,{children:"Service"})," for single dependency."]}),"\n",(0,i.jsxs)(n.li,{children:["use ",(0,i.jsx)(n.code,{children:"Services"})," for multiple dependencies."]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);