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

• `Abstract` **execute**: [`EventModuleDefs`](../modules.md#eventmoduledefs)[`Type`][``"execute"``]

#### Defined in

[src/handler/sern.ts:108](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L108)

___

### onEvent

• **onEvent**: [`EventModuleEventPluginDefs`](../modules.md#eventmoduleeventplugindefs)[`Type`][] = `[]`

#### Defined in

[src/handler/sern.ts:107](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L107)

___

### plugins

• **plugins**: [`EventModuleCommandPluginDefs`](../modules.md#eventmodulecommandplugindefs)[`Type`][] = `[]`

#### Defined in

[src/handler/sern.ts:106](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L106)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:105](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/sern.ts#L105)
