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

[src/core/presences.ts:61](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/presences.ts#L61)
