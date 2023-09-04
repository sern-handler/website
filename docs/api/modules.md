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

## References

### controller

Re-exports [controller](namespaces/Sern.md#controller)

## Type Aliases

### AnyCommandPlugin

Ƭ **AnyCommandPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[`InitArgs`<`Processed`<[`CommandModule`](modules.md#commandmodule)\>\>]\>

#### Defined in

[src/types/core-plugin.ts:76](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-plugin.ts#L76)

___

### AnyEventPlugin

Ƭ **AnyEventPlugin**: [`ControlPlugin`](interfaces/ControlPlugin.md) \| [`InitPlugin`](interfaces/InitPlugin.md)<[`InitArgs`<`Processed`<[`EventModule`](modules.md#eventmodule)\>\>]\>

#### Defined in

[src/types/core-plugin.ts:77](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-plugin.ts#L77)

___

### Args

Ƭ **Args**: `ParseType`<{ `slash`: [`SlashOptions`](modules.md#slashoptions) ; `text`: `string`[]  }\>

#### Defined in

[src/types/utility.ts:16](https://github.com/sern-handler/handler/blob/e1059f9/src/types/utility.ts#L16)

___

### CommandModule

Ƭ **CommandModule**: [`TextCommand`](interfaces/TextCommand.md) \| [`SlashCommand`](interfaces/SlashCommand.md) \| [`BothCommand`](interfaces/BothCommand.md) \| [`ContextMenuUser`](interfaces/ContextMenuUser.md) \| [`ContextMenuMsg`](interfaces/ContextMenuMsg.md) \| [`ButtonCommand`](interfaces/ButtonCommand.md) \| [`StringSelectCommand`](interfaces/StringSelectCommand.md) \| [`MentionableSelectCommand`](interfaces/MentionableSelectCommand.md) \| [`UserSelectCommand`](interfaces/UserSelectCommand.md) \| [`ChannelSelectCommand`](interfaces/ChannelSelectCommand.md) \| [`RoleSelectCommand`](interfaces/RoleSelectCommand.md) \| [`ModalSubmitCommand`](interfaces/ModalSubmitCommand.md)

#### Defined in

[src/types/core-modules.ts:131](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L131)

___

### EventModule

Ƭ **EventModule**: [`DiscordEventCommand`](interfaces/DiscordEventCommand.md) \| [`SernEventCommand`](interfaces/SernEventCommand.md) \| [`ExternalEventCommand`](interfaces/ExternalEventCommand.md)

#### Defined in

[src/types/core-modules.ts:130](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L130)

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

[src/types/ioc.ts:17](https://github.com/sern-handler/handler/blob/e1059f9/src/types/ioc.ts#L17)

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

[src/core/contracts/logging.ts:11](https://github.com/sern-handler/handler/blob/e1059f9/src/core/contracts/logging.ts#L11)

___

### Payload

Ƭ **Payload**: { `module`: `AnyModule` ; `type`: [`Success`](enums/PayloadType.md#success)  } \| { `module?`: `AnyModule` ; `reason`: `string` \| `Error` ; `type`: [`Failure`](enums/PayloadType.md#failure)  } \| { `reason`: `string` ; `type`: [`Warning`](enums/PayloadType.md#warning)  }

#### Defined in

[src/types/utility.ts:26](https://github.com/sern-handler/handler/blob/e1059f9/src/types/utility.ts#L26)

___

### PluginResult

Ƭ **PluginResult**: `Awaitable`<`VoidResult`\>

#### Defined in

[src/types/core-plugin.ts:51](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-plugin.ts#L51)

___

### SernOptionsData

Ƭ **SernOptionsData**: [`SernSubCommandData`](interfaces/SernSubCommandData.md) \| [`SernSubCommandGroupData`](interfaces/SernSubCommandGroupData.md) \| `APIApplicationCommandBasicOption` \| [`SernAutocompleteData`](interfaces/SernAutocompleteData.md)

Type that replaces autocomplete with [SernAutocompleteData](interfaces/SernAutocompleteData.md)

#### Defined in

[src/types/core-modules.ts:199](https://github.com/sern-handler/handler/blob/e1059f9/src/types/core-modules.ts#L199)

___

### Singleton

Ƭ **Singleton**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

Type to annotate that something is a singleton. 
T is created once and lazily.

##### Returns

`T`

#### Defined in

[src/types/ioc.ts:7](https://github.com/sern-handler/handler/blob/e1059f9/src/types/ioc.ts#L7)

___

### SlashOptions

Ƭ **SlashOptions**: `Omit`<`CommandInteractionOptionResolver`, ``"getMessage"`` \| ``"getFocused"``\>

#### Defined in

[src/types/utility.ts:14](https://github.com/sern-handler/handler/blob/e1059f9/src/types/utility.ts#L14)

___

### Transient

Ƭ **Transient**<`T`\>: () => () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): () => `T`

Type to annotate that something is transient. 
Every time this is called, a new object is created

##### Returns

`fn`

▸ (): `T`

##### Returns

`T`

#### Defined in

[src/types/ioc.ts:12](https://github.com/sern-handler/handler/blob/e1059f9/src/types/ioc.ts#L12)

## Functions

### CommandControlPlugin

▸ **CommandControlPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

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

#### Defined in

[src/core/create-plugins.ts:36](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L36)

___

### CommandInitPlugin

▸ **CommandInitPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

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

#### Defined in

[src/core/create-plugins.ts:27](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L27)

___

### DiscordEventControlPlugin

▸ **DiscordEventControlPlugin**<`T`\>(`name`, `execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0

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

[src/core/create-plugins.ts:57](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L57)

___

### EventControlPlugin

▸ **EventControlPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

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

#### Defined in

[src/core/create-plugins.ts:45](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L45)

___

### EventInitPlugin

▸ **EventInitPlugin**<`I`\>(`execute`): [`Plugin`](interfaces/Plugin.md)<`unknown`[]\>

**`Since`**

2.5.0
@__PURE__

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

#### Defined in

[src/core/create-plugins.ts:18](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L18)

___

### Service

▸ **Service**<`T`\>(`key`): `NonNullable`<`UnpackFunction`<`Partial`<`Dependencies`\>[`T`]\>\>

The new Service api, a cleaner alternative to useContainer
To obtain intellisense, ensure a .d.ts file exists in the root of compilation.
Usually our scaffolding tool takes care of this.

**`Since`**

3.0.0

**`Example`**

```ts
const client = Service('@sern/client');
```

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

#### Defined in

[src/core/ioc/dependency-injection.ts:37](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/dependency-injection.ts#L37)

___

### Services

▸ **Services**<`T`\>(`...keys`): `IntoDependencies`<`T`\>

**`Since`**

3.0.0
The plural version of [Service](modules.md#service)

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

#### Defined in

[src/core/ioc/dependency-injection.ts:45](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/dependency-injection.ts#L45)

___

### commandModule

▸ **commandModule**(`mod`): [`CommandModule`](modules.md#commandmodule)

**`Since`**

1.0.0 The wrapper function to define command modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | `InputCommand` |

#### Returns

[`CommandModule`](modules.md#commandmodule)

#### Defined in

[src/core/modules.ts:25](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L25)

___

### discordEvent

▸ **discordEvent**<`T`\>(`mod`): [`EventModule`](modules.md#eventmodule)

Create event modules from discord.js client events,
This is an [eventModule](modules.md#eventmodule-1) for discord events,
where typings can be very bad.

**`Experimental`**

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

[src/core/modules.ts:53](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L53)

___

### eventModule

▸ **eventModule**(`mod`): [`EventModule`](modules.md#eventmodule)

**`Since`**

1.0.0
The wrapper function to define event modules for sern

#### Parameters

| Name | Type |
| :------ | :------ |
| `mod` | `InputEvent` |

#### Returns

[`EventModule`](modules.md#eventmodule)

#### Defined in

[src/core/modules.ts:38](https://github.com/sern-handler/handler/blob/e1059f9/src/core/modules.ts#L38)

___

### makeDependencies

▸ **makeDependencies**<`T`\>(`conf`): `Promise`<<V\>(...`keys`: [...V[]]) => `IntoDependencies`<`V`\>\>

**`Since`**

2.0.0

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Dependencies` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `DependencyConfiguration` | a configuration for creating your project dependencies |

#### Returns

`Promise`<<V\>(...`keys`: [...V[]]) => `IntoDependencies`<`V`\>\>

#### Defined in

[src/core/ioc/base.ts:27](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/base.ts#L27)

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

[src/core/create-plugins.ts:5](https://github.com/sern-handler/handler/blob/e1059f9/src/core/create-plugins.ts#L5)

___

### single

▸ **single**<`T`\>(`cb`): () => `T`

@__PURE__

**`Since`**

2.0.0.
Creates a singleton object.

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

#### Defined in

[src/core/ioc/dependency-injection.ts:12](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/dependency-injection.ts#L12)

___

### transient

▸ **transient**<`T`\>(`cb`): () => () => `T`

@__PURE__

**`Since`**

2.0.0
Creates a transient object

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

#### Defined in

[src/core/ioc/dependency-injection.ts:22](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/dependency-injection.ts#L22)

___

### useContainerRaw

▸ **useContainerRaw**(): `CoreContainer`<`Partial`<`Dependencies`\>\>

**`Deprecated`**

Returns the underlying data structure holding all dependencies.
Exposes methods from iti
Use the Service API. The container should be readonly

#### Returns

`CoreContainer`<`Partial`<`Dependencies`\>\>

#### Defined in

[src/core/ioc/base.ts:15](https://github.com/sern-handler/handler/blob/e1059f9/src/core/ioc/base.ts#L15)
