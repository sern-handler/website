---
id: "EventExecutable"
title: "Class: EventExecutable<Type>"
sidebar_label: "EventExecutable"
sidebar_position: 0
custom_edit_url: null
---

**`Experimental`**

Will be refactored in future

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`EventType`](../enums/EventType.md) |

## Constructors

### constructor

• **new EventExecutable**<`Type`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`EventType`](../enums/EventType.md) |

## Properties

### plugins

• **plugins**: [`AnyEventPlugin`](../modules.md#anyeventplugin)[] = `[]`

#### Defined in

[src/handler/commands.ts:100](https://github.com/sern-handler/handler/blob/941e1ea/src/handler/commands.ts#L100)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/commands.ts:99](https://github.com/sern-handler/handler/blob/941e1ea/src/handler/commands.ts#L99)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/handler/commands.ts:102](https://github.com/sern-handler/handler/blob/941e1ea/src/handler/commands.ts#L102)

## Methods

### execute

▸ `Abstract` **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `EventArgs`<`Type`, [`Control`](../enums/PluginType.md#control)\> |

#### Returns

`unknown`

#### Defined in

[src/handler/commands.ts:111](https://github.com/sern-handler/handler/blob/941e1ea/src/handler/commands.ts#L111)

___

### getInstance

▸ `Static` **getInstance**(): [`EventModule`](../modules.md#eventmodule)

#### Returns

[`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/handler/commands.ts:103](https://github.com/sern-handler/handler/blob/941e1ea/src/handler/commands.ts#L103)
