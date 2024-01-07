---
id: "CommandExecutable"
title: "Class: CommandExecutable<Type>"
sidebar_label: "CommandExecutable"
sidebar_position: 0
custom_edit_url: null
---

**`Deprecated`**

Will be removed in future

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) = [`CommandType`](../enums/CommandType.md) |

## Constructors

### constructor

• **new CommandExecutable**<`Type`\>(): [`CommandExecutable`](CommandExecutable.md)<`Type`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) = [`CommandType`](../enums/CommandType.md) |

#### Returns

[`CommandExecutable`](CommandExecutable.md)<`Type`\>

## Properties

### plugins

• **plugins**: [`AnyCommandPlugin`](../modules.md#anycommandplugin)[] = `[]`

#### Defined in

[src/core/modules.ts:80](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L80)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/core/modules.ts:79](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L79)

___

### \_instance

▪ `Static` `Private` **\_instance**: [`CommandModule`](../modules.md#commandmodule)

#### Defined in

[src/core/modules.ts:81](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L81)

## Methods

### execute

▸ **execute**(`...args`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `CommandArgs`<`Type`, [`Control`](../enums/PluginType.md#control)\> |

#### Returns

`unknown`

#### Defined in

[src/core/modules.ts:92](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L92)

___

### getInstance

▸ **getInstance**(): [`CommandModule`](../modules.md#commandmodule)

#### Returns

[`CommandModule`](../modules.md#commandmodule)

#### Defined in

[src/core/modules.ts:83](https://github.com/sern-handler/handler/blob/b0399f9/src/core/modules.ts#L83)
