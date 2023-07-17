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

[src/sern.ts:72](https://github.com/sern-handler/handler/blob/5e3dcf8/src/sern.ts#L72)

## Functions

### init

▸ **init**(`maybeWrapper`): `void`

**`Since`**

1.0.0

**`Example`**

```ts title="src/index.ts"
Sern.init({
    commands: 'dist/commands',
    events: 'dist/events',
})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `maybeWrapper` | [`Wrapper`](../interfaces/Wrapper.md) \| ``"file"`` |

#### Returns

`void`

#### Defined in

[src/sern.ts:24](https://github.com/sern-handler/handler/blob/5e3dcf8/src/sern.ts#L24)
