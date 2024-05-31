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

> **next**: (`val`?) => `Ok`\<`undefined` \| `Record`\<`string`, `unknown`\>\>

#### Parameters

• **val?**: `Record`\<`string`, `unknown`\>

#### Returns

`Ok`\<`undefined` \| `Record`\<`string`, `unknown`\>\>

### stop()

> **stop**: (`val`?) => `Err`\<`undefined` \| `string`\>

#### Parameters

• **val?**: `string`

#### Returns

`Err`\<`undefined` \| `string`\>

## Source

[src/core/create-plugins.ts:39](https://github.com/sern-handler/handler/blob/792015a64e1ac30998977267c7e6c05bfc6f8195/src/core/create-plugins.ts#L39)
