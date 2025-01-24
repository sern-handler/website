---
editUrl: false
next: false
prev: false
title: "MentionableSelectCommand"
---

## Extends

- [`Module`](/v4/api/interfaces/module/)

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`description`](/v4/api/interfaces/module/#description)

#### Source

[src/types/core-modules.ts:122](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L122)

***

### execute()

> **execute**: (`ctx`, `tbd`) => `unknown`

#### Parameters

• **ctx**: `MentionableSelectMenuInteraction`\<`CacheType`\>

• **tbd**: [`SDT`](/v4/api/interfaces/sdt/)

#### Returns

`unknown`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`execute`](/v4/api/interfaces/module/#execute)

#### Source

[src/types/core-modules.ts:246](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L246)

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

[src/types/core-modules.ts:195](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L195)

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

[src/types/core-modules.ts:123](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L123)

***

### name?

> `optional` **name**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`name`](/v4/api/interfaces/module/#name)

#### Source

[src/types/core-modules.ts:119](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L119)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`onEvent`](/v4/api/interfaces/module/#onevent)

#### Source

[src/types/core-modules.ts:120](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L120)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`plugins`](/v4/api/interfaces/module/#plugins)

#### Source

[src/types/core-modules.ts:121](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L121)

***

### type

> **type**: [`MentionableSelect`](/v4/api/enumerations/commandtype/#mentionableselect)

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`type`](/v4/api/interfaces/module/#type)

#### Source

[src/types/core-modules.ts:245](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L245)
