---
editUrl: false
next: false
prev: false
title: "Presence"
---

> `const` **Presence**: `object`

## Type declaration

### module()

> **module**: \<`T`\>(`conf`) => [`PresenceConfig`](/v4/api/type-aliases/presenceconfig/)\<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.(language-extension)
adjacent to the file where **Sern.init** is CALLED.

#### Type parameters

• **T** *extends* keyof `Dependencies`[]

#### Parameters

• **conf**: [`PresenceConfig`](/v4/api/type-aliases/presenceconfig/)\<`T`\>

#### Returns

[`PresenceConfig`](/v4/api/type-aliases/presenceconfig/)\<`T`\>

### of()

> **of**: (`root`) => `object`

Create a Presence body which can be either: 
- once, the presence is activated only once.
- repeated, per cycle or event, the presence can be changed.

#### Parameters

• **root**: `Omit`\<[`PresenceResult`](/v4/api/interfaces/presenceresult/), `"repeat"` \| `"onRepeat"`\>

#### Returns

`object`

##### once()

> **once**: () => `Omit`\<[`PresenceResult`](/v4/api/interfaces/presenceresult/), `"repeat"` \| `"onRepeat"`\>

###### Example

```ts
Presence.of({
         activities: [
             { name: "Chilling out" }
         ]
     }).once() // Sets the presence once, with what's provided in '.of()'
 ```

###### Returns

`Omit`\<[`PresenceResult`](/v4/api/interfaces/presenceresult/), `"repeat"` \| `"onRepeat"`\>

##### repeated()

> **repeated**: (`onRepeat`, `repeat`) => `object`

###### Example

```ts
Presence
    .of({ activities: [{ name: "deez nuts" }] }) //starts presence with "deez nuts".
    .repeated(prev => { 
        return {
            afk: true,
            activities: prev.activities?.map(s => ({ ...s, name: s.name+"s" }))
        };
    }, 10000)) //every 10 s, the callback sets the presence to the value returned.
```

###### Parameters

• **onRepeat**: `PresenceReduce`

• **repeat**: `number` \| [[`Emitter`](/v4/api/interfaces/emitter/), `string`]

###### Returns

`object`

###### activities?

> `optional` **activities**: `ActivitiesOptions`[]

###### afk?

> `optional` **afk**: `boolean`

###### onRepeat

> **onRepeat**: `PresenceReduce`

###### repeat

> **repeat**: `number` \| [[`Emitter`](/v4/api/interfaces/emitter/), `string`]

###### shardId?

> `optional` **shardId**: `number`[]

###### status?

> `optional` **status**: `Status`

## Source

[src/core/presences.ts:17](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/presences.ts#L17)
