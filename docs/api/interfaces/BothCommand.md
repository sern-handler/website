---
id: "BothCommand"
title: "Interface: BothCommand"
sidebar_label: "BothCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`BothCommand`**

## Properties

### alias

• `Optional` **alias**: `string`[]

#### Defined in

[src/types/module.ts:62](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L62)

___

### description

• `Optional` **description**: `string`

#### Inherited from

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:38](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L38)

___

### execute

• **execute**: (`ctx`: [`Context`](../classes/Context.md), `args`: [`Args`](../modules.md#args)) => `unknown`

#### Type declaration

▸ (`ctx`, `args`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](../classes/Context.md) |
| `args` | [`Args`](../modules.md#args) |

##### Returns

`unknown`

#### Overrides

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:64](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L64)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:37](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L37)

___

### onEvent

• **onEvent**: [`Plugin`](Plugin.md) & { `execute`: (`event`: [ctx: Context, args: Args], `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Event`](../enums/PluginType.md#event)  }[]

#### Defined in

[src/types/module.ts:60](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L60)

___

### options

• `Optional` **options**: ([`SernSubCommandData`](SernSubCommandData.md) \| [`SernSubCommandGroupData`](SernSubCommandGroupData.md) \| [`BaseOptions`](../modules.md#baseoptions))[]

#### Defined in

[src/types/module.ts:63](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L63)

___

### plugins

• **plugins**: [`Plugin`](Plugin.md) & { `execute`: (`payload`: { `absPath`: `string` ; `mod`: [`TextCommand`](TextCommand.md) & { `description`: `string` ; `name`: `string`  } & [`SlashCommand`](SlashCommand.md) & { `description`: `string` ; `name`: `string`  } & [`BothCommand`](BothCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuUser`](ContextMenuUser.md) & { `description`: `string` ; `name`: `string`  } & [`ContextMenuMsg`](ContextMenuMsg.md) & { `description`: `string` ; `name`: `string`  } & [`ButtonCommand`](ButtonCommand.md) & { `description`: `string` ; `name`: `string`  } & [`StringSelectCommand`](StringSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ModalSubmitCommand`](ModalSubmitCommand.md) & { `description`: `string` ; `name`: `string`  } & [`ChannelSelectCommand`](ChannelSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`MentionableSelectCommand`](MentionableSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`RoleSelectCommand`](RoleSelectCommand.md) & { `description`: `string` ; `name`: `string`  } & [`UserSelectCommand`](UserSelectCommand.md) & { `description`: `string` ; `name`: `string`  }  }, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](../enums/PluginType.md#command)  }[]

#### Defined in

[src/types/module.ts:61](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L61)

___

### type

• **type**: [`Both`](../enums/CommandType.md#both)

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:59](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L59)
