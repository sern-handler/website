---
editUrl: false
next: false
prev: false
title: "SernEventCommand"
---

## Since

1.0.0

## Extends

- [`Module`](/v4/api/interfaces/module/)

## Type parameters

• **T** *extends* keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/) = keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`description`](/v4/api/interfaces/module/#description)

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

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`locals`](/v4/api/interfaces/module/#locals)

#### Source

[src/types/core-modules.ts:199](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L199)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`meta`](/v4/api/interfaces/module/#meta)

#### Source

[src/types/core-modules.ts:127](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L127)

***

### name?

> `optional` **name**: `T`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`name`](/v4/api/interfaces/module/#name)

#### Source

[src/types/core-modules.ts:208](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L208)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`onEvent`](/v4/api/interfaces/module/#onevent)

#### Source

[src/types/core-modules.ts:124](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L124)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`plugins`](/v4/api/interfaces/module/#plugins)

#### Source

[src/types/core-modules.ts:125](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L125)

***

### type

> **type**: [`Sern`](/v4/api/enumerations/eventtype/#sern)

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`type`](/v4/api/interfaces/module/#type)

#### Source

[src/types/core-modules.ts:209](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L209)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)\[`T`\]

#### Returns

`unknown`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`execute`](/v4/api/interfaces/module/#execute)

#### Source

[src/types/core-modules.ts:210](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/types/core-modules.ts#L210)
