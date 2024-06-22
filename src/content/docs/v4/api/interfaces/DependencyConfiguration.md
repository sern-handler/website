---
editUrl: false
next: false
prev: false
title: "DependencyConfiguration"
---

:::caution[Deprecated]
This old signature will be incompatible with future versions of sern.
```ts
 To switch your old code:
   await makeDependencies(({ add }) => { 
          add('@sern/client', new Client())
   })
 ```
:::

## Properties

### ~~build()~~

> **build**: (`root`) => `Container`

#### Parameters

• **root**: `Container`

#### Returns

`Container`

#### Source

[src/index.ts:68](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/index.ts#L68)
