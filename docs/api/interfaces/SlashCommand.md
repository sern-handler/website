---
id: "SlashCommand"
title: "Interface: SlashCommand"
sidebar_label: "SlashCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`SlashCommand`**

## Properties

### description

• **description**: `string`

#### Overrides

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:50](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L50)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [``"slash"``, [`SlashOptions`](../modules.md#slashoptions)]) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [``"slash"``, [`SlashOptions`](../modules.md#slashoptions)] |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:52](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L52)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:35](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L35)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[onEvent](Module.md#onevent)

#### Defined in

[src/types/module.ts:36](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L36)

___

### options

• `Optional` **options**: ([`SernSubCommandData`](SernSubCommandData.md) \| [`SernSubCommandGroupData`](SernSubCommandGroupData.md) \| [`BaseOptions`](../modules.md#baseoptions))[]

#### Defined in

[src/types/module.ts:51](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L51)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[plugins](Module.md#plugins)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L37)

___

### type

• **type**: [`Slash`](../enums/CommandType.md#slash)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:49](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L49)
