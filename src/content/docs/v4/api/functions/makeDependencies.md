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

[src/core/ioc.ts:59](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L59)
