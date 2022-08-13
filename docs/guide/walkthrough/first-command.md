---
sidebar_position: 3
---

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
To view what each of these properties mean in depth, visit the [official documentation](https://sern-handler.js.org/docs/api/enums/CommandType).
### Types of command modules
Every command module `type` is part of an enum. This field allows type inference for the rest of a module's fields. <br />
All the command types can be found in the [official documentation](https://sern-handler.js.org/docs/api/enums/CommandType)!
<p>So, lets say you want to make a command module that listens to modals. </p>

**Note**: Keep in mind you'll need to send a modal with a custom id `dm-me`. This example below is the response to a modal being sent.
<br />

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
The provided Context class helps with modules of `CommandType.Both` (A mixture of slash / legacy commands).

The Context class is passed into modules with type :
- `CommandType.Both`
- `CommandType.Slash`
- `CommandType.Text`

This data structure helps interop between legacy commands and slash commands with ease.
:::note
View the [docs](../../api/classes/Context.md)
:::

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
