---
id: "SernEventPlugin"
title: "Interface: SernEventPlugin<T>"
sidebar_label: "SernEventPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](../modules.md#serneventsmapping) = keyof [`SernEventsMapping`](../modules.md#serneventsmapping) |

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`SernEventPlugin`**

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

• **execute**: (`args`: [`SernEventsMapping`](../modules.md#serneventsmapping)[`T`], `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`args`, `controller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SernEventsMapping`](../modules.md#serneventsmapping)[`T`] |
| `controller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:96](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L96)

___

### name

• `Optional` **name**: `T`

**`Deprecated`**

will be removed in the next update

#### Overrides

[Plugin](Plugin.md).[name](Plugin.md#name)

#### Defined in

[src/handler/plugins/plugin.ts:94](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L94)

___

### type

• **type**: [`Event`](../enums/PluginType.md#event)

#### Overrides

[Plugin](Plugin.md).[type](Plugin.md#type)

#### Defined in

[src/handler/plugins/plugin.ts:95](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L95)
