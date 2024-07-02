---
editUrl: false
next: false
prev: false
title: "ButtonCommand"
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

### execute()

> **execute**: (`ctx`) => `unknown`

#### Parameters

• **ctx**: `ButtonInteraction`\<`CacheType`\>

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:65](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L65)

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

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L35)

***

### type

> **type**: [`Button`](/v3/api/enumerations/commandtype/#button)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:64](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L64)
