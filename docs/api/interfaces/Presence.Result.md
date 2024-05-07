---
id: "Presence.Result"
title: "Interface: Result"
sidebar_label: "Result"
custom_edit_url: null
---

[Presence](../namespaces/Presence.md).Result

## Properties

### activities

• `Optional` **activities**: `ActivitiesOptions`[]

#### Defined in

[src/core/presences.ts:11](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L11)

___

### afk

• `Optional` **afk**: `boolean`

#### Defined in

[src/core/presences.ts:10](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L10)

___

### onRepeat

• `Optional` **onRepeat**: (`previous`: [`Result`](Presence.Result.md)) => [`Result`](Presence.Result.md)

#### Type declaration

▸ (`previous`): [`Result`](Presence.Result.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`Result`](Presence.Result.md) |

##### Returns

[`Result`](Presence.Result.md)

#### Defined in

[src/core/presences.ts:14](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L14)

___

### repeat

• `Optional` **repeat**: `number` \| [[`Emitter`](Emitter.md), `string`]

#### Defined in

[src/core/presences.ts:13](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L13)

___

### shardId

• `Optional` **shardId**: `number`[]

#### Defined in

[src/core/presences.ts:12](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L12)

___

### status

• `Optional` **status**: `Status`

#### Defined in

[src/core/presences.ts:9](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L9)
