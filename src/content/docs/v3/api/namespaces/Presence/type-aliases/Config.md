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

[src/core/presences.ts:17](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/presences.ts#L17)
