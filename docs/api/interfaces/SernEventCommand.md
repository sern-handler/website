---
id: "SernEventCommand"
title: "Interface: SernEventCommand<T>"
sidebar_label: "SernEventCommand"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](SernEventsMapping.md) = keyof [`SernEventsMapping`](SernEventsMapping.md) |

## Hierarchy

- `Module`

  ↳ **`SernEventCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L37)

___

### name

• `Optional` **name**: `T`

#### Overrides

Module.name

#### Defined in

[src/types/core-modules.ts:43](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L43)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L36)

___

### type

• **type**: [`Sern`](../enums/EventType.md#sern)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:44](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L44)

## Methods

### execute

▸ **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`SernEventsMapping`](SernEventsMapping.md)[`T`] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:45](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L45)
