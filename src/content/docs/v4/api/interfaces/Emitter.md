---
editUrl: false
next: false
prev: false
title: "Emitter"
---

## Methods

### addListener()

> **addListener**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**: `AnyFunction`

#### Returns

`this`

#### Source

[src/core/interfaces.ts:22](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/interfaces.ts#L22)

***

### emit()

> **emit**(`eventName`, ...`payload`): `boolean`

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**payload**: `any`[]

#### Returns

`boolean`

#### Source

[src/core/interfaces.ts:24](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/interfaces.ts#L24)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**: `AnyFunction`

#### Returns

`this`

#### Source

[src/core/interfaces.ts:23](https://github.com/sern-handler/handler/blob/67bb4d4b9fa126f24874a3de1d4378e9fe9aca07/src/core/interfaces.ts#L23)
