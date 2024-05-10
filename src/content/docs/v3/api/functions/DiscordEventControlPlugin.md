---
editUrl: false
next: false
prev: false
title: "DiscordEventControlPlugin"
---

> **DiscordEventControlPlugin**\<`T`\>(`name`, `execute`): [`Plugin`](/api/interfaces/plugin/)\<`unknown`[]\>

## Type parameters

• **T** *extends* keyof `ClientEvents`

## Parameters

• **name**: `T`

• **execute**

## Returns

[`Plugin`](/api/interfaces/plugin/)\<`unknown`[]\>

## Since

2.5.0

## Experimental

A specialized function for creating control plugins with discord.js ClientEvents.
Will probably be moved one day!

## Source

[src/core/create-plugins.ts:58](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L58)
