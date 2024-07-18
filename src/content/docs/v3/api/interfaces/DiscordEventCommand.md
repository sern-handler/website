---
editUrl: false
next: false
prev: false
title: "DiscordEventCommand"
---

## Extends

- `Module`

## Type parameters

• **T** *extends* keyof `ClientEvents` = keyof `ClientEvents`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L36)

***

### name?

> `optional` **name**: `T`

#### Overrides

`Module.name`

#### Source

[src/types/core-modules.ts:106](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L106)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v3/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

`Module.onEvent`

#### Source

[src/types/core-modules.ts:34](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L34)

***

### plugins

> **plugins**: [`InitPlugin`](/v3/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

`Module.plugins`

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L35)

***

### type

> **type**: [`Discord`](/v3/api/enumerations/eventtype/#discord)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:107](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L107)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: `ClientEvents`\[`T`\]

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:108](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L108)
