---
id: "TextCommand"
title: "Interface: TextCommand"
sidebar_label: "TextCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`TextCommand`**

## Properties

### alias

• `Optional` **alias**: `string`[]

#### Defined in

[src/types/module.ts:46](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L46)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

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

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:47](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L47)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`Text`](../enums/CommandType.md#text)\>[]

#### Defined in

[src/types/module.ts:44](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L44)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:45](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L45)

___

### type

• **type**: [`Text`](../enums/CommandType.md#text)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:43](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L43)
