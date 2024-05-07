---
id: "CommandPlugin"
title: "Interface: CommandPlugin<T>"
sidebar_label: "CommandPlugin"
sidebar_position: 0
custom_edit_url: null
---

**`Deprecated`**

Use the newer helper functions and import { controller } from '@sern/handler'

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](../enums/CommandType.md) = [`CommandType`](../enums/CommandType.md) |

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/plugin.ts:51](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L51)

___

### execute

• **execute**: (`m`: [`InitArgs`](InitArgs.md)<[`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\>, `controller?`: [`Deprecated`](../modules.md#deprecated)<``"Please import controller instead"``\>) => [`PluginResult`](../modules.md#pluginresult)

#### Type declaration

▸ (`m`, `controller?`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`InitArgs`](InitArgs.md)<[`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `controller?` | [`Deprecated`](../modules.md#deprecated)<``"Please import controller instead"``\> |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/types/plugin.ts:53](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L53)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/plugin.ts:50](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L50)

___

### type

• **type**: [`Init`](../enums/PluginType.md#init)

#### Defined in

[src/types/plugin.ts:52](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L52)
