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

[src/core/contracts/emitter.ts:6](https://github.com/sern-handler/handler/blob/2106522/src/core/contracts/emitter.ts#L6)

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

[src/core/contracts/emitter.ts:8](https://github.com/sern-handler/handler/blob/2106522/src/core/contracts/emitter.ts#L8)

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

[src/core/contracts/emitter.ts:7](https://github.com/sern-handler/handler/blob/2106522/src/core/contracts/emitter.ts#L7)
