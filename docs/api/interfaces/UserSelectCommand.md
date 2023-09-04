---
id: "UserSelectCommand"
title: "Interface: UserSelectCommand"
sidebar_label: "UserSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`UserSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L35)

___

### execute

• **execute**: (`ctx`: `UserSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `UserSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:89](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L89)

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

• **type**: [`UserSelect`](../enums/CommandType.md#userselect)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:88](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L88)
