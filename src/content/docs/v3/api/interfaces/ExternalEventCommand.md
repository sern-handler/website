---
editUrl: false
next: false
prev: false
title: "ExternalEventCommand"
---

## Extends

- `Module`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L36)

***

### emitter

> **emitter**: keyof `Dependencies`

#### Source

[src/types/core-modules.ts:48](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L48)

***

### name?

> `optional` **name**: `string`

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:47](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L47)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v3/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L34)

***

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L35)

***

### type

> **type**: [`External`](/v3/api/enumerations/eventtype/#external)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:49](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L49)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: `unknown`[]

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:50](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L50)
