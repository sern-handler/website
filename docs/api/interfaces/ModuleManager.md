---
id: "ModuleManager"
title: "Interface: ModuleManager"
sidebar_label: "ModuleManager"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0
 - direct access to the module manager will be removed in version 4

## Hierarchy

- `MetadataAccess`

  ↳ **`ModuleManager`**

## Implemented by

- [`DefaultModuleManager`](../classes/DefaultModuleManager.md)

## Methods

### get

▸ **get**(`id`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/contracts/module-manager.ts:19](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L19)

___

### getByNameCommandType

▸ **getByNameCommandType**<`T`\>(`name`, `commandType`): `undefined` \| `Promise`<[`CommandModuleDefs`](CommandModuleDefs.md)[`T`]\>

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

`undefined` \| `Promise`<[`CommandModuleDefs`](CommandModuleDefs.md)[`T`]\>

#### Defined in

[src/core/contracts/module-manager.ts:23](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L23)

___

### getMetadata

▸ **getMetadata**(`m`): `undefined` \| `CommandMeta`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Module` |

#### Returns

`undefined` \| `CommandMeta`

#### Inherited from

MetadataAccess.getMetadata

#### Defined in

[src/core/contracts/module-manager.ts:10](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L10)

___

### getPublishableCommands

▸ **getPublishableCommands**(): `Promise`<[`CommandModule`](../modules.md#commandmodule)[]\>

#### Returns

`Promise`<[`CommandModule`](../modules.md#commandmodule)[]\>

#### Defined in

[src/core/contracts/module-manager.ts:22](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L22)

___

### set

▸ **set**(`id`, `path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `path` | `string` |

#### Returns

`void`

#### Defined in

[src/core/contracts/module-manager.ts:21](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L21)

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

#### Inherited from

MetadataAccess.setMetadata

#### Defined in

[src/core/contracts/module-manager.ts:11](https://github.com/sern-handler/handler/blob/504cdee/src/core/contracts/module-manager.ts#L11)
