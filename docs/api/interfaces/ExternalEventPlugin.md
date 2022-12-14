---
id: "ExternalEventPlugin"
title: "Interface: ExternalEventPlugin"
sidebar_label: "ExternalEventPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`ExternalEventPlugin`**

## Properties

### description

• `Optional` **description**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[description](Plugin.md#description)

#### Defined in

[src/handler/plugins/plugin.ts:33](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L33)

___

### execute

• **execute**: (`args`: `unknown`[], `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`args`, `controller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `unknown`[] |
| `controller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:104](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L104)

___

### name

• `Optional` **name**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[name](Plugin.md#name)

#### Defined in

[src/handler/plugins/plugin.ts:31](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L31)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Overrides

[Plugin](Plugin.md).[type](Plugin.md#type)

#### Defined in

[src/handler/plugins/plugin.ts:103](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L103)
