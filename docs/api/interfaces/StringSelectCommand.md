---
id: "StringSelectCommand"
title: "Interface: StringSelectCommand"
sidebar_label: "StringSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`StringSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `StringSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `StringSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:92](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L92)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`StringSelect`](../enums/CommandType.md#stringselect)\>[]

#### Defined in

[src/types/module.ts:90](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L90)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:91](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L91)

___

### type

• **type**: [`StringSelect`](../enums/CommandType.md#stringselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:89](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L89)
