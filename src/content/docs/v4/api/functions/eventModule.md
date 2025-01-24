---
editUrl: false
next: false
prev: false
title: "eventModule"
---

> **eventModule**\<`T`\>(`mod`): [`Module`](/v4/api/interfaces/module/)

Creates an event module for handling Discord.js or custom events.

## Type parameters

• **T** *extends* keyof `ClientEvents` = keyof `ClientEvents`

Event name from ClientEvents

## Parameters

• **mod**: `InputEvent`\<`T`\>

Event module configuration

## Returns

[`Module`](/v4/api/interfaces/module/)

Processed event module ready for registration

## Since

1.0.0

## Throws

If ControlPlugins are used in event modules

## Example

```ts
// Discord event listener
export default eventModule({
  type: EventType.Discord,
  execute: async (message) => {
    console.log(`${message.author.tag}: ${message.content}`);
  }
});
```

## Example

```ts
// Custom sern event
export default eventModule({
  type: EventType.Sern,
  execute: async (eventData) => {
    // Handle sern-specific event
  }
});
```

## Source

[src/core/modules.ts:83](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/modules.ts#L83)
