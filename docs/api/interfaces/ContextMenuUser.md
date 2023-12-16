---
id: "ContextMenuUser"
title: "Interface: ContextMenuUser"
sidebar_label: "ContextMenuUser"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`ContextMenuUser`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L37)

___

### execute

• **execute**: (`ctx`: `UserContextMenuCommandInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `UserContextMenuCommandInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:56](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L56)

___

### name

• `Optional` **name**: `string`

#### Inherited from

Module.name

#### Defined in

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L34)

___

### onEvent

• **onEvent**: [`ControlPlugin`](ControlPlugin.md)<`any`[]\>[]

#### Inherited from

Module.onEvent

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L35)

___

### plugins

• **plugins**: [`InitPlugin`](InitPlugin.md)<`any`[]\>[]

#### Inherited from

Module.plugins

#### Defined in

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L36)

___

### type

• **type**: [`CtxUser`](../enums/CommandType.md#ctxuser)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:55](https://github.com/sern-handler/handler/blob/a579e27/src/types/core-modules.ts#L55)
