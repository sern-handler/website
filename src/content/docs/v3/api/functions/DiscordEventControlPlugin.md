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

[src/core/create-plugins.ts:58](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/create-plugins.ts#L58)
