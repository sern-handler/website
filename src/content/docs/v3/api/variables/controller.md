---
editUrl: false
next: false
prev: false
title: "controller"
---

> `const` **controller**: `object`

## Since

1.0.0
The object passed into every plugin to control a command's behavior

## Type declaration

### next()

> **next**: () => `OkImpl`\<`void`\> = `ok`

#### Returns

`OkImpl`\<`void`\>

### stop()

> **stop**: () => `ErrImpl`\<`void`\> = `err`

#### Returns

`ErrImpl`\<`void`\>

## Source

[src/core/create-plugins.ts:69](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/create-plugins.ts#L69)
