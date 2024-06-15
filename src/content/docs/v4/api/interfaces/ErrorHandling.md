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

[src/core/interfaces.ts:36](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/core/interfaces.ts#L36)

***

### updateAlive()

> **updateAlive**(`error`): `void`

A function that is called on every throw.

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Source

[src/core/interfaces.ts:41](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/core/interfaces.ts#L41)
