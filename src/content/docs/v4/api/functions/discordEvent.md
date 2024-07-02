---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): [`Module`](/v4/api/interfaces/module/)

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

[`Module`](/v4/api/interfaces/module/)

## Experimental

## Source

[src/core/modules.ts:42](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/modules.ts#L42)
