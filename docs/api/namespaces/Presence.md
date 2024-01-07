---
id: "Presence"
title: "Namespace: Presence"
sidebar_label: "Presence"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [Result](../interfaces/Presence.Result.md)

## Type Aliases

### Config

Ƭ **Config**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Dependencies`[] |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `execute` | (...`v`: `IntoDependencies`<`T`\>) => [`Result`](../interfaces/Presence.Result.md) |
| `inject?` | [...T] |

#### Defined in

[src/core/presences.ts:17](https://github.com/sern-handler/handler/blob/b0399f9/src/core/presences.ts#L17)

## Functions

### module

▸ **module**<`T`\>(`conf`): [`Config`](Presence.md#config)<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.<language-extension> 
adjacent to the file where **Sern.init** is CALLED.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `Dependencies`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `conf` | [`Config`](Presence.md#config)<`T`\> |

#### Returns

[`Config`](Presence.md#config)<`T`\>

#### Defined in

[src/core/presences.ts:28](https://github.com/sern-handler/handler/blob/b0399f9/src/core/presences.ts#L28)

___

### of

▸ **of**(`root`): `Object`

Create a Presence body which can be either: 
- once, the presence is activated only once.
- repeated, per cycle or event, the presence can be changed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `Omit`<[`Result`](../interfaces/Presence.Result.md), ``"repeat"`` \| ``"onRepeat"``\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `once` | () => `Omit`<[`Result`](../interfaces/Presence.Result.md), ``"repeat"`` \| ``"onRepeat"``\> |
| `repeated` | (`onRepeat`: `PresenceReduce`, `repeat`: `number` \| [[`Emitter`](../interfaces/Emitter.md), `string`]) => \{ `activities?`: `ActivitiesOptions`[] ; `afk?`: `boolean` ; `onRepeat`: `PresenceReduce` ; `repeat`: `number` \| [[`Emitter`](../interfaces/Emitter.md), `string`] ; `shardId?`: `number`[] ; `status?`: `Status`  } |

#### Defined in

[src/core/presences.ts:39](https://github.com/sern-handler/handler/blob/b0399f9/src/core/presences.ts#L39)
