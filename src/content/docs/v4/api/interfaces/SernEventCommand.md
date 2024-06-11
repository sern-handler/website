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

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L39)

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

> `optional` **name**: `T`

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:49](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L49)

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

> **type**: [`Sern`](/v4/api/enumerations/eventtype/#sern)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:50](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L50)

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

[src/types/core-modules.ts:51](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/types/core-modules.ts#L51)
