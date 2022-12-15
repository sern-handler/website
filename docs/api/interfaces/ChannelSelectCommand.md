---
id: "ChannelSelectCommand"
title: "Interface: ChannelSelectCommand"
sidebar_label: "ChannelSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ChannelSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `ChannelSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `ChannelSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:99](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L99)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`ChannelSelect`](../enums/CommandType.md#channelselect)\>[]

#### Defined in

[src/types/module.ts:97](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L97)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:98](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L98)

___

### type

• **type**: [`ChannelSelect`](../enums/CommandType.md#channelselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:96](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L96)
