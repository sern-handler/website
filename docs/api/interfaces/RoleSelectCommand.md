---
id: "RoleSelectCommand"
title: "Interface: RoleSelectCommand"
sidebar_label: "RoleSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`RoleSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `RoleSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `RoleSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:106](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L106)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`RoleSelect`](../enums/CommandType.md#roleselect)\>[]

#### Defined in

[src/types/module.ts:104](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L104)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:105](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L105)

___

### type

• **type**: [`RoleSelect`](../enums/CommandType.md#roleselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:103](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L103)
