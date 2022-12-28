---
id: "UserSelectCommand"
title: "Interface: UserSelectCommand"
sidebar_label: "UserSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`UserSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `UserSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `UserSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:120](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L120)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`UserSelect`](../enums/CommandType.md#userselect)\>[]

#### Defined in

[src/types/module.ts:118](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L118)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:119](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L119)

___

### type

• **type**: [`UserSelect`](../enums/CommandType.md#userselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:117](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L117)
