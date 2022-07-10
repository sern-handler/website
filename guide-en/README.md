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

### Working with plugins
* Plugins
  - Command Plugins
  - Event Plugins
### Events
* The SernEmitter class
* Your first event

### Good to know

* Your sern.config.json

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

- To install [plugins](#plugins) maintained by the community [repository](https://github.com/sern-handler/awesome-plugins), 
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
  - A list of [plugins](#plugins) that will modify and change the behavior of your command. <br>
  
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
In short, Slash Commands, Both Commands, Text Commands carry a Context data structure

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
which manages permissions, categorizes, cool-downs, publishes application commands, role permissions, etc. Many important 
parts that manage access and help streamline command creation to make are apparently absent.  
Below is an example of an event plugin, one of the types of plugins.  

Typescript:
```typescript
export function serenOnly(): EventPlugin<CommandType.Both> {
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
export function serenOnly(): EventPlugin<CommandType.Both> {
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
This controls whether a module is stored into sern. <br>
Typescript:
```typescript
export function loggable(): CommandPlugin<CommandType.Both> {
  return {
    type: PluginType.Command,
    async execute(wrapper, { absPath, module }, controller) {
        console.log(+new Date(),  `${module.name} loaded correctly`)
        return controller.next();
    }
  }
}
```
Javascript: 
```javascript
export function inDir(dir : string) {
  return {
    type: PluginType.Command,
    async execute(wrapper, { absPath, module }, controller) {
        if(path.dirname(absPath) !== dir) {
          console.log(+new Date(),  `${module.name} is not in the correct directory!`);
          return controller.stop()
        }
        console.log(+new Date(),  `${module.name} is in the correct directory!`);
        return controller.next(); //continue
    }
  }
}
```
Above, this simple plugin logs that the module has been loaded along with a timestamp. <br>
Again, it is up to **you** to define plugin logic! The possibilities to customize your bots is endless.

## Event Plugins
![event-plugins](/assets/images/eventplugins.drawio.svg) <br> 
- An event is emitted by discord.js.
- This event is passed to all plugins (**in order!!**),
- If all are successful,

The command is executed. Calling `controller.stop()` notifies sern that this command should not be run, 
and this event is ignored.
<br> <br>
This flexible structure allows you to write reusable preconditions, permissions verifiers,
argument verifiers, and much more.

<p>So, what does a command module look like with plugins?</p>

Typescript:
```typescript
import { commandModule, CommandType } from '@sern/handler';

export default commandModule({
	type: CommandType.Both,
	plugins: [
        inDir("other"), 
        serenOnly()
    ],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply({ content: 'Pong 🏓' });
	},
});
```
Javascript: 
```typescript
const { commandModule, CommandType } = require('@sern/handler');

exports.default = commandModule({
	type: CommandType.Both,
	plugins: [
        inDir("other"), 
        serenOnly() //The plugins in this section applied to this module!
    ],
	description: 'A ping command',
	//alias : [],
	execute: async (ctx, args) => {
		await ctx.reply({ content: 'Pong 🏓' });
	},
});
```
Can you predict the behavior of this command?

- Before loading into sern, this command module will check if this module is in the correct directory `other`.
- Before an event occurs, this command module will check if the user has the id `182326315813306368`.

If all plugins return `controller.next()`, this command replies `Pong 🏓`

# The SernEmitter class
You're shipped with the SernEmitter. This EventEmitter listens to 
- command modules executing and its status, the `module.activate` event
- command modules registered and its status, the `module.register` event
- Any errors that are recoverable, the `error` event 

<br> You can put these and other event listeners into event modules!

# Your first event module
We will dissect a basic event module. <br>
Typescript: 
```typescript
export default eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate', //name of event.
  execute(event) {
    console.log(event);  
  }
})
```
Javascript:
```javascript
exports.default = eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate',
  execute(event) {
    console.log(event);  
  }
})
```
Like command modules, the `type` property denotes what kind of event it is.
```
EventType.Sern = an event listening to the SernEmitter
EventType.Discord = an event listening to the discord.js Client
EventType.External = an event listening to any class extending an EventEmitter
```
### Essential properties of an event module

- **module.type** (Required)
  - The type of your module. ( Check previous message ^^^)
- **module.execute** (Required)
  - This function is called when the event module is triggered. Do your logic here!
- **module.name** (Optional)
  - The name of the event. **(defaults to its filename, however it is recommended to fill this out!!)**
- **module.description** (Optional)
  - Give your command a description. **(defaults to `..`)**
- **module.plugins** (Optional)
- A list of [plugins](#plugins) that will modify and change the behavior of your command. <br>

<br>
Event modules are laid out similarly to command modules. These listen to any and all event you provide. 
In the current version 1.1.0-beta, plugins are not supported.

### Another example of an event module

Typescript: 
```typescript
export default eventModule({
  type: EventType.Discord,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'guildMemberAdd', //name of event.
  async execute(member) {
    await member.client.channels.fetch('channel-id').send(`Welcome, ${member}`); 
  }
})
```

Javascript:
```typescript
exports.default = eventModule({
  type: EventType.Discord,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'guildMemberAdd', //name of event.
  async execute(member) {
    await member.client.channels.fetch('channel-id').send(`Welcome, ${member}`); 
  }
})
```
# Good to know

## sern.config.json
A sern.config.json, although not necessary, allows your project to communicate with our cli.
For example, when installing typescript plugins, the language property is necessary to install from our 
[open source repository](https://github.com/sern-handler/awesome-plugins).
Using the cli and running `sern init --sync` on pre-existing projects should install this json file in the root directory given.
Or, if this is a brand-new project, `sern init` automatically installs it.

```json
{
  "language": "typescript",
  "paths": {
    "base": "src",
    "commands": "commands"
  }
}
```

# Conclusion
If you reached this far, thank you for reading! We hope you have learned the necessities you need 
to create a bot with the sern framework. If you have any other questions, bugs, concerns, please join our
[community server](https://discord.gg/QgnfxWzrcj), and we'll be glad to answer your questions.