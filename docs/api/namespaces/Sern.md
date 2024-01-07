---
id: "Sern"
title: "Namespace: Sern"
sidebar_label: "Sern"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### init

▸ **init**(`maybeWrapper`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeWrapper` | [`Wrapper`](../interfaces/Wrapper.md) \| ``"file"`` |

#### Returns

`void`

**`Since`**

1.0.0

**`Example`**

```ts title="src/index.ts"
Sern.init({
    commands: 'dist/commands',
    events: 'dist/events',
})
```

#### Defined in

[src/sern.ts:27](https://github.com/sern-handler/handler/blob/b0399f9/src/sern.ts#L27)
