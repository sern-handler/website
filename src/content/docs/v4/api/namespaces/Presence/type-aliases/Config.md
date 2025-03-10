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

[src/core/presences.ts:50](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/presences.ts#L50)
