---
editUrl: false
next: false
prev: false
title: "init"
---

> **init**(`maybeWrapper`): `void`

## Parameters

• **maybeWrapper**: `Wrapper`= `undefined`

Options to pass into sern.
Function to start the handler up

## Returns

`void`

## Since

1.0.0

## Example

```ts title="src/index.ts"
Sern.init({
    commands: 'dist/commands',
    events: 'dist/events',
})
```

## Source

[src/sern.ts:34](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/sern.ts#L34)
