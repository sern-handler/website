---
id: "modules"
title: "@sern/handler"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [Sern](namespaces/Sern.md)

## Enumerations

- [CommandType](enums/CommandType.md)
- [EventType](enums/EventType.md)
- [PayloadType](enums/PayloadType.md)
- [PluginType](enums/PluginType.md)

## Classes

- [CommandExecutable](classes/CommandExecutable.md)
- [Context](classes/Context.md)
- [DefaultErrorHandling](classes/DefaultErrorHandling.md)
- [DefaultLogging](classes/DefaultLogging.md)
- [DefaultModuleManager](classes/DefaultModuleManager.md)
- [EventExecutable](classes/EventExecutable.md)
- [ModuleStore](classes/ModuleStore.md)
- [SernEmitter](classes/SernEmitter.md)

## Interfaces

- [AutocompleteCommand](interfaces/AutocompleteCommand.md)
- [BothCommand](interfaces/BothCommand.md)
- [ButtonCommand](interfaces/ButtonCommand.md)
- [ChannelSelectCommand](interfaces/ChannelSelectCommand.md)
- [ContextMenuMsg](interfaces/ContextMenuMsg.md)
- [ContextMenuUser](interfaces/ContextMenuUser.md)
- [ControlPlugin](interfaces/ControlPlugin.md)
- [Dependencies](interfaces/Dependencies.md)
- [DiscordEventCommand](interfaces/DiscordEventCommand.md)
- [ErrorHandling](interfaces/ErrorHandling.md)
- [ExternalEventCommand](interfaces/ExternalEventCommand.md)
- [InitArgs](interfaces/InitArgs.md)
- [InitPlugin](interfaces/InitPlugin.md)
- [Logging](interfaces/Logging.md)
- [MentionableSelectCommand](interfaces/MentionableSelectCommand.md)
- [ModalSubmitCommand](interfaces/ModalSubmitCommand.md)
- [Module](interfaces/Module.md)
- [ModuleManager](interfaces/ModuleManager.md)
- [Plugin](interfaces/Plugin.md)
- [RoleSelectCommand](interfaces/RoleSelectCommand.md)
- [SernAutocompleteData](interfaces/SernAutocompleteData.md)
- [SernEventCommand](interfaces/SernEventCommand.md)
- [SernSubCommandData](interfaces/SernSubCommandData.md)
- [SernSubCommandGroupData](interfaces/SernSubCommandGroupData.md)
- [SlashCommand](interfaces/SlashCommand.md)
- [StringSelectCommand](interfaces/StringSelectCommand.md)
- [TextCommand](interfaces/TextCommand.md)
- [UserSelectCommand](interfaces/UserSelectCommand.md)
- [Wrapper](interfaces/Wrapper.md)

## Type Aliases

### AnyCommandPlugin

