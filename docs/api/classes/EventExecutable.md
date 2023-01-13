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

[src/handler/sern.ts:135](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L135)

___

### onEvent

• **onEvent**: [`ControlPlugin`](../interfaces/ControlPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:134](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L134)

___

### plugins

• **plugins**: [`InitPlugin`](../interfaces/InitPlugin.md)<`any`[]\>[] = `[]`

#### Defined in

[src/handler/sern.ts:133](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L133)

___

### type

• `Abstract` **type**: `Type`

#### Defined in

[src/handler/sern.ts:132](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L132)
