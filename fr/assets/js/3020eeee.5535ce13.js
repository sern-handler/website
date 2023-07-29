"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[7223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,b=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={slug:"1.2.0",title:"Release 1.2.0",authors:["jacoobes"],tags:["release"]},o=void 0,s={permalink:"/fr/blog/1.2.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-28-mdx-blog-post.md",source:"@site/blog/2022-09-28-mdx-blog-post.md",title:"Release 1.2.0",description:"Class-based modules",date:"2022-09-28T00:00:00.000Z",formattedDate:"28 septembre 2022",tags:[{label:"release",permalink:"/fr/blog/tags/release"}],readingTime:1.71,hasTruncateMarker:!1,authors:[{name:"jacoobes",title:"Head Dev",url:"https://github.com/jacoobes",imageURL:"https://github.com/jacoobes.png",key:"jacoobes"}],frontMatter:{slug:"1.2.0",title:"Release 1.2.0",authors:["jacoobes"],tags:["release"]},prevItem:{title:"How to get started with sern!",permalink:"/fr/blog/getting-started"}},i={authorsImageUrls:[void 0]},p=[{value:"Class-based modules",id:"class-based-modules",level:2},{value:"Class based modules",id:"class-based-modules-1",level:3},{value:"Deprecation Warnings",id:"deprecation-warnings",level:3},{value:"Dependencies Update",id:"dependencies-update",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"class-based-modules"},"Class-based modules"),(0,r.kt)("p",null,"Today we're announcing the ability to create class based modules!\nTo get started, install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install @sern/handler@latest\n")),(0,r.kt)("p",null,"Quick List of changes!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#class-based-modules"},"Class based modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deprecation-warnings"},"Deprecation Warnings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dependencies-update"},"Dependencies update"))),(0,r.kt)("h3",{id:"class-based-modules-1"},"Class based modules"),(0,r.kt)("p",null,"Incorporate class based modules into your project instead of the traditional ",(0,r.kt)("inlineCode",{parentName:"p"},"commandModule")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"eventModule"),"\nExtend the new ",(0,r.kt)("a",{parentName:"p",href:"docs/api/classes/CommandExecutable"},"CommandExecutable")," or ",(0,r.kt)("a",{parentName:"p",href:"docs/api/classes/EventExecutable"},"EventExecutable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="commands/meaning-of-life.ts"',title:'"commands/meaning-of-life.ts"'},"import { CommandType, CommandExecutable, type Args, type Context } from '@sern/handler';\nimport { publish } from '../plugins/publish.js';\nimport { serendipityOnly } from '../plugins/serendipityOnly.js';\n\nexport default class extends CommandExecutable<CommandType.Both> {\n    type = CommandType.Both as const;\n    description = 'What is the meaning of life?'\n    override onEvent = [\n        serendipityOnly()\n    ];\n    override plugins = [\n        publish(),\n    ];\n    // highlight-next-line\n    execute = async (ctx: Context, args: Args) => {\n        await ctx.reply('42')\n    };\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"execute must not be a method of the class. It should be as above, a property on the class!")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="events/guildMemberAdd.ts"',title:'"events/guildMemberAdd.ts"'},"import { CommandType, EventExecutable, type EventType } from '@sern/handler';\nimport type { GuildMember } from 'discord.js'\n\nexport default class extends EventExecutable<EventType.Discord> {\n    type = EventType.Discord as const;\n    // highlight-next-line\n    execute = (member: GuildMember) => {\n        console.log(member)\n    };\n}\n")),(0,r.kt)("p",null,"Now, you might ask ",(0,r.kt)("strong",{parentName:"p"},"why")," this feature was added. ",(0,r.kt)("br",null)," Simply put, to give flexibility to the developers.\nI believe that you should build your own structures however you might like and customize to your liking.\nIn addition, ",(0,r.kt)("strong",{parentName:"p"},"decorators now unofficially work with modules!"),"\nFeel free to use TypeScript experimental decorators to augment and customize your classes.  "),(0,r.kt)("h3",{id:"deprecation-warnings"},"Deprecation Warnings"),(0,r.kt)("p",null,"The next update will bring sern v2 with some important features. Here are some things to watch out for."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/api/interfaces/Wrapper"},"Wrapper#client")," will be deprecated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/api/interfaces/Wrapper"},"Wrapper#sernEmitter")," will be deprecated",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"a SernEmitter will be automatically created once Sern#init is called"))),(0,r.kt)("li",{parentName:"ul"},"The option to pass in a function or array for ",(0,r.kt)("a",{parentName:"li",href:"docs/api/interfaces/Wrapper"},"Wrapper#events")," will be deprecated. Only strings are accepted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/api/classes/SernEmitter"},"Sern#addExternal")," will be deprecated in favor of a better way.")),(0,r.kt)("h3",{id:"dependencies-update"},"Dependencies Update"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TypeScript has been updated to 4.8.3"),(0,r.kt)("li",{parentName:"ul"},"Discord.js has been upgraded to 14.5")))}u.isMDXComponent=!0}}]);