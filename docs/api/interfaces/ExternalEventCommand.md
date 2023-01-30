---
id: "ExternalEventCommand"
title: "Interface: ExternalEventCommand"
sidebar_label: "ExternalEventCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ExternalEventCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L38)

___

### emitter

• **emitter**: `string`

#### Defined in

[src/types/module.ts:130](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L130)

___

### name

• `Optional` **name**: `string`

#### Overrides

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:129](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L129)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[onEvent](Module.md#onevent)

#### Defined in

[src/types/module.ts:36](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L36)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[plugins](Module.md#plugins)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L37)

___

### type

• **type**: [`External`](../enums/EventType.md#external)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:131](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L131)

## Methods

### execute

▸ **execute**(...`args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/module.ts:132](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L132)
