"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[2831],{4113:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>t,toc:()=>h});var r=s(4848),i=s(8453);const d={id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},l=void 0,t={id:"api/enums/CommandType",title:"Enumeration: CommandType",description:"Since",source:"@site/docs/api/enums/CommandType.md",sourceDirName:"api/enums",slug:"/api/enums/CommandType",permalink:"/docs/api/enums/CommandType",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CommandType",title:"Enumeration: CommandType",sidebar_label:"CommandType",sidebar_position:0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Sern",permalink:"/docs/api/namespaces/Sern"},next:{title:"EventType",permalink:"/docs/api/enums/EventType"}},c={},h=[{value:"Enumeration Members",id:"enumeration-members",level:2},{value:"Both",id:"both",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Button",id:"button",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ChannelSelect",id:"channelselect",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"CtxMsg",id:"ctxmsg",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"CtxUser",id:"ctxuser",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"MentionableSelect",id:"mentionableselect",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Modal",id:"modal",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"RoleSelect",id:"roleselect",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"Slash",id:"slash",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"StringSelect",id:"stringselect",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Text",id:"text",level:3},{value:"Defined in",id:"defined-in-10",level:4},{value:"UserSelect",id:"userselect",level:3},{value:"Defined in",id:"defined-in-11",level:4}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Since"})})}),"\n",(0,r.jsx)(n.p,{children:"1.0.0\nA bitfield that discriminates command modules"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"Example"})})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default commandModule({\n    // highlight-next-line\n    type : CommandType.Text,\n    name : 'a text command'\n    execute(message) {\n        console.log(message.content)\n    }\n})\n"})}),"\n",(0,r.jsx)(n.h2,{id:"enumeration-members",children:"Enumeration Members"}),"\n",(0,r.jsx)(n.h3,{id:"both",children:"Both"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"Both"})," = ",(0,r.jsx)(n.code,{children:"3"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L20",children:"src/core/structures/enums.ts:20"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"button",children:"Button"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"Button"})," = ",(0,r.jsx)(n.code,{children:"16"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L23",children:"src/core/structures/enums.ts:23"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"channelselect",children:"ChannelSelect"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"ChannelSelect"})," = ",(0,r.jsx)(n.code,{children:"1024"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L29",children:"src/core/structures/enums.ts:29"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ctxmsg",children:"CtxMsg"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"CtxMsg"})," = ",(0,r.jsx)(n.code,{children:"8"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L22",children:"src/core/structures/enums.ts:22"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"ctxuser",children:"CtxUser"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"CtxUser"})," = ",(0,r.jsx)(n.code,{children:"4"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L21",children:"src/core/structures/enums.ts:21"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"mentionableselect",children:"MentionableSelect"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"MentionableSelect"})," = ",(0,r.jsx)(n.code,{children:"512"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L28",children:"src/core/structures/enums.ts:28"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"modal",children:"Modal"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"Modal"})," = ",(0,r.jsx)(n.code,{children:"64"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L25",children:"src/core/structures/enums.ts:25"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"roleselect",children:"RoleSelect"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"RoleSelect"})," = ",(0,r.jsx)(n.code,{children:"256"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L27",children:"src/core/structures/enums.ts:27"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"slash",children:"Slash"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"Slash"})," = ",(0,r.jsx)(n.code,{children:"2"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L19",children:"src/core/structures/enums.ts:19"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"stringselect",children:"StringSelect"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"StringSelect"})," = ",(0,r.jsx)(n.code,{children:"32"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L24",children:"src/core/structures/enums.ts:24"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"text",children:"Text"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"Text"})," = ",(0,r.jsx)(n.code,{children:"1"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L18",children:"src/core/structures/enums.ts:18"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"userselect",children:"UserSelect"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"UserSelect"})," = ",(0,r.jsx)(n.code,{children:"128"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/sern-handler/handler/blob/2106522/src/core/structures/enums.ts#L26",children:"src/core/structures/enums.ts:26"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(6540);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);