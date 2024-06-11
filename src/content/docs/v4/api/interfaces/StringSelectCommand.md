---
editUrl: false
next: false
prev: false
title: "StringSelectCommand"
---

## Extends

- `Module`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L39)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: `StringSelectMenuInteraction`\<`CacheType`\>

• **tbd**: [`SDT`](/v4/api/type-aliases/sdt/)

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:86](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L86)

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

[src/types/core-modules.ts:40](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L40)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L36)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L37)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L38)

***

### type

> **type**: [`StringSelect`](/v4/api/enumerations/commandtype/#stringselect)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:85](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L85)
