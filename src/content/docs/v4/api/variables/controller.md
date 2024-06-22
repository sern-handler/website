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

[src/core/plugin.ts:39](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/plugin.ts#L39)
