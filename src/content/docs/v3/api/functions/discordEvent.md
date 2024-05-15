---
editUrl: false
next: false
prev: false
title: "discordEvent"
---

> **discordEvent**\<`T`\>(`mod`): [`EventModule`](/v3/api/type-aliases/eventmodule/)

Create event modules from discord.js client events,
This is an [eventModule](../../../../../../v3/api/functions/eventmodule) for discord events,
where typings can be very bad.

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **mod**

• **mod.execute**

• **mod.name**: `T`

• **mod.plugins?**: [`AnyEventPlugin`](/v3/api/type-aliases/anyeventplugin/)[]

## Returns

[`EventModule`](/v3/api/type-aliases/eventmodule/)

## Experimental

## Source

[src/core/modules.ts:47](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/modules.ts#L47)
