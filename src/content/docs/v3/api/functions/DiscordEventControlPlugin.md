---
editUrl: false
next: false
prev: false
title: "DiscordEventControlPlugin"
---

> **DiscordEventControlPlugin**\<`T`\>(`name`, `execute`): [`Plugin`](/v3/api/interfaces/plugin/)\<`unknown`[]\>

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **name**: `T`

• **execute**

## Returns

[`Plugin`](/v3/api/interfaces/plugin/)\<`unknown`[]\>

## Since

2.5.0

## Experimental

A specialized function for creating control plugins with discord.js ClientEvents.
Will probably be moved one day!

## Source

[src/core/create-plugins.ts:58](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/create-plugins.ts#L58)
