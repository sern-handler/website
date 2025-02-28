---
editUrl: false
next: false
prev: false
title: "Service"
---

> **Service**\<`T`\>(`key`): `Dependencies`\[`T`\]

The Service api, which allows users to access dependencies in places IOC cannot reach. 
To obtain intellisense, ensure a .d.ts file exists in the root of compilation.
Our scaffolding tool takes care of this.
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

## Throws

if container is absent or not present

## Source

[src/core/ioc.ts:93](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L93)
