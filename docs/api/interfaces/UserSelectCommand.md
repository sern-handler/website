---
id: "UserSelectCommand"
title: "Interface: UserSelectCommand"
sidebar_label: "UserSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`UserSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L38)

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

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:100](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L100)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:35](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L35)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[onEvent](Module.md#onevent)

#### Defined in

[src/types/module.ts:36](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L36)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[plugins](Module.md#plugins)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L37)

___

### type

• **type**: [`UserSelect`](../enums/CommandType.md#userselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:99](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L99)
