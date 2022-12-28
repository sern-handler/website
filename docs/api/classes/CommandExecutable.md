---
id: "CommandExecutable"
title: "Class: CommandExecutable<Type>"
sidebar_label: "CommandExecutable"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) |

## Constructors

### constructor

• **new CommandExecutable**<`Type`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends [`CommandType`](../enums/CommandType.md) |

## Properties

### execute

• `Abstract` **execute**: [`CommandModuleDefs`](../modules.md#commandmoduledefs)[`Type`][``"execute"``]

#### Defined in

[src/handler/sern.ts:101](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L101)

___

### onEvent

• **onEvent**: [`EventPlugin`](../interfaces/EventPlugin.md)<`Type`\>[] = `[]`

#### Defined in

[src/handler/sern.ts:100](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L100)

___

### plugins

• **plugins**: [`CommandPlugin`](../interfaces/CommandPlugin.md)<`Type`\>[] = `[]`

#### Defined in

[src/handler/sern.ts:99](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L99)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:98](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L98)
