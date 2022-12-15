---
id: "ContextMenuMsg"
title: "Interface: ContextMenuMsg"
sidebar_label: "ContextMenuMsg"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ContextMenuMsg`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `MessageContextMenuCommandInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `MessageContextMenuCommandInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:78](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L78)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`EventPlugin`](EventPlugin.md)<[`CtxMsg`](../enums/CommandType.md#ctxmsg)\>[]

#### Defined in

[src/types/module.ts:76](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L76)

___

### plugins

• **plugins**: [`CommandPlugin`](CommandPlugin.md)<keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs)\>[]

#### Defined in

[src/types/module.ts:77](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L77)

___

### type

• **type**: [`CtxMsg`](../enums/CommandType.md#ctxmsg)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:75](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L75)
