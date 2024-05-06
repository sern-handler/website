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

[src/core/create-plugins.ts:69](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L69)
