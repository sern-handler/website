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

[src/types/core-plugin.ts:73](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-plugin.ts#L73)

___

### type

• **type**: [`Control`](../enums/PluginType.md#control)

#### Defined in

[src/types/core-plugin.ts:72](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-plugin.ts#L72)
