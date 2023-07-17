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

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L35)

___

### name

• `Optional` **name**: `T`

#### Overrides

Module.name

#### Defined in

[src/types/core-modules.ts:41](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L41)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L33)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Sern`](../enums/EventType.md#sern)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:42](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L42)

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

[src/types/core-modules.ts:43](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L43)
