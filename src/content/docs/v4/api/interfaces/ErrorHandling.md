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

[src/core/interfaces.ts:36](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/interfaces.ts#L36)

***

### updateAlive()

> **updateAlive**(`error`): `void`

A function that is called on every throw.

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Source

[src/core/interfaces.ts:41](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/interfaces.ts#L41)
