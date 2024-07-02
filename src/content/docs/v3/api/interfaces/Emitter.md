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

[src/core/contracts/emitter.ts:6](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/contracts/emitter.ts#L6)

***

### emit()

> **emit**(`eventName`, ...`payload`): `boolean`

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**payload**: `any`[]

#### Returns

`boolean`

#### Source

[src/core/contracts/emitter.ts:8](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/contracts/emitter.ts#L8)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**: `AnyFunction`

#### Returns

`this`

#### Source

[src/core/contracts/emitter.ts:7](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/contracts/emitter.ts#L7)
