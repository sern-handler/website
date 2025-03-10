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

[src/core/ioc.ts:63](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L63)
