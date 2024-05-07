---
id: "DefaultModuleManager"
title: "Class: DefaultModuleManager"
sidebar_label: "DefaultModuleManager"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0
Version 4.0.0 will internalize this api. Please refrain from using DefaultModuleManager!

## Implements

- [`ModuleManager`](../interfaces/ModuleManager.md)

## Constructors

### constructor

• **new DefaultModuleManager**(`moduleStore`): [`DefaultModuleManager`](DefaultModuleManager.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleStore` | [`CoreModuleStore`](../interfaces/CoreModuleStore.md) |

#### Returns

[`DefaultModuleManager`](DefaultModuleManager.md)

#### Defined in

[src/core/structures/services/module-manager.ts:11](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L11)

## Properties

### moduleStore

• `Private` **moduleStore**: [`CoreModuleStore`](../interfaces/CoreModuleStore.md)

#### Defined in

[src/core/structures/services/module-manager.ts:11](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L11)

## Methods

### get

▸ **get**(`id`): `undefined` \| `Module`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| `Module`

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[get](../interfaces/ModuleManager.md#get)

#### Defined in

[src/core/structures/services/module-manager.ts:34](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L34)

___

### getByNameCommandType

▸ **getByNameCommandType**<`T`\>(`name`, `commandType`): `undefined` \| [`CommandModuleDefs`](../interfaces/CommandModuleDefs.md)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](../enums/CommandType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `commandType` | `T` |

#### Returns

`undefined` \| [`CommandModuleDefs`](../interfaces/CommandModuleDefs.md)[`T`]

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[getByNameCommandType](../interfaces/ModuleManager.md#getbynamecommandtype)

#### Defined in

[src/core/structures/services/module-manager.ts:14](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L14)

___

### getMetadata

▸ **getMetadata**(`m`): `CommandMeta`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Module` |

#### Returns

`CommandMeta`

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[getMetadata](../interfaces/ModuleManager.md#getmetadata)

#### Defined in

[src/core/structures/services/module-manager.ts:26](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L26)

___

### getPublishableCommands

▸ **getPublishableCommands**(): [`CommandModule`](../modules.md#commandmodule)[]

#### Returns

[`CommandModule`](../modules.md#commandmodule)[]

**`Deprecated`**

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[getPublishableCommands](../interfaces/ModuleManager.md#getpublishablecommands)

#### Defined in

[src/core/structures/services/module-manager.ts:41](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L41)

___

### set

▸ **set**(`id`, `path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `path` | [`CommandModule`](../modules.md#commandmodule) |

#### Returns

`void`

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[set](../interfaces/ModuleManager.md#set)

#### Defined in

[src/core/structures/services/module-manager.ts:37](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L37)

___

### setMetadata

▸ **setMetadata**(`m`, `c`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Module` |
| `c` | `CommandMeta` |

#### Returns

`void`

#### Implementation of

[ModuleManager](../interfaces/ModuleManager.md).[setMetadata](../interfaces/ModuleManager.md#setmetadata)

#### Defined in

[src/core/structures/services/module-manager.ts:22](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/structures/services/module-manager.ts#L22)
