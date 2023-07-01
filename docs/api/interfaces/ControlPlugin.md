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

▸ (`...args`): [`PluginResult`](../modules.md#pluginresult)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Args` |

##### Returns

[`PluginResult`](../modules.md#pluginresult)

#### Defined in

[src/core/types/plugins.ts:68](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/plugins.ts#L68)

___

### type

• **type**: [`Control`](../enums/PluginType.md#control)

#### Defined in

[src/core/types/plugins.ts:67](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/plugins.ts#L67)
