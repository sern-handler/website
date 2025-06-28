---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): [`Module`](/v4/api/interfaces/module/)

Create event modules from discord.js client events,
This was an [eventModule](../../../../../../v4/api/functions/eventmodule) for discord events,
where typings were bad.

:::caution[Deprecated]
Use [eventModule](/v4/api/functions/eventmodule/) instead
:::

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **mod**

• **mod.execute**

• **mod.name**: `T`

• **mod.once?**: `boolean`

## Returns

[`Module`](/v4/api/interfaces/module/)

## Source

[src/core/modules.ts:97](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/modules.ts#L97)
