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

[src/core/interfaces.ts:22](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/interfaces.ts#L22)

***

### emit()

> **emit**(`eventName`, ...`payload`): `boolean`

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**payload**: `any`[]

#### Returns

`boolean`

#### Source

[src/core/interfaces.ts:24](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/interfaces.ts#L24)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**: `AnyFunction`

#### Returns

`this`

#### Source

[src/core/interfaces.ts:23](https://github.com/sern-handler/handler/blob/fb418c06758b6f3318bf4b5f58a58540139be8d4/src/core/interfaces.ts#L23)
