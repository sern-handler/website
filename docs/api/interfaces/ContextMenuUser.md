---
id: "ContextMenuUser"
title: "Interface: ContextMenuUser"
sidebar_label: "ContextMenuUser"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`ContextMenuUser`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: `UserContextMenuCommandInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `UserContextMenuCommandInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:71](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L71)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`Plugin`](Plugin.md) & { `execute`: (`event`: [ctx: UserContextMenuCommandInteraction<CacheType\>], `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Event`](../enums/PluginType.md#event)  }[]

#### Defined in

[src/types/module.ts:69](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L69)

___

### plugins

• **plugins**: [`Plugin`](Plugin.md) & { `execute`: (`payload`: { `absPath`: `string` ; `mod`: [`TextCommand`](TextCommand.md) & { `description`: `string` ; `name`: `string`  } & [`SlashCommand`](SlashCommand.md) & { `description`: `string` ; `name`: `string`  } & [`BothCommand`](BothCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuUser`](ContextMenuUser.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuMsg`](ContextMenuMsg.md) & { `description`: `string` ; `name`: `string`  } & [`ButtonCommand`](ButtonCommand.md) & { `description`: `string` ; `name`: `string`  } & [`StringSelectCommand`](StringSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ModalSubmitCommand`](ModalSubmitCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ChannelSelectCommand`](ChannelSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`MentionableSelectCommand`](MentionableSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`RoleSelectCommand`](RoleSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`UserSelectCommand`](UserSelectCommand.md) & { `description`: `string` ; `name`: `string`  }  }, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](../enums/PluginType.md#command)  }[]

#### Defined in

[src/types/module.ts:70](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L70)

___

### type

• **type**: [`CtxUser`](../enums/CommandType.md#ctxuser)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:68](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L68)
