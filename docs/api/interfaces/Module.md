---
id: "Module"
title: "Interface: Module"
sidebar_label: "Module"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- **`Module`**

  ↳ [`TextCommand`](TextCommand.md)

  ↳ [`SlashCommand`](SlashCommand.md)

  ↳ [`BothCommand`](BothCommand.md)

  ↳ [`ContextMenuUser`](ContextMenuUser.md)

  ↳ [`ContextMenuMsg`](ContextMenuMsg.md)

  ↳ [`ButtonCommand`](ButtonCommand.md)

  ↳ [`StringSelectCommand`](StringSelectCommand.md)

  ↳ [`ChannelSelectCommand`](ChannelSelectCommand.md)

  ↳ [`RoleSelectCommand`](RoleSelectCommand.md)

  ↳ [`MentionableSelectCommand`](MentionableSelectCommand.md)

  ↳ [`UserSelectCommand`](UserSelectCommand.md)

  ↳ [`ModalSubmitCommand`](ModalSubmitCommand.md)

  ↳ [`AutocompleteCommand`](AutocompleteCommand.md)

## Properties

### description

• `Optional` **description**: `string`

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L38)

___

### execute

• **execute**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[src/types/module.ts:39](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L39)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L37)

___

### type

• `Optional` **type**: [`CommandType`](../enums/CommandType.md) \| [`EventType`](../enums/EventType.md)

#### Defined in

[src/types/module.ts:36](https://github.com/sern-handler/handler/blob/3daacfc/src/types/module.ts#L36)
