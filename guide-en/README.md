# Introduction 

Welcome to sern's official guide. This guide will go through all the core features of the framework.
Thank you for choosing sern!

-  Teaching the discord.js library and / or Javascript / Typescript is out of scope of this project, so the documentation assumes you already know these elements.
   discord.js@dev is the only supported version at the moment. There are plans to roll out a version of sern in discord.js@13.xx.xx in the future.

-  discord.js@dev is the only supported version at the moment. There are plans to roll out a version of sern in discord.js@13.xx.xx in the future.

## You will learn
* sern's goal
* How to use sern with the [CLI](https://github.com/sern-handler/cli)
* Your first command
* The Context class

#### Working with plugins
* Plugins
  - Command Plugins
  - Event Plugins

* The SernEmitter class

### Good to know

* Your sern.config.json
* Your first event
* Setting up event listeners

---

# Goal

Sern strives to be minimalist, but with all batteries included. Meaning, this framework provides the necessary tools
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
CommandType.Both = A Command supporting either text or slash
CommandType.Modal = A Command listening to Modal interactions
CommandType.MenuSelect = A Command listening to select menu interactions
CommandType.MenuUser = A Command listening to context menu user interactions
CommandType.MenuMsg  = A Command listening to context menu message interactions
CommandType.Button = A Command listening to button interactions
```
So, lets say you want to make a command module that listens to modals. <br>
**Note**: Keep in mind you'll need to send a modal with a custom id `dm-me`. This example below is the response to a modal being sent.<br>

Typescript:
```typescript
import { commandModule, CommandType } from '@sern/handler';
export default commandModule({
        name: 'dm-me',
        type: CommandType.Modal,
        async execute (modal) {
            const value = modal.fields.getTextInputValue('message');
            modal.client.users.fetch('182326315813306368').then( u =>
                u.send(value + ` from ${modal.user}`)
            );
            modal.reply( { ephemeral:true, content: 'Sent' })
        }
});
```
Javascript:
```javascript
const { CommandType, commandModule } = require('@sern/handler');
exports.default = commandModule({
        name: 'dm-me',
        type: CommandType.Modal,
        async execute (modal) {
            const value = modal.fields.getTextInputValue('message');
            modal.client.users.fetch('182326315813306368').then( u =>
                u.send(value + ` from ${modal.user}`)
            );
            modal.reply( { ephemeral:true, content: 'Sent' })
        }
});
```
Commands are straight forward. Keep in mind, every other property on the commandModule object is 
optional **except** the type and execute function.

# Context class
The provided Context class helps with modules of `CommandType.Both` ( A mixture of slash / legacy commands )
In short, this is passed into the execute function instead of a slash interaction or message to provide 
shared methods between the two classes.

The Context class is passed into modules with type :
- `CommandType.Both`
- `CommandType.Slash`
- `CommandType.Text`

Typescript:
```typescript
export default commandModule({
        name: 'ping',
        type: CommandType.Both,
        async execute(ctx: Context) {
            await ctx.reply(`pong ${ctx.user}`) 
            // .reply is shared between both message and interaction!
            // So is an User object!
        }
});
```
Javascript:
```javascript
exports.default = commandModule({
        name: 'ping',
        type: CommandType.Both,
        async execute(ctx) { //ctx is a Context instance
            await ctx.reply(`pong ${ctx.user}`) 
            // .reply is shared between both message and interaction!
            // So is an User object!
        }
});
```

# Plugins
As of now, modules seem a little underwhelming. It appears that sern doesn't have all the features of a standard handler, 
which manages permissions, categorizes, cooldowns, publishes application commands, role permissions, etc. Many important 
parts that manage access and help make commands easier to make are apparently absent. <br>
Below is an example of an event plugin, one of the types of plugins. <br>
Typescript:
```typescript
export function serenOnly(): EventPlugin<CommandType.Text> {
  return {
    type: PluginType.Event,
    async execute([ctx, args], controller) {
      if (ctx.user.id !== "182326315813306368") {
        await ctx.reply({content: "You cannot use this command"})
        return controller.stop()
      }
      return controller.next();
    }
  }
}
```
Javascript:
```javascript
export function serenOnly(): EventPlugin<CommandType.Text> {
    return {
        type: PluginType.Event,
        async execute([ctx, args], controller) {
            if (ctx.user.id !== "182326315813306368") {
                await ctx.reply({content: "You cannot use this command"})
                return controller.stop()
            }
            return controller.next();
        }
    }
}
```

<br> As part of sern's extensibility, the plugins feature make sern just as powerful, if not more powerful than 
standard handlers.
Plugins modify and add new behavior to standard modules, extending customizability and implementing automation.

<br> At the moment, there are two types of plugins:

- Command Plugins
- Event Plugins

## Command Plugins
All modules are registered into sern's system. With command plugins, you can modify how commands are loaded, 
or do some kind of preprocessing before they are loaded into sern.
### The controller object
```typescript
export interface Controller {
  next: () => Ok<void>;
  stop: () => Err<void>;
}
```
An instance of the above object is passed into every plugin. <br> 
This controls whether a module is stored into sern.
```typescript
export function logCreated(): CommandPlugin<CommandType.Text> {
  return {
    type: PluginType.Command,
    async execute(wrapper, { absPath, module }, controller) {
        console.log(+new Date(),  `${module.name} loaded correctly`)
        return controller.next();
    }
  }
}
```
Above, this simple plugin logs that the module has been loaded along with a timestamp. <br>
Again, it is up to **you** to define plugin logic! The possibilities to customize your bots is endless.

## Event Plugins
![event-plugins](/assets/images/eventplugins.drawio.svg) <br>
The diagram should explain most of it. An event is emitted by discord.js, run through all the plugins, and if they are <br>
all successful, the command is executed.
