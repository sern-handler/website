---
sidebar_position: 1
---

# Transitioning from v2 to v3


- Sern.makeDependencies -> makeDependencies
    - it is asynchronous and top level function now. Make sure to await it before initing for proper synchronization.


```diff
- Sern.makeDependencies({ build: () => {} })
+ await makeDependencies({ build: () => {} })
```
Also, v3 comes with the new Service api. To make sure to enable intellisense

include a dependencies.d.ts file into compilation.
```ts 
/**
 * This file serves as intellisense for sern projects.
 * Types are declared here for dependencies to function properly
 * Service(s) api rely on this file to provide a better developer experience.
 */

import { SernEmitter, Logging, CoreModuleStore, ModuleManager, ErrorHandling, CoreDependencies, Singleton } from '@sern/handler'
import { Client } from 'discord.js'

declare global {
   interface Dependencies extends CoreDependencies {
        '@sern/client': Singleton<Client>
   }
}


export {}

```
