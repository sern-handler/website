---
id: "ModuleManager"
title: "Interface: ModuleManager"
sidebar_label: "ModuleManager"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0

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

[src/core/contracts/module-manager.ts:13](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L13)

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

[src/core/contracts/module-manager.ts:18](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L18)

___

### getMetadata

▸ **getMetadata**(`m`): `undefined` \| `CommandMeta`

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | `Module` |

#### Returns

`undefined` \| `CommandMeta`

#### Defined in

[src/core/contracts/module-manager.ts:14](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L14)

___

### getPublishableCommands

▸ **getPublishableCommands**(): `Promise`<[`CommandModule`](../modules.md#commandmodule)[]\>

#### Returns

`Promise`<[`CommandModule`](../modules.md#commandmodule)[]\>

#### Defined in

[src/core/contracts/module-manager.ts:17](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L17)

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

[src/core/contracts/module-manager.ts:16](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L16)

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

#### Defined in

[src/core/contracts/module-manager.ts:15](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/module-manager.ts#L15)
