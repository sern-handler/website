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

[src/core/ioc.ts:140](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L140)

***

### @sern/emitter

> **@sern/emitter**: [`Emitter`](/v4/api/interfaces/emitter/)

sern emitter listens to events that happen throughout
the handler. some include module.register, module.activate.

#### Source

[src/core/ioc.ts:145](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L145)

***

### @sern/errors

> **@sern/errors**: [`ErrorHandling`](/v4/api/interfaces/errorhandling/)

An error handler which is the final step before 
the sern process actually crashes.

#### Source

[src/core/ioc.ts:150](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L150)

***

### @sern/logger?

> `optional` **@sern/logger**: [`Logging`](/v4/api/interfaces/logging/)\<`unknown`\>

Optional logger. Performs ... logging

#### Source

[src/core/ioc.ts:154](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L154)

***

### @sern/modules

> **@sern/modules**: `Map`\<`string`, [`Module`](/v4/api/interfaces/module/)\>

Readonly module store. sern stores these 
by module.meta.id -> Module

#### Source

[src/core/ioc.ts:159](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L159)

***

### @sern/scheduler

> **@sern/scheduler**: `TaskScheduler`

#### Source

[src/core/ioc.ts:161](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/ioc.ts#L161)
