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

- `Module`

  ↳ **`DiscordEventCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L35)

___

### name

• `Optional` **name**: `T`

#### Overrides

Module.name

#### Defined in

[src/types/core-modules.ts:105](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L105)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L33)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Discord`](../enums/EventType.md#discord)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:106](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L106)

## Methods

### execute

▸ **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ClientEvents`[`T`] |

#### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:107](https://github.com/sern-handler/handler/blob/81cdde2/src/types/core-modules.ts#L107)
