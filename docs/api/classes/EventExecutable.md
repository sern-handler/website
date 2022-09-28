---
id: "EventExecutable"
title: "Class: EventExecutable<Type>"
sidebar_label: "EventExecutable"
sidebar_position: 0
custom_edit_url: null
---

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

### execute

• `Abstract` **execute**: `EventModuleDefs`[`Type`][``"execute"``]

#### Defined in

[src/handler/sern.ts:139](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L139)

___

### onEvent

• **onEvent**: [`EventModuleEventPluginDefs`](../modules.md#eventmoduleeventplugindefs)[`Type`][] = `[]`

#### Defined in

[src/handler/sern.ts:138](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L138)

___

### plugins

• **plugins**: [`EventModuleCommandPluginDefs`](../modules.md#eventmodulecommandplugindefs)[`Type`][] = `[]`

#### Defined in

[src/handler/sern.ts:137](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L137)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:136](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L136)
