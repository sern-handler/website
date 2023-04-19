---
id: "BothCommand"
title: "Interface: BothCommand"
sidebar_label: "BothCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`BothCommand`**

## Properties

### alias

• `Optional` **alias**: `string`[]

#### Defined in

[src/types/module.ts:57](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L57)

___

### description

• **description**: `string`

#### Overrides

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:58](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L58)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [`Args`](../modules.md#args)) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [`Args`](../modules.md#args) |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:60](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L60)

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

### options

• `Optional` **options**: ([`SernSubCommandData`](SernSubCommandData.md) \| [`SernSubCommandGroupData`](SernSubCommandGroupData.md) \| [`BaseOptions`](../modules.md#baseoptions))[]

#### Defined in

[src/types/module.ts:59](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L59)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

[Module](Module.md).[plugins](Module.md#plugins)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L37)

___

### type

• **type**: [`Both`](../enums/CommandType.md#both)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:56](https://github.com/sern-handler/handler/blob/c1f6906/src/types/module.ts#L56)
