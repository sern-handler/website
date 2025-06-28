---
editUrl: false
next: false
prev: false
title: "commandModule"
---

> **commandModule**(`mod`): [`Module`](/v4/api/interfaces/module/)

Creates a command module with standardized structure and plugin support.

## Parameters

• **mod**: `InputCommand`

Command module configuration

## Returns

[`Module`](/v4/api/interfaces/module/)

Processed command module ready for registration

## Since

1.0.0

## Example

```ts
// Basic slash command
export default commandModule({
  type: CommandType.Slash,
  description: "Ping command",
  execute: async (ctx) => {
    await ctx.reply("Pong! 🏓");
  }
});
```

## Example

```ts
// Command with component interaction
export default commandModule({
  type: CommandType.Slash,
  description: "Interactive command",
  execute: async (ctx) => {
    const button = new ButtonBuilder({
      customId: "btn/someData",
      label: "Click me",
      style: ButtonStyle.Primary
    });
    await ctx.reply({
      content: "Interactive message",
      components: [new ActionRowBuilder().addComponents(button)]
    });
  }
});
```

## Source

[src/core/modules.ts:47](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/modules.ts#L47)
