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

[src/core/modules.ts:100](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/modules.ts#L100)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/core/modules.ts:99](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/modules.ts#L99)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/core/modules.ts:102](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/modules.ts#L102)

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

[src/core/modules.ts:111](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/modules.ts#L111)

___

### getInstance

▸ `Static` **getInstance**(): [`EventModule`](../modules.md#eventmodule)

#### Returns

[`EventModule`](../modules.md#eventmodule)

#### Defined in

[src/core/modules.ts:103](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/modules.ts#L103)
