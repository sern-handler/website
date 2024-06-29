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

[src/core/presences.ts:60](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/core/presences.ts#L60)
