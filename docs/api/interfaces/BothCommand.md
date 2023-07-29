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

[src/types/core-modules.ts:124](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L124)

___

### description

• **description**: `string`

#### Overrides

Module.description

#### Defined in

[src/types/core-modules.ts:125](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L125)

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

[src/types/core-modules.ts:127](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L127)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:32](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L32)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L33)

___

### options

• `Optional` **options**: [`SernOptionsData`](../modules.md#sernoptionsdata)[]

#### Defined in

[src/types/core-modules.ts:126](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L126)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Both`](../enums/CommandType.md#both)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:123](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L123)
