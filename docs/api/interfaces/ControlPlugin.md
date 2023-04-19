---
id: "ControlPlugin"
title: "Interface: ControlPlugin<Args>"
sidebar_label: "ControlPlugin"
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

[src/types/plugin.ts:39](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L39)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Defined in

[src/types/plugin.ts:38](https://github.com/sern-handler/handler/blob/c1f6906/src/types/plugin.ts#L38)
