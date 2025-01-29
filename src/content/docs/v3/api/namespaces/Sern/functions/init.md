---
editUrl: false
next: false
prev: false
title: "init"
---

> **init**(`maybeWrapper`): `void`

## Parameters

• **maybeWrapper**: [`Wrapper`](/v3/api/interfaces/wrapper/) \| `"file"`

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

[src/sern.ts:26](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/sern.ts#L26)
