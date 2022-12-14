---
id: "AutocompleteCommand"
title: "Interface: AutocompleteCommand"
sidebar_label: "AutocompleteCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Module`](Module.md)

  ↳ **`AutocompleteCommand`**

## Properties

### description

• `Optional` **description**: `undefined`

#### Overrides

[Module](Module.md).[description](Module.md#description)

#### Defined in

[src/types/module.ts:132](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L132)

___

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

[Module](Module.md).[execute](Module.md#execute)

#### Defined in

[src/types/module.ts:135](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L135)

___

### name

• `Optional` **name**: `undefined`

#### Overrides

[Module](Module.md).[name](Module.md#name)

#### Defined in

[src/types/module.ts:131](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L131)

___

### onEvent

• **onEvent**: [`AutocompletePlugin`](AutocompletePlugin.md)[]

#### Defined in

[src/types/module.ts:134](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L134)

___

### type

• `Optional` **type**: `undefined`

#### Overrides

[Module](Module.md).[type](Module.md#type)

#### Defined in

[src/types/module.ts:133](https://github.com/sern-handler/handler/blob/eb2924c/src/types/module.ts#L133)
