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

[src/types/core-modules.ts:455](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L455)

***

### timezone?

> `optional` **timezone**: `string`

#### Source

[src/types/core-modules.ts:457](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L457)

***

### trigger

> **trigger**: `string` \| `Date`

#### Source

[src/types/core-modules.ts:456](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L456)

## Methods

### execute()

> **execute**(`tasks`, `sdt`): `Awaitable`\<`void`\>

#### Parameters

• **tasks**: `ScheduledTaskContext`

• **sdt**: `TaskAttrs`

#### Returns

`Awaitable`\<`void`\>

#### Source

[src/types/core-modules.ts:458](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L458)
