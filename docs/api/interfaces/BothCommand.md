---
id: "BothCommand"
title: "Interface: BothCommand"
sidebar_label: "BothCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`BothCommand`**

## Properties

### alias

• `Optional` **alias**: `string`[]

#### Defined in

[src/types/core-modules.ts:126](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L126)

___

### description

• **description**: `string`

#### Overrides

Module.description

#### Defined in

[src/types/core-modules.ts:127](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L127)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [`Args`](../modules.md#args)) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [`Args`](../modules.md#args) |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:129](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L129)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L34)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L35)

___

### options

• `Optional` **options**: [`SernOptionsData`](../modules.md#sernoptionsdata)[]

#### Defined in

[src/types/core-modules.ts:128](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L128)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L36)

___

### type

• **type**: [`Both`](../enums/CommandType.md#both)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:125](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L125)
