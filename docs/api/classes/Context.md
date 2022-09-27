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

• `Private` **new Context**(`oMsg?`, `oInterac?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `oMsg` | `Option`<`Message`<`boolean`\>\> | `None` |
| `oInterac` | `Option`<`ChatInputCommandInteraction`<`CacheType`\>\> | `None` |

#### Defined in

[src/handler/structures/context.ts:31](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L31)

## Accessors

### channel

• `get` **channel**(): [`Nullish`](../modules.md#nullish)<`TextBasedChannel`\>

#### Returns

[`Nullish`](../modules.md#nullish)<`TextBasedChannel`\>

#### Defined in

[src/handler/structures/context.ts:63](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L63)

___

### client

• `get` **client**(): `Client`<`boolean`\>

#### Returns

`Client`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:108](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L108)

___

### createdTimestamp

• `get` **createdTimestamp**(): `number`

#### Returns

`number`

#### Defined in

[src/handler/structures/context.ts:77](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L77)

___

### guild

• `get` **guild**(): `Guild`

#### Returns

`Guild`

#### Defined in

[src/handler/structures/context.ts:84](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L84)

___

### guildId

• `get` **guildId**(): `string`

#### Returns

`string`

#### Defined in

[src/handler/structures/context.ts:91](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L91)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/handler/structures/context.ts:56](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L56)

___

### inGuild

• `get` **inGuild**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:115](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L115)

___

### interaction

• `get` **interaction**(): `ChatInputCommandInteraction`<`CacheType`\>

Getting the ChatInputCommandInteraction object. Crashes if module type is
CommandType.Text or the event fired in a Both command was
Message

#### Returns

`ChatInputCommandInteraction`<`CacheType`\>

#### Defined in

[src/handler/structures/context.ts:52](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L52)

___

### member

• `get` **member**(): [`Nullish`](../modules.md#nullish)<`GuildMember` \| `APIGuildMember`\>

#### Returns

[`Nullish`](../modules.md#nullish)<`GuildMember` \| `APIGuildMember`\>

#### Defined in

[src/handler/structures/context.ts:101](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L101)

___

### message

• `get` **message**(): `Message`<`boolean`\>

Getting the Message object. Crashes if module type is
CommandType.Slash or the event fired in a Both command was
ChatInputCommandInteraction

#### Returns

`Message`<`boolean`\>

#### Defined in

[src/handler/structures/context.ts:44](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L44)

___

### user

• `get` **user**(): `User`

#### Returns

`User`

#### Defined in

[src/handler/structures/context.ts:70](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L70)

## Methods

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/handler/structures/context.ts:129](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L129)

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

[src/handler/structures/context.ts:133](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L133)

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

[src/handler/structures/context.ts:122](https://github.com/sern-handler/handler/blob/9b7ad2c/src/handler/structures/context.ts#L122)
