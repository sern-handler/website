---
editUrl: false
next: false
prev: false
title: "ModalSubmitCommand"
---

## Extends

- `Module`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L38)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: `ModalSubmitInteraction`\<`CacheType`\>

• **tbd**: [`SDT`](/v4/api/type-aliases/sdt/)

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:110](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L110)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Inherited from

`Module.meta`

#### Source

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L39)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L35)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L36)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L37)

***

### type

> **type**: [`Modal`](/v4/api/enumerations/commandtype/#modal)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:109](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L109)
