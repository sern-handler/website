---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): `Module`

Create event modules from discord.js client events,
This is an [eventModule](../../../../../../v4/api/functions/eventmodule) for discord events,
where typings can be very bad.

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **mod**

• **mod.execute**

• **mod.name**: `T`

## Returns

`Module`

## Experimental

## Source

[src/core/modules.ts:39](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/modules.ts#L39)
