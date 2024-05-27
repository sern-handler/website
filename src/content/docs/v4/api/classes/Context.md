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

[src/core/structures/context.ts:53](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L53)

***

### channelId

> `get` **channelId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:57](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L57)

***

### client

> `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Source

[src/core/structures/context.ts:103](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L103)

***

### createdTimestamp

> `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Source

[src/core/structures/context.ts:77](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L77)

***

### guild

> `get` **guild**(): `null` \| `Guild`

#### Returns

`null` \| `Guild`

#### Source

[src/core/structures/context.ts:83](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L83)

***

### guildId

> `get` **guildId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/core/structures/context.ts:89](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L89)

***

### id

> `get` **id**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:47](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L47)

***

### inGuild

> `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Source

[src/core/structures/context.ts:109](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L109)

***

### interaction

> `get` **interaction**(): `I`

#### Returns

`I`

#### Source

[src/core/structures/core-context.ts:15](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/core-context.ts#L15)

***

### member

> `get` **member**(): `null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

`null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Source

[src/core/structures/context.ts:97](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L97)

***

### message

> `get` **message**(): `M`

#### Returns

`M`

#### Source

[src/core/structures/core-context.ts:12](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/core-context.ts#L12)

***

### options

> `get` **options**(): `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Returns

`Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:24](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L24)

***

### prefix

> `get` **prefix**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Source

[src/core/structures/context.ts:44](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L44)

***

### user

> `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Source

[src/core/structures/context.ts:67](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L67)

***

### userId

> `get` **userId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:73](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L73)

## Methods

### args()

> **args**(`type`): `string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Parameters

• **type**: `"message"` \| `"interaction"`

#### Returns

`string`[] \| `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:28](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L28)

***

### isMessage()

> **isMessage**(): `this is CoreContext<Message<boolean>, never>`

#### Returns

`this is CoreContext<Message<boolean>, never>`

#### Inherited from

`CoreContext.isMessage`

#### Source

[src/core/structures/core-context.ts:19](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/core-context.ts#L19)

***

### isSlash()

> **isSlash**(): `this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Returns

`this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Inherited from

`CoreContext.isSlash`

#### Source

[src/core/structures/core-context.ts:23](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/core-context.ts#L23)

***

### reply()

> **reply**(`content`): `Promise`\<`Message`\<`boolean`\>\>

#### Parameters

• **content**: `ReplyOptions`

#### Returns

`Promise`\<`Message`\<`boolean`\>\>

#### Source

[src/core/structures/context.ts:115](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L115)

***

### wrap()

> `static` **wrap**(`wrappable`, `prefix`?): [`Context`](/v4/api/classes/context/)

#### Parameters

• **wrappable**: `BaseInteraction`\<`CacheType`\> \| `Message`\<`boolean`\>

• **prefix?**: `string`

#### Returns

[`Context`](/v4/api/classes/context/)

#### Source

[src/core/structures/context.ts:124](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/structures/context.ts#L124)
