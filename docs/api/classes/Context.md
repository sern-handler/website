---
id: "Context"
title: "Class: Context"
sidebar_label: "Context"
sidebar_position: 0
custom_edit_url: null
---

Provides values shared between
Message and ChatInputCommandInteraction

## Constructors

### constructor

• `Private` **new Context**(`ctx`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Result`<`Message`<`boolean`\>, `ChatInputCommandInteraction`<`CacheType`\>\> |

#### Defined in

[src/handler/structures/context.ts:22](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L22)

## Accessors

### channel

• `get` **channel**(): ``null`` \| `TextBasedChannel`

#### Returns

``null`` \| `TextBasedChannel`

#### Defined in

[src/handler/structures/context.ts:45](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L45)

___

### client

• `get` **client**(): `Client`<`boolean`\>

#### Returns

`Client`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:75](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L75)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/handler/structures/context.ts:56](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L56)

___

### guild

• `get` **guild**(): ``null`` \| `Guild`

#### Returns

``null`` \| `Guild`

#### Defined in

[src/handler/structures/context.ts:60](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L60)

___

### guildId

• `get` **guildId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/handler/structures/context.ts:64](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L64)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/handler/structures/context.ts:41](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L41)

___

### inGuild

• `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:79](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L79)

___

### interaction

• `get` **interaction**(): `ChatInputCommandInteraction`<`CacheType`\>

Getting the ChatInputCommandInteraction object. Crashes if module type is
CommandType.Text or the event fired in a Both command was
Message

#### Returns

`ChatInputCommandInteraction`<`CacheType`\>

#### Defined in

[src/handler/structures/context.ts:37](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L37)

___

### member

• `get` **member**(): ``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Defined in

[src/handler/structures/context.ts:71](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L71)

___

### message

• `get` **message**(): `Message`<`boolean`\>

Getting the Message object. Crashes if module type is
CommandType.Slash or the event fired in a Both command was
ChatInputCommandInteraction

#### Returns

`Message`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:29](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L29)

___

### user

• `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Defined in

[src/handler/structures/context.ts:52](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L52)

## Methods

### isMessage

▸ **isMessage**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:82](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L82)

___

### isSlash

▸ **isSlash**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:86](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L86)

___

### reply

▸ **reply**(`content`): `Promise`<`Message`<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | [`ReplyOptions`](../modules.md#replyoptions) |

#### Returns

`Promise`<`Message`<`boolean`\>\>

#### Defined in

[src/handler/structures/context.ts:97](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L97)

___

### wrap

▸ `Static` **wrap**(`wrappable`): [`Context`](Context.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappable` | `Message`<`boolean`\> \| `ChatInputCommandInteraction`<`CacheType`\> |

#### Returns

[`Context`](Context.md)

#### Defined in

[src/handler/structures/context.ts:90](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/structures/context.ts#L90)
