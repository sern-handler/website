---
editUrl: false
next: false
prev: false
title: "Config"
---

> **Config**\<`T`\>: `object`

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Type declaration

### execute()

> **execute**: (...`v`) => [`Result`](/v3/api/namespaces/presence/interfaces/result/)

#### Parameters

• ...**v**: `IntoDependencies`\<`T`\>

#### Returns

[`Result`](/v3/api/namespaces/presence/interfaces/result/)

### inject?

> `optional` **inject**: [`...T`]

## Source

[src/core/presences.ts:17](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/presences.ts#L17)
