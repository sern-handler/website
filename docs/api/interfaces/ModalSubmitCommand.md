---
id: "ModalSubmitCommand"
title: "Interface: ModalSubmitCommand"
sidebar_label: "ModalSubmitCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`ModalSubmitCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L35)

___

### execute

• **execute**: (`ctx`: `ModalSubmitInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `ModalSubmitInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:94](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L94)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:32](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L32)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L33)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Modal`](../enums/CommandType.md#modal)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:93](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L93)
