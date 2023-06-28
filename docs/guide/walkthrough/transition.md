---
sidebar_position: 1
---

# transition from v2 to v3

:::warning
The "Node" moduleResolution is the only one that has been tested to work with sern.
:::
- Sern.makeDependencies -> makeDependencies
    - it is asynchronous and top level function now. Make sure to await it before initing for proper synchronization.


```diff
- Sern.makeDependencies({ build: () => {} })
+ await makeDependencies({ build: () => {} })
```
Also, v3 comes with the new Service api. To make sure to enable intellisense
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


:::tip
Usually, you would use the create-bot tool.
For brand new bots, run 

```sh 
npm create @sern/bot
```

and follow the interactive prompts.
:::tip
