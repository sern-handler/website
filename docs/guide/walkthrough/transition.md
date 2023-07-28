---
sidebar_position: 3
---


# transition from v2 to v3

```diff title="src/index.ts"
- Sern.makeDependencies({ build: () => {} })
+ await makeDependencies({ build: () => {} })
```

v3 comes with the new [Service api](../walkthrough/services). To make sure to enable intellisense
include a dependencies.d.ts file into compilation. [Click here for all new features](../../../blog/3.0.0)
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

A standard project file tree: <br />

![file tree](../../../static/img/fs.png)



