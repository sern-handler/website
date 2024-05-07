---
editUrl: false
next: false
prev: false
title: "of"
---

> **of**(`root`): `object`

Create a Presence body which can be either: 
- once, the presence is activated only once.
- repeated, per cycle or event, the presence can be changed.

## Parameters

• **root**: `Omit`\<[`Result`](/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

## Returns

`object`

### once()

> **once**: () => `Omit`\<[`Result`](/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

#### Example

```ts
Presence
    .of({
       activities: [
         { name: "Chilling out" }
       ]
     })
    .once() // Sets the presence once, with what's provided in '.of()'
```

#### Returns

`Omit`\<[`Result`](/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

### repeated()

> **repeated**: (`onRepeat`, `repeat`) => `object`

#### Example

```ts
Presence
    .of({ 
         activities: [{ name: "deez nuts" }] 
    }) //starts the presence with "deez nuts".
    .repeated(prev => { 
        return {
            afk: true,
            activities: prev.activities?.map(s => ({ ...s, name: s.name+"s" }))
        };
    }, 10000)) //every 10 s, the callback sets the presence to the returned one.
```

#### Parameters

• **onRepeat**: `PresenceReduce`

• **repeat**: `number` \| [[`Emitter`](/api/interfaces/emitter/), `string`]

#### Returns

`object`

##### activities?

> `optional` **activities**: `ActivitiesOptions`[]

##### afk?

> `optional` **afk**: `boolean`

##### onRepeat

> **onRepeat**: `PresenceReduce`

##### repeat

> **repeat**: `number` \| [[`Emitter`](/api/interfaces/emitter/), `string`]

##### shardId?

> `optional` **shardId**: `number`[]

##### status?

> `optional` **status**: `Status`

## Source

[src/core/presences.ts:37](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L37)
