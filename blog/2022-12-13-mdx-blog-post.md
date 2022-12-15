---
slug: 2.0.0
title: Release 2.0.0
authors: [jacoobes]
tags: [release]
---

## 2.0 Release
Join our [discord](https://sern.dev/discord)! <br />
Wow! We're finally increasing our semantic versioning by +`1.7.9.` <br />
What does this mean?

### Plugin Support for Event Modules
You can now use plugins for event modules. Previous version would throw an error if the 
`plugins` field was populated.

```typescript 
export function commandPlTest() : SernEmitterPlugin {
    return {
        type: PluginType.Command,
        execute: ({ mod}, controller) => {
            if(mod.name === 'module.register') {
                console.log('Event Module created correctly')
                return controller.next()
            }
            console.log('event name is wrong')
            return controller.stop()
        }
    }
}
```
Applying this plugin to some `eventModule`: 
```typescript
export default eventModule({
    name: 'error',
    type: EventType.Sern,
    plugins: [commandPlTest()],
    execute(m) {
        console.log(m)
    },
})
```
## Dependency Injection and Decoupling

The powerful npm package `iti` decouples sern even more.
Decoupling data structures with the Inversion of Control pattern separates data from logic, which will help speed production
and make sern even more customizable than before.

### How do I start?
```typescript title="src/index.ts"
//With typescript, you can customize / augment your typings.
interface MyDependencies extends Dependencies {
    '@sern/client' : Singleton<Client>;
    '@sern/logger' : Singleton<DefaultLogging>
}

export const useContainer = Sern.makeDependencies<MyDependencies>({
//  exclude: new Set(['@sern/logger']), don't autofill optional dependencies
    build: root => root
        .add({ '@sern/client': single(client)  }) 
        .add({ '@sern/logger': single(new DefaultLogging()) })
});

Sern.init({
    defaultPrefix: '!', // removing defaultPrefix will shut down text commands
    commands: 'src/commands',
    // events: 'src/events' (optional),
    containerConfig : {
        get: useContainer //pass in your dependency getter here
    }
});

```
Using the `Sern#makeDependencies` function, inject your dependencies. 
We'll use specific dependencies that are created with the `@sern/keyword`
key.
Using typescript to display all `keywords` and what they represent:
```typescript
export interface Dependencies {
    '@sern/client': Singleton<EventEmitter>; //Discord Client
    '@sern/logger'?: Singleton<Logging>; //Logger
    '@sern/emitter': Singleton<SernEmitter>; //SernEmitter
    '@sern/store' : Singleton<ModuleStore>; //Stores all Command Modules
    '@sern/modules' : Singleton<ModuleManager>; //Manages Modules
    '@sern/errors': Singleton<ErrorHandling>; //A Lifetime / Crash Handler
}
```
:::danger
Sern#addExternal has been deprecated and removed in favor of Sern#makeDependencies
:::
At the moment,  one optional dependency, `@sern/logger`, exists. If not added explicitly,
we'll **autofill** with a [DefaultLogger](https://sern.dev/docs/api/classes/defaultlogging).

:::tip
If you don't  want a logger, add it to the
`exclude` field while composing dependencies.
:::

Use your generated dependency getter `useContainer` (use whatever name you want), access them
from anywhere.
:::note
the function [useContainerRaw](https://sern.dev/docs/api/modules#usecontainerraw) is provided for direct access to dependencies and the internal
data structure. Use this wisely as no guarantees are made and crashes can happen.
:::

The `build` field follows [createContainer](https://itijs.org/docs/quick-start#usage) function call.

## New CommandTypes
2.0 includes all the new role select menus. `CommandType.MenuSelect` has been renamed into
`CommandType.StringSelect`. The remaining SelectMenus are
`CommandType.RoleSelect`, `CommandType.ChannelSelect`, `CommandType.UserSelect`, `CommandType.MentionableSelect`
```typescript title="commands/roleselect.ts"
export default commandModule({
    type: CommandType.RoleSelect,
    execute(ctx) {
        ctx.reply('role select')
    },
})
```
In addition, commandModules with ContextMenus have been renamed.
```diff
- CommandType.MenuUser, CommandType.MenuMsg 
+ CommandType.CtxUser, CommandType.CtxMsg
```
## Typings Simplification
Pre 2.0: 
<img src="https://cdn.discordapp.com/attachments/820348341358952550/1038577974829666386/image.png" />
<br/> <br/> <br/>
Post 2.0:
<br/>
<img src="https://cdn.discordapp.com/attachments/820348341358952550/1052623728489550015/image.png" />

CommandPlugin<T> and EventPlugin<T> typings have also been static'ified, transformed from types to interfaces
## Breaking Changes
All deprecation warnings from previous versions have taken effect, and are removed in 2.0.

```diff
- type Module = EventModule | CommandModule
+ type AnyModule = EventModule | CommandModule

-export type SpreadParams<T extends (...args: never) => unknown> = (
-    args: Parameters<T>[number],
- ) => unknown;
```
Override type has been removed due to redundancy
```diff
- discord.js : 14.5
+ discord.js : 14.7

-typescript:  4.7
+ typescript:  4.9
```
```diff
+ interface Wrapper {
+    readonly defaultPrefix?: string;
+    readonly commands: string;
+    readonly events?: string;
+    readonly containerConfig : {
+        get: (...keys: (keyof Dependencies)[]) => unknown[];
+    }
+}

- interface Wrapper {
-    readonly client: Client;
-    readonly sernEmitter?: SernEmitter;
-    readonly defaultPrefix?: string;
-    readonly commands: string;
-    readonly events?:
-        | string
-        | { mod: EventModule; absPath: string }[]
-        | (() => { mod: EventModule; absPath: string }[]);
-}
```
```diff
+ DefaultLogger
+ DefaultModuleManager
+ SernEmitter
+ DefaultErrorHandling
+ type Singleton<T> = () => T
+ type Transient<T> = () => () => T; 
+ type LogPayload<T = unknown> = { message: T }
+ export const single = <T>() => T
+ export const many = <T>() => () => T
```
Including the previous section, some names to symbols and data structures were altered to
be better represented. view [changelog](/404.html)

## Context refactoring
The context data structure has been internally altered to represent its dynamics better. 