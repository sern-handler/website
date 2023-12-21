---
id: "MentionableSelectCommand"
title: "Interface: MentionableSelectCommand"
sidebar_label: "MentionableSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`MentionableSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L37)

___

### execute

• **execute**: (`ctx`: `MentionableSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `MentionableSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:86](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L86)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L34)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L36)

___

### type

• **type**: [`MentionableSelect`](../enums/CommandType.md#mentionableselect)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:85](https://github.com/sern-handler/handler/blob/504cdee/src/types/core-modules.ts#L85)
