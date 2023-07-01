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

[src/core/types/modules.ts:119](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L119)

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

[src/core/types/modules.ts:121](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L121)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/core/types/modules.ts:34](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L34)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/core/types/modules.ts:35](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L35)

___

### options

• `Optional` **options**: [`SernOptionsData`](../modules.md#sernoptionsdata)[]

#### Defined in

[src/core/types/modules.ts:120](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L120)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/core/types/modules.ts:36](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L36)

___

### type

• **type**: [`Slash`](../enums/CommandType.md#slash)

#### Overrides

Module.type

#### Defined in

[src/core/types/modules.ts:118](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L118)
