---
editUrl: false
next: false
prev: false
title: "ErrorHandling"
---

## Since

2.0.0

## Methods

### ~~crash()~~

> **crash**(`err`): `never`

:::caution[Deprecated]
Version 4 will remove this method
:::

#### Parameters

• **err**: `Error`

#### Returns

`never`

#### Source

[src/core/contracts/error-handling.ts:9](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/contracts/error-handling.ts#L9)

***

### updateAlive()

> **updateAlive**(`error`): `void`

A function that is called on every throw.

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Source

[src/core/contracts/error-handling.ts:14](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/contracts/error-handling.ts#L14)
