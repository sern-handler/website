---
sidebar_position: 6
---

# Services

:::tip
This is version 3 api only!!
:::


:::tip
TLDR: The direct upgrade to useContainer. if you set up a bot with create-bot, check dependencies.d.ts. 
Dependencies are the types that Services uses.
:::

You need someway to use dependencies in your command module. Services to the rescue!
```ts title="src/dependencies.d.ts"
import { CoreDependencies, Singleton } from '@sern/handler'
import { Client } from 'discord.js'

interface Dependencies extends CoreDependencies { 
    '@sern/client': Singleton<Client>
}

```
Recall, some keys in Dependencies are special. 

> Special key dependency must implement its contracts.
>  - `@sern/client`: Your discord client. -> [Emitter](../../api/interfaces/Emitter)
>  - `@sern/logger`: Log data -> [Logging](../../api/interfaces/Logging) 
>  - `@sern/errors`: Handling errors and lifetime -> [ErrorHandling](../../api/interfaces/ErrorHandling)
>  - `@sern/modules`: Managing all command modules -> [ModuleManager](../../api/interfaces/ModuleManager)
>  - `@sern/emitter`: is the key to emit events and occurences in a project -> [Emitter](../../api/interfaces/Emitter)


Lets try to access the client you provided.

```ts title="src/commands/ping.ts"
import { Service } from '@sern/handler'

export default commandModule({ 
   // ...
    execute: (ctx) => {
        //Client!
        const client = Service('@sern/client');
    }
   // 
})
```


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Safety
- Services cannot be called in other services while makeDependencies is forming.

<Tabs>

<TabItem value="good" label="A good example">

Lets pass a logger into our database.
```ts title="index.ts" showLineNumbers
await makeDependencies({ 
    build: root => root
        //Overriding the default logger provided.
        .upsert({ '@sern/logger': single(() => new Logger()) })

        // Wiring our logger into the database.
        .add(ctx =>  {
            return { database: single(() => new Database(ctx['sern/logger']))) }
        })
})
```
</TabItem>

<TabItem value="bad" label="Don't do this">

```ts title="index.ts" showLineNumbers
await makeDependencies({ 
    build: root => root
        //Overriding the default logger provided.
        .upsert({ '@sern/logger': single(() => new Logger()) })

        // Wiring our logger into the database.
        // We wire our database incorrectly. Logger should be passed INTO the constructor
        .add({ database: single(() => new Database()) })
})
```

```ts title="index.ts" showLineNumbers
import { Service, makeDependencies } from '@sern/handler';

//Calling Service prematurely!
const logger = Service('@sern/logger');

class Database {
    
    constructor() {
        this.logger = logger
    }
}
```
This is a code smell anyway. It breaks encapsulation and defeats the purpose of wiring dependencies
</TabItem>
</Tabs>

- Services can only be used after sern has made dependencies. 
    - Calling a service before will crash your application. 
- Services can be safely used outside of commandModules. 
    - Be careful to not cause too many side effects.



- You will need to wire dependencies together.

<Tabs>
<TabItem value="good" label="A good example">

```ts title="index.ts" showLineNumbers
await makeDependencies(...pass your options here)
```
```ts title="commands/ping.ts" showLineNumbers
// This is guaranteed to be defined if configured correctly
import { Service } from '@sern/handler';
const client = Service('@sern/client');
```

</TabItem>

<TabItem value="bad" label="Don't do this">

```ts title="index.ts" showLineNumbers
import { Service, makeDependencies } from '@sern/handler';
/* DON'T USE SERVICES BEFORE CALLING makeDependencies */
const logger = Service('@sern/logger');

await makeDependencies()
```

</TabItem>

</Tabs>

- Services can only be used after sern has made dependencies. 
    - Calling a service before will crash your application. 
- Services can be safely used outside of commandModules. 
    - Be careful to not cause too many side effects.


## Related api
- use `Service` for single dependency.
- use `Services` for multiple dependencies.



