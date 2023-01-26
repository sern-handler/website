---
id: "ModuleStore"
title: "Class: ModuleStore"
sidebar_label: "ModuleStore"
sidebar_position: 0
custom_edit_url: null
---

Storing all command modules
This dependency is usually injected into ModuleManager

## Constructors

### constructor

• **new ModuleStore**()

## Properties

### ApplicationCommands

• `Readonly` **ApplicationCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `2` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `3` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |

#### Defined in

[src/handler/structures/moduleStore.ts:11](https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/moduleStore.ts#L11)

___

### BothCommands

• `Readonly` **BothCommands**: `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\>

#### Defined in

[src/handler/structures/moduleStore.ts:10](https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/moduleStore.ts#L10)

___

### InteractionHandlers

• `Readonly` **InteractionHandlers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `2` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `3` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `5` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `6` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `7` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |
| `8` | `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\> |

#### Defined in

[src/handler/structures/moduleStore.ts:18](https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/moduleStore.ts#L18)

___

### ModalSubmit

• `Readonly` **ModalSubmit**: `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\>

#### Defined in

[src/handler/structures/moduleStore.ts:16](https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/moduleStore.ts#L16)

___

### TextCommands

• `Readonly` **TextCommands**: `Map`<`string`, [`Processed`](../modules.md#processed)<[`CommandModule`](../modules.md#commandmodule)\>\>

#### Defined in

[src/handler/structures/moduleStore.ts:17](https://github.com/sern-handler/handler/blob/33f1446/src/handler/structures/moduleStore.ts#L17)
