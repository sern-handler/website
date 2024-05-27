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

[src/core/modules.ts:39](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/modules.ts#L39)
