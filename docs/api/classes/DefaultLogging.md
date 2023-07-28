---
id: "DefaultLogging"
title: "Class: DefaultLogging"
sidebar_label: "DefaultLogging"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

2.0.0
Version 4.0.0 will internalize this api. Please refrain from using ModuleStore!

## Implements

- [`Logging`](../interfaces/Logging.md)

## Constructors

### constructor

• **new DefaultLogging**()

## Methods

### date

▸ `Private` **date**(): `Date`

#### Returns

`Date`

#### Defined in

[src/core/structures/services/logger.ts:9](https://github.com/sern-handler/handler/blob/81cdde2/src/core/structures/services/logger.ts#L9)

___

### debug

▸ **debug**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload) |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[debug](../interfaces/Logging.md#debug)

#### Defined in

[src/core/structures/services/logger.ts:10](https://github.com/sern-handler/handler/blob/81cdde2/src/core/structures/services/logger.ts#L10)

___

### error

▸ **error**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload) |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[error](../interfaces/Logging.md#error)

#### Defined in

[src/core/structures/services/logger.ts:14](https://github.com/sern-handler/handler/blob/81cdde2/src/core/structures/services/logger.ts#L14)

___

### info

▸ **info**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload) |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[info](../interfaces/Logging.md#info)

#### Defined in

[src/core/structures/services/logger.ts:18](https://github.com/sern-handler/handler/blob/81cdde2/src/core/structures/services/logger.ts#L18)

___

### warning

▸ **warning**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`LogPayload`](../modules.md#logpayload) |

#### Returns

`void`

#### Implementation of

[Logging](../interfaces/Logging.md).[warning](../interfaces/Logging.md#warning)

#### Defined in

[src/core/structures/services/logger.ts:22](https://github.com/sern-handler/handler/blob/81cdde2/src/core/structures/services/logger.ts#L22)
