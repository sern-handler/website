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

[src/sern.ts:32](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/sern.ts#L32)
