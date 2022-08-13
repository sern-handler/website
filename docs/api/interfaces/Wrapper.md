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

[src/handler/structures/wrapper.ts:10](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/wrapper.ts#L10)

___

### commands

• `Readonly` **commands**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:13](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/wrapper.ts#L13)

___

### defaultPrefix

• `Optional` `Readonly` **defaultPrefix**: `string`

#### Defined in

[src/handler/structures/wrapper.ts:12](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/wrapper.ts#L12)

___

### events

• `Optional` `Readonly` **events**: `string` \| { `absPath`: `string` ; `mod`: `EventModule`  }[] \| () => { `absPath`: `string` ; `mod`: `EventModule`  }[]

#### Defined in

[src/handler/structures/wrapper.ts:14](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/wrapper.ts#L14)

___

### sernEmitter

• `Optional` `Readonly` **sernEmitter**: [`SernEmitter`](../classes/SernEmitter.md)

#### Defined in

[src/handler/structures/wrapper.ts:11](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/wrapper.ts#L11)
