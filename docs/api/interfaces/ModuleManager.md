---
id: "ModuleManager"
title: "Interface: ModuleManager"
sidebar_label: "ModuleManager"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`DefaultModuleManager`](../classes/DefaultModuleManager.md)

## Methods

### get

▸ **get**<`T`\>(`strat`): `undefined` \| [`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](../enums/CommandType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strat` | (`ms`: [`ModuleStore`](../classes/ModuleStore.md)) => `undefined` \| [`Processed`](../modules.md#processed)<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]\> |

#### Returns

`undefined` \| [`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]

#### Defined in

[src/handler/contracts/moduleManager.ts:7](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/moduleManager.ts#L7)

___

### set

▸ **set**(`strat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strat` | (`ms`: [`ModuleStore`](../classes/ModuleStore.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/handler/contracts/moduleManager.ts:10](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/moduleManager.ts#L10)
