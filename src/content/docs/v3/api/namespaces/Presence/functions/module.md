---
editUrl: false
next: false
prev: false
title: "module"
---

> **module**\<`T`\>(`conf`): [`Config`](/v3/api/namespaces/presence/type-aliases/config/)\<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.(language-extension)
adjacent to the file where **Sern.init** is CALLED.

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Parameters

• **conf**: [`Config`](/v3/api/namespaces/presence/type-aliases/config/)\<`T`\>

## Returns

[`Config`](/v3/api/namespaces/presence/type-aliases/config/)\<`T`\>

## Source

[src/core/presences.ts:28](https://github.com/sern-handler/handler/blob/a19edaf8838dcf088d3947f4a6aa6213d8f5bb9e/src/core/presences.ts#L28)
