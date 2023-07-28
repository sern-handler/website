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

## Properties

### keepAlive

• **keepAlive**: `number`

Number of times the process should throw an error until crashing and exiting

#### Defined in

[src/core/contracts/error-handling.ts:8](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/error-handling.ts#L8)

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

#### Defined in

[src/core/contracts/error-handling.ts:14](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/error-handling.ts#L14)

___

### updateAlive

▸ **updateAlive**(`error`): `void`

A function that is called on every crash. Updates keepAlive.
If keepAlive is 0, the process crashes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Defined in

[src/core/contracts/error-handling.ts:20](https://github.com/sern-handler/handler/blob/81cdde2/src/core/contracts/error-handling.ts#L20)
