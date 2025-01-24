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

[src/core/ioc.ts:103](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/ioc.ts#L103)
