---
id: "TextCommand"
title: "Interface: TextCommand"
sidebar_label: "TextCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`TextCommand`**

## Properties

### alias

• `Optional` **alias**: `string`[]

#### Defined in

[src/types/core-modules.ts:113](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L113)

___

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L37)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [``"text"``, `string`[]]) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [``"text"``, `string`[]] |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:114](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L114)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L34)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L36)

___

### type

• **type**: [`Text`](../enums/CommandType.md#text)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:112](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L112)
