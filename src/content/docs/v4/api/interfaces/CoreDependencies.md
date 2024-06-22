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

[src/core/ioc.ts:135](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L135)

***

### @sern/emitter

> **@sern/emitter**: [`Emitter`](/v4/api/interfaces/emitter/)

sern emitter listens to events that happen throughout
the handler. some include module.register, module.activate.

#### Source

[src/core/ioc.ts:140](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L140)

***

### @sern/errors

> **@sern/errors**: [`ErrorHandling`](/v4/api/interfaces/errorhandling/)

An error handler which is the final step before 
the sern process actually crashes.

#### Source

[src/core/ioc.ts:145](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L145)

***

### @sern/logger?

> `optional` **@sern/logger**: [`Logging`](/v4/api/interfaces/logging/)\<`unknown`\>

Optional logger. Performs ... logging

#### Source

[src/core/ioc.ts:149](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L149)

***

### @sern/modules

> **@sern/modules**: `Map`\<`string`, [`Module`](/v4/api/interfaces/module/)\>

Readonly module store. sern stores these 
by module.meta.id -> Module

#### Source

[src/core/ioc.ts:154](https://github.com/sern-handler/handler/blob/3e9b9229c8e4036aa031b2eb106ad88a9cfb5a7b/src/core/ioc.ts#L154)
