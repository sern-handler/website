---
id: "ButtonCommand"
title: "Interface: ButtonCommand"
sidebar_label: "ButtonCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ButtonCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `ButtonInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `ButtonInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:85](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L85)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`Button`](../enums/CommandType.md#button)\>[]

#### Defined in

[src/types/module.ts:83](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L83)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:84](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L84)

___

### type

• **type**: [`Button`](../enums/CommandType.md#button)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:82](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L82)
