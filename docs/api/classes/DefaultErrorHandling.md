---
id: "DefaultErrorHandling"
title: "Class: DefaultErrorHandling"
sidebar_label: "DefaultErrorHandling"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0
Version 4.0.0 will internalize this api. Please refrain from using the defaults!

## Implements

- [`ErrorHandling`](../interfaces/ErrorHandling.md)

## Constructors

### constructor

• **new DefaultErrorHandling**()

## Properties

### #keepAlive

• `Private` **#keepAlive**: `number` = `5`

#### Defined in

[src/core/structures/services/error-handling.ts:13](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/services/error-handling.ts#L13)

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

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[crash](../interfaces/ErrorHandling.md#crash)

#### Defined in

[src/core/structures/services/error-handling.ts:9](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/services/error-handling.ts#L9)

___

### updateAlive

▸ **updateAlive**(`err`): `void`

A function that is called on every throw.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`void`

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[updateAlive](../interfaces/ErrorHandling.md#updatealive)

#### Defined in

[src/core/structures/services/error-handling.ts:15](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/services/error-handling.ts#L15)
