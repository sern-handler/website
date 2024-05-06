---
title: Goal
sidebar:
  order: 1
---

This walkthrough will be written in [TypeScript](https://www.typescriptlang.org/) but will have JavaScript snippets throughout.

# Make robust, modular, bots

- _Modularity_: sern is built with modularity in mind. You can swap pieces and parts easily.
- _Familiar_: commands and structures are similar to classic v12 handlers and the official discord.js command handler guide, while packing many features
- _Concise_: Too much code is a liability. with sern, write less for more 🤯

### Using @sapphire/framework

```ts title="commands/ping.ts" showLineNumbers
import { Command } from "@sapphire/framework";
import type { CommandInteraction } from "discord.js";

export class PingCommand extends Command {
  public constructor(context: Command.Context) {
    super(context, {
      description: "Pong!",
      chatInputCommand: {
        register: true,
      },
    });
  }
  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.reply("Pong!");
  }
}
```

### Using @sern/handler

```ts title="commands/ping.ts" showLineNumbers
import { commandModule, CommandType } from "@sern/handler";
import { publish } from "../plugins";

export default commandModule({
  type: CommandType.Both,
  plugins: [publish()],
  description: "Pong!",
  execute: (ctx, args) => {
    await ctx.reply("Pong!");
  },
});
```

Keep in mind the above example acts as both a slash command AND text command
