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

### execute

• `Abstract` **execute**: [`EventModuleDefs`](../modules.md#eventmoduledefs)[`Type`][``"execute"``]

#### Defined in

[src/handler/sern.ts:130](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L130)

___

### onEvent

• **onEvent**: [`ControlPlugin`](../interfaces/ControlPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:129](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L129)

___

### plugins

• **plugins**: [`InitPlugin`](../interfaces/InitPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:128](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L128)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:127](https://github.com/sern-handler/handler/blob/b641472/src/handler/sern.ts#L127)
