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

[src/types/core-modules.ts:118](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L118)

***

### execute()

> **execute**: (`ctx`, `args`) => `unknown`

#### Parameters

• **ctx**: [`Context`](/v3/api/classes/context/)

• **args**: [`"slash"`, [`SlashOptions`](/v3/api/type-aliases/slashoptions/)]

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:120](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L120)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L33)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v3/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L34)

***

### options?

> `optional` **options**: [`SernOptionsData`](/v3/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:119](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L119)

***

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L35)

***

### type

> **type**: [`Slash`](/v3/api/enumerations/commandtype/#slash)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:117](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/types/core-modules.ts#L117)
