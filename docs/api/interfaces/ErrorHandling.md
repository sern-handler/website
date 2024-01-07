---
id: "ErrorHandling"
title: "Interface: ErrorHandling"
sidebar_label: "ErrorHandling"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0

## Implemented by

- [`DefaultErrorHandling`](../classes/DefaultErrorHandling.md)

## Methods

### crash

▸ **crash**(`err`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`never`

**`Deprecated`**

Version 4 will remove this method

#### Defined in

[src/core/contracts/error-handling.ts:11](https://github.com/sern-handler/handler/blob/b0399f9/src/core/contracts/error-handling.ts#L11)

___

### updateAlive

▸ **updateAlive**(`error`): `void`

A function that is called on every throw.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[src/core/contracts/error-handling.ts:16](https://github.com/sern-handler/handler/blob/b0399f9/src/core/contracts/error-handling.ts#L16)
