---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): [`Module`](/v4/api/interfaces/module/)

Create event modules from discord.js client events,
This is an [eventModule](../../../../../../../../v4/api/functions/eventmodule) for discord events,
where typings can be very bad.

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **mod**

• **mod.execute**

• **mod.name**: `T`

## Returns

[`Module`](/v4/api/interfaces/module/)

## Experimental

## Source

[src/core/modules.ts:41](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/core/modules.ts#L41)
