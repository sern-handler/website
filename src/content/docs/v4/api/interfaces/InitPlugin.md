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

#### Inherited from

[`Plugin`](/v4/api/interfaces/plugin/).[`execute`](/v4/api/interfaces/plugin/#execute)

#### Source

[src/types/core-plugin.ts:44](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-plugin.ts#L44)

***

### type

> **type**: [`Init`](/v4/api/enumerations/plugintype/#init)

#### Overrides

[`Plugin`](/v4/api/interfaces/plugin/).[`type`](/v4/api/interfaces/plugin/#type)

#### Source

[src/types/core-plugin.ts:48](https://github.com/sern-handler/handler/blob/2f778f4dc2510724f049f19e69e0afca26d6bcad/src/types/core-plugin.ts#L48)
