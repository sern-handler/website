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

[src/core/presences.ts:17](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L17)
