---
id: "CommandError"
title: "Namespace: CommandError"
sidebar_label: "CommandError"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [Response](../interfaces/CommandError.Response.md)

## Functions

### of

▸ **of**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `log` | <T\>(`type`: keyof [`Logging`](../interfaces/Logging.md)<`unknown`\>, `message`: `T`) => `Record`<`PropertyKey`, `unknown`\> |
| `reply` | (`bodyContent`: `ReplyOptions`) => `Record`<`PropertyKey`, `unknown`\> |
| `status` | (`p`: ``"fail"`` \| ``"continue"``) => `Record`<`PropertyKey`, `unknown`\> |

#### Defined in

[src/core/structures/command-error.ts:10](https://github.com/sern-handler/handler/blob/504cdee/src/core/structures/command-error.ts#L10)
