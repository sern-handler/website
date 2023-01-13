---
id: "DefaultErrorHandling"
title: "Class: DefaultErrorHandling"
sidebar_label: "DefaultErrorHandling"
sidebar_position: 0
custom_edit_url: null
---

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

[src/handler/contracts/errorHandling.ts:25](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/errorHandling.ts#L25)

## Methods

### crash

▸ **crash**(`error`): `never`

Utility function to crash

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`never`

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[crash](../interfaces/ErrorHandling.md#crash)

#### Defined in

[src/handler/contracts/errorHandling.ts:26](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/errorHandling.ts#L26)

___

### updateAlive

▸ **updateAlive**(`e`): `void`

A function that is called on every crash. Updates keepAlive

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `Error` |

#### Returns

`void`

#### Implementation of

[ErrorHandling](../interfaces/ErrorHandling.md).[updateAlive](../interfaces/ErrorHandling.md#updatealive)

#### Defined in

[src/handler/contracts/errorHandling.ts:29](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/contracts/errorHandling.ts#L29)
