---
id: "Sern"
title: "Namespace: Sern"
sidebar_label: "Sern"
sidebar_position: 0
custom_edit_url: null
---

## Variables

### controller

• `Const` **controller**: `Object`

**`Since`**

1.0.0
The object passed into every plugin to control a command's behavior

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next` | () => `OkImpl`<`void`\> |
| `stop` | () => `ErrImpl`<`void`\> |

#### Defined in

[src/sern.ts:63](https://github.com/sern-handler/handler/blob/a579e27/src/sern.ts#L63)

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

[src/sern.ts:24](https://github.com/sern-handler/handler/blob/a579e27/src/sern.ts#L24)
