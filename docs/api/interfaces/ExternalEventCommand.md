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

[src/core/types/modules.ts:37](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L37)

___

### emitter

• **emitter**: keyof `Dependencies`

#### Defined in

[src/core/types/modules.ts:49](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L49)

___

### name

• `Optional` **name**: `string`

#### Overrides

Module.name

#### Defined in

[src/core/types/modules.ts:48](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L48)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/core/types/modules.ts:35](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/core/types/modules.ts:36](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L36)

___

### type

• **type**: [`External`](../enums/EventType.md#external)

#### Overrides

Module.type

#### Defined in

[src/core/types/modules.ts:50](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L50)

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

[src/core/types/modules.ts:51](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L51)
