---
id: "UserSelectCommand"
title: "Interface: UserSelectCommand"
sidebar_label: "UserSelectCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`UserSelectCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `UserSelectMenuInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `UserSelectMenuInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:120](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L120)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`Plugin`](Plugin.md) & { `execute`: (`event`: [ctx: UserSelectMenuInteraction<CacheType\>], `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Event`](../enums/PluginType.md#event)  }[]

#### Defined in

[src/types/module.ts:118](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L118)

___

### plugins

• **plugins**: [`Plugin`](Plugin.md) & { `execute`: (`payload`: { `absPath`: `string` ; `mod`: [`TextCommand`](TextCommand.md) & { `description`: `string` ; `name`: `string`  } & [`SlashCommand`](SlashCommand.md) & { `description`: `string` ; `name`: `string`  } & [`BothCommand`](BothCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuUser`](ContextMenuUser.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuMsg`](ContextMenuMsg.md) & { `description`: `string` ; `name`: `string`  } & [`ButtonCommand`](ButtonCommand.md) & { `description`: `string` ; `name`: `string`  } & [`StringSelectCommand`](StringSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ModalSubmitCommand`](ModalSubmitCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ChannelSelectCommand`](ChannelSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`MentionableSelectCommand`](MentionableSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`RoleSelectCommand`](RoleSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`UserSelectCommand`](UserSelectCommand.md) & { `description`: `string` ; `name`: `string`  }  }, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](../enums/PluginType.md#command)  }[]

#### Defined in

[src/types/module.ts:119](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L119)

___

### type

• **type**: [`UserSelect`](../enums/CommandType.md#userselect)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:117](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L117)
