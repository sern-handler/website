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

• **conf**

## Returns

`Promise`\<`void`\>

## Example

```ts
await makeDependencies(({ add }) => {
    add('@sern/client', new Client({ intents, partials }) 
})
```

## Source

[src/core/ioc/base.ts:61](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/ioc/base.ts#L61)
