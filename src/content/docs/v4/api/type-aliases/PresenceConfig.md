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

[src/core/presences.ts:60](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/core/presences.ts#L60)
