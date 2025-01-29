---
editUrl: false
next: false
prev: false
title: "Presence"
---

> `const` **Presence**: `object`

## Type declaration

### module()

> **module**: \<`T`\>(`conf`) => [`Config`](/v4/api/namespaces/presence/type-aliases/config/)\<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.(language-extension)
adjacent to the file where **Sern.init** is CALLED.

#### Type parameters

• **T** *extends* keyof `Dependencies`[]

#### Parameters

• **conf**: [`Config`](/v4/api/namespaces/presence/type-aliases/config/)\<`T`\>

#### Returns

[`Config`](/v4/api/namespaces/presence/type-aliases/config/)\<`T`\>

### of()

> **of**: (`root`) => `object`

Create a Presence body which can be either: 
- once, the presence is activated only once.
- repeated, per cycle or event, the presence can be changed.

#### Parameters

• **root**: `Omit`\<[`Result`](/v4/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

#### Returns

`object`

##### once()

> **once**: () => `Omit`\<[`Result`](/v4/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

###### Example

```ts
Presence.of({
   activities: [{ name: "Chilling out" }]
}).once() // Sets the presence once, with what's provided in '.of()'
 ```

###### Returns

`Omit`\<[`Result`](/v4/api/namespaces/presence/interfaces/result/), `"repeat"` \| `"onRepeat"`\>

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

[src/core/presences.ts:9](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/core/presences.ts#L9)
