---
id: "Logging"
title: "Interface: Logging<T>"
sidebar_label: "Logging"
sidebar_position: 0
custom_edit_url: null
---

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

[src/handler/contracts/logging.ts:7](https://github.com/sern-handler/handler/blob/33f1446/src/handler/contracts/logging.ts#L7)

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

[src/handler/contracts/logging.ts:4](https://github.com/sern-handler/handler/blob/33f1446/src/handler/contracts/logging.ts#L4)

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

[src/handler/contracts/logging.ts:6](https://github.com/sern-handler/handler/blob/33f1446/src/handler/contracts/logging.ts#L6)

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

[src/handler/contracts/logging.ts:5](https://github.com/sern-handler/handler/blob/33f1446/src/handler/contracts/logging.ts#L5)
