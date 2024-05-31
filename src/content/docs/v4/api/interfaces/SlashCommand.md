---
editUrl: false
next: false
prev: false
title: "SlashCommand"
---

## Extends

- `Module`

## Properties

### description

> **description**: `string`

#### Overrides

`Module.description`

#### Source

[src/types/core-modules.ts:131](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L131)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: [`Context`](/v4/api/classes/context/)

• **tbd**: [`SDT`](/v4/api/type-aliases/sdt/)

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:133](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L133)

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

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L39)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L35)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L36)

***

### options?

> `optional` **options**: [`SernOptionsData`](/v4/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:132](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L132)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L37)

***

### type

> **type**: [`Slash`](/v4/api/enumerations/commandtype/#slash)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:130](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/types/core-modules.ts#L130)
