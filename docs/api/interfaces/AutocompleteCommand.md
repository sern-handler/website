---
id: "AutocompleteCommand"
title: "Interface: AutocompleteCommand"
sidebar_label: "AutocompleteCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Omit`<[`Module`](Module.md), ``"name"`` \| ``"type"`` \| ``"plugins"`` \| ``"description"``\>

  ↳ **`AutocompleteCommand`**

## Properties

### execute

• **execute**: (`ctx`: `AutocompleteInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `AutocompleteInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Omit.execute

#### Defined in

[src/types/module.ts:111](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L111)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Overrides

Omit.onEvent

#### Defined in

[src/types/module.ts:110](https://github.com/sern-handler/handler/blob/33f1446/src/types/module.ts#L110)
