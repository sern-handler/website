---
id: "SlashCommand"
title: "Interface: SlashCommand"
sidebar_label: "SlashCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`SlashCommand`**

## Properties

### description

• **description**: `string`

#### Overrides

Module.description

#### Defined in

[src/types/core-modules.ts:117](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L117)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [``"slash"``, [`SlashOptions`](../modules.md#slashoptions)]) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [``"slash"``, [`SlashOptions`](../modules.md#slashoptions)] |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:119](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L119)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:32](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L32)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L33)

___

### options

• `Optional` **options**: [`SernOptionsData`](../modules.md#sernoptionsdata)[]

#### Defined in

[src/types/core-modules.ts:118](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L118)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Slash`](../enums/CommandType.md#slash)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:116](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L116)
