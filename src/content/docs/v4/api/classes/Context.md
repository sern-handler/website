---
editUrl: false
next: false
prev: false
title: "Context"
---

## Since

1.0.0
Provides values shared between
Message and ChatInputCommandInteraction

## Accessors

### channel

> `get` **channel**(): `null` \| `TextBasedChannel`

#### Returns

`null` \| `TextBasedChannel`

#### Source

[src/core/structures/context.ts:43](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L43)

***

### channelId

> `get` **channelId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:47](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L47)

***

### client

> `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Source

[src/core/structures/context.ts:107](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L107)

***

### createdTimestamp

> `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Source

[src/core/structures/context.ts:67](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L67)

***

### guild

> `get` **guild**(): `null` \| `Guild`

#### Returns

`null` \| `Guild`

#### Source

[src/core/structures/context.ts:71](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L71)

***

### guildId

> `get` **guildId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/core/structures/context.ts:75](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L75)

***

### id

> `get` **id**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:39](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L39)

***

### inGuild

> `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Source

[src/core/structures/context.ts:111](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L111)

***

### interaction

> `get` **interaction**(): `ChatInputCommandInteraction`\<`CacheType`\>

#### Returns

`ChatInputCommandInteraction`\<`CacheType`\>

#### Source

[src/core/structures/context.ts:99](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L99)

***

### member

> `get` **member**(): `null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

`null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Source

[src/core/structures/context.ts:81](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L81)

***

### message

> `get` **message**(): `Message`\<`boolean`\>

#### Returns

`Message`\<`boolean`\>

#### Source

[src/core/structures/context.ts:85](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L85)

***

### options

> `get` **options**(): `string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Returns

`string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:25](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L25)

***

### prefix

> `get` **prefix**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Source

[src/core/structures/context.ts:36](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L36)

***

### user

> `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Source

[src/core/structures/context.ts:55](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L55)

***

### userId

> `get` **userId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:63](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L63)

## Methods

### isMessage()

> **isMessage**(): `this is Context & Object`

#### Returns

`this is Context & Object`

#### Source

[src/core/structures/context.ts:91](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L91)

***

### isSlash()

> **isSlash**(): `this is Context & Object`

#### Returns

`this is Context & Object`

#### Source

[src/core/structures/context.ts:95](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L95)

***

### reply()

> **reply**(`content`): `Promise`\<`Message`\<`boolean`\>\>

#### Parameters

• **content**: `ReplyOptions`

#### Returns

`Promise`\<`Message`\<`boolean`\>\>

#### Source

[src/core/structures/context.ts:115](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L115)

***

### wrap()

> `static` **wrap**(`wrappable`, `prefix`?): [`Context`](/v4/api/classes/context/)

#### Parameters

• **wrappable**: `BaseInteraction`\<`CacheType`\> \| `Message`\<`boolean`\>

• **prefix?**: `string`

#### Returns

[`Context`](/v4/api/classes/context/)

#### Source

[src/core/structures/context.ts:124](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/context.ts#L124)
