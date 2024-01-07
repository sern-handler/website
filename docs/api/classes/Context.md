---
id: "Context"
title: "Class: Context"
sidebar_label: "Context"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

1.0.0
Provides values shared between
Message and ChatInputCommandInteraction

## Hierarchy

- `CoreContext`<`Message`, `ChatInputCommandInteraction`\>

  ↳ **`Context`**

## Constructors

### constructor

• **new Context**(`ctx`): [`Context`](Context.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Result`<`Message`<`boolean`\>, `ChatInputCommandInteraction`<`CacheType`\>\> |

#### Returns

[`Context`](Context.md)

#### Overrides

CoreContext\&lt;Message, ChatInputCommandInteraction\&gt;.constructor

#### Defined in

[src/core/structures/context.ts:29](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L29)

## Properties

### ctx

• `Protected` **ctx**: `Result`<`Message`<`boolean`\>, `ChatInputCommandInteraction`<`CacheType`\>\>

#### Inherited from

CoreContext.ctx

#### Defined in

[src/core/structures/context.ts:29](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L29)

## Accessors

### channel

• `get` **channel**(): ``null`` \| `TextBasedChannel`

#### Returns

``null`` \| `TextBasedChannel`

#### Defined in

[src/core/structures/context.ts:39](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L39)

___

### channelId

• `get` **channelId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/structures/context.ts:45](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L45)

___

### client

• `get` **client**(): `Client`<`boolean`\>

#### Returns

`Client`<`boolean`\>

#### Defined in

[src/core/structures/context.ts:91](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L91)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/core/structures/context.ts:65](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L65)

___

### guild

• `get` **guild**(): ``null`` \| `Guild`

#### Returns

``null`` \| `Guild`

#### Defined in

[src/core/structures/context.ts:71](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L71)

___

### guildId

• `get` **guildId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/core/structures/context.ts:77](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L77)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/core/structures/context.ts:33](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L33)

___

### inGuild

• `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/core/structures/context.ts:97](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L97)

___

### interaction

• `get` **interaction**(): `I`

#### Returns

`I`

#### Inherited from

CoreContext.interaction

#### Defined in

[src/core/structures/core-context.ts:15](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/core-context.ts#L15)

___

### member

• `get` **member**(): ``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Defined in

[src/core/structures/context.ts:85](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L85)

___

### message

• `get` **message**(): `M`

#### Returns

`M`

#### Inherited from

CoreContext.message

#### Defined in

[src/core/structures/core-context.ts:12](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/core-context.ts#L12)

___

### options

• `get` **options**(): `Omit`<`CommandInteractionOptionResolver`<`CacheType`\>, ``"getMessage"`` \| ``"getFocused"``\>

#### Returns

`Omit`<`CommandInteractionOptionResolver`<`CacheType`\>, ``"getMessage"`` \| ``"getFocused"``\>

#### Overrides

CoreContext.options

#### Defined in

[src/core/structures/context.ts:26](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L26)

___

### user

• `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Defined in

[src/core/structures/context.ts:55](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L55)

___

### userId

• `get` **userId**(): `string`

#### Returns

`string`

#### Defined in

[src/core/structures/context.ts:61](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L61)

## Methods

### isMessage

▸ **isMessage**(): this is CoreContext<Message<boolean\>, never\>

#### Returns

this is CoreContext<Message<boolean\>, never\>

#### Inherited from

CoreContext.isMessage

#### Defined in

[src/core/structures/core-context.ts:19](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/core-context.ts#L19)

___

### isSlash

▸ **isSlash**(): this is CoreContext<never, ChatInputCommandInteraction<CacheType\>\>

#### Returns

this is CoreContext<never, ChatInputCommandInteraction<CacheType\>\>

#### Inherited from

CoreContext.isSlash

#### Defined in

[src/core/structures/core-context.ts:23](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/core-context.ts#L23)

___

### reply

▸ **reply**(`content`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `ReplyOptions` |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Defined in

[src/core/structures/context.ts:103](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L103)

___

### wrap

▸ **wrap**(`wrappable`): [`Context`](Context.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappable` | `Message`<`boolean`\> \| `BaseInteraction`<`CacheType`\> |

#### Returns

[`Context`](Context.md)

#### Overrides

CoreContext.wrap

#### Defined in

[src/core/structures/context.ts:113](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/context.ts#L113)
