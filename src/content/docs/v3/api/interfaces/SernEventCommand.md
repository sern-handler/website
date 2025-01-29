---
editUrl: false
next: false
prev: false
title: "SernEventCommand"
---

## Extends

- `Module`

## Type parameters

• **T** *extends* keyof [`SernEventsMapping`](/v3/api/interfaces/serneventsmapping/) = keyof [`SernEventsMapping`](/v3/api/interfaces/serneventsmapping/)

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L36)

***

### name?

> `optional` **name**: `T`

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:42](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L42)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v3/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L34)

***

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L35)

***

### type

> **type**: [`Sern`](/v3/api/enumerations/eventtype/#sern)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:43](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L43)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: [`SernEventsMapping`](/v3/api/interfaces/serneventsmapping/)\[`T`\]

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:44](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L44)
