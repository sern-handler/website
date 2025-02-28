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

> **next**: (`val`?) => `object`

#### Parameters

• **val?**: `Dictionary`

#### Returns

`object`

##### ok

> `readonly` **ok**: `true` = `true`

##### value

> **value**: `undefined` \| `Dictionary`

### stop()

> **stop**: (`val`?) => `object`

#### Parameters

• **val?**: `string`

#### Returns

`object`

##### error

> **error**: `undefined` \| `string`

##### ok

> `readonly` **ok**: `false` = `false`

## Source

[src/core/plugin.ts:131](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/plugin.ts#L131)
