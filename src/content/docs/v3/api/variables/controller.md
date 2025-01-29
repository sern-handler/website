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

[src/core/create-plugins.ts:69](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/create-plugins.ts#L69)
