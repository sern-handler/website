---
editUrl: false
next: false
prev: false
title: "ChannelSelectCommand"
---

## Extends

- `Module`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L38)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: `ChannelSelectMenuInteraction`\<`CacheType`\>

• **tbd**: `SDT`

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:90](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L90)

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

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L39)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L35)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L36)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L37)

***

### type

> **type**: [`ChannelSelect`](/v4/api/enumerations/commandtype/#channelselect)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:89](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/types/core-modules.ts#L89)
