---
id: "InitPlugin"
title: "Interface: InitPlugin<Args>"
sidebar_label: "InitPlugin"
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

[src/types/plugin.ts:35](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L35)

___

### type

• **type**: [`Init`](../enums/PluginType.md#init)

#### Defined in

[src/types/plugin.ts:34](https://github.com/sern-handler/handler/blob/33f1446/src/types/plugin.ts#L34)
