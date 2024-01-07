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

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L37)

___

### name

• `Optional` **name**: `T`

#### Overrides

Module.name

#### Defined in

[src/types/core-modules.ts:107](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L107)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L36)

___

### type

• **type**: [`Discord`](../enums/EventType.md#discord)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:108](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L108)

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

[src/types/core-modules.ts:109](https://github.com/sern-handler/handler/blob/b0399f9/src/types/core-modules.ts#L109)
