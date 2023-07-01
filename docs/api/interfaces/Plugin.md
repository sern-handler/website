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

▸ (`...args`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/core/types/plugins.ts:59](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/plugins.ts#L59)

___

### type

• **type**: [`PluginType`](../enums/PluginType.md)

#### Defined in

[src/core/types/plugins.ts:58](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/plugins.ts#L58)
