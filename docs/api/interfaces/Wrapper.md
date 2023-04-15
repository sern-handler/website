---
id: "Wrapper"
title: "Interface: Wrapper"
sidebar_label: "Wrapper"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

1.0.0
An object to be passed into Sern#init() function.

## Properties

### commands

• `Readonly` **commands**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:14](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/wrapper.ts#L14)

___

### containerConfig

• `Readonly` **containerConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (...`keys`: keyof [`Dependencies`](Dependencies.md)[]) => `unknown`[] |

#### Defined in

[src/handler/structures/wrapper.ts:16](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/wrapper.ts#L16)

___

### defaultPrefix

• `Optional` `Readonly` **defaultPrefix**: `string`

**`Deprecated`**

This will be moved to a new field in 3.0.0

#### Defined in

[src/handler/structures/wrapper.ts:13](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/wrapper.ts#L13)

___

### events

• `Optional` `Readonly` **events**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:15](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/wrapper.ts#L15)
