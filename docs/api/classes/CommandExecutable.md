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

[src/handler/sern.ts:121](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L121)

___

### onEvent

• **onEvent**: [`ControlPlugin`](../interfaces/ControlPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:120](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L120)

___

### plugins

• **plugins**: [`InitPlugin`](../interfaces/InitPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:119](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L119)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:118](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L118)