Ƭ **AnyCommandPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[[`InitArgs`](interfaces/InitArgs.md)<[`Processed`](modules.md#processed)<[`CommandModule`](modules.md#commandmodule)\>\>]\>

#### Defined in

[src/types/plugin.ts:38](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L38)

___

### AnyDefinedModule

Ƭ **AnyDefinedModule**: [`Processed`](modules.md#processed)<[`CommandModule`](modules.md#commandmodule) \| [`EventModule`](modules.md#eventmodule)\>

After modules are transformed, name and description are given default values if none
are provided to Module. This type represents that transformation

#### Defined in

[src/types/handler.ts:23](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L23)

___

### AnyEventPlugin

Ƭ **AnyEventPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[[`InitArgs`](interfaces/InitArgs.md)<[`Processed`](modules.md#processed)<[`EventModule`](modules.md#eventmodule)\>\>]\>

#### Defined in

[src/types/plugin.ts:39](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L39)

___

### AnyModule

Ƭ **AnyModule**: [`CommandModule`](modules.md#commandmodule) \| [`EventModule`](modules.md#eventmodule)

#### Defined in

[src/types/module.ts:150](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L150)

___

### Args

Ƭ **Args**: [`ParseType`](modules.md#parsetype)<{ `slash`: [`SlashOptions`](modules.md#slashoptions) ; `text`: `string`[]  }\>

#### Defined in

[src/types/handler.ts:15](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L15)

___

### AutocompletePlugin

Ƭ **AutocompletePlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:46](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L46)

___

### BaseOptions

Ƭ **BaseOptions**: `ApplicationCommandChoicesData` \| `ApplicationCommandNonOptionsData` \| `ApplicationCommandChannelOptionData` \| `ApplicationCommandNumericOptionData` \| `ApplicationCommandAttachmentOption` \| [`SernAutocompleteData`](interfaces/SernAutocompleteData.md)

Type that replaces autocomplete with [SernAutocompleteData](interfaces/SernAutocompleteData.md)

#### Defined in

[src/types/module.ts:203](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L203)

___

### CommandArgs

Ƭ **CommandArgs**<`I`, `J`\>: `CommandArgsMatrix`[`I`][`J`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`CommandType`](enums/CommandType.md) = [`CommandType`](enums/CommandType.md) |
| `J` | extends [`PluginType`](enums/PluginType.md) = [`PluginType`](enums/PluginType.md) |

#### Defined in

[src/handler/plugins/args.ts:109](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/args.ts#L109)

___

### CommandModule

Ƭ **CommandModule**: [`TextCommand`](interfaces/TextCommand.md) \| [`SlashCommand`](interfaces/SlashCommand.md) \| [`BothCommand`](interfaces/BothCommand.md) \| [`ContextMenuUser`](interfaces/ContextMenuUser.md) \| [`ContextMenuMsg`](interfaces/ContextMenuMsg.md) \| [`ButtonCommand`](interfaces/ButtonCommand.md) \| [`StringSelectCommand`](interfaces/StringSelectCommand.md) \| [`MentionableSelectCommand`](interfaces/MentionableSelectCommand.md) \| [`UserSelectCommand`](interfaces/UserSelectCommand.md) \| [`ChannelSelectCommand`](interfaces/ChannelSelectCommand.md) \| [`RoleSelectCommand`](interfaces/RoleSelectCommand.md) \| [`ModalSubmitCommand`](interfaces/ModalSubmitCommand.md)

#### Defined in

[src/types/module.ts:136](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L136)

___

### CommandModuleDefs

Ƭ **CommandModuleDefs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`TextCommand`](interfaces/TextCommand.md) |
| `1024` | [`RoleSelectCommand`](interfaces/RoleSelectCommand.md) |
| `16` | [`ButtonCommand`](interfaces/ButtonCommand.md) |
| `2` | [`SlashCommand`](interfaces/SlashCommand.md) |
| `2048` | [`UserSelectCommand`](interfaces/UserSelectCommand.md) |
| `256` | [`ChannelSelectCommand`](interfaces/ChannelSelectCommand.md) |
| `3` | [`BothCommand`](interfaces/BothCommand.md) |
| `32` | [`StringSelectCommand`](interfaces/StringSelectCommand.md) |
| `4` | [`ContextMenuUser`](interfaces/ContextMenuUser.md) |
| `512` | [`MentionableSelectCommand`](interfaces/MentionableSelectCommand.md) |
| `64` | [`ModalSubmitCommand`](interfaces/ModalSubmitCommand.md) |
| `8` | [`ContextMenuMsg`](interfaces/ContextMenuMsg.md) |

#### Defined in

[src/types/module.ts:154](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L154)

___

### CommandModuleNoPlugins

Ƭ **CommandModuleNoPlugins**: { [T in CommandType]: Omit<CommandModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/types/module.ts:185](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L185)

___

### CommandPlugin

Ƭ **CommandPlugin**<`T`\>: [`Deprecated`](modules.md#deprecated)<``"Please use InitPlugin instead: "``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) = keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) |

#### Defined in

[src/types/plugin.ts:41](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L41)

___

### Deprecated

Ƭ **Deprecated**<`Message`\>: [`never`, `Message`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Message` | extends `string` |

#### Defined in

[src/types/handler.ts:64](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L64)

___

### DiscordEmitterPlugin

Ƭ **DiscordEmitterPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:43](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L43)

___

### DiscordEventPlugin

Ƭ **DiscordEventPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:50](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L50)

___

### EventArgs

Ƭ **EventArgs**<`I`, `J`\>: `EventArgsMatrix`[`I`][`J`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`EventType`](enums/EventType.md) = [`EventType`](enums/EventType.md) |
| `J` | extends [`PluginType`](enums/PluginType.md) = [`PluginType`](enums/PluginType.md) |

#### Defined in

[src/handler/plugins/args.ts:113](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/args.ts#L113)

___

### EventModule

Ƭ **EventModule**: [`DiscordEventCommand`](interfaces/DiscordEventCommand.md) \| [`SernEventCommand`](interfaces/SernEventCommand.md) \| [`ExternalEventCommand`](interfaces/ExternalEventCommand.md)

#### Defined in

[src/types/module.ts:135](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L135)

___

### EventModuleDefs

Ƭ **EventModuleDefs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`DiscordEventCommand`](interfaces/DiscordEventCommand.md) |
| `2` | [`SernEventCommand`](interfaces/SernEventCommand.md) |
| `3` | [`ExternalEventCommand`](interfaces/ExternalEventCommand.md) |

#### Defined in

[src/types/module.ts:169](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L169)

___

### EventModulesNoPlugins

Ƭ **EventModulesNoPlugins**: { [T in EventType]: Omit<EventModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/types/module.ts:188](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L188)

___

### EventPlugin

Ƭ **EventPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:47](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L47)

___

### ExternalEmitterPlugin

Ƭ **ExternalEmitterPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:44](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L44)

___

### ExternalEventPlugin

Ƭ **ExternalEventPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:49](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L49)

___

### InputCommand

Ƭ **InputCommand**: { [T in CommandType]: CommandModuleNoPlugins[T] & Object }[[`CommandType`](enums/CommandType.md)]

#### Defined in

[src/types/module.ts:196](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L196)

___

### InputEvent

Ƭ **InputEvent**: { [T in EventType]: EventModulesNoPlugins[T] & Object }[[`EventType`](enums/EventType.md)]

#### Defined in

[src/types/module.ts:192](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L192)

___

### LogPayload

Ƭ **LogPayload**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `message` | `T` |

#### Defined in

[src/types/handler.ts:34](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L34)

___

### MapDeps

Ƭ **MapDeps**<`Deps`, `T`\>: `T` extends [infer First, ...(infer Rest extends readonly unknown[])] ? [`UnpackFunction`<`Deps`[`First`]\>, ...(MapDeps<Deps, Rest\> extends [never] ? [] : MapDeps<Deps, Rest\>)] : [`never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Deps` | extends [`Dependencies`](interfaces/Dependencies.md) |
| `T` | extends readonly `unknown`[] |

#### Defined in

[src/types/handler.ts:52](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L52)

___

### OptionalDependencies

Ƭ **OptionalDependencies**: ``"@sern/logger"``

#### Defined in

[src/types/handler.ts:62](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L62)

___

### ParseType

Ƭ **ParseType**<`T`\>: { [K in keyof T]: T[K] extends unknown ? [k: K, args: T[K]] : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:11](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L11)

___

### Payload

Ƭ **Payload**: { `module`: [`AnyModule`](modules.md#anymodule) ; `type`: [`Success`](enums/PayloadType.md#success)  } \| { `module?`: [`AnyModule`](modules.md#anymodule) ; `reason`: `string` \| `Error` ; `type`: [`Failure`](enums/PayloadType.md#failure)  } \| { `reason`: `string` ; `type`: [`Warning`](enums/PayloadType.md#warning)  }

#### Defined in

[src/types/handler.ts:24](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L24)

___

### PluginResult

Ƭ **PluginResult**: `Awaitable`<[`VoidResult`](modules.md#voidresult)\>

#### Defined in

[src/types/plugin.ts:21](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L21)

___

### Processed

Ƭ **Processed**<`T`\>: `T` & { `description`: `string` ; `name`: `string`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Module`](interfaces/Module.md) |

#### Defined in

[src/types/handler.ts:63](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L63)

___

### ReplyOptions

Ƭ **ReplyOptions**: `string` \| `Omit`<`InteractionReplyOptions`, ``"fetchReply"``\> \| `MessageReplyOptions`

#### Defined in

[src/types/handler.ts:47](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L47)

___

### SernEmitterPlugin

Ƭ **SernEmitterPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:45](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L45)

___

### SernEventPlugin

Ƭ **SernEventPlugin**: [`Deprecated`](modules.md#deprecated)<``"Please view alternatives: "``\>

#### Defined in

[src/types/plugin.ts:48](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L48)

___

### SernEventsMapping

Ƭ **SernEventsMapping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | [[`Payload`](modules.md#payload)] |
| `module.activate` | [[`Payload`](modules.md#payload)] |
| `module.register` | [[`Payload`](modules.md#payload)] |
| `warning` | [[`Payload`](modules.md#payload)] |

#### Defined in

[src/types/handler.ts:28](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L28)

___

### SernOptionsData

Ƭ **SernOptionsData**<`U`\>: `U` extends `ApplicationCommandSubCommandData` ? [`SernSubCommandData`](interfaces/SernSubCommandData.md) : `U` extends `ApplicationCommandSubGroupData` ? [`SernSubCommandGroupData`](interfaces/SernSubCommandGroupData.md) : [`BaseOptions`](modules.md#baseoptions)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `ApplicationCommandOptionData` = `ApplicationCommandOptionData` |

#### Defined in

[src/types/module.ts:223](https://github.com/sern-handler/handler/blob/404a8c7/src/types/module.ts#L223)

___

### Singleton

Ƭ **Singleton**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/types/handler.ts:35](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L35)

___

### SlashOptions

Ƭ **SlashOptions**: `Omit`<`CommandInteractionOptionResolver`, ``"getMessage"`` \| ``"getFocused"``\>

#### Defined in

[src/types/handler.ts:17](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L17)

___

### Transient

Ƭ **Transient**<`T`\>: () => () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): () => `T`

##### Returns

`fn`

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/types/handler.ts:36](https://github.com/sern-handler/handler/blob/404a8c7/src/types/handler.ts#L36)

___

### VoidResult

Ƭ **VoidResult**: `Result`<`void`, `void`\>

#### Defined in

[src/types/plugin.ts:22](https://github.com/sern-handler/handler/blob/404a8c7/src/types/plugin.ts#L22)

## Variables

### controller

• `Const` **controller**: `Object`

The object passed into every plugin to control a command's behavior

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next` | () => `OkImpl`<`void`\> |
| `stop` | () => `ErrImpl`<`void`\> |

#### Defined in

[src/handler/sern.ts:56](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L56)

## Functions

### CommandControlPlugin

▸ **CommandControlPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`CommandType`](enums/CommandType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `execute` | (...`args`: [`CommandArgs`](modules.md#commandargs)<`I`, [`Control`](enums/PluginType.md#control)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Defined in

[src/handler/plugins/createPlugin.ts:28](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L28)

___

### CommandInitPlugin

▸ **CommandInitPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`CommandType`](enums/CommandType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `execute` | (...`args`: [`CommandArgs`](modules.md#commandargs)<`I`, [`Init`](enums/PluginType.md#init)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Defined in

[src/handler/plugins/createPlugin.ts:22](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L22)

___

### DiscordEventControlPlugin

▸ **DiscordEventControlPlugin**<`T`\>(`name`, `execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Experimental`**

A specialized function for creating control plugins with discord.js ClientEvents.
Will probably be moved one day!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `T` |
| `execute` | (...`args`: `ClientEvents`[`T`]) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Defined in

[src/handler/plugins/createPlugin.ts:45](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L45)

___

### EventControlPlugin

▸ **EventControlPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`EventType`](enums/EventType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `execute` | (...`args`: [`EventArgs`](modules.md#eventargs)<`I`, [`Control`](enums/PluginType.md#control)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Defined in

[src/handler/plugins/createPlugin.ts:34](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L34)

___

### EventInitPlugin

▸ **EventInitPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends [`EventType`](enums/EventType.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `execute` | (...`args`: [`EventArgs`](modules.md#eventargs)<`I`, [`Init`](enums/PluginType.md#init)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

#### Defined in

[src/handler/plugins/createPlugin.ts:16](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L16)

___

### commandModule

▸ **commandModule**(`mod`): [`CommandModule`](modules.md#commandmodule)

The wrapper function to define command modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputCommand`](modules.md#inputcommand) |

#### Returns

[`CommandModule`](modules.md#commandmodule)

#### Defined in

[src/handler/sern.ts:65](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L65)

___

### discordEvent

▸ **discordEvent**<`T`\>(`mod`): [`EventModule`](modules.md#eventmodule)

Create event modules from discord.js client events,
This is an [eventModule](modules.md#eventmodule-1) for discord events,
where typings can be very bad.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | `Object` |
| `mod.execute` | (...`args`: `ClientEvents`[`T`]) => `unknown` |
| `mod.name` | `T` |
| `mod.plugins?` | [`AnyEventPlugin`](modules.md#anyeventplugin)[] |

#### Returns

[`EventModule`](modules.md#eventmodule)

#### Defined in

[src/handler/sern.ts:98](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L98)

___

### eventModule

▸ **eventModule**(`mod`): [`EventModule`](modules.md#eventmodule)

The wrapper function to define event modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputEvent`](modules.md#inputevent) |

#### Returns

[`EventModule`](modules.md#eventmodule)

#### Defined in

[src/handler/sern.ts:80](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L80)

___

### makePlugin

▸ **makePlugin**<`V`\>(`type`, `execute`): [`Plugin`](interfaces/Plugin.md)<`V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`PluginType`](enums/PluginType.md) |
| `execute` | (...`args`: `any`[]) => `any` |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`V`\>

#### Defined in

[src/handler/plugins/createPlugin.ts:6](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/plugins/createPlugin.ts#L6)

___

### many

▸ **many**<`T`\>(`value`): () => () => `T`

A function that returns another function
Used for transient in iti

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`fn`

▸ (): () => `T`

##### Returns

`fn`

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/handler/utilities/functions.ts:17](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/utilities/functions.ts#L17)

___

### single

▸ **single**<`T`\>(`value`): () => `T`

A function that returns whatever value is provided.
Used for singleton in iti

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/handler/utilities/functions.ts:10](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/utilities/functions.ts#L10)

___

### useContainerRaw

▸ **useContainerRaw**(): ``null`` \| `Container`<[`Dependencies`](interfaces/Dependencies.md), `Partial`<[`Dependencies`](interfaces/Dependencies.md)\>\>

Returns the underlying data structure holding all dependencies.
Exposes some methods from iti

#### Returns

``null`` \| `Container`<[`Dependencies`](interfaces/Dependencies.md), `Partial`<[`Dependencies`](interfaces/Dependencies.md)\>\>

#### Defined in

[src/handler/dependencies/provider.ts:87](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/dependencies/provider.ts#L87)
