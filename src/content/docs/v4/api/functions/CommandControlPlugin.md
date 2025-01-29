---
editUrl: false
next: false
prev: false
title: "CommandControlPlugin"
---

> **CommandControlPlugin**\<`I`\>(`execute`): [`Plugin`](/v4/api/interfaces/plugin/)\<`unknown`[]\>

Creates a control plugin for command preprocessing, filtering, and state management

## Type parameters

• **I** *extends* [`CommandType`](/v4/api/enumerations/commandtype/)

Extends CommandType to enforce type safety for command modules

## Parameters

• **execute**

Function to execute during command control flow

## Returns

[`Plugin`](/v4/api/interfaces/plugin/)\<`unknown`[]\>

A plugin that runs during command execution flow

## Since

2.5.0

## Example

```ts
// Plugin to restrict command to specific guild
export const inGuild = (guildId: string) => {
  return CommandControlPlugin((ctx, sdt) => {
    if(ctx.guild.id !== guildId) {
      return controller.stop();
    }
    return controller.next();
  });
};
```

## Example

```ts
// Plugins passing state through the chain
const plugin1 = CommandControlPlugin((ctx, sdt) => {
  return controller.next({ 'plugin1/data': 'from plugin1' });
});

const plugin2 = CommandControlPlugin((ctx, sdt) => {
  return controller.next({ 'plugin2/data': ctx.user.id });
});

export default commandModule({
  type: CommandType.Slash,
  plugins: [plugin1, plugin2],
  execute: (ctx, sdt) => {
    console.log(sdt.state); // Access accumulated state
  }
});
```

## Remarks

- Control plugins are executed in order when a discord.js event is emitted
- Use controller.next() to continue to next plugin or controller.stop() to halt execution
- State can be passed between plugins using controller.next({ key: value })
- State keys should be namespaced to avoid collisions (e.g., 'plugin-name/key')
- Final accumulated state is passed to the command's execute function
- All plugins must succeed for the command to execute
- Plugins have access to dependencies through the sdt.deps object
- Useful for implementing preconditions, filters, and command preprocessing

## Source

[src/core/plugin.ts:120](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/plugin.ts#L120)
