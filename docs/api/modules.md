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

- [Context](classes/Context.md)
- [SernEmitter](classes/SernEmitter.md)

## Interfaces

- [Controller](interfaces/Controller.md)
- [Wrapper](interfaces/Wrapper.md)

## Type Aliases

### Args

Ƭ **Args**: [`ParseType`](modules.md#parsetype)<{ `slash`: [`SlashOptions`](modules.md#slashoptions) ; `text`: `string`[]  }\>

#### Defined in

[src/types/handler.ts:11](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L11)

___

### AutocompletePlugin

Ƭ **AutocompletePlugin**: [`Override`](modules.md#override)<`BaseModule`, { `execute`: (`autocmp`: `AutocompleteInteraction`, `controlller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Event`](enums/PluginType.md#event)  }\>

#### Defined in

[src/handler/plugins/plugin.ts:92](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L92)

___

### BaseOptions

Ƭ **BaseOptions**: `ApplicationCommandChoicesData` \| `ApplicationCommandNonOptionsData` \| `ApplicationCommandChannelOptionData` \| `ApplicationCommandNumericOptionData` \| `ApplicationCommandAttachmentOption` \| [`SernAutocompleteData`](modules.md#sernautocompletedata)

Type that replaces autocomplete with [SernAutocompleteData](modules.md#sernautocompletedata)

#### Defined in

[src/handler/structures/module.ts:181](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L181)

___

### BothCommand

Ƭ **BothCommand**: [`Override`](modules.md#override)<`BaseModule`, { `alias?`: `string`[] ; `execute`: (`ctx`: [`Context`](classes/Context.md), `args`: [`Args`](modules.md#args)) => `Awaitable`<`void` \| `unknown`\> ; `onEvent`: [`EventPlugin`](modules.md#eventplugin)<[`Both`](enums/CommandType.md#both)\>[] ; `options?`: [`SernOptionsData`](modules.md#sernoptionsdata)[] ; `plugins`: [`CommandPlugin`](modules.md#commandplugin)[] ; `type`: [`Both`](enums/CommandType.md#both)  }\>

#### Defined in

[src/handler/structures/module.ts:55](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L55)

___

### CommandModuleNoPlugins

Ƭ **CommandModuleNoPlugins**: { [T in CommandType]: Omit<CommandModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/handler/plugins/plugin.ts:145](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L145)

___

### CommandModulePlugin

Ƭ **CommandModulePlugin**<`T`\>: [`EventPlugin`](modules.md#eventplugin)<`T`\> \| [`CommandPlugin`](modules.md#commandplugin)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`CommandType`](enums/CommandType.md) |

#### Defined in

[src/handler/plugins/plugin.ts:173](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L173)

___

### CommandPlugin

Ƭ **CommandPlugin**<`T`\>: { [K in T]: Override<BasePlugin, Object\> }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `CommandModuleDefs` = keyof `CommandModuleDefs` |

#### Defined in

[src/handler/plugins/plugin.ts:40](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L40)

___

### DefinedCommandModule

Ƭ **DefinedCommandModule**: [`DefinitelyDefined`](modules.md#definitelydefined)<`CommandModule`, ``"name"`` \| ``"description"``\>

#### Defined in

[src/types/handler.ts:48](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L48)

___

### DefinedEventModule

Ƭ **DefinedEventModule**: [`DefinitelyDefined`](modules.md#definitelydefined)<`EventModule`, ``"name"`` \| ``"description"``\>

#### Defined in

[src/types/handler.ts:49](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L49)

___

### DefinedModule

Ƭ **DefinedModule**: [`DefinitelyDefined`](modules.md#definitelydefined)<[`Module`](modules.md#module), ``"name"`` \| ``"description"``\>

After modules are transformed, name and description are given default values if none
are provided to Module. This type represents that transformation

#### Defined in

[src/types/handler.ts:47](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L47)

___

### DefinitelyDefined

Ƭ **DefinitelyDefined**<`T`, `K`\>: { [L in K]-?: T[L] extends Record<string, unknown\> ? DefinitelyDefined<T[L], keyof T[L]\> : Required<T\>[L] } & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

#### Defined in

[src/types/handler.ts:18](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L18)

___

### DiscordEmitterPlugin

Ƭ **DiscordEmitterPlugin**: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`wrapper`: `Client`, `module`: [`DefinitelyDefined`](modules.md#definitelydefined)<`DiscordEventCommand`, ``"name"`` \| ``"description"``\>, `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](enums/PluginType.md#command)  }\>

#### Defined in

[src/handler/plugins/plugin.ts:57](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L57)

___

### DiscordEventPlugin

Ƭ **DiscordEventPlugin**<`T`\>: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`args`: `ClientEvents`[`T`], `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `name?`: `T` ; `type`: [`Event`](enums/PluginType.md#event)  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ClientEvents` = keyof `ClientEvents` |

#### Defined in

[src/handler/plugins/plugin.ts:136](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L136)

___

### EventInput

Ƭ **EventInput**: `string` \| { `absPath`: `string` ; `mod`: `EventModule`  }[] \| () => { `absPath`: `string` ; `mod`: `EventModule`  }[]

#### Defined in

[src/types/handler.ts:24](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L24)

___

### EventModuleCommandPluginDefs

Ƭ **EventModuleCommandPluginDefs**: `Object`

Event Module Command Plugins

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`DiscordEmitterPlugin`](modules.md#discordemitterplugin) |
| `2` | [`SernEmitterPlugin`](modules.md#sernemitterplugin) |
| `3` | [`ExternalEmitterPlugin`](modules.md#externalemitterplugin) |

#### Defined in

[src/handler/plugins/plugin.ts:163](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L163)

___

### EventModuleEventPluginDefs

Ƭ **EventModuleEventPluginDefs**: `Object`

Event Module Event Plugins

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | [`DiscordEventPlugin`](modules.md#discordeventplugin) |
| `2` | [`SernEventPlugin`](modules.md#serneventplugin) |
| `3` | [`ExternalEventPlugin`](modules.md#externaleventplugin) |

#### Defined in

[src/handler/plugins/plugin.ts:154](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L154)

___

### EventModulePlugin

Ƭ **EventModulePlugin**<`T`\>: [`EventModuleEventPluginDefs`](modules.md#eventmoduleeventplugindefs)[`T`] \| [`EventModuleCommandPluginDefs`](modules.md#eventmodulecommandplugindefs)[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EventType`](enums/EventType.md) |

#### Defined in

[src/handler/plugins/plugin.ts:169](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L169)

___

### EventModulesNoPlugins

Ƭ **EventModulesNoPlugins**: { [T in EventType]: Omit<EventModuleDefs[T], "plugins" \| "onEvent"\> }

#### Defined in

[src/handler/plugins/plugin.ts:148](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L148)

___

### EventPlugin

Ƭ **EventPlugin**<`T`\>: { [K in T]: Override<BasePlugin, Object\> }[`T`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `CommandModuleDefs` = keyof `CommandModuleDefs` |

#### Defined in

[src/handler/plugins/plugin.ts:103](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L103)

___

### ExternalEmitterPlugin

Ƭ **ExternalEmitterPlugin**<`T`\>: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`wrapper`: `T`, `module`: [`DefinitelyDefined`](modules.md#definitelydefined)<`ExternalEventCommand`, ``"name"`` \| ``"description"``\>, `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](enums/PluginType.md#command)  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `EventEmitter` = `EventEmitter` |

#### Defined in

[src/handler/plugins/plugin.ts:68](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L68)

___

### ExternalEventPlugin

Ƭ **ExternalEventPlugin**: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`args`: `unknown`[], `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Event`](enums/PluginType.md#event)  }\>

#### Defined in

[src/handler/plugins/plugin.ts:128](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L128)

___

### InputCommandModule

Ƭ **InputCommandModule**: { [T in CommandType]: CommandModuleNoPlugins[T] & Object }[[`CommandType`](enums/CommandType.md)]

User inputs this type. Sern processes behind the scenes for better usage

#### Defined in

[src/handler/plugins/plugin.ts:178](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L178)

___

### InputEventModule

Ƭ **InputEventModule**: { [T in EventType]: EventModulesNoPlugins[T] & Object }[[`EventType`](enums/EventType.md)]

#### Defined in

[src/handler/plugins/plugin.ts:182](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L182)

___

### IsOptional

Ƭ **IsOptional**<`T`\>: { [K in keyof T]-?: T[K] extends Required<T\>[K] ? false : true }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:31](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L31)

___

### Module

Ƭ **Module**: `CommandModule` \| `EventModule`

#### Defined in

[src/handler/structures/module.ts:141](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L141)

___

### Nullish

Ƭ **Nullish**<`T`\>: `T` \| `undefined` \| ``null``

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:4](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L4)

___

### Override

Ƭ **Override**<`T1`, `T2`\>: `Omit`<`T1`, keyof `T2`\> & `T2`

#### Type parameters

| Name |
| :------ |
| `T1` |
| `T2` |

#### Defined in

[src/types/handler.ts:16](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L16)

___

### ParseType

Ƭ **ParseType**<`T`\>: { [K in keyof T]: T[K] extends unknown ? [k: K, args: T[K]] : never }[keyof `T`]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:7](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L7)

___

### Payload

Ƭ **Payload**: { `module`: [`Module`](modules.md#module) ; `type`: [`Success`](enums/PayloadType.md#success)  } \| { `module`: [`Module`](modules.md#module) \| `undefined` ; `reason`: `string` \| `Error` ; `type`: [`Failure`](enums/PayloadType.md#failure)  }

#### Defined in

[src/types/handler.ts:50](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L50)

___

### Reconstruct

Ƭ **Reconstruct**<`T`\>: `T` extends `Omit`<infer O, `never`\> ? `O` & [`Reconstruct`](modules.md#reconstruct)<`O`\> : `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/handler.ts:29](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L29)

___

### SernAutocompleteData

Ƭ **SernAutocompleteData**: [`Override`](modules.md#override)<`BaseApplicationCommandOptionsData`, { `autocomplete`: ``true`` ; `command`: `AutocompleteCommand` ; `type`: `ApplicationCommandOptionType.String` \| `ApplicationCommandOptionType.Number` \| `ApplicationCommandOptionType.Integer`  }\>

#### Defined in

[src/handler/structures/module.ts:166](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L166)

___

### SernEmitterPlugin

Ƭ **SernEmitterPlugin**: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`wrapper`: [`SernEmitter`](classes/SernEmitter.md), `module`: [`DefinitelyDefined`](modules.md#definitelydefined)<`SernEventCommand`, ``"name"`` \| ``"description"``\>, `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `type`: [`Command`](enums/PluginType.md#command)  }\>

#### Defined in

[src/handler/plugins/plugin.ts:80](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L80)

___

### SernEventPlugin

Ƭ **SernEventPlugin**<`T`\>: [`Override`](modules.md#override)<`BasePlugin`, { `execute`: (`args`: [`SernEventsMapping`](modules.md#serneventsmapping)[`T`], `controller`: [`Controller`](interfaces/Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\> ; `name?`: `T` ; `type`: [`Event`](enums/PluginType.md#event)  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](modules.md#serneventsmapping) = keyof [`SernEventsMapping`](modules.md#serneventsmapping) |

#### Defined in

[src/handler/plugins/plugin.ts:116](https://github.com/sern-handler/handler/blob/2009593/src/handler/plugins/plugin.ts#L116)

___

### SernEventsMapping

Ƭ **SernEventsMapping**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error` | [`Error` \| `string`] |
| `module.activate` | [[`Payload`](modules.md#payload)] |
| `module.register` | [[`Payload`](modules.md#payload)] |
| `warning` | [`string`] |

#### Defined in

[src/types/handler.ts:53](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L53)

___

### SernOptionsData

Ƭ **SernOptionsData**<`U`\>: `U` extends `ApplicationCommandSubCommandData` ? [`SernSubCommandData`](modules.md#sernsubcommanddata) : `U` extends `ApplicationCommandSubGroupData` ? [`SernSubCommandGroupData`](modules.md#sernsubcommandgroupdata) : [`BaseOptions`](modules.md#baseoptions)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends `ApplicationCommandOptionData` = `ApplicationCommandOptionData` |

#### Defined in

[src/handler/structures/module.ts:205](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L205)

___

### SernSubCommandData

Ƭ **SernSubCommandData**: [`Override`](modules.md#override)<`Omit`<`BaseApplicationCommandOptionsData`, ``"required"``\>, { `options?`: [`BaseOptions`](modules.md#baseoptions)[] ; `type`: `ApplicationCommandOptionType.Subcommand`  }\>

#### Defined in

[src/handler/structures/module.ts:189](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L189)

___

### SernSubCommandGroupData

Ƭ **SernSubCommandGroupData**: [`Override`](modules.md#override)<`Omit`<`BaseApplicationCommandOptionsData`, ``"required"``\>, { `options?`: [`SernSubCommandData`](modules.md#sernsubcommanddata)[] ; `type`: `ApplicationCommandOptionType.SubcommandGroup`  }\>

#### Defined in

[src/handler/structures/module.ts:197](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L197)

___

### SlashCommand

Ƭ **SlashCommand**: [`Override`](modules.md#override)<`BaseModule`, { `execute`: (`ctx`: [`Context`](classes/Context.md), `args`: [``"slash"``, [`SlashOptions`](modules.md#slashoptions)]) => `Awaitable`<`void` \| `unknown`\> ; `onEvent`: [`EventPlugin`](modules.md#eventplugin)<[`Slash`](enums/CommandType.md#slash)\>[] ; `options?`: [`SernOptionsData`](modules.md#sernoptionsdata)[] ; `plugins`: [`CommandPlugin`](modules.md#commandplugin)[] ; `type`: [`Slash`](enums/CommandType.md#slash)  }\>

#### Defined in

[src/handler/structures/module.ts:44](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L44)

___

### SlashOptions

Ƭ **SlashOptions**: `Omit`<`CommandInteractionOptionResolver`, ``"getMessage"`` \| ``"getFocused"``\>

#### Defined in

[src/types/handler.ts:13](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L13)

___

### SpreadParams

Ƭ **SpreadParams**<`T`\>: (`args`: `Parameters`<`T`\>[`number`]) => `unknown`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `never`) => `unknown` |

#### Type declaration

▸ (`args`): `unknown`

Turns a function with a union of array of args into a single union
 [ T , V , B ] | [ A ] => T | V | B | A

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Parameters`<`T`\>[`number`] |

##### Returns

`unknown`

#### Defined in

[src/types/handler.ts:39](https://github.com/sern-handler/handler/blob/2009593/src/types/handler.ts#L39)

___

### TextCommand

Ƭ **TextCommand**: [`Override`](modules.md#override)<`BaseModule`, { `alias?`: `string`[] ; `execute`: (`ctx`: [`Context`](classes/Context.md), `args`: [``"text"``, `string`[]]) => `Awaitable`<`void` \| `unknown`\> ; `onEvent`: [`EventPlugin`](modules.md#eventplugin)<[`Text`](enums/CommandType.md#text)\>[] ; `plugins`: [`CommandPlugin`](modules.md#commandplugin)[] ; `type`: [`Text`](enums/CommandType.md#text)  }\>

#### Defined in

[src/handler/structures/module.ts:33](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/module.ts#L33)

## Functions

### commandModule

▸ **commandModule**(`mod`): `CommandModule`

The wrapper function to define command modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputCommandModule`](modules.md#inputcommandmodule) |

#### Returns

`CommandModule`

#### Defined in

[src/handler/sern.ts:86](https://github.com/sern-handler/handler/blob/2009593/src/handler/sern.ts#L86)

___

### eventModule

▸ **eventModule**(`mod`): `EventModule`

The wrapper function to define event modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | [`InputEventModule`](modules.md#inputeventmodule) |

#### Returns

`EventModule`

#### Defined in

[src/handler/sern.ts:107](https://github.com/sern-handler/handler/blob/2009593/src/handler/sern.ts#L107)
