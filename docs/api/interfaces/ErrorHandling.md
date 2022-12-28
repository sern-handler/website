---
id: "ErrorHandling"
title: "Interface: ErrorHandling"
sidebar_label: "ErrorHandling"
sidebar_position: 0
custom_edit_url: null
---

## Implemented by

- [`DefaultErrorHandling`](../classes/DefaultErrorHandling.md)

## Properties

### keepAlive

• **keepAlive**: `number`

Number of times the process should throw an error until crashing and exiting

#### Defined in

[src/handler/contracts/errorHandling.ts:9](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/contracts/errorHandling.ts#L9)

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

#### Defined in

[src/handler/contracts/errorHandling.ts:15](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/contracts/errorHandling.ts#L15)

___

### updateAlive

▸ **updateAlive**(`error`): `void`

A function that is called on every crash. Updates keepAlive

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[src/handler/contracts/errorHandling.ts:21](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/contracts/errorHandling.ts#L21)
