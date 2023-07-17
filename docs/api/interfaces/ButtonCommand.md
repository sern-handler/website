---
id: "ButtonCommand"
title: "Interface: ButtonCommand"
sidebar_label: "ButtonCommand"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`ButtonCommand`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L35)

___

### execute

• **execute**: (`ctx`: `ButtonInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `ButtonInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:64](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L64)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:32](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L32)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L33)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L34)

___

### type

• **type**: [`Button`](../enums/CommandType.md#button)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:63](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L63)
