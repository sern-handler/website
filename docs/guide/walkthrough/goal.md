---
sidebar_position: 1
---



# Goal 

This walkthrough will be written in [TypeScript](https://www.typescriptlang.org/) but will have JavaScript snippets throughout. 

# Make robust, modular, bots 

- *Modularity*:  sern is built with modularity in mind. You can swap pieces and parts easily. 
- *Familiar*: commands and structures are similar to classic v12 handlers and the official discord.js command handler guide, while packing many features
- *Concise*: Too much code is a liability. with sern, write less for more 🤯 


### Using @sapphire/framework
```ts title="commands/ping.ts" showLineNumbers
import { Command } from '@sapphire/framework'
import type { CommandInteraction } from 'discord.js'

export class PingCommand extends Command {
  public constructor(context: Command.Context) {
    super(context, {
      description: 'Pong!',
      chatInputCommand: {
        register: true,
      },
    })
  }
  public async chatInputRun(interaction: CommandInteraction) {
    await interaction.reply('Pong!')
  }
}
```
### Using @sern/handler
```ts title="commands/ping.ts" showLineNumbers
import { commandModule, CommandType } from '@sern/handler';
import { PermissionFlagsBits } from 'discord.js';

export const config = {
  dmPermission: true || false, //only choose one!
	defaultMemberPermissions: [
		PermissionFlagsBits.UseApplicationCommands
	],
  guildIds: ['id1', 'id2']
}

export default commandModule({ 
    type: CommandType.Both,
    plugins: [],
    description: 'Pong!',
    execute: (ctx, args) => {
        await ctx.reply('Pong!')
    }
})
```
Keep in mind the above example acts as both a slash command AND text command.
config is not required but is needed if you want to change perms or other properties.
- `dmPermission` boolean Tells the bot weather the command can be used in BOT's DM's.
- `defaultMemberPermissions` Array<PermissionFlagsBits> to hide the command from specific members.
- `guildIds` Array<`${number}`> to post commands to certain guilds.
