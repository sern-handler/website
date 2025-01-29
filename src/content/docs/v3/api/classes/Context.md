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

[src/core/structures/context.ts:39](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L39)

***

### channelId

> `get` **channelId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:45](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L45)

***

### client

> `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Source

[src/core/structures/context.ts:91](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L91)

***

### createdTimestamp

> `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Source

[src/core/structures/context.ts:65](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L65)

***

### guild

> `get` **guild**(): `null` \| `Guild`

#### Returns

`null` \| `Guild`

#### Source

[src/core/structures/context.ts:71](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L71)

***

### guildId

> `get` **guildId**(): `null` \| `string`

#### Returns

`null` \| `string`

#### Source

[src/core/structures/context.ts:77](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L77)

***

### id

> `get` **id**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:33](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L33)

***

### inGuild

> `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Source

[src/core/structures/context.ts:97](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L97)

***

### interaction

> `get` **interaction**(): `I`

#### Returns

`I`

#### Source

[src/core/structures/core-context.ts:15](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/core-context.ts#L15)

***

### member

> `get` **member**(): `null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

`null` \| `GuildMember` \| `APIInteractionGuildMember`

#### Source

[src/core/structures/context.ts:85](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L85)

***

### message

> `get` **message**(): `M`

#### Returns

`M`

#### Source

[src/core/structures/core-context.ts:12](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/core-context.ts#L12)

***

### options

> `get` **options**(): `Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Returns

`Omit`\<`CommandInteractionOptionResolver`\<`CacheType`\>, `"getMessage"` \| `"getFocused"`\>

#### Source

[src/core/structures/context.ts:26](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L26)

***

### user

> `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Source

[src/core/structures/context.ts:55](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L55)

***

### userId

> `get` **userId**(): `string`

#### Returns

`string`

#### Source

[src/core/structures/context.ts:61](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L61)

## Methods

### isMessage()

> **isMessage**(): `this is CoreContext<Message<boolean>, never>`

#### Returns

`this is CoreContext<Message<boolean>, never>`

#### Inherited from

`CoreContext.isMessage`

#### Source

[src/core/structures/core-context.ts:19](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/core-context.ts#L19)

***

### isSlash()

> **isSlash**(): `this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Returns

`this is CoreContext<never, ChatInputCommandInteraction<CacheType>>`

#### Inherited from

`CoreContext.isSlash`

#### Source

[src/core/structures/core-context.ts:23](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/core-context.ts#L23)

***

### reply()

> **reply**(`content`): `Promise`\<`Message`\<`boolean`\>\>

#### Parameters

• **content**: `ReplyOptions`

#### Returns

`Promise`\<`Message`\<`boolean`\>\>

#### Source

[src/core/structures/context.ts:103](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L103)

***

### wrap()

> `static` **wrap**(`wrappable`): [`Context`](/v3/api/classes/context/)

#### Parameters

• **wrappable**: `Message`\<`boolean`\> \| `BaseInteraction`\<`CacheType`\>

#### Returns

[`Context`](/v3/api/classes/context/)

#### Overrides

`CoreContext.wrap`

#### Source

[src/core/structures/context.ts:113](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/structures/context.ts#L113)
