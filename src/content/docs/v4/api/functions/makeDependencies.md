---
editUrl: false
next: false
prev: false
title: "makeDependencies"
---

> **makeDependencies**(`conf`): `Promise`\<`void`\>

makeDependencies constructs a dependency injection container for sern handler to use.
This is required to start the handler, and is to be called before Sern.init.

## Parameters

• **conf**: `ValidDependencyConfig`

## Returns

`Promise`\<`void`\>

## Example

```ts
await makeDependencies(({ add }) => {
    add('@sern/client', new Client({ intents, partials }) 
})
```

## Source

[src/core/ioc.ts:63](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/ioc.ts#L63)
