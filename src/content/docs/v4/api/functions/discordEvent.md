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

[src/core/modules.ts:41](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/modules.ts#L41)
