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

[src/core/presences.ts:50](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/presences.ts#L50)
