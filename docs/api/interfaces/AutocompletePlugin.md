---
id: "AutocompletePlugin"
title: "Interface: AutocompletePlugin"
sidebar_label: "AutocompletePlugin"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`AutocompletePlugin`**

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

• **execute**: (`autocmp`: `AutocompleteInteraction`<`CacheType`\>, `controlller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`autocmp`, `controlller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `autocmp` | `AutocompleteInteraction`<`CacheType`\> |
| `controlller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:73](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L73)

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

[src/handler/plugins/plugin.ts:72](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L72)
