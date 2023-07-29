"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={slug:"getting-started",title:"How to get started with sern!",authors:["Sr Izan"],tags:["guides"]},i=void 0,l={permalink:"/fr/blog/getting-started",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-30-mdx-blog-post.md",source:"@site/blog/2022-09-30-mdx-blog-post.md",title:"How to get started with sern!",description:"Hello everyone!",date:"2022-09-30T00:00:00.000Z",formattedDate:"30 septembre 2022",tags:[{label:"guides",permalink:"/fr/blog/tags/guides"}],readingTime:1.31,hasTruncateMarker:!1,authors:[{name:"Sr Izan",title:"Developer",url:"https://github.com/SrIzan10",imageURL:"https://github.com/SrIzan10.png",key:"Sr Izan"}],frontMatter:{slug:"getting-started",title:"How to get started with sern!",authors:["Sr Izan"],tags:["guides"]},prevItem:{title:"Release 2.0.0",permalink:"/fr/blog/2.0.0"},nextItem:{title:"Release 1.2.0",permalink:"/fr/blog/1.2.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Hello everyone!",id:"hello-everyone",level:2},{value:"Step 1: Install the CLI.",id:"step-1-install-the-cli",level:3},{value:"Step 2: Have some way to store secrets.",id:"step-2-have-some-way-to-store-secrets",level:3},{value:"And... that&#39;s it?",id:"and-thats-it",level:3},{value:"Extra: Video tutorial!",id:"extra-video-tutorial",level:3},{value:"FAQ",id:"faq",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"hello-everyone"},"Hello everyone!"),(0,o.kt)("p",null,"I'm Sr Izan, your fellow user and contributor."),(0,o.kt)("p",null,"Today I'm going to show you how to get started with sern and all its cool features."),(0,o.kt)("h3",{id:"step-1-install-the-cli"},"Step 1: Install the CLI."),(0,o.kt)("p",null,"Install the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -g @sern/cli\n")),(0,o.kt)("p",null,"and then run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sern init\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also run ",(0,o.kt)("inlineCode",{parentName:"p"},"sern init -y")," if you want to use the default options.")),(0,o.kt)("p",null,"The CLI is written in Typescript and open-sourced on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sern-handler/cli"},"Github"),". (thanks ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EvolutionX-10"},"evo"),"!)"),(0,o.kt)("h3",{id:"step-2-have-some-way-to-store-secrets"},"Step 2: Have some way to store secrets."),(0,o.kt)("p",null,"Normally you'd need a way to store secrets, and the best way to do that is by installing another package: ",(0,o.kt)("inlineCode",{parentName:"p"},"dotenv")),(0,o.kt)("p",null,"just ",(0,o.kt)("inlineCode",{parentName:"p"},"npm i dotenv")," in the project folder and add ",(0,o.kt)("inlineCode",{parentName:"p"},"require('dotenv').config()")," to your import section. Then, when you login, ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env.TOKEN")," (or however you have it named on your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file) should do the trick."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you're using ESM, configure dotenv with ",(0,o.kt)("inlineCode",{parentName:"p"},"import 'dotenv/config'")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"require('dotenv').config()"),".")),(0,o.kt)("h3",{id:"and-thats-it"},"And... that's it?"),(0,o.kt)("p",null,"Yes, that's it. Here's a little FAQ to get you started. You can also join the ",(0,o.kt)("a",{parentName:"p",href:"https://sern.dev/discord"},"Discord")," for any problems."),(0,o.kt)("h3",{id:"extra-video-tutorial"},"Extra: Video tutorial!"),(0,o.kt)("video",{width:"400",controls:!0},(0,o.kt)("source",{src:"https://srizan.s-ul.eu/wtJBVsZU",type:"video/mp4"})),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q"),": How do I publish a slash command?",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"A"),": Install the publish extension. Little video:  "),(0,o.kt)("video",{width:"400",controls:!0},(0,o.kt)("source",{src:"https://srizan.s-ul.eu/uHzPhfcS",type:"video/mp4"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q"),": Any snippet VSCode extension?",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"A"),": Yeah, just search ",(0,o.kt)("inlineCode",{parentName:"p"},"sern Snippets")," made by a verified publisher called Sr Izan (haha yeah me funny!)  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q"),": HEEEELLLPPPP!!!!",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("strong",{parentName:"p"},"A"),": Hey, don't panic! We're here to help so, join the ",(0,o.kt)("a",{parentName:"p",href:"https://sern.dev/discord"},"Discord"),". We're trying to get to 100 members!"))}c.isMDXComponent=!0}}]);