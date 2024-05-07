---
id: "ExternalEventCommand"
title: "Interface: ExternalEventCommand"
sidebar_label: "ExternalEventCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`ExternalEventCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L36)

___

### emitter

• **emitter**: keyof `Dependencies`

#### Defined in

[src/types/core-modules.ts:48](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L48)

___

### name

• `Optional` **name**: `string`

#### Overrides

Module.name

#### Defined in

[src/types/core-modules.ts:47](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L47)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L34)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L35)

___

### type

• **type**: [`External`](../enums/EventType.md#external)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:49](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L49)

## Methods

### execute

▸ **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:50](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L50)
