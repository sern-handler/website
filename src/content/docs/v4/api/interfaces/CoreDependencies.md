---
editUrl: false
next: false
prev: false
title: "CoreDependencies"
---

## Properties

### @sern/client

> **@sern/client**: `Client`\<`boolean`\>

discord.js client.

#### Source

[src/types/ioc.ts:12](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/ioc.ts#L12)

***

### @sern/emitter

> **@sern/emitter**: [`Emitter`](/v4/api/interfaces/emitter/)

sern emitter listens to events that happen throughout
the handler. some include module.register, module.activate.

#### Source

[src/types/ioc.ts:17](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/ioc.ts#L17)

***

### @sern/errors

> **@sern/errors**: [`ErrorHandling`](/v4/api/interfaces/errorhandling/)

An error handler which is the final step before 
the sern process actually crashes.

#### Source

[src/types/ioc.ts:22](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/ioc.ts#L22)

***

### @sern/logger?

> `optional` **@sern/logger**: [`Logging`](/v4/api/interfaces/logging/)\<`unknown`\>

Optional logger. Performs ... logging

#### Source

[src/types/ioc.ts:26](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/ioc.ts#L26)

***

### @sern/modules

> **@sern/modules**: `Map`\<`string`, [`Module`](/v4/api/interfaces/module/)\>

Readonly module store. sern stores these 
by module.meta.id -> Module

#### Source

[src/types/ioc.ts:31](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/ioc.ts#L31)
