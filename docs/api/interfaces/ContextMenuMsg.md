---
id: "ContextMenuMsg"
title: "Interface: ContextMenuMsg"
sidebar_label: "ContextMenuMsg"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `Module`

  ↳ **`ContextMenuMsg`**

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

Module.description

#### Defined in

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L35)

___

### execute

• **execute**: (`ctx`: `MessageContextMenuCommandInteraction`<`CacheType`\>) => `unknown`

#### Type declaration

▸ (`ctx`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `MessageContextMenuCommandInteraction`<`CacheType`\> |

##### Returns

`unknown`

#### Overrides

Module.execute

#### Defined in

[src/types/core-modules.ts:59](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L59)

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

• **type**: [`CtxMsg`](../enums/CommandType.md#ctxmsg)

#### Overrides

Module.type

#### Defined in

[src/types/core-modules.ts:58](https://github.com/sern-handler/handler/blob/5e3dcf8/src/types/core-modules.ts#L58)
