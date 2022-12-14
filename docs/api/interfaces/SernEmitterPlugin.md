---
id: "SernEmitterPlugin"
title: "Interface: SernEmitterPlugin"
sidebar_label: "SernEmitterPlugin"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`Plugin`](Plugin.md)

  ↳ **`SernEmitterPlugin`**

## Properties

### description

• `Optional` **description**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[description](Plugin.md#description)

#### Defined in

[src/handler/plugins/plugin.ts:33](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L33)

___

### execute

• **execute**: (`payload`: { `absPath`: `string` ; `mod`: `SernEventCommand`<keyof [`SernEventsMapping`](../modules.md#serneventsmapping)\> & { `name`: `string`  }  }, `controller`: [`Controller`](Controller.md)) => `Awaitable`<`Result`<`void`, `void`\>\>

#### Type declaration

▸ (`payload`, `controller`): `Awaitable`<`Result`<`void`, `void`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.absPath` | `string` |
| `payload.mod` | `SernEventCommand`<keyof [`SernEventsMapping`](../modules.md#serneventsmapping)\> & { `name`: `string`  } |
| `controller` | [`Controller`](Controller.md) |

##### Returns

`Awaitable`<`Result`<`void`, `void`\>\>

#### Defined in

[src/handler/plugins/plugin.ts:68](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L68)

___

### name

• `Optional` **name**: `string`

**`Deprecated`**

will be removed in the next update

#### Inherited from

[Plugin](Plugin.md).[name](Plugin.md#name)

#### Defined in

[src/handler/plugins/plugin.ts:31](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L31)

___

### type

• **type**: [`Command`](../enums/PluginType.md#command)

#### Overrides

[Plugin](Plugin.md).[type](Plugin.md#type)

#### Defined in

[src/handler/plugins/plugin.ts:67](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/plugins/plugin.ts#L67)
