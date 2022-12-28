---
id: "EventPlugin"
title: "Interface: EventPlugin<K>"
sidebar_label: "EventPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs) = keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs) |

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`EventPlugin`**

## Properties

### description

• `Optional` **description**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[description](Plugin.md#description)

#### Defined in

[src/handler/plugins/plugin.ts:33](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L33)

___

### execute

• **execute**: (`event`: `Parameters`<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`K`][``"execute"``]\>, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`event`, `controller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Parameters`<[`CommandModuleDefs`](../modules.md#commandmoduledefs)[`K`][``"execute"``]\> |
| `controller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:82](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L82)

___

### name

• `Optional` **name**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[name](Plugin.md#name)

#### Defined in

[src/handler/plugins/plugin.ts:31](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L31)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Overrides

[Plugin](Plugin.md).[type](Plugin.md#type)

#### Defined in

[src/handler/plugins/plugin.ts:81](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L81)
