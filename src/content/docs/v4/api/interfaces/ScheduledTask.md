---
editUrl: false
next: false
prev: false
title: "ScheduledTask"
---

## Since

4.0.0

## Properties

### name?

> `optional` **name**: `string`

#### Source

[src/types/core-modules.ts:455](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L455)

***

### timezone?

> `optional` **timezone**: `string`

#### Source

[src/types/core-modules.ts:457](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L457)

***

### trigger

> **trigger**: `string` \| `Date`

#### Source

[src/types/core-modules.ts:456](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L456)

## Methods

### execute()

> **execute**(`tasks`, `sdt`): `Awaitable`\<`void`\>

#### Parameters

• **tasks**: `ScheduledTaskContext`

• **sdt**: `TaskAttrs`

#### Returns

`Awaitable`\<`void`\>

#### Source

[src/types/core-modules.ts:458](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L458)
