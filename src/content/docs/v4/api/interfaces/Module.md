---
editUrl: false
next: false
prev: false
title: "Module"
---

## Since

1.0.0

## Extended by

- [`BothCommand`](/v4/api/interfaces/bothcommand/)
- [`ContextMenuMsg`](/v4/api/interfaces/contextmenumsg/)
- [`ContextMenuUser`](/v4/api/interfaces/contextmenuuser/)
- [`SlashCommand`](/v4/api/interfaces/slashcommand/)
- [`TextCommand`](/v4/api/interfaces/textcommand/)
- [`ButtonCommand`](/v4/api/interfaces/buttoncommand/)
- [`StringSelectCommand`](/v4/api/interfaces/stringselectcommand/)
- [`MentionableSelectCommand`](/v4/api/interfaces/mentionableselectcommand/)
- [`UserSelectCommand`](/v4/api/interfaces/userselectcommand/)
- [`ChannelSelectCommand`](/v4/api/interfaces/channelselectcommand/)
- [`RoleSelectCommand`](/v4/api/interfaces/roleselectcommand/)
- [`ModalSubmitCommand`](/v4/api/interfaces/modalsubmitcommand/)
- [`DiscordEventCommand`](/v4/api/interfaces/discordeventcommand/)
- [`SernEventCommand`](/v4/api/interfaces/serneventcommand/)
- [`ExternalEventCommand`](/v4/api/interfaces/externaleventcommand/)

## Properties

### description?

> `optional` **description**: `string`

#### Source

[src/types/core-modules.ts:126](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L126)

***

### locals

> **locals**: `Dictionary`

Custom data storage object for module-specific information.
Plugins and module code can use this to store and retrieve metadata,
configuration, or any other module-specific information.

#### Description

A key-value store that allows plugins and module code to persist
data at the module level. This is especially useful for InitPlugins that need
to attach metadata or configuration to modules.

#### Example

```ts
// In a plugin
module.locals.registrationDate = Date.now();
module.locals.version = "1.0.0";
module.locals.permissions = ["ADMIN", "MODERATE"];
```

#### Example

```ts
// In module execution
console.log(`Command registered on: ${new Date(module.locals.registrationDate)}`);
```

#### Example

```ts
// Storing localization data
module.locals.translations = {
  en: "Hello",
  es: "Hola",
  fr: "Bonjour"
};
```

#### Example

```ts
// Storing command metadata
module.locals.metadata = {
  category: "admin",
  cooldown: 5000,
  requiresPermissions: true
};
```

#### Remarks

- The locals object is initialized as an empty object ({}) by default
- Keys should be namespaced to avoid collisions between plugins
- Values can be of any type
- Data persists for the lifetime of the module
- Commonly used by InitPlugins during module initialization

@best-practices
1. Namespace your keys to avoid conflicts:
   ```typescript
   module.locals['myPlugin:data'] = value;
   ```

2. Document the data structure you're storing:
   ```typescript
   interface MyPluginData {
     version: string;
     timestamp: number;
   }
   module.locals['myPlugin:data'] = {
     version: '1.0.0',
     timestamp: Date.now()
   } as MyPluginData;
   ```

3. Use type-safe accessors when possible:
   ```typescript
   const getPluginData = (module: Module): MyPluginData => 
     module.locals['myPlugin:data'];
   ```

#### Source

[src/types/core-modules.ts:199](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L199)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Source

[src/types/core-modules.ts:127](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L127)

***

### name?

> `optional` **name**: `string`

#### Source

[src/types/core-modules.ts:123](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L123)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Source

[src/types/core-modules.ts:124](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L124)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Source

[src/types/core-modules.ts:125](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L125)

***

### type

> **type**: [`CommandType`](/v4/api/enumerations/commandtype/) \| [`EventType`](/v4/api/enumerations/eventtype/)

#### Source

[src/types/core-modules.ts:122](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L122)

## Methods

### execute()

> **execute**(...`args`): `any`

#### Parameters

• ...**args**: `any`[]

#### Returns

`any`

#### Source

[src/types/core-modules.ts:200](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L200)
