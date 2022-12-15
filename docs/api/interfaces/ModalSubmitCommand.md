---
id: "ModalSubmitCommand"
title: "Interface: ModalSubmitCommand"
sidebar_label: "ModalSubmitCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ModalSubmitCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `ModalSubmitInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `ModalSubmitInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:127](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L127)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`Modal`](../enums/CommandType.md#modal)\>[]

#### Defined in

[src/types/module.ts:125](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L125)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:126](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L126)

___

### type

• **type**: [`Modal`](../enums/CommandType.md#modal)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:124](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L124)
