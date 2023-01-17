---
id: "DiscordEventCommand"
title: "Interface: DiscordEventCommand<T>"
sidebar_label: "DiscordEventCommand"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ClientEvents` = keyof `ClientEvents` |

## Hierarchy

- [`Module`](Module.md)

  ↳ **`DiscordEventCommand`**

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

[src/types/module.ts:123](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L123)

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

• **type**: [`Discord`](../enums/EventType.md#discord)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:124](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L124)

## Methods

### execute

▸ **execute**(...`args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ClientEvents`[`T`] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/module.ts:125](https://github.com/sern-handler/handler/blob/b641472/src/types/module.ts#L125)
