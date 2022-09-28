---
slug: 1.2.0
title: Release 1.2.0
authors: [jacoobes]
tags: [release]
---

## Class-based modules

Today we're announcing the ability to create class based modules!
To get started, install
```
npm install @sern/handler@latest
```

Quick List of changes!
- [Class based modules](#class-based-modules)
- [Deprecation Warnings](#deprecation-warnings)
- [Dependencies update](#dependencies-update)



### Class based modules
Incorporate class based modules into your project instead of the traditional `commandModule` or `eventModule`
Extend the new [CommandExecutable](docs/api/classes/CommandExecutable) or [EventExecutable](docs/api/classes/EventExecutable)
```ts title="commands/meaning-of-life.ts"
import { CommandType, CommandExecutable, type Args, type Context } from "@sern/handler";
import { publish } from "../plugins/publish.js";
import { serendipityOnly } from "../plugins/serendipityOnly.js";

export default class extends CommandExecutable<CommandType.Both> {

    type = CommandType.Both as const;
    description = 'What is the meaning of life?'
    override onEvent = [
        serendipityOnly()
    ];
    override plugins = [
        publish(),
    ];
    // highlight-next-line
    execute = async (ctx: Context, args: Args) => {
        await ctx.reply('42')
    };
}
```
:::caution

execute must be a member function. It should be as above, a property on the class!

:::

```ts title="commands/guildMemberAdd.ts"
import { CommandType, EventExecutable, type EventType } from "@sern/handler";
import type { GuildMember } from 'discord.js'
export default class extends EventExecutable<EventType.Discord> {

    type = EventType.Discord as const;
    // highlight-next-line
    execute = (member: GuildMember) => {
        console.log(member)
    };
}
```
Now, you might ask **why** this feature was added. <br /> Simply put, to give flexibility to the developers.
In addition, **decorators now unofficially work with modules!**
Feel free to use TypeScript experimental decorators to augment and customize your classes.  

### Deprecation Warnings
The next update will bring sern v2 with some important features. Here are some things to watch out for.

- [Wrapper#client](docs/api/interfaces/Wrapper) will be deprecated
- [Wrapper#sernEmitter](docs/api/interfaces/Wrapper) will be deprecated
  - a SernEmitter will be automatically created once Sern#init is called
- The option to pass in a function or array for [Wrapper#events](docs/api/interfaces/Wrapper) will be deprecated. Only strings are accepted.
- [Sern#addExternal](docs/api/classes/SernEmitter) will be deprecated in favor of a better way.

### Dependencies Update
- TypeScript has been updated to 4.8.3
- Discord.js has been upgraded to 14.5