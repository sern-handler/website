---
id: "Emitter"
title: "Interface: Emitter"
sidebar_label: "Emitter"
sidebar_position: 0
custom_edit_url: null
---

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | `AnyFunction` |

#### Returns

`this`

#### Defined in

[src/core/contracts/emitter.ts:6](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/emitter.ts#L6)

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

[src/core/contracts/emitter.ts:8](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/emitter.ts#L8)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | `AnyFunction` |

#### Returns

`this`

#### Defined in

[src/core/contracts/emitter.ts:7](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/emitter.ts#L7)
