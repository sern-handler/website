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
export function serenOnly() {
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

<br /> As part of our extensibility, the plugins feature make sern just as powerful, if not more powerful than 
standard handlers.
Plugins modify and add new behavior to standard modules, extending customizability and implementing automation.

<br /> At the moment, there are two types of plugins:

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
An instance of the above object is passed into every plugin. <br />
This controls whether a module is stored into sern. <br />
Typescript:
```typescript
export function inDir(dir : string) : CommandPlugin<CommandType.Both> {
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
Above, this simple plugin logs that the module has been loaded along with a timestamp. <br />
Again, it is up to **you** to define plugin logic! The possibilities to customize your bots is endless.

## Event Plugins
![event-plugins](../../../assets/images/eventplugins.drawio.svg) <br />
- An event is emitted by discord.js.
- This event is passed to all plugins (**in order!!**),
- If all are successful,

The command is executed. Calling `controller.stop()` notifies sern that this command should not be run,
and this event is ignored.
<br /> <br />
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