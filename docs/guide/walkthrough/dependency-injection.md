---
sidebar_position: 7
---

# Dependency Injection

:::warning
This contains version 2 code. Please view [transitioning to v3](./transition) 
:::

Since version 2.0.0, dependency injection, thanks to [iti](https://github.com/molszanski/iti), is a feature to customize your bot's utilities and structures.

Minimal setup for any project.

```ts
const client = new Client({
    ...options
})
Sern.makeDependencies<MyDependencies>({
    build: root => 
        root.add({ 
            '@sern/client': single(() => client)
        })
})

```
For any typescript project, you'll need to add an interface to get intellisense and typings.
```typescript
interface MyDependencies extends Dependencies {
    '@sern/client': Singleton<Client>
}
```
Full Dependency Injection setup
```typescript
const client = new Client({
    ...options
})

interface MyDependencies extends Dependencies {
    '@sern/client': Singleton<Client>
}

export const useContainer = Sern.makeDependencies<MyDependencies>({
    build: root => 
        root.add({ 
            '@sern/client': single(() => client)
        })
})

```
Everything else is handled. However, you may want customize things.

## Adding dependencies to root
Each sern built dependency must implement its contracts.
 - `@sern/logger`: Log data. [Logging](../../api/interfaces/Logging) 
 - `@sern/errors`: Handling errors and lifetime. [ErrorHandling](../../api/interfaces/ErrorHandling)
 - `@sern/modules`: Managing all command modules. [ModuleManager](../../api/interfaces/ModuleManager)
 - `@sern/emitter`: is the key to emit events and occurences in a project. [SernEmitter](../../api/classes/SernEmitter)


 You may also add disposers so that when the application crashes, the targeted dependency calls that function.

 ```typescript
export const useContainer = Sern.makeDependencies<MyDependencies>({
    build: root => 
        root.add({ 
            '@sern/client': single(() => client)
        })
        .addDisposer({ '@sern/client': client => client.destroy() })
})

 ```

:::tip 
Below is v3 api.
:::

## Init 
Do you need to perform intializing behavor for a dependency? 

```ts 
import { Init } from '@sern/handler'; 
class Database implements Init {
    init() {
        await this.connect()
        console.log('Connected');
    }
}

```

Modify you Dependencies interface: 
```ts title="src/dependencies.d.ts"
import type { Initializable } from '@sern/handler'

interface Dependencies extends CoreDependencies {
    database: Initializable<Database>
}

```
Make sure its been added:
```ts title="src/index.ts"
await makeDependencies({ 
    build: root => root 
        .add({ database => new Database() })
})
```



