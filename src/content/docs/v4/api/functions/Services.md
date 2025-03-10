---
editUrl: false
next: false
prev: false
title: "Services"
---

> **Services**\<`T`\>(...`keys`): `IntoDependencies`\<`T`\>

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Parameters

• ...**keys**: [`...T[]`]

## Returns

`IntoDependencies`\<`T`\>

array of dependencies, in the same order of keys provided

## Since

3.0.0
The plural version of [Service](../../../../../../v4/api/functions/service)

## Throws

if container is absent or not present

## Source

[src/core/ioc.ts:103](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L103)
