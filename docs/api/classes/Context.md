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

[src/handler/structures/context.ts:23](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L23)

## Accessors

### channel

• `get` **channel**(): ``null`` \| `TextBasedChannel`

#### Returns

``null`` \| `TextBasedChannel`

#### Defined in

[src/handler/structures/context.ts:51](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L51)

___

### client

• `get` **client**(): `Client`<`boolean`\>

#### Returns

`Client`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:98](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L98)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/handler/structures/context.ts:67](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L67)

___

### guild

• `get` **guild**(): ``null`` \| `Guild`

#### Returns

``null`` \| `Guild`

#### Defined in

[src/handler/structures/context.ts:74](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L74)

___

### guildId

• `get` **guildId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/handler/structures/context.ts:81](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L81)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/handler/structures/context.ts:44](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L44)

___

### inGuild

• `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:105](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L105)

___

### interaction

• `get` **interaction**(): `ChatInputCommandInteraction`<`CacheType`\>

Getting the ChatInputCommandInteraction object. Crashes if module type is
CommandType.Text or the event fired in a Both command was
Message

#### Returns

`ChatInputCommandInteraction`<`CacheType`\>

#### Defined in

[src/handler/structures/context.ts:40](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L40)

___

### member

• `get` **member**(): ``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Defined in

[src/handler/structures/context.ts:91](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L91)

___

### message

• `get` **message**(): `Message`<`boolean`\>

Getting the Message object. Crashes if module type is
CommandType.Slash or the event fired in a Both command was
ChatInputCommandInteraction

#### Returns

`Message`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:32](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L32)

___

### user

• `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Defined in

[src/handler/structures/context.ts:60](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L60)

## Methods

### isMessage

▸ **isMessage**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:111](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L111)

___

### isSlash

▸ **isSlash**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:115](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L115)

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

[src/handler/structures/context.ts:126](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L126)

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

[src/handler/structures/context.ts:119](https://github.com/sern-handler/handler/blob/3daacfc/src/handler/structures/context.ts#L119)
