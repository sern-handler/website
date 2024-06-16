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

[src/core/create-plugins.ts:39](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/create-plugins.ts#L39)
