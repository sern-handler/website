---
slug: 3.0.0
title: Release 3.0.0
authors: [jacoobes]
tags: [release]
---

## 3.0 Release

### Join our [discord](https://sern.dev/discord) <br />

### Features

#### Dependency Management
- `Service` API (recommended to use this over useContainer hooks)
    - Dependencies type must be globally augmented in order for Services api to function properly
- new methods on ModuleManager
    - getPublishableCommands()
- Init Hooks 
   - implement starting behavior for dependencies
   - To enforce and type check this, use the `Initializable` type when making your Dependencies type!
```ts 
class DatabaseService implements Init {
    //some hypothetical database
    _pgsql : database()  

    async init() {
       await _pgsql.load()
    }

}

await makeDependencies({ 
    build: root => root.add({
        db: new DatabaseService() //will be init'ed automatically
    })
})

```
- new SernEmitter event `modulesLoaded` , which allows users to customize behavior after all modules are loaded!
```ts

export default eventModule({
    name: 'modulesLoaded',
    type: EventType.Sern,
    execute: () => {
        console.log('All modules loaded')
    }
})


```

#### Quality of Life
- faster module loading
    - I utilize async generators for reading files now. A lot faster than the first iteration.
- better error handling
- Less boilerplate
    - Services api cleans up v2 boilerplate
- class modules devex got upgraded and work better than before
- automatically ignore any files not ending in (mts, cts, mjs, cjs, ts, js)
    - ignore commands and events with `!` prefix on filename or directory (ie: `!filename.ts` or `!directory` will be ignored by sern)

- `Service` API (recommended to use this over useContainer hooks)
    - Dependencies type must be globally augmented in order for Services api to function properly
- Less boilerplate
- new methods on ModuleManager
- automatically ignore any files not ending in (mts, cts, mjs, cjs, ts, js)
    - ignore commands / events with `!` prefix on filename or directory (ie: `!filename.ts` or `!directory`)
- new SernEmitter event `modulesLoaded` , which allows users to customize behavior after all modules are loaded!
- Init Hooks 
   - implement starting behavior for dependencies

### Experimental
- Experimental things may be subject to removal, need feedback and are not guaranteed stable
- dev / prod mode 
   - sern will behave differently depending on mode set
- init sern from `file` option
   - reads from local sern.config.json

```js 
Sern.init('file'); 
```
### Breaking changes
- Sern.makeDependencies -> makeDependencies
    - it is asynchronous and top level function now. Make sure to await it before initing for proper synchronization.
-  module store and manager internally changed, so those using them may recieve breaking changes
- BaseOptions type removed

```diff
- Sern.makeDependencies({ build: () => {} })
+ await makeDependencies({ build: () => {} })
```

### Deprecations
- Removed all previous marked deprecations in v3
- ModuleStore will be removed as a dependency in v4. The only way to access modules should be through ModuleManager
- Default Dependencies will be made internal in the v4. Users should only have access to its interface / contract

