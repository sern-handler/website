---
editUrl: false
next: false
prev: false
title: "Service"
---

> **Service**\<`T`\>(`key`): `Dependencies`\[`T`\]

The new Service api, a cleaner alternative to useContainer
To obtain intellisense, ensure a .d.ts file exists in the root of compilation.
Usually our scaffolding tool takes care of this.
Note: this method only works AFTER your container has been initiated

## Type parameters

• **T** *extends* keyof `Dependencies`

## Parameters

• **key**: `T`

a key that corresponds to a dependency registered.

## Returns

`Dependencies`\[`T`\]

## Since

3.0.0

## Example

```ts
const client = Service('@sern/client');
```

## Source

[src/core/ioc/index.ts:19](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/ioc/index.ts#L19)
