---
editUrl: false
next: false
prev: false
title: "SernEventCommand"
---

## Extends

- `Module`

## Type parameters

• **T** *extends* keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/) = keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L38)

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

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L39)

***

### name?

> `optional` **name**: `T`

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:48](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L48)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L36)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L37)

***

### type

> **type**: [`Sern`](/v4/api/enumerations/eventtype/#sern)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:49](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L49)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)\[`T`\]

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:50](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/types/core-modules.ts#L50)
