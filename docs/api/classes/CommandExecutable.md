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

[src/handler/sern.ts:126](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L126)

___

### onEvent

• **onEvent**: [`ControlPlugin`](../interfaces/ControlPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:125](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L125)

___

### plugins

• **plugins**: [`InitPlugin`](../interfaces/InitPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:124](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L124)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:123](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L123)
