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

[src/handler/contracts/errorHandling.ts:11](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/errorHandling.ts#L11)

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

[src/handler/contracts/errorHandling.ts:17](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/errorHandling.ts#L17)

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

[src/handler/contracts/errorHandling.ts:23](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/errorHandling.ts#L23)
