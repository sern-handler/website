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

[src/types/core-modules.ts:111](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L111)

___

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L35)

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

[src/types/core-modules.ts:112](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L112)

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

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Text`](../enums/CommandType.md#text)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:110](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L110)
