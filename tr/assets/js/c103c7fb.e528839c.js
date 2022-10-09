"use strict";(self.webpackChunk_sern_website=self.webpackChunk_sern_website||[]).push([[4918],{210:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"getting-started","metadata":{"permalink":"/tr/blog/getting-started","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-30-mdx-blog-post.md","source":"@site/blog/2022-09-30-mdx-blog-post.md","title":"How to get started with sern!","description":"Hello everyone!","date":"2022-09-30T00:00:00.000Z","formattedDate":"30 Eyl\xfcl 2022","tags":[{"label":"guides","permalink":"/tr/blog/tags/guides"}],"readingTime":1.31,"hasTruncateMarker":false,"authors":[{"name":"Sr Izan","title":"Contributor","url":"https://github.com/SrIzan10","imageURL":"https://github.com/SrIzan10.png","key":"Sr Izan"}],"frontMatter":{"slug":"getting-started","title":"How to get started with sern!","authors":["Sr Izan"],"tags":["guides"]},"nextItem":{"title":"Release 1.2.0","permalink":"/tr/blog/1.2.0"}},"content":"## Hello everyone!\\n\\nI\'m Sr Izan, your fellow user and contributor.\\n\\nToday I\'m going to show you how to get started with sern and all its cool features.\\n\\n### Step 1: Install the CLI.\\n\\nInstall the CLI:\\n```\\nnpm i -g @sern/cli\\n```\\nand then run\\n```\\nsern init\\n```\\n:::tip\\nYou can also run `sern init -y` if you want to use the default options.\\n:::\\n\\nThe CLI is written in Typescript and open-sourced on [Github](https://github.com/sern-handler/cli). (thanks [evo](https://github.com/EvolutionX-10)!)\\n\\n### Step 2: Have some way to store secrets.\\n\\nNormally you\'d need a way to store secrets, and the best way to do that is by installing another package: `dotenv`\\n\\njust `npm i dotenv` in the project folder and add `require(\'dotenv\').config()` to your import section. Then, when you login, `process.env.TOKEN` (or however you have it named on your `.env` file) should do the trick.\\n\\n:::caution\\nIf you\'re using ESM, configure dotenv with `import \'dotenv/config\'` instead of `require(\'dotenv\').config()`.\\n:::\\n\\n### And... that\'s it?\\n\\nYes, that\'s it. Here\'s a little FAQ to get you started. You can also join the [Discord](https://sern-handler.js.org/discord) for any problems.\\n\\n### Extra: Video tutorial!\\n\\n<video width=\\"400\\" controls>\\n  <source src=\\"https://srizan.s-ul.eu/wtJBVsZU\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## FAQ\\n\\n**Q**: How do I publish a slash command?  \\n**A**: Install the publish extension. Little video:  \\n<video width=\\"400\\" controls>\\n  <source src=\\"https://srizan.s-ul.eu/uHzPhfcS\\" type=\\"video/mp4\\" />\\n</video>\\n\\n**Q**: Any snippet VSCode extension?  \\n**A**: Yeah, just search `sern Snippets` made by a verified publisher called Sr Izan (haha yeah me funny!)  \\n\\n**Q**: HEEEELLLPPPP!!!!  \\n**A**: Hey, don\'t panic! We\'re here to help so, join the [Discord](https://sern-handler.js.org/discord). We\'re trying to get to 100 members!"},{"id":"1.2.0","metadata":{"permalink":"/tr/blog/1.2.0","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-09-28-mdx-blog-post.md","source":"@site/blog/2022-09-28-mdx-blog-post.md","title":"Release 1.2.0","description":"Class-based modules","date":"2022-09-28T00:00:00.000Z","formattedDate":"28 Eyl\xfcl 2022","tags":[{"label":"release","permalink":"/tr/blog/tags/release"}],"readingTime":1.71,"hasTruncateMarker":false,"authors":[{"name":"jacoobes","title":"Head Dev","url":"https://github.com/jacoobes","imageURL":"https://github.com/jacoobes.png","key":"jacoobes"}],"frontMatter":{"slug":"1.2.0","title":"Release 1.2.0","authors":["jacoobes"],"tags":["release"]},"prevItem":{"title":"How to get started with sern!","permalink":"/tr/blog/getting-started"}},"content":"## Class-based modules\\n\\nToday we\'re announcing the ability to create class based modules!\\nTo get started, install\\n```\\nnpm install @sern/handler@latest\\n```\\n\\nQuick List of changes!\\n- [Class based modules](#class-based-modules)\\n- [Deprecation Warnings](#deprecation-warnings)\\n- [Dependencies update](#dependencies-update)\\n\\n\\n### Class based modules\\nIncorporate class based modules into your project instead of the traditional `commandModule` or `eventModule`\\nExtend the new [CommandExecutable](docs/api/classes/CommandExecutable) or [EventExecutable](docs/api/classes/EventExecutable)\\n```ts title=\\"commands/meaning-of-life.ts\\"\\nimport { CommandType, CommandExecutable, type Args, type Context } from \'@sern/handler\';\\nimport { publish } from \'../plugins/publish.js\';\\nimport { serendipityOnly } from \'../plugins/serendipityOnly.js\';\\n\\nexport default class extends CommandExecutable<CommandType.Both> {\\n    type = CommandType.Both as const;\\n    description = \'What is the meaning of life?\'\\n    override onEvent = [\\n        serendipityOnly()\\n    ];\\n    override plugins = [\\n        publish(),\\n    ];\\n    // highlight-next-line\\n    execute = async (ctx: Context, args: Args) => {\\n        await ctx.reply(\'42\')\\n    };\\n}\\n```\\n:::caution\\n\\nexecute must not be a method of the class. It should be as above, a property on the class!\\n\\n:::\\n\\n```ts title=\\"events/guildMemberAdd.ts\\"\\nimport { CommandType, EventExecutable, type EventType } from \'@sern/handler\';\\nimport type { GuildMember } from \'discord.js\'\\n\\nexport default class extends EventExecutable<EventType.Discord> {\\n    type = EventType.Discord as const;\\n    // highlight-next-line\\n    execute = (member: GuildMember) => {\\n        console.log(member)\\n    };\\n}\\n```\\nNow, you might ask **why** this feature was added. <br /> Simply put, to give flexibility to the developers.\\nI believe that you should build your own structures however you might like and customize to your liking.\\nIn addition, **decorators now unofficially work with modules!**\\nFeel free to use TypeScript experimental decorators to augment and customize your classes.  \\n\\n### Deprecation Warnings\\nThe next update will bring sern v2 with some important features. Here are some things to watch out for.\\n\\n- [Wrapper#client](docs/api/interfaces/Wrapper) will be deprecated\\n- [Wrapper#sernEmitter](docs/api/interfaces/Wrapper) will be deprecated\\n  - a SernEmitter will be automatically created once Sern#init is called\\n- The option to pass in a function or array for [Wrapper#events](docs/api/interfaces/Wrapper) will be deprecated. Only strings are accepted.\\n- [Sern#addExternal](docs/api/classes/SernEmitter) will be deprecated in favor of a better way.\\n\\n### Dependencies Update\\n- TypeScript has been updated to 4.8.3\\n- Discord.js has been upgraded to 14.5"}]}')}}]);