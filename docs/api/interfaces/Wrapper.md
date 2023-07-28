---
id: "Wrapper"
title: "Interface: Wrapper"
sidebar_label: "Wrapper"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### commands

• **commands**: `string`

#### Defined in

[src/types/core.ts:8](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core.ts#L8)

___

### containerConfig

• `Optional` **containerConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (...`keys`: keyof `Dependencies`[]) => `unknown`[] |

#### Defined in

[src/types/core.ts:18](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core.ts#L18)

___

### defaultPrefix

• `Optional` **defaultPrefix**: `string`

#### Defined in

[src/types/core.ts:9](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core.ts#L9)

___

### events

• `Optional` **events**: `string`

#### Defined in

[src/types/core.ts:10](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core.ts#L10)

___

### mode

• `Optional` **mode**: ``"DEV"`` \| ``"PROD"``

Overload to enable mode in case developer does not use a .env file.

#### Defined in

[src/types/core.ts:14](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core.ts#L14)
