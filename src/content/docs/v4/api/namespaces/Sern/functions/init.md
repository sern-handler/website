---
editUrl: false
next: false
prev: false
title: "init"
---

> **init**(`maybeWrapper`): `void`

## Parameters

• **maybeWrapper**: [`Wrapper`](/v4/api/interfaces/wrapper/)= `undefined`

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

[src/sern.ts:32](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/sern.ts#L32)
