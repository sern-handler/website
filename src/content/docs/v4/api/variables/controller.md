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

[src/core/create-plugins.ts:39](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/create-plugins.ts#L39)
