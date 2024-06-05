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

[src/core/structures/context.ts:47](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L47)

***

### channelId

> `get` **channelId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:51](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L51)

***

### client

> `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Source

[src/core/structures/context.ts:97](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L97)

***

### createdTimestamp

> `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Source

[src/core/structures/context.ts:71](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L71)

***

### guild

> `get` **guild**(): `null` \| `Guild`

#### Returns

`null` \| `Guild`

#### Source

[src/core/structures/context.ts:77](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L77)

***

### guildId

> `get` **guildId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/core/structures/context.ts:83](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L83)

***

### id

> `get` **id**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:41](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L41)

***

### inGuild

> `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Source

[src/core/structures/context.ts:103](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L103)

***

### interaction

> `get` **interaction**(): `I`

#### Returns

`I`

#### Source

[src/core/structures/core-context.ts:15](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/core-context.ts#L15)

***

### member

> `get` **member**(): `null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

`null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Source

[src/core/structures/context.ts:91](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L91)

***

### message

> `get` **message**(): `M`

#### Returns

`M`

#### Source

[src/core/structures/core-context.ts:12](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/core-context.ts#L12)

***

### options

> `get` **options**(): `string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Returns

`string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:25](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L25)

***

### prefix

> `get` **prefix**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Source

[src/core/structures/context.ts:38](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L38)

***

### user

> `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Source

[src/core/structures/context.ts:61](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L61)

***

### userId

> `get` **userId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:67](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L67)

## Methods

### isMessage()

> **isMessage**(): `this is CoreContext<Message<boolean>, never>`

#### Returns

`this is CoreContext<Message<boolean>, never>`

#### Inherited from

`CoreContext.isMessage`

#### Source

[src/core/structures/core-context.ts:19](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/core-context.ts#L19)

***

### isSlash()

> **isSlash**(): `this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Returns

`this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Inherited from

`CoreContext.isSlash`

#### Source

[src/core/structures/core-context.ts:23](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/core-context.ts#L23)

***

### reply()

> **reply**(`content`): `Promise`\<`Message`\<`boolean`\>\>

#### Parameters

• **content**: `ReplyOptions`

#### Returns

`Promise`\<`Message`\<`boolean`\>\>

#### Source

[src/core/structures/context.ts:109](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L109)

***

### wrap()

> `static` **wrap**(`wrappable`, `prefix`?): [`Context`](/v4/api/classes/context/)

#### Parameters

• **wrappable**: `BaseInteraction`\<`CacheType`\> \| `Message`\<`boolean`\>

• **prefix?**: `string`

#### Returns

[`Context`](/v4/api/classes/context/)

#### Source

[src/core/structures/context.ts:118](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/core/structures/context.ts#L118)
