---
editUrl: false
next: false
prev: false
title: "BothCommand"
---

## Extends

- `Module`

## Properties

### alias?

> `optional` **alias**: `string`[]

#### Source

[src/types/core-modules.ts:125](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L125)

***

### description

> **description**: `string`

#### Overrides

`Module.description`

#### Source

[src/types/core-modules.ts:126](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L126)

***

### execute()

> **execute**: (`ctx`, `args`) => `unknown`

#### Parameters

• **ctx**: [`Context`](/v3/api/classes/context/)

• **args**: [`Args`](/v3/api/type-aliases/args/)

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:128](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L128)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L33)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v3/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L34)

***

### options?

> `optional` **options**: [`SernOptionsData`](/v3/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:127](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L127)

***

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L35)

***

### type

> **type**: [`Both`](/v3/api/enumerations/commandtype/#both)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:124](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L124)
