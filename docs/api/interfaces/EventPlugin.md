---
id: "EventPlugin"
title: "Interface: EventPlugin<T>"
sidebar_label: "EventPlugin"
sidebar_position: 0
custom_edit_url: null
---

**`Deprecated`**

Use the newer helper functions

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](../enums/CommandType.md) |

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/plugin.ts:64](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L64)

___

### execute

• **execute**: (`args`: [`CommandArgs`](../modules.md#commandargs)<`T`, [`Event`](../enums/PluginType.md#event)\>, `controller?`: [`Controller`](Controller.md)) => [`PluginResult`](../modules.md#pluginresult)

#### Type declaration

▸ (`args`, `controller?`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`CommandArgs`](../modules.md#commandargs)<`T`, [`Event`](../enums/PluginType.md#event)\> |
| `controller?` | [`Controller`](Controller.md) |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/types/plugin.ts:66](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L66)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/plugin.ts:63](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L63)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Defined in

[src/types/plugin.ts:65](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L65)
