"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[594],{8897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=s(4848),r=s(8453);const t={id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},l=void 0,a={id:"api/index",title:"@sern/handler",description:"Handlers. Redefined.",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/api/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"index",title:"@sern/handler",sidebar_label:"Readme",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",next:{title:"Exports",permalink:"/docs/api/modules"}},o={},d=[{value:"Why?",id:"why",level:2},{value:"\ud83d\udcdc Installation",id:"-installation",level:2},{value:"\ud83d\udc76 Basic Usage",id:"-basic-usage",level:2},{value:"\ud83e\udd16 Bots Using sern",id:"-bots-using-sern",level:2},{value:"\ud83d\udcbb CLI",id:"-cli",level:2},{value:"\ud83d\udd17 Links",id:"-links",level:2},{value:"\ud83d\udc4b Contribute",id:"-contribute",level:2}];function h(e){const n={a:"a",code:"code",details:"details",div:"div",h1:"h1",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.div,{align:"center",children:["\n  ",(0,i.jsx)(n.img,{src:"https://raw.githubusercontent.com/sern-handler/.github/main/banner.png",width:"900px"}),"\n"]}),"\n",(0,i.jsx)(n.h1,{align:"center",children:"Handlers. Redefined."}),"\n",(0,i.jsx)(n.h4,{align:"center",children:"A complete, customizable, typesafe, & reactive framework for discord bots"}),"\n",(0,i.jsxs)(n.div,{align:"center",styles:"margin-top: 10px",children:["\n  ",(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/open-source-brightgreen"}),"\n  ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@sern/handler",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/npm/v/@sern/handler?maxAge=3600",alt:"NPM version"})}),"\n  ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/@sern/handler",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/npm/dt/@sern/handler?maxAge=3600",alt:"NPM downloads"})}),"\n  ",(0,i.jsx)(n.a,{href:"https://opensource.org/licenses/MIT",children:(0,i.jsx)(n.img,{src:"https://img.shields.io/badge/license-MIT-brightgreen",alt:"License MIT"})}),"\n  ",(0,i.jsx)(n.a,{href:"https://sern.dev",children:(0,i.jsx)(n.img,{alt:"docs.rs",src:"https://img.shields.io/docsrs/docs"})}),"\n  ",(0,i.jsx)(n.img,{alt:"Lines of code",src:"https://img.shields.io/badge/total%20lines-2k-blue"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why",children:"Why?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For you. A framework that's tailored to your exact needs."}),"\n",(0,i.jsx)(n.li,{children:"Lightweight. Does a lot while being small."}),"\n",(0,i.jsx)(n.li,{children:"Latest features. Support for discord.js v14 and all of its interactions."}),"\n",(0,i.jsx)(n.li,{children:"Start quickly. Plug and play or customize to your liking."}),"\n",(0,i.jsxs)(n.li,{children:["works with ",(0,i.jsx)(n.a,{href:"https://bun.sh/",children:"bun"})," and ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en",children:"node"})," out the box!"]}),"\n",(0,i.jsx)(n.li,{children:"Use it with TypeScript or JavaScript. CommonJS and ESM supported."}),"\n",(0,i.jsxs)(n.li,{children:["Active and growing community, always here to help. ",(0,i.jsx)(n.a,{href:"https://sern.dev/discord",children:"Join us"})]}),"\n",(0,i.jsx)(n.li,{children:"Unleash its full potential with a powerful CLI and awesome plugins."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-installation",children:"\ud83d\udcdc Installation"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://sern.dev/docs/guide/walkthrough/new-project",children:"Start here!!"})}),"\n",(0,i.jsx)(n.h2,{id:"-basic-usage",children:"\ud83d\udc76 Basic Usage"}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"ping.ts"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"export default commandModule({\n  type: CommandType.Slash,\n  //Installed plugin to publish to discord api and allow access to owners only.\n  plugins: [publish(), ownerOnly()],\n  description: 'A ping pong command',\n  execute(ctx) {\n    ctx.reply('Hello owner of the bot');\n  }\n});\n"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-bots-using-sern",children:"\ud83e\udd16 Bots Using sern"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/sern-handler/sern-community",children:"Community Bot"}),", the community bot for our ",(0,i.jsx)(n.a,{href:"https://sern.dev/discord",children:"discord server"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/SrIzan10/vinci",children:"Vinci"}),", the bot for Mara Turing."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/baskbotml/bask",children:"Bask"}),", Listen your favorite artists on Discord."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/SrIzan10/ava",children:"ava"}),", A discord bot that plays KNGI and Gensokyo Radio."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/murayamabot/murayama",children:"Murayama"}),", :pepega:"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/needhamgary/Protector",children:"Protector (WIP)"}),", Just a simple bot to help enhance a private minecraft server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/Peter-MJ-Parker/sern-bud",children:"SmokinWeed \ud83d\udca8"}),", A fun bot for a small - but growing - server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jacoobes/man-nomic",children:"Man Nomic"}),", A simple information bot to provide information to the nomic-ai discord community."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/sern-handler/linear-discord",children:"Linear-Discord"})," Display and manage a linear dashboard."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-cli",children:"\ud83d\udcbb CLI"}),"\n",(0,i.jsxs)(n.p,{children:["It is ",(0,i.jsx)(n.strong,{children:"highly encouraged"})," to use the ",(0,i.jsx)(n.a,{href:"https://github.com/sern-handler/cli",children:"command line interface"})," for your project. Don't forget to view it."]}),"\n",(0,i.jsx)(n.h2,{id:"-links",children:"\ud83d\udd17 Links"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sern.dev",children:"Official Documentation and Guide"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://sern.dev/discord",children:"Support Server"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-contribute",children:"\ud83d\udc4b Contribute"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Read our contribution ",(0,i.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/main/.github/CONTRIBUTING.md",children:"guidelines"})," carefully"]}),"\n",(0,i.jsxs)(n.li,{children:["Pull up on ",(0,i.jsx)(n.a,{href:"https://github.com/sern-handler/handler/issues",children:"issues"})," and report bugs"]}),"\n",(0,i.jsx)(n.li,{children:"All kinds of contributions are welcomed."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);