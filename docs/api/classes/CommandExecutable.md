---
id: "CommandExecutable"
title: "Class: CommandExecutable<Type>"
sidebar_label: "CommandExecutable"
sidebar_position: 0
custom_edit_url: null
---

**`Experimental`**

Will be refactored / changed in future

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) = [`CommandType`](../enums/CommandType.md) |

## Constructors

### constructor

• **new CommandExecutable**<`Type`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) = [`CommandType`](../enums/CommandType.md) |

## Properties

### plugins

• **plugins**: [`AnyCommandPlugin`](../modules.md#anycommandplugin)[] = `[]`

#### Defined in

[src/core/modules.ts:79](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L79)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/core/modules.ts:78](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L78)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`CommandModule`](../modules.md#commandmodule)

#### Defined in

[src/core/modules.ts:80](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L80)

## Methods

### execute

▸ `Abstract` **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `CommandArgs`<`Type`, [`Control`](../enums/PluginType.md#control)\> |

#### Returns

`unknown`

#### Defined in

[src/core/modules.ts:91](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L91)

___

### getInstance

▸ `Static` **getInstance**(): [`CommandModule`](../modules.md#commandmodule)

#### Returns

[`CommandModule`](../modules.md#commandmodule)

#### Defined in

[src/core/modules.ts:82](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L82)
