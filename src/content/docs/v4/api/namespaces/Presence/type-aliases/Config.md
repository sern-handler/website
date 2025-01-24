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

> **execute**: (...`v`) => `Awaitable`\<[`Result`](/v4/api/namespaces/presence/interfaces/result/)\>

#### Parameters

• ...**v**: `IntoDependencies`\<`T`\>

#### Returns

`Awaitable`\<[`Result`](/v4/api/namespaces/presence/interfaces/result/)\>

### inject?

> `optional` **inject**: [`...T`]

## Source

[src/core/presences.ts:50](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/presences.ts#L50)
