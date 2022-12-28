---
id: "CommandPlugin"
title: "Interface: CommandPlugin<T>"
sidebar_label: "CommandPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs) = keyof [`CommandModuleDefs`](../modules.md#commandmoduledefs) |

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`CommandPlugin`**

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

• **execute**: (`payload`: { `absPath`: `string` ; `mod`: [`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`] & { `description`: `string` ; `name`: `string`  }  }, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`payload`, `controller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.absPath` | `string` |
| `payload.mod` | [`CommandModuleDefs`](../modules.md#commandmoduledefs)[`T`] & { `description`: `string` ; `name`: `string`  } |
| `controller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:39](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L39)

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

• **type**: [`Command`](../enums/PluginType.md#command)

#### Overrides

[Plugin](Plugin.md).[type](Plugin.md#type)

#### Defined in

[src/handler/plugins/plugin.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/plugins/plugin.ts#L38)
