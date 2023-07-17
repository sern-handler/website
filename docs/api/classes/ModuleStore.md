---
id: "ModuleStore"
title: "Class: ModuleStore"
sidebar_label: "ModuleStore"
sidebar_position: 0
custom_edit_url: null
---

Represents a core module store that stores IDs mapped to file paths.

## Implements

- [`CoreModuleStore`](../interfaces/CoreModuleStore.md)

## Constructors

### constructor

• **new ModuleStore**()

## Properties

### commands

• **commands**: `Map`<`string`, `string`\>

#### Implementation of

[CoreModuleStore](../interfaces/CoreModuleStore.md).[commands](../interfaces/CoreModuleStore.md#commands)

#### Defined in

[src/core/structures/module-store.ts:11](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/structures/module-store.ts#L11)

___

### metadata

• **metadata**: `WeakMap`<`Module`, `CommandMeta`\>

#### Implementation of

[CoreModuleStore](../interfaces/CoreModuleStore.md).[metadata](../interfaces/CoreModuleStore.md#metadata)

#### Defined in

[src/core/structures/module-store.ts:10](https://github.com/sern-handler/handler/blob/5e3dcf8/src/core/structures/module-store.ts#L10)
