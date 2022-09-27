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

• `Abstract` **execute**: `CommandModuleDefs`[`Type`][``"execute"``]

#### Defined in

[src/handler/sern.ts:132](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/sern.ts#L132)

___

### onEvent

• **onEvent**: [`EventPlugin`](../modules.md#eventplugin)<`Type`\>[] = `[]`

#### Defined in

[src/handler/sern.ts:131](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/sern.ts#L131)

___

### plugins

• **plugins**: [`CommandPlugin`](../modules.md#commandplugin)<`Type`\>[] = `[]`

#### Defined in

[src/handler/sern.ts:130](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/sern.ts#L130)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:129](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/sern.ts#L129)
