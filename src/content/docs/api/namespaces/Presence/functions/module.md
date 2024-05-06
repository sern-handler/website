---
editUrl: false
next: false
prev: false
title: "module"
---

> **module**\<`T`\>(`conf`): [`Config`](/api/namespaces/presence/type-aliases/config/)\<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.(language-extension)
adjacent to the file where **Sern.init** is CALLED.

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Parameters

• **conf**: [`Config`](/api/namespaces/presence/type-aliases/config/)\<`T`\>

## Returns

[`Config`](/api/namespaces/presence/type-aliases/config/)\<`T`\>

## Source

[src/core/presences.ts:28](https://github.com/sern-handler/handler/blob/91b3768e376cfe22ec37d8ab44f4e4a4dfe8a1e8/src/core/presences.ts#L28)
