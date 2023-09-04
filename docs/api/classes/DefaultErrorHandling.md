---
id: "DefaultErrorHandling"
title: "Class: DefaultErrorHandling"
sidebar_label: "DefaultErrorHandling"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0
Version 4.0.0 will internalize this api. Please refrain from using ModuleStore!

## Implements

- [`ErrorHandling`](../interfaces/ErrorHandling.md)

## Constructors

### constructor

• **new DefaultErrorHandling**()

## Properties

### keepAlive

• **keepAlive**: `number` = `5`

Number of times the process should throw an error until crashing and exiting

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[keepAlive](../interfaces/ErrorHandling.md#keepalive)

#### Defined in

[src/core/structures/services/error-handling.ts:13](https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/services/error-handling.ts#L13)

## Methods

### crash

▸ **crash**(`err`): `never`

**`Deprecated`**

Version 4 will remove this method

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`never`

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[crash](../interfaces/ErrorHandling.md#crash)

#### Defined in

[src/core/structures/services/error-handling.ts:9](https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/services/error-handling.ts#L9)

___

### updateAlive

▸ **updateAlive**(`err`): `void`

A function that is called on every crash. Updates keepAlive.
If keepAlive is 0, the process crashes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`void`

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[updateAlive](../interfaces/ErrorHandling.md#updatealive)

#### Defined in

[src/core/structures/services/error-handling.ts:15](https://github.com/sern-handler/handler/blob/e1059f9/src/core/structures/services/error-handling.ts#L15)
