---
id: "DefaultModuleManager"
title: "Class: DefaultModuleManager"
sidebar_label: "DefaultModuleManager"
sidebar_position: 0
custom_edit_url: null
---

## Implements

- [`ModuleManager`](../interfaces/ModuleManager.md)

## Constructors

### constructor

• **new DefaultModuleManager**(`moduleStore`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleStore` | [`ModuleStore`](ModuleStore.md) |

#### Defined in

[src/handler/contracts/moduleManager.ts:14](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/moduleManager.ts#L14)

## Methods

### get

▸ **get**<`T`\>(`strat`): `undefined` \| [`Processed`](../modules.md#processed)<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](../enums/CommandType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `strat` | (`ms`: [`ModuleStore`](ModuleStore.md)) => `undefined` \| [`Processed`](../modules.md#processed)<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]\> |

#### Returns

`undefined` \| [`Processed`](../modules.md#processed)<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`]\>

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[get](../interfaces/ModuleManager.md#get)

#### Defined in

[src/handler/contracts/moduleManager.ts:15](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/moduleManager.ts#L15)

___

### set

▸ **set**(`strat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `strat` | (`ms`: [`ModuleStore`](ModuleStore.md)) => `void` |

#### Returns

`void`

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[set](../interfaces/ModuleManager.md#set)

#### Defined in

[src/handler/contracts/moduleManager.ts:21](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/moduleManager.ts#L21)
