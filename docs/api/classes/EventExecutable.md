---
id: "EventExecutable"
title: "Class: EventExecutable<Type>"
sidebar_label: "EventExecutable"
sidebar_position: 0
custom_edit_url: null
---

**`Deprecated`**

Will be removed in future

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`EventType`](../enums/EventType.md) |

## Constructors

### constructor

• **new EventExecutable**<`Type`\>(): [`EventExecutable`](EventExecutable.md)<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`EventType`](../enums/EventType.md) |

#### Returns

[`EventExecutable`](EventExecutable.md)<`Type`\>

## Properties

### plugins

• **plugins**: [`AnyEventPlugin`](../modules.md#anyeventplugin)[] = `[]`

#### Defined in

[src/core/modules.ts:101](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L101)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/core/modules.ts:100](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L100)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/core/modules.ts:103](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L103)

## Methods

### execute

▸ **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `EventArgs`<`Type`, [`Control`](../enums/PluginType.md#control)\> |

#### Returns

`unknown`

#### Defined in

[src/core/modules.ts:112](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L112)

___

### getInstance

▸ **getInstance**(): [`EventModule`](../modules.md#eventmodule)

#### Returns

[`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/core/modules.ts:104](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L104)
