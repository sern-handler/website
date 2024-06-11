---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): `Module`

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

`Module`

## Experimental

## Source

[src/core/modules.ts:39](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/modules.ts#L39)
