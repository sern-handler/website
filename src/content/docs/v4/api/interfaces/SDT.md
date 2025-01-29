---
editUrl: false
next: false
prev: false
title: "SDT"
---

SDT (State, Dependencies, Type) interface represents the core data structure
passed through the plugin pipeline to command modules.

 SDT

## Template

Type parameter for the state object's structure

## Template

Type parameter for dependencies interface

## Example

```ts
// Example of a plugin using SDT
const loggingPlugin = CommandControlPlugin((ctx, sdt: SDT) => {
    console.log(`User ${ctx.user.id} executed command`);
    return controller.next({ 'logging/timestamp': Date.now() });
});
```

## Example

```ts
// Example of state accumulation through multiple plugins
const plugin1 = CommandControlPlugin((ctx, sdt: SDT) => {
    return controller.next({ 'plugin1/data': 'value1' });
});

const plugin2 = CommandControlPlugin((ctx, sdt: SDT) => {
    // Access previous state
    const prevData = sdt.state['plugin1/data'];
    return controller.next({ 'plugin2/data': 'value2' });
});
```

## Remarks

- State is immutable and accumulated through the plugin chain
- Keys in state should be namespaced to avoid collisions
- Dependencies are injected and available throughout the pipeline
- Type information helps plugins make type-safe decisions

## See

 - [CommandControlPlugin](../../../../../../v4/api/functions/commandcontrolplugin) for plugin implementation
 - [CommandType](../../../../../../v4/api/enumerations/commandtype) for available command types
 - Dependencies for dependency injection interface

## Properties

### deps

> **deps**: `Dependencies`

Instance of application dependencies

#### Source

[src/types/core-modules.ts:87](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L87)

***

### module

> **module**: `object`

A copy of the current module that the plugin is running in.

#### description

> **description**: `string`

#### locals

> **locals**: `Dictionary`

#### meta

> **meta**: `Dictionary`

#### name

> **name**: `string`

#### Source

[src/types/core-modules.ts:109](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L109)

***

### params?

> `optional` **params**: `string`

Optional parameters passed to the command

#### Source

[src/types/core-modules.ts:104](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L104)

***

### state

> **state**: `Record`\<`string`, `unknown`\>

Accumulated state data passed between plugins

#### Source

[src/types/core-modules.ts:79](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L79)

***

### type

> **type**: [`CommandType`](/v4/api/enumerations/commandtype/)

Command type identifier

#### Source

[src/types/core-modules.ts:95](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L95)
