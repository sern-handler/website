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

[src/types/plugin.ts:61](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L61)

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

[src/types/plugin.ts:63](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L63)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/plugin.ts:60](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L60)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Defined in

[src/types/plugin.ts:62](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L62)
