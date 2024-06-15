---
editUrl: false
next: false
prev: false
title: "DiscordEventCommand"
---

## Extends

- [`Module`](/v4/api/interfaces/module/)

## Type parameters

• **T** *extends* keyof `ClientEvents` = keyof `ClientEvents`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`description`](/v4/api/interfaces/module/#description)

#### Source

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L39)

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

[src/types/core-modules.ts:40](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L40)

***

### name?

> `optional` **name**: `T`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`name`](/v4/api/interfaces/module/#name)

#### Source

[src/types/core-modules.ts:121](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L121)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`onEvent`](/v4/api/interfaces/module/#onevent)

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L37)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`plugins`](/v4/api/interfaces/module/#plugins)

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L38)

***

### type

> **type**: [`Discord`](/v4/api/enumerations/eventtype/#discord)

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`type`](/v4/api/interfaces/module/#type)

#### Source

[src/types/core-modules.ts:122](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L122)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: `ClientEvents`\[`T`\]

#### Returns

`unknown`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`execute`](/v4/api/interfaces/module/#execute)

#### Source

[src/types/core-modules.ts:123](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-modules.ts#L123)
