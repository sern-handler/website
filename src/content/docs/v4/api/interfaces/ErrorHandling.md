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

[src/core/interfaces.ts:36](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/interfaces.ts#L36)

***

### updateAlive()

> **updateAlive**(`error`): `void`

A function that is called on every throw.

#### Parameters

• **error**: `Error`

#### Returns

`void`

#### Source

[src/core/interfaces.ts:41](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/interfaces.ts#L41)
