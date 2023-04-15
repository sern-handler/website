---
id: "Plugin"
title: "Interface: Plugin<Args>"
sidebar_label: "Plugin"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `Args` | extends `any`[] = `any`[] |

## Properties

### execute

• **execute**: (...`args`: `Args`) => [`PluginResult`](../modules.md#pluginresult)

#### Type declaration

▸ (...`args`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/types/plugin.ts:30](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L30)

___

### type

• **type**: [`PluginType`](../enums/PluginType.md)

#### Defined in

[src/types/plugin.ts:29](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L29)
