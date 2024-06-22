---
editUrl: false
next: false
prev: false
title: "PresenceConfig"
---

> **PresenceConfig**\<`T`\>: `object`

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Type declaration

### execute()

> **execute**: (...`v`) => [`PresenceResult`](/v4/api/interfaces/presenceresult/)

#### Parameters

• ...**v**: `IntoDependencies`\<`T`\>

#### Returns

[`PresenceResult`](/v4/api/interfaces/presenceresult/)

### inject?

> `optional` **inject**: [`...T`]

## Source

[src/core/presences.ts:60](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/presences.ts#L60)
