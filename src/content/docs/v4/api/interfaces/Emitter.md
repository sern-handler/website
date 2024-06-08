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

[src/core/interfaces.ts:22](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/interfaces.ts#L22)

***

### emit()

> **emit**(`eventName`, ...`payload`): `boolean`

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**payload**: `any`[]

#### Returns

`boolean`

#### Source

[src/core/interfaces.ts:24](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/interfaces.ts#L24)

***

### removeListener()

> **removeListener**(`eventName`, `listener`): `this`

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**: `AnyFunction`

#### Returns

`this`

#### Source

[src/core/interfaces.ts:23](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/interfaces.ts#L23)
