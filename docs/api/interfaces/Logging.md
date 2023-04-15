---
id: "Logging"
title: "Interface: Logging<T>"
sidebar_label: "Logging"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Implemented by

- [`DefaultLogging`](../classes/DefaultLogging.md)

## Methods

### debug

▸ **debug**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/handler/contracts/logging.ts:9](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L9)

___

### error

▸ **error**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/handler/contracts/logging.ts:6](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L6)

___

### info

▸ **info**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/handler/contracts/logging.ts:8](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L8)

___

### warning

▸ **warning**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload)<`T`\> |

#### Returns

`void`

#### Defined in

[src/handler/contracts/logging.ts:7](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/contracts/logging.ts#L7)
