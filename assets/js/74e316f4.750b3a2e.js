"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[3705],{6318:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(4848),l=s(8453);const r={slug:"3.0.0",title:"Release 3.0.0",authors:["jacoobes"],tags:["release"]},t=void 0,d={permalink:"/blog/3.0.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-18-mdx-blog-post.md",source:"@site/blog/2023-06-18-mdx-blog-post.md",title:"Release 3.0.0",description:"3.0 Release",date:"2023-06-18T00:00:00.000Z",formattedDate:"June 18, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.475,hasTruncateMarker:!1,authors:[{name:"jacoobes",title:"Head Dev",url:"https://github.com/jacoobes",imageURL:"https://github.com/jacoobes.png",key:"jacoobes"}],frontMatter:{slug:"3.0.0",title:"Release 3.0.0",authors:["jacoobes"],tags:["release"]},unlisted:!1,prevItem:{title:"New logo!",permalink:"/blog/newlogo"},nextItem:{title:"Release 2.5.0",permalink:"/blog/2.5.0"}},a={authorsImageUrls:[void 0]},o=[{value:"3.0 Release",id:"30-release",level:2},{value:"Join our discord <br />",id:"join-our-discord-",level:3},{value:"Features",id:"features",level:3},{value:"Dependency Management",id:"dependency-management",level:4},{value:"Quality of Life",id:"quality-of-life",level:4},{value:"Experimental",id:"experimental",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"30-release",children:"3.0 Release"}),"\n",(0,i.jsxs)(n.h3,{id:"join-our-discord-",children:["Join our ",(0,i.jsx)(n.a,{href:"https://sern.dev/discord",children:"discord"})," ",(0,i.jsx)(n.br,{})]}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsx)(n.h4,{id:"dependency-management",children:"Dependency Management"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Service"})," API (recommended to use this over useContainer hooks)\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dependencies type must be globally augmented in order for Services api to function properly"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["new methods on ModuleManager\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"getPublishableCommands()"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Init Hooks\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"implement starting behavior for dependencies"}),"\n",(0,i.jsxs)(n.li,{children:["To enforce and type check this, use the ",(0,i.jsx)(n.code,{children:"Initializable"})," type when making your Dependencies type!"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Emitter interface\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"More generic interface to define any event emitter"}),"\n",(0,i.jsx)(n.li,{children:"You can now swap out the SernEmitter with whatever emitter now."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"class DatabaseService implements Init {\n    //some hypothetical database\n    _pgsql : database()  \n\n    async init() {\n       await _pgsql.load()\n    }\n\n}\n\nawait makeDependencies({ \n    build: root => root.add({\n        db: new DatabaseService() //will be init'ed automatically\n    })\n})\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["new SernEmitter event ",(0,i.jsx)(n.code,{children:"modulesLoaded"})," , which allows users to customize behavior after all modules are loaded!"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"\nexport default eventModule({\n    name: 'modulesLoaded',\n    type: EventType.Sern,\n    execute: () => {\n        console.log('All modules loaded')\n    }\n})\n\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"quality-of-life",children:"Quality of Life"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"faster module loading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"I utilize async generators for reading files now. A lot faster than the first iteration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"better error handling"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Less boilerplate"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Services api cleans up v2 boilerplate"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"class modules devex got upgraded and work better than before"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"automatically ignore any files not ending in (mts, cts, mjs, cjs, ts, js)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ignore commands and events with ",(0,i.jsx)(n.code,{children:"!"})," prefix on filename or directory (ie: ",(0,i.jsx)(n.code,{children:"!filename.ts"})," or ",(0,i.jsx)(n.code,{children:"!directory"})," will be ignored by sern)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Service"})," API (recommended to use this over useContainer hooks)"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Dependencies type must be globally augmented in order for Services api to function properly"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Less boilerplate"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"new methods on ModuleManager"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"automatically ignore any files not ending in (mts, cts, mjs, cjs, ts, js)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["ignore commands / events with ",(0,i.jsx)(n.code,{children:"!"})," prefix on filename or directory (ie: ",(0,i.jsx)(n.code,{children:"!filename.ts"})," or ",(0,i.jsx)(n.code,{children:"!directory"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["new SernEmitter event ",(0,i.jsx)(n.code,{children:"modulesLoaded"})," , which allows users to customize behavior after all modules are loaded!"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Init Hooks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"implement starting behavior for dependencies"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"experimental",children:"Experimental"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Experimental things may be subject to removal, need feedback and are not guaranteed stable"}),"\n",(0,i.jsxs)(n.li,{children:["dev / prod mode\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"sern will behave differently depending on mode set"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["init sern from ",(0,i.jsx)(n.code,{children:"file"})," option\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"reads from local sern.config.json"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"Sern.init('file'); \n"})}),"\n",(0,i.jsx)(n.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Sern.makeDependencies -> makeDependencies\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"it is asynchronous and top level function now. Make sure to await it before initing for proper synchronization."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"module store and manager internally changed, so those using them may recieve breaking changes"}),"\n",(0,i.jsx)(n.li,{children:"BaseOptions type removed"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"- Sern.makeDependencies({ build: () => {} })\n+ await makeDependencies({ build: () => {} })\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deprecations",children:"Deprecations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Removed all previous marked deprecations in v3"}),"\n",(0,i.jsx)(n.li,{children:"ModuleStore will be removed as a dependency in v4. The only way to access modules should be through ModuleManager"}),"\n",(0,i.jsx)(n.li,{children:"Default Dependencies will be made internal in the v4. Users should only have access to its interface / contract"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var i=s(6540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);