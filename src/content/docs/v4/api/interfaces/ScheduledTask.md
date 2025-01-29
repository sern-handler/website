---
editUrl: false
next: false
prev: false
title: "ScheduledTask"
---

## Properties

### name?

> `optional` **name**: `string`

#### Source

[src/types/core-modules.ts:403](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L403)

***

### timezone?

> `optional` **timezone**: `string`

#### Source

[src/types/core-modules.ts:405](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L405)

***

### trigger

> **trigger**: `string` \| `Date`

#### Source

[src/types/core-modules.ts:404](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L404)

## Methods

### execute()

> **execute**(`tasks`, `sdt`): `Awaitable`\<`void`\>

#### Parameters

• **tasks**: `ScheduledTaskContext`

• **sdt**: `TaskAttrs`

#### Returns

`Awaitable`\<`void`\>

#### Source

[src/types/core-modules.ts:406](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L406)
