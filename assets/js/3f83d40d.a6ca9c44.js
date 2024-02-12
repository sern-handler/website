"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[8324],{5788:(e,n,a)=>{a.d(n,{Iu:()=>g,yg:()=>d});var t=a(1504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),u=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return a?t.createElement(d,o(o({ref:n},g),{},{components:a})):t.createElement(d,o({ref:n},g))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5856:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=a(5072),r=(a(1504),a(5788));const l={slug:"2.5.0",title:"Release 2.5.0",authors:["jacoobes"],tags:["release"]},o=void 0,i={permalink:"/blog/2.5.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-12-mdx-blog-post.md",source:"@site/blog/2023-01-12-mdx-blog-post.md",title:"Release 2.5.0",description:"2.5 Release",date:"2023-01-12T00:00:00.000Z",formattedDate:"January 12, 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:.895,hasTruncateMarker:!1,authors:[{name:"jacoobes",title:"Head Dev",url:"https://github.com/jacoobes",imageURL:"https://github.com/jacoobes.png",key:"jacoobes"}],frontMatter:{slug:"2.5.0",title:"Release 2.5.0",authors:["jacoobes"],tags:["release"]},prevItem:{title:"Release 3.0.0",permalink:"/blog/3.0.0"},nextItem:{title:"Release 2.0.0",permalink:"/blog/2.0.0"}},s={authorsImageUrls:[void 0]},u=[{value:"2.5 Release",id:"25-release",level:2},{value:"Join our discord <br />",id:"join-our-discord-",level:3},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"Deprecations",id:"deprecations",level:3},{value:"Reason",id:"reason",level:3}],g={toc:u},p="wrapper";function c(e){let{components:n,...a}=e;return(0,r.yg)(p,(0,t.c)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"25-release"},"2.5 Release"),(0,r.yg)("h3",{id:"join-our-discord-"},"Join our ",(0,r.yg)("a",{parentName:"h3",href:"https://sern.dev/discord"},"discord")," ",(0,r.yg)("br",null)),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Thank you for using sern in your projects. It's only going to get better!"),(0,r.yg)("li",{parentName:"ul"},"I apologize for the sudden small breaking change. After this update, there won't be any for a while.\nWow! We're increasing our semantic versioning by ",(0,r.yg)("inlineCode",{parentName:"li"},"+0.3.9")," ",(0,r.yg)("br",null),"\nWhat does this mean?")),(0,r.yg)("h3",{id:"breaking-changes"},"Breaking changes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#controller"},"controller")," parameter for plugins has been removed",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"You'll need to import it instead"),(0,r.yg)("li",{parentName:"ul"},"This ",(0,r.yg)("strong",{parentName:"li"},"breaks")," old ",(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/CommandPlugin"},"CommandPlugin"),", but ",(0,r.yg)("strong",{parentName:"li"},"not")," old ",(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/EventPlugin"},"EventPlugin"))))),(0,r.yg)("h3",{id:"deprecations"},"Deprecations"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/CommandPlugin"},"CommandPlugin")," and ",(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/EventPlugin"},"EventPlugin")," have been renamed ",(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/InitPlugin"},"InitPlugin")," and ",(0,r.yg)("a",{parentName:"li",href:"../docs/api/interfaces/ControlPlugin"},"ControlPlugin"))),(0,r.yg)("h3",{id:"reason"},"Reason"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The naming of plugins was getting too complex. For example, plugin naming evolved into CommandModuleCommandPlugin, CommandModuleEventPlugin and more."),(0,r.yg)("li",{parentName:"ul"},"I realize that this affects all plugins. I have updated all ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/sern-handler/awesome-plugins/pull/68"},"plugins")," to match these changes"),(0,r.yg)("li",{parentName:"ul"},"The old way of declaring plugins has been deprecated in favor of newer functions that facilitate and ease typings",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#commandcontrolplugin"},"CommandControlPlugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#commandinitplugin"},"CommandInitPlugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#eventcontrolplugin"},"EventControlPlugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#eventinitplugin"},"EventInitPlugin")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"../docs/api/modules#discordeventcontrolplugin"},"DiscordEventControlPlugin"),"\nThis will probably be the last breaking change in a while. Thanks for using sern!")))))}c.isMDXComponent=!0}}]);