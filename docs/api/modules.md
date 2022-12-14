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
- [AutocompletePlugin](interfaces/AutocompletePlugin.md)
- [BothCommand](interfaces/BothCommand.md)
- [ButtonCommand](interfaces/ButtonCommand.md)
- [ChannelSelectCommand](interfaces/ChannelSelectCommand.md)
- [ContextMenuMsg](interfaces/ContextMenuMsg.md)
- [ContextMenuUser](interfaces/ContextMenuUser.md)
- [Controller](interfaces/Controller.md)
- [Dependencies](interfaces/Dependencies.md)
- [DiscordEmitterPlugin](interfaces/DiscordEmitterPlugin.md)
- [DiscordEventPlugin](interfaces/DiscordEventPlugin.md)
- [ErrorHandling](interfaces/ErrorHandling.md)
- [ExternalEmitterPlugin](interfaces/ExternalEmitterPlugin.md)
- [ExternalEventPlugin](interfaces/ExternalEventPlugin.md)
- [Logging](interfaces/Logging.md)
- [MentionableSelectCommand](interfaces/MentionableSelectCommand.md)
- [ModalSubmitCommand](interfaces/ModalSubmitCommand.md)
- [Module](interfaces/Module.md)
- [ModuleManager](interfaces/ModuleManager.md)
- [Plugin](interfaces/Plugin.md)
- [RoleSelectCommand](interfaces/RoleSelectCommand.md)
- [SernAutocompleteData](interfaces/SernAutocompleteData.md)
- [SernEmitterPlugin](interfaces/SernEmitterPlugin.md)
- [SernEventPlugin](interfaces/SernEventPlugin.md)
- [SernSubCommandData](interfaces/SernSubCommandData.md)
- [SernSubCommandGroupData](interfaces/SernSubCommandGroupData.md)
- [SlashCommand](interfaces/SlashCommand.md)
- [StringSelectCommand](interfaces/StringSelectCommand.md)
- [TextCommand](interfaces/TextCommand.md)
- [UserSelectCommand](interfaces/UserSelectCommand.md)
- [Wrapper](interfaces/Wrapper.md)

## Type Aliases

### AnyDefinedModule

