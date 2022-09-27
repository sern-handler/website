---
id: "Wrapper"
title: "Interface: Wrapper"
sidebar_label: "Wrapper"
sidebar_position: 0
custom_edit_url: null
---

An object to be passed into Sern#init() function.

## Properties

### client

• `Readonly` **client**: `Client`<`boolean`\>

#### Defined in

[src/handler/structures/wrapper.ts:11](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/wrapper.ts#L11)

___

### commands

• `Readonly` **commands**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:15](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/wrapper.ts#L15)

___

### defaultPrefix

• `Optional` `Readonly` **defaultPrefix**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:14](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/wrapper.ts#L14)

___

### events

• `Optional` `Readonly` **events**: `string` \| { `absPath`: `string` ; `mod`: `EventModule`  }[] \| () => { `absPath`: `string` ; `mod`: `EventModule`  }[]

#### Defined in

[src/handler/structures/wrapper.ts:16](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/wrapper.ts#L16)

___

### sernEmitter

• `Optional` `Readonly` **sernEmitter**: [`SernEmitter`](../classes/SernEmitter.md)

#### Defined in

[src/handler/structures/wrapper.ts:13](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/wrapper.ts#L13)
