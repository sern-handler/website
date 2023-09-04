---
id: "Emitter"
title: "Interface: Emitter"
sidebar_label: "Emitter"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Emitter`](Emitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | `AnyFunction` |

#### Returns

[`Emitter`](Emitter.md)

#### Defined in

[src/core/contracts/emitter.ts:4](https://github.com/sern-handler/handler/blob/e1059f9/src/core/contracts/emitter.ts#L4)

___

### emit

▸ **emit**(`eventName`, `...payload`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...payload` | `any`[] |

#### Returns

`boolean`

#### Defined in

[src/core/contracts/emitter.ts:6](https://github.com/sern-handler/handler/blob/e1059f9/src/core/contracts/emitter.ts#L6)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Emitter`](Emitter.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | `AnyFunction` |

#### Returns

[`Emitter`](Emitter.md)

#### Defined in

[src/core/contracts/emitter.ts:5](https://github.com/sern-handler/handler/blob/e1059f9/src/core/contracts/emitter.ts#L5)
