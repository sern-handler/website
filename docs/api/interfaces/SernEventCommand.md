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
| `T` | extends keyof [`SernEventsMapping`](../modules.md#serneventsmapping) = keyof [`SernEventsMapping`](../modules.md#serneventsmapping) |

## Hierarchy

- [`Module`](Module.md)

  ↳ **`SernEventCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L38)

___

### name

• `Optional` **name**: `T`

#### Overrides

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:116](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L116)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[onEvent](Module.md#onevent)

#### Defined in

[src/types/module.ts:36](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L36)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[plugins](Module.md#plugins)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L37)

___

### type

• **type**: [`Sern`](../enums/EventType.md#sern)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:117](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L117)

## Methods

### execute

▸ **execute**(...`args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`SernEventsMapping`](../modules.md#serneventsmapping)[`T`] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/module.ts:118](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L118)
