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

## Extends

- `CoreContext`\<`Message`, `ChatInputCommandInteraction`\>

## Accessors

### channel

> `get` **channel**(): `null` \| `TextBasedChannel`

#### Returns

`null` \| `TextBasedChannel`

#### Source

[src/core/structures/context.ts:49](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L49)

***

### channelId

> `get` **channelId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:53](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L53)

***

### client

> `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Source

[src/core/structures/context.ts:108](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L108)

***

### createdTimestamp

> `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Source

[src/core/structures/context.ts:73](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L73)

***

### guild

> `get` **guild**(): `null` \| `Guild`

#### Returns

`null` \| `Guild`

#### Source

[src/core/structures/context.ts:79](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L79)

***

### guildId

> `get` **guildId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/core/structures/context.ts:85](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L85)

***

### id

> `get` **id**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:43](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L43)

***

### inGuild

> `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Source

[src/core/structures/context.ts:114](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L114)

***

### interaction

> `get` **interaction**(): `ChatInputCommandInteraction`\<`CacheType`\>

#### Returns

`ChatInputCommandInteraction`\<`CacheType`\>

#### Source

[src/core/structures/context.ts:103](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L103)

***

### member

> `get` **member**(): `null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

`null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Source

[src/core/structures/context.ts:93](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L93)

***

### message

> `get` **message**(): `Message`\<`boolean`\>

#### Returns

`Message`\<`boolean`\>

#### Source

[src/core/structures/context.ts:99](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L99)

***

### options

> `get` **options**(): `string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Returns

`string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:26](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L26)

***

### prefix

> `get` **prefix**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Source

[src/core/structures/context.ts:40](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L40)

***

### user

> `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Source

[src/core/structures/context.ts:63](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L63)

***

### userId

> `get` **userId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:69](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L69)

## Methods

### isMessage()

> **isMessage**(): `this is CoreContext<Message<boolean>, never>`

#### Returns

`this is CoreContext<Message<boolean>, never>`

#### Inherited from

`CoreContext.isMessage`

#### Source

[src/core/structures/core-context.ts:11](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/core-context.ts#L11)

***

### isSlash()

> **isSlash**(): `this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Returns

`this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Inherited from

`CoreContext.isSlash`

#### Source

[src/core/structures/core-context.ts:15](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/core-context.ts#L15)

***

### reply()

> **reply**(`content`): `Promise`\<`Message`\<`boolean`\>\>

#### Parameters

• **content**: `ReplyOptions`

#### Returns

`Promise`\<`Message`\<`boolean`\>\>

#### Source

[src/core/structures/context.ts:120](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L120)

***

### wrap()

> `static` **wrap**(`wrappable`, `prefix`?): [`Context`](/v4/api/classes/context/)

#### Parameters

• **wrappable**: `BaseInteraction`\<`CacheType`\> \| `Message`\<`boolean`\>

• **prefix?**: `string`

#### Returns

[`Context`](/v4/api/classes/context/)

#### Source

[src/core/structures/context.ts:129](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/structures/context.ts#L129)
