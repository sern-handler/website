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

[src/core/presences.ts:61](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/presences.ts#L61)
