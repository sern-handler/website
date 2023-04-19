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

## Constructors

### constructor

• `Private` **new Context**(`ctx`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `Result`<`Message`<`boolean`\>, `ChatInputCommandInteraction`<`CacheType`\>\> |

#### Defined in

[src/handler/structures/context.ts:23](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L23)

## Accessors

### channel

• `get` **channel**(): ``null`` \| `TextBasedChannel`

#### Returns

``null`` \| `TextBasedChannel`

#### Defined in

[src/handler/structures/context.ts:46](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L46)

___

### client

• `get` **client**(): `Client`<`boolean`\>

#### Returns

`Client`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:76](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L76)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/handler/structures/context.ts:57](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L57)

___

### guild

• `get` **guild**(): ``null`` \| `Guild`

#### Returns

``null`` \| `Guild`

#### Defined in

[src/handler/structures/context.ts:61](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L61)

___

### guildId

• `get` **guildId**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

[src/handler/structures/context.ts:65](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L65)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/handler/structures/context.ts:42](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L42)

___

### inGuild

• `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:80](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L80)

___

### interaction

• `get` **interaction**(): `ChatInputCommandInteraction`<`CacheType`\>

Getting the ChatInputCommandInteraction object. Crashes if module type is
CommandType.Text or the event fired in a Both command was
Message

#### Returns

`ChatInputCommandInteraction`<`CacheType`\>

#### Defined in

[src/handler/structures/context.ts:38](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L38)

___

### member

• `get` **member**(): ``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Returns

``null`` \| `GuildMember` \| `APIInteractionGuildMember`

#### Defined in

[src/handler/structures/context.ts:72](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L72)

___

### message

• `get` **message**(): `Message`<`boolean`\>

Getting the Message object. Crashes if module type is
CommandType.Slash or the event fired in a Both command was
ChatInputCommandInteraction

#### Returns

`Message`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:30](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L30)

___

### user

• `get` **user**(): `User`

If context is holding a message, message.author
else, interaction.user

#### Returns

`User`

#### Defined in

[src/handler/structures/context.ts:53](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L53)

## Methods

### isMessage

▸ **isMessage**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:83](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L83)

___

### isSlash

▸ **isSlash**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:87](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L87)

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

[src/handler/structures/context.ts:98](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L98)

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

[src/handler/structures/context.ts:91](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/context.ts#L91)
