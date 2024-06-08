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

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L38)

***

### emitter

> **emitter**: keyof `Dependencies`

#### Source

[src/types/core-modules.ts:55](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L55)

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

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:54](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L54)

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

> **type**: [`External`](/v4/api/enumerations/eventtype/#external)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:56](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L56)

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

[src/types/core-modules.ts:57](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/types/core-modules.ts#L57)
