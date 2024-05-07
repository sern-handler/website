---
id: "modules"
title: "@sern/handler"
sidebar_label: "Exports"
sidebar_position: 0.5
custom_edit_url: null
---

## Namespaces

- [Presence](namespaces/Presence.md)
- [Sern](namespaces/Sern.md)

## Enumerations

- [CommandType](enums/CommandType.md)
- [EventType](enums/EventType.md)
- [PayloadType](enums/PayloadType.md)
- [PluginType](enums/PluginType.md)

## Classes

- [Context](classes/Context.md)
- [DefaultErrorHandling](classes/DefaultErrorHandling.md)
- [DefaultLogging](classes/DefaultLogging.md)
- [DefaultModuleManager](classes/DefaultModuleManager.md)
- [ModuleStore](classes/ModuleStore.md)

## Interfaces

- [BothCommand](interfaces/BothCommand.md)
- [ButtonCommand](interfaces/ButtonCommand.md)
- [ChannelSelectCommand](interfaces/ChannelSelectCommand.md)
- [CommandModuleDefs](interfaces/CommandModuleDefs.md)
- [ContextMenuMsg](interfaces/ContextMenuMsg.md)
- [ContextMenuUser](interfaces/ContextMenuUser.md)
- [ControlPlugin](interfaces/ControlPlugin.md)
- [Controller](interfaces/Controller.md)
- [CoreDependencies](interfaces/CoreDependencies.md)
- [CoreModuleStore](interfaces/CoreModuleStore.md)
- [DiscordEventCommand](interfaces/DiscordEventCommand.md)
- [Disposable](interfaces/Disposable.md)
- [Emitter](interfaces/Emitter.md)
- [ErrorHandling](interfaces/ErrorHandling.md)
- [EventModuleDefs](interfaces/EventModuleDefs.md)
- [ExternalEventCommand](interfaces/ExternalEventCommand.md)
- [Init](interfaces/Init.md)
- [InitPlugin](interfaces/InitPlugin.md)
- [Logging](interfaces/Logging.md)
- [MentionableSelectCommand](interfaces/MentionableSelectCommand.md)
- [ModalSubmitCommand](interfaces/ModalSubmitCommand.md)
- [ModuleManager](interfaces/ModuleManager.md)
- [Plugin](interfaces/Plugin.md)
- [RoleSelectCommand](interfaces/RoleSelectCommand.md)
- [SernAutocompleteData](interfaces/SernAutocompleteData.md)
- [SernEventCommand](interfaces/SernEventCommand.md)
- [SernEventsMapping](interfaces/SernEventsMapping.md)
- [SernSubCommandData](interfaces/SernSubCommandData.md)
- [SernSubCommandGroupData](interfaces/SernSubCommandGroupData.md)
- [SlashCommand](interfaces/SlashCommand.md)
- [StringSelectCommand](interfaces/StringSelectCommand.md)
- [TextCommand](interfaces/TextCommand.md)
- [UserSelectCommand](interfaces/UserSelectCommand.md)
- [Wrapper](interfaces/Wrapper.md)

## Type Aliases

### AnyCommandPlugin

