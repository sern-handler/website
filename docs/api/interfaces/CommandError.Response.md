---
id: "CommandError.Response"
title: "Interface: Response"
sidebar_label: "Response"
custom_edit_url: null
---

[CommandError](../namespaces/CommandError.md).Response

## Properties

### body

• `Optional` **body**: `ReplyOptions`

#### Defined in

[src/core/structures/command-error.ts:6](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/command-error.ts#L6)

___

### log

• `Optional` **log**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `unknown` |
| `type` | keyof [`Logging`](Logging.md)<`unknown`\> |

#### Defined in

[src/core/structures/command-error.ts:7](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/command-error.ts#L7)

___

### type

• **type**: ``"fail"`` \| ``"continue"``

#### Defined in

[src/core/structures/command-error.ts:5](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/command-error.ts#L5)
