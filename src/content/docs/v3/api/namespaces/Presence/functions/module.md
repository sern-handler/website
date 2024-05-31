---
editUrl: false
next: false
prev: false
title: "module"
---

> **module**\<`T`\>(`conf`): [`Config`](/v3/api/namespacespresencetype-aliases/config/)\<`T`\>

A small wrapper to provide type inference.
Create a Presence module which **MUST** be put in a file called presence.(language-extension)
adjacent to the file where **Sern.init** is CALLED.

## Type parameters

• **T** *extends* keyof `Dependencies`[]

## Parameters

• **conf**: [`Config`](/v3/api/namespacespresencetype-aliases/config/)\<`T`\>

## Returns

[`Config`](/v3/api/namespacespresencetype-aliases/config/)\<`T`\>

## Source

[src/core/presences.ts:28](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/presences.ts#L28)