Ƭ **AnyDefinedModule**: [`DefinedCommandModule`](modules.md#definedcommandmodule) \| [`DefinedEventModule`](modules.md#definedeventmodule)

#### Defined in

[src/types/handler.ts:25](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L25)

___

### AnyModule

Ƭ **AnyModule**: [`CommandModule`](modules.md#commandmodule) \| [`EventModule`](modules.md#eventmodule)

#### Defined in

[src/types/module.ts:153](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L153)

___

### Args

Ƭ **Args**: [`ParseType`](modules.md#parsetype)<{ `slash`: [`SlashOptions`](modules.md#slashoptions) ; `text`: `string`[]  }\>

#### Defined in

[src/types/handler.ts:15](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L15)

___

### BaseOptions

Ƭ **BaseOptions**: `ApplicationCommandChoicesData` \| `ApplicationCommandNonOptionsData` \| `ApplicationCommandChannelOptionData` \| `ApplicationCommandNumericOptionData` \| `ApplicationCommandAttachmentOption` \| [`SernAutocompleteData`](interfaces/SernAutocompleteData.md)

Type that replaces autocomplete with [SernAutocompleteData](interfaces/SernAutocompleteData.md)

#### Defined in

[src/types/module.ts:190](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L190)

___

### CommandModule

Ƭ **CommandModule**: [`TextCommand`](interfaces/TextCommand.md) \| [`SlashCommand`](interfaces/SlashCommand.md) \| [`BothCommand`](interfaces/BothCommand.md) \| [`ContextMenuUser`](interfaces/ContextMenuUser.md) \| [`ContextMenuMsg`](interfaces/ContextMenuMsg.md) \| [`ButtonCommand`](interfaces/ButtonCommand.md) \| [`StringSelectCommand`](interfaces/StringSelectCommand.md) \| [`MentionableSelectCommand`](interfaces/MentionableSelectCommand.md) \| [`UserSelectCommand`](interfaces/UserSelectCommand.md) \| [`ChannelSelectCommand`](interfaces/ChannelSelectCommand.md) \| [`RoleSelectCommand`](interfaces/RoleSelectCommand.md) \| [`ModalSubmitCommand`](interfaces/ModalSubmitCommand.md)

#### Defined in

[src/types/module.ts:139](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L139)

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

[src/types/module.ts:157](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L157)

___

### CommandModuleNoPlugins

Ƭ **CommandModuleNoPlugins**: { [T in CommandType]: Omit<CommandModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/handler/plugins/plugin.ts:113](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L113)

___

### CommandModulePlugin

Ƭ **CommandModulePlugin**<`T`\>: [`EventPlugin`](modules.md#eventplugin)<`T`\> \| [`CommandPlugin`](modules.md#commandplugin)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](enums/CommandType.md) |

#### Defined in

[src/handler/plugins/plugin.ts:141](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L141)

___

### CommandPlugin

Ƭ **CommandPlugin**<`T`\>: { [K in T]: Plugin & Object }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) = keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) |

#### Defined in

[src/handler/plugins/plugin.ts:37](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L37)

___

### DefinedCommandModule

Ƭ **DefinedCommandModule**: [`CommandModule`](modules.md#commandmodule) & { `description`: `string` ; `name`: `string`  }

After modules are transformed, name and description are given default values if none
are provided to Module. This type represents that transformation

#### Defined in

[src/types/handler.ts:23](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L23)

___

### DefinedEventModule

Ƭ **DefinedEventModule**: [`EventModule`](modules.md#eventmodule) & { `name`: `string`  }

#### Defined in

[src/types/handler.ts:24](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L24)

___

### EventModule

Ƭ **EventModule**: `DiscordEventCommand` \| `SernEventCommand` \| `ExternalEventCommand`

#### Defined in

[src/types/module.ts:138](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L138)

___

### EventModuleCommandPluginDefs

Ƭ **EventModuleCommandPluginDefs**: `Object`

Event Module Command Plugins

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`DiscordEmitterPlugin`](interfaces/DiscordEmitterPlugin.md) |
| `2` | [`SernEmitterPlugin`](interfaces/SernEmitterPlugin.md) |
| `3` | [`ExternalEmitterPlugin`](interfaces/ExternalEmitterPlugin.md) |

#### Defined in

[src/handler/plugins/plugin.ts:131](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L131)

___

### EventModuleDefs

Ƭ **EventModuleDefs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | `DiscordEventCommand` |
| `2` | `SernEventCommand` |
| `3` | `ExternalEventCommand` |

#### Defined in

[src/types/module.ts:172](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L172)

___

### EventModuleEventPluginDefs

Ƭ **EventModuleEventPluginDefs**: `Object`

Event Module Event Plugins

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`DiscordEventPlugin`](interfaces/DiscordEventPlugin.md) |
| `2` | [`SernEventPlugin`](interfaces/SernEventPlugin.md) |
| `3` | [`ExternalEventPlugin`](interfaces/ExternalEventPlugin.md) |

#### Defined in

[src/handler/plugins/plugin.ts:122](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L122)

___

### EventModulePlugin

Ƭ **EventModulePlugin**<`T`\>: [`EventModuleEventPluginDefs`](modules.md#eventmoduleeventplugindefs)[`T`] \| [`EventModuleCommandPluginDefs`](modules.md#eventmodulecommandplugindefs)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventType`](enums/EventType.md) |

#### Defined in

[src/handler/plugins/plugin.ts:137](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L137)

___

### EventModulesNoPlugins

Ƭ **EventModulesNoPlugins**: { [T in EventType]: Omit<EventModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/handler/plugins/plugin.ts:116](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L116)

___

### EventPlugin

Ƭ **EventPlugin**<`T`\>: { [K in T]: Plugin & Object }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) = keyof [`CommandModuleDefs`](modules.md#commandmoduledefs) |

#### Defined in

[src/handler/plugins/plugin.ts:82](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L82)

___

### InputCommandModule

Ƭ **InputCommandModule**: { [T in CommandType]: CommandModuleNoPlugins[T] & Object }[[`CommandType`](enums/CommandType.md)]

User inputs this type. Sern processes behind the scenes for better usage

#### Defined in

[src/handler/plugins/plugin.ts:146](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L146)

___

### InputEventModule

Ƭ **InputEventModule**: { [T in EventType]: EventModulesNoPlugins[T] & Object }[[`EventType`](enums/EventType.md)]

#### Defined in

[src/handler/plugins/plugin.ts:150](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L150)

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

[src/types/handler.ts:36](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L36)

___

### MapDeps

Ƭ **MapDeps**<`Deps`, `T`\>: `T` extends [infer First, ...(infer Rest extends readonly unknown[])] ? [`UnpackFunction`<`Deps`[`First`]\>, ...(MapDeps<Deps, Rest\> extends [never] ? [] : MapDeps<Deps, Rest\>)] : [`never`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Deps` | extends [`Dependencies`](interfaces/Dependencies.md) |
| `T` | extends readonly `unknown`[] |

#### Defined in

[src/types/handler.ts:51](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L51)

___

### OptionalDependencies

Ƭ **OptionalDependencies**: ``"@sern/logger"``

#### Defined in

[src/types/handler.ts:57](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L57)

___

### ParseType

Ƭ **ParseType**<`T`\>: { [K in keyof T]: T[K] extends unknown ? [k: K, args: T[K]] : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:11](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L11)

___

### Payload

Ƭ **Payload**: { `module`: [`AnyModule`](modules.md#anymodule) ; `type`: [`Success`](enums/PayloadType.md#success)  } \| { `module?`: [`AnyModule`](modules.md#anymodule) ; `reason`: `string` \| `Error` ; `type`: [`Failure`](enums/PayloadType.md#failure)  } \| { `reason`: `string` ; `type`: [`Warning`](enums/PayloadType.md#warning)  }

#### Defined in

[src/types/handler.ts:26](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L26)

___

### ReplyOptions

Ƭ **ReplyOptions**: `string` \| `Omit`<`InteractionReplyOptions`, ``"fetchReply"``\> \| `MessageReplyOptions`

#### Defined in

[src/types/handler.ts:49](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L49)

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

[src/types/handler.ts:30](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L30)

___

### SernOptionsData

Ƭ **SernOptionsData**<`U`\>: `U` extends `ApplicationCommandSubCommandData` ? [`SernSubCommandData`](interfaces/SernSubCommandData.md) : `U` extends `ApplicationCommandSubGroupData` ? [`SernSubCommandGroupData`](interfaces/SernSubCommandGroupData.md) : [`BaseOptions`](modules.md#baseoptions)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `ApplicationCommandOptionData` = `ApplicationCommandOptionData` |

#### Defined in

[src/types/module.ts:210](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L210)

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

[src/types/handler.ts:37](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L37)

___

### SlashOptions

Ƭ **SlashOptions**: `Omit`<`CommandInteractionOptionResolver`, ``"getMessage"`` \| ``"getFocused"``\>

#### Defined in

[src/types/handler.ts:17](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L17)

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

[src/types/handler.ts:38](https://github.com/sern-handler/handler/blob/eb2924c/src/types/handler.ts#L38)

## Functions

### commandModule

▸ **commandModule**(`mod`): [`CommandModule`](modules.md#commandmodule)

The wrapper function to define command modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputCommandModule`](modules.md#inputcommandmodule) |

#### Returns

[`CommandModule`](modules.md#commandmodule)

#### Defined in

[src/handler/sern.ts:64](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/sern.ts#L64)

___

### eventModule

▸ **eventModule**(`mod`): [`EventModule`](modules.md#eventmodule)

The wrapper function to define event modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputEventModule`](modules.md#inputeventmodule) |

#### Returns

[`EventModule`](modules.md#eventmodule)

#### Defined in

[src/handler/sern.ts:76](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/sern.ts#L76)

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

[src/handler/utilities/functions.ts:16](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/utilities/functions.ts#L16)

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

[src/handler/utilities/functions.ts:10](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/utilities/functions.ts#L10)

___

### useContainerRaw

▸ **useContainerRaw**(): ``null`` \| `Container`<[`Dependencies`](interfaces/Dependencies.md), `Partial`<[`Dependencies`](interfaces/Dependencies.md)\>\>

Returns the underlying data structure holding all dependencies.
Exposes some methods from iti

#### Returns

``null`` \| `Container`<[`Dependencies`](interfaces/Dependencies.md), `Partial`<[`Dependencies`](interfaces/Dependencies.md)\>\>

#### Defined in

[src/handler/dependencies/provider.ts:74](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/dependencies/provider.ts#L74)
