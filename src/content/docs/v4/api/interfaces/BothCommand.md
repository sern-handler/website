---
editUrl: false
next: false
prev: false
title: "BothCommand"
---

## Extends

- [`Module`](/v4/api/interfaces/module/)

## Properties

### description

> **description**: `string`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`description`](/v4/api/interfaces/module/#description)

#### Source

[src/types/core-modules.ts:140](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L140)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: [`Context`](/v4/api/classes/context/)

• **tbd**: [`SDT`](/v4/api/type-aliases/sdt/)

#### Returns

`unknown`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`execute`](/v4/api/interfaces/module/#execute)

#### Source

[src/types/core-modules.ts:142](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L142)

***

### locals

> **locals**: `Record`\<`string`, `unknown`\>

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`locals`](/v4/api/interfaces/module/#locals)

#### Source

[src/types/core-modules.ts:44](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L44)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`meta`](/v4/api/interfaces/module/#meta)

#### Source

[src/types/core-modules.ts:40](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L40)

***

### name?

> `optional` **name**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`name`](/v4/api/interfaces/module/#name)

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L36)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`onEvent`](/v4/api/interfaces/module/#onevent)

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L37)

***

### options?

> `optional` **options**: [`SernOptionsData`](/v4/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:141](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L141)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`plugins`](/v4/api/interfaces/module/#plugins)

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L38)

***

### type

> **type**: [`Both`](/v4/api/enumerations/commandtype/#both)

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`type`](/v4/api/interfaces/module/#type)

#### Source

[src/types/core-modules.ts:139](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L139)
