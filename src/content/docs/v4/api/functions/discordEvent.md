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

[src/core/modules.ts:97](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/modules.ts#L97)
