# Introduction 

Welcome to the sern's official guide. This guide will go through all the core features of the framework. <br>
Thank you for choosing sern to be your framework! <br>

**Disclaimers**: 
- Teaching the discord.js library and / or Javascript / Typescript is out of scope of this project, so the documentation assumes you already know these elements. <br>
- Sern is only available in ```discord.js@dev``` at the moment. There are plans to roll out a version of Sern in ```discord.js@13.xx.xx``` in the future.

## You will learn
* sern's goal
* How to use Sern with the [CLI](https://github.com/sern-handler/cli)
* Your first command
* The Context class
* Plugins
  - Command Plugins
  - Event Plugins
* The SernEmitter class
* Your sern.config.json
* Your first event
* Setting up event listeners

---

# Goal

sern strives to be minimalist, but with all batteries included. Meaning, this framework provides the necessary tools
to start up a bot in minutes, and leaves plenty room space to customize your experience and create an amazing project. 
It should include all the tools for any bot at any scale.


# CLI

Setting up the [CLI](https://github.com/sern-handler/cli) is easy. <br>
- To start a brand new project, run : 
```
sern init (-y)
```
Include the `-y` flag if you want to set up defaults. The default langauge is [Typescript](https://www.typescriptlang.org/) <br>

- To install [plugins](todo) maintained by the community [repository](https://github.com/sern-handler/awesome-plugins), 
```
sern plugins
```
This will display a menu selection of all installable plugins. <br>
**Note**: You must have a [sern.config.json](todo) to use this command.
If you want to view plugins, visit the repository linked above.

- To install extra utilities into your project 
```
sern extra
```

# First Command
We will dissect a basic command. 
If you installed a new project via the cli, This is the `ping` command located in src/commands folder.

Typescript
```typescript
import { commandModule, CommandType } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	plugins: [],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply({ content: 'Pong 🏓' });
	},
});
```
Javascript
```javascript
const { CommandType, commandModule } = require('@sern/handler');

exports.default = commandModule({
	type: CommandType.Both,
	plugins: [],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply('Pong 🏓');
	},
})
```
### Essential properties of a command

- **module.type** (Required)
  - The type of your module. For example, a command listening to messages would have the type CommandType.Text
- **module.execute** (Required)
  - This function is called when the command is triggered. Do your logic here!
- **module.name** (Optional)
  - Give your command a name. **(defaults to its filename)**
- **module.description** (Optional)
  - Give your command a description. **(defaults to `..`)**
- **module.plugins** (Optional)
  - A list of [plugins](todo) that will modify and change the behavior of your command. <br>
  
### Types of command modules
Every command module `type` is part of an enum. This field allows type inference for the rest of a module's fields. <br>
All available command types : 
```
CommandType.Text = A Text Command
CommandType.Slash = A Slash Command
CommandType.Both = A Command supporting either / or text or slash
CommandType.

```
### How are modules fully typed?
Discriminated unions in Typescript are a fundamental idea. In short, giving objects a property
that differentiates itself from the rest of the union allows typescript to infer the rest of 
the properties in the object. This concept is useful when we wanted to add correct typings for all
interaction types, messages, and event modules. 


