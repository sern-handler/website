---
id: "SlashCommand"
title: "Interface: SlashCommand"
sidebar_label: "SlashCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`SlashCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

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

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:55](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L55)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`Slash`](../enums/CommandType.md#slash)\>[]

#### Defined in

[src/types/module.ts:52](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L52)

___

### options

• `Optional` **options**: ([`SernSubCommandData`](SernSubCommandData.md) \| [`SernSubCommandGroupData`](SernSubCommandGroupData.md) \| [`BaseOptions`](../modules.md#baseoptions))[]

#### Defined in

[src/types/module.ts:54](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L54)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:53](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L53)

___

### type

• **type**: [`Slash`](../enums/CommandType.md#slash)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:51](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L51)
