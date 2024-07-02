---
editUrl: false
next: false
prev: false
title: "Service"
---

> **Service**\<`T`\>(`key`): `NonNullable`\<`UnpackFunction`\<`Partial`\<`Dependencies`\>\[`T`\]\>\>

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

`NonNullable`\<`UnpackFunction`\<`Partial`\<`Dependencies`\>\[`T`\]\>\>

## Since

3.0.0

## Example

```ts
const client = Service('@sern/client');
```

## Source

[src/core/ioc/dependency-injection.ts:37](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/ioc/dependency-injection.ts#L37)
