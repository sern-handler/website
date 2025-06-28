---
editUrl: false
next: false
prev: false
title: "InitPlugin"
---

## Extends

- [`Plugin`](/v4/api/interfaces/plugin/)\<`Args`\>

## Type parameters

• **Args** *extends* `any`[] = `any`[]

## Properties

### execute()

> **execute**: (...`args`) => [`PluginResult`](/v4/api/type-aliases/pluginresult/)

#### Parameters

• ...**args**: `Args`

#### Returns

[`PluginResult`](/v4/api/type-aliases/pluginresult/)

#### Overrides

[`Plugin`](/v4/api/interfaces/plugin/).[`execute`](/v4/api/interfaces/plugin/#execute)

#### Source

[src/types/core-plugin.ts:49](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-plugin.ts#L49)

***

### type

> **type**: [`Init`](/v4/api/enumerations/plugintype/#init)

#### Overrides

[`Plugin`](/v4/api/interfaces/plugin/).[`type`](/v4/api/interfaces/plugin/#type)

#### Source

[src/types/core-plugin.ts:48](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-plugin.ts#L48)
