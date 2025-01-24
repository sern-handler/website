---
editUrl: false
next: false
prev: false
title: "Wrapper"
---

Wrapper

## Description

Configuration interface for the sern framework. This interface defines
the structure for configuring essential framework features including command handling,
event management, and task scheduling.

## Properties

### commands

> **commands**: `string` \| `string`[]

#### Description

Specifies the directory path where command modules are located.
This is a required property that tells sern where to find and load command files.
The path should be relative to the project root. If given an array, each directory is loaded in order
they were declared. Order of modules in each directory is not guaranteed

#### Example

```ts
commands: ["./dist/commands"]
```

#### Source

[src/types/utility.ts:46](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/utility.ts#L46)

***

### defaultPrefix?

> `optional` **defaultPrefix**: `string`

#### Description

Optional prefix for text commands. This prefix will be used
to identify text commands in messages. If not specified, text commands [CommandType.Text](../../../../../../v4/api/enumerations/commandtype/#text)
will be disabled.

#### Example

```ts
defaultPrefix: "?"
```

#### Source

[src/types/utility.ts:65](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/utility.ts#L65)

***

### events?

> `optional` **events**: `string` \| `string`[]

#### Description

Optional directory path where event modules are located.
If provided, Sern will automatically register and handle events from
modules in this directory. The path should be relative to the project root.
If given an array, each directory is loaded in order they were declared. 
Order of modules in each directory is not guaranteed.

#### Example

```ts
events: ["./dist/events"]
```

#### Source

[src/types/utility.ts:77](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/utility.ts#L77)

***

### handleModuleErrors?

> `optional` **handleModuleErrors**: `boolean`

#### Description

Optional flag to enable automatic error handling for modules.
When enabled, sern will automatically catch and handle errors that occur
during module execution, preventing crashes and providing error logging.

#### Default

```ts
false
```

#### Source

[src/types/utility.ts:55](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/utility.ts#L55)

***

### tasks?

> `optional` **tasks**: `string` \| `string`[]

#### Description

Optional directory path where scheduled task modules are located.
If provided, Sern will automatically register and handle scheduled tasks
from modules in this directory. The path should be relative to the project root.
If given an array, each directory is loaded in order they were declared. 
Order of modules in each directory is not guaranteed.

#### Example

```ts
tasks: ["./dist/tasks"]
```

#### Source

[src/types/utility.ts:89](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/utility.ts#L89)