Ƭ **AnyCommandPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[`InitArgs`<`Processed`<[`CommandModule`](modules.md#commandmodule)\>\>]\>

#### Defined in

[src/types/core-plugin.ts:76](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-plugin.ts#L76)

___

### AnyEventPlugin

Ƭ **AnyEventPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[`InitArgs`<`Processed`<[`EventModule`](modules.md#eventmodule)\>\>]\>

#### Defined in

[src/types/core-plugin.ts:77](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-plugin.ts#L77)

___

### Args

Ƭ **Args**: `ParseType`<\{ `slash`: [`SlashOptions`](modules.md#slashoptions) ; `text`: `string`[]  }\>

#### Defined in

[src/types/utility.ts:16](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/utility.ts#L16)

___

### CommandModule

Ƭ **CommandModule**: [`TextCommand`](interfaces/TextCommand.md) \| [`SlashCommand`](interfaces/SlashCommand.md) \| [`BothCommand`](interfaces/BothCommand.md) \| [`ContextMenuUser`](interfaces/ContextMenuUser.md) \| [`ContextMenuMsg`](interfaces/ContextMenuMsg.md) \| [`ButtonCommand`](interfaces/ButtonCommand.md) \| [`StringSelectCommand`](interfaces/StringSelectCommand.md) \| [`MentionableSelectCommand`](interfaces/MentionableSelectCommand.md) \| [`UserSelectCommand`](interfaces/UserSelectCommand.md) \| [`ChannelSelectCommand`](interfaces/ChannelSelectCommand.md) \| [`RoleSelectCommand`](interfaces/RoleSelectCommand.md) \| [`ModalSubmitCommand`](interfaces/ModalSubmitCommand.md)

#### Defined in

[src/types/core-modules.ts:132](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L132)

___

### EventModule

Ƭ **EventModule**: [`DiscordEventCommand`](interfaces/DiscordEventCommand.md) \| [`SernEventCommand`](interfaces/SernEventCommand.md) \| [`ExternalEventCommand`](interfaces/ExternalEventCommand.md)

#### Defined in

[src/types/core-modules.ts:131](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L131)

___

### Initializable

Ƭ **Initializable**<`T`\>: `T`

Type to annotate that something is initializable. 
If T has an init method, this will be called.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Init`](interfaces/Init.md) |

#### Defined in

[src/types/ioc.ts:17](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/ioc.ts#L17)

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

[src/core/contracts/logging.ts:11](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/contracts/logging.ts#L11)

___

### Payload

Ƭ **Payload**: \{ `module`: `AnyModule` ; `type`: [`Success`](enums/PayloadType.md#success)  } \| \{ `module?`: `AnyModule` ; `reason`: `string` \| `Error` ; `type`: [`Failure`](enums/PayloadType.md#failure)  } \| \{ `module`: `undefined` ; `reason`: `string` ; `type`: [`Warning`](enums/PayloadType.md#warning)  }

#### Defined in

[src/types/utility.ts:26](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/utility.ts#L26)

___

### PluginResult

Ƭ **PluginResult**: `Awaitable`<`VoidResult`\>

#### Defined in

[src/types/core-plugin.ts:51](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-plugin.ts#L51)

___

### SernOptionsData

Ƭ **SernOptionsData**: [`SernSubCommandData`](interfaces/SernSubCommandData.md) \| [`SernSubCommandGroupData`](interfaces/SernSubCommandGroupData.md) \| `APIApplicationCommandBasicOption` \| [`SernAutocompleteData`](interfaces/SernAutocompleteData.md)

Type that replaces autocomplete with [SernAutocompleteData](interfaces/SernAutocompleteData.md)

#### Defined in

[src/types/core-modules.ts:200](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/core-modules.ts#L200)

___

### Singleton

Ƭ **Singleton**<`T`\>: () => `T`

Type to annotate that something is a singleton. 
T is created once and lazily.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/types/ioc.ts:7](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/ioc.ts#L7)

___

### SlashOptions

Ƭ **SlashOptions**: `Omit`<`CommandInteractionOptionResolver`, ``"getMessage"`` \| ``"getFocused"``\>

#### Defined in

[src/types/utility.ts:14](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/utility.ts#L14)

___

### Transient

Ƭ **Transient**<`T`\>: () => () => `T`

Type to annotate that something is transient. 
Every time this is called, a new object is created

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

[src/types/ioc.ts:12](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/types/ioc.ts#L12)

## Variables

### controller

• `Const` **controller**: `Object`

**`Since`**

1.0.0
The object passed into every plugin to control a command's behavior

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next` | () => `OkImpl`<`void`\> |
| `stop` | () => `ErrImpl`<`void`\> |

#### Defined in

[src/core/create-plugins.ts:69](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L69)

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
| `execute` | (...`args`: `CommandArgs`<`I`, [`Control`](enums/PluginType.md#control)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

#### Defined in

[src/core/create-plugins.ts:37](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L37)

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
| `execute` | (...`args`: `CommandArgs`<`I`, [`Init`](enums/PluginType.md#init)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

#### Defined in

[src/core/create-plugins.ts:28](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L28)

___

### DiscordEventControlPlugin

▸ **DiscordEventControlPlugin**<`T`\>(`name`, `execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

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

**`Since`**

2.5.0

**`Experimental`**

A specialized function for creating control plugins with discord.js ClientEvents.
Will probably be moved one day!

#### Defined in

[src/core/create-plugins.ts:58](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L58)

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
| `execute` | (...`args`: `EventArgs`<`I`, [`Control`](enums/PluginType.md#control)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

#### Defined in

[src/core/create-plugins.ts:46](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L46)

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
| `execute` | (...`args`: `EventArgs`<`I`, [`Init`](enums/PluginType.md#init)\>) => [`PluginResult`](modules.md#pluginresult) |

#### Returns

[`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

#### Defined in

[src/core/create-plugins.ts:19](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L19)

___

### Service

▸ **Service**<`T`\>(`key`): `NonNullable`<`UnpackFunction`<`Partial`<`Dependencies`\>[`T`]\>\>

The new Service api, a cleaner alternative to useContainer
To obtain intellisense, ensure a .d.ts file exists in the root of compilation.
Usually our scaffolding tool takes care of this.
Note: this method only works AFTER your container has been initiated

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Dependencies` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `T` | a key that corresponds to a dependency registered. |

#### Returns

`NonNullable`<`UnpackFunction`<`Partial`<`Dependencies`\>[`T`]\>\>

**`Since`**

3.0.0

**`Example`**

```ts
const client = Service('@sern/client');
```

#### Defined in

[src/core/ioc/dependency-injection.ts:37](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/ioc/dependency-injection.ts#L37)

___

### Services

▸ **Services**<`T`\>(`...keys`): `IntoDependencies`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Dependencies`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | [...T[]] |

#### Returns

`IntoDependencies`<`T`\>

array of dependencies, in the same order of keys provided

**`Since`**

3.0.0
The plural version of [Service](modules.md#service)

#### Defined in

[src/core/ioc/dependency-injection.ts:47](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/ioc/dependency-injection.ts#L47)

___

### commandModule

▸ **commandModule**(`mod`): [`CommandModule`](modules.md#commandmodule)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | `InputCommand` |

#### Returns

[`CommandModule`](modules.md#commandmodule)

**`Since`**

1.0.0 The wrapper function to define command modules for sern

#### Defined in

[src/core/modules.ts:19](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/modules.ts#L19)

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

**`Experimental`**

#### Defined in

[src/core/modules.ts:47](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/modules.ts#L47)

___

### eventModule

▸ **eventModule**(`mod`): [`EventModule`](modules.md#eventmodule)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | `InputEvent` |

#### Returns

[`EventModule`](modules.md#eventmodule)

**`Since`**

1.0.0
The wrapper function to define event modules for sern

#### Defined in

[src/core/modules.ts:32](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/modules.ts#L32)

___

### makeDependencies

▸ **makeDependencies**<`T`\>(`conf`): `Promise`<<V\>(...`keys`: [...V[]]) => `IntoDependencies`<`V`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Dependencies` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | `ValidDependencyConfig` |

#### Returns

`Promise`<<V\>(...`keys`: [...V[]]) => `IntoDependencies`<`V`\>\>

#### Defined in

[src/core/ioc/base.ts:144](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/ioc/base.ts#L144)

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

[src/core/create-plugins.ts:6](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/create-plugins.ts#L6)

___

### single

▸ **single**<`T`\>(`cb`): () => `T`

@__PURE__

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => `T` |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

**`Since`**

2.0.0.
Creates a singleton object.

#### Defined in

[src/core/ioc/dependency-injection.ts:11](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/ioc/dependency-injection.ts#L11)

___

### transient

▸ **transient**<`T`\>(`cb`): () => () => `T`

@__PURE__

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | () => () => `T` |

#### Returns

`fn`

▸ (): () => `T`

##### Returns

`fn`

▸ (): `T`

##### Returns

`T`

**`Since`**

2.0.0
Creates a transient object

#### Defined in

[src/core/ioc/dependency-injection.ts:21](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/ioc/dependency-injection.ts#L21)
