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

[src/handler/contracts/moduleManager.ts:6](https://github.com/sern-handler/handler/blob/b641472/src/handler/contracts/moduleManager.ts#L6)

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

[src/handler/contracts/moduleManager.ts:9](https://github.com/sern-handler/handler/blob/b641472/src/handler/contracts/moduleManager.ts#L9)
