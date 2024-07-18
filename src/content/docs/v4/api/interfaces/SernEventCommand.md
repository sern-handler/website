---
editUrl: false
next: false
prev: false
title: "SernEventCommand"
---

## Extends

- [`Module`](/v4/api/interfaces/module/)

## Type parameters

• **T** *extends* keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/) = keyof [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`description`](/v4/api/interfaces/module/#description)

#### Source

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L39)

***

### locals

> **locals**: `Record`\<`string`, `unknown`\>

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`locals`](/v4/api/interfaces/module/#locals)

#### Source

[src/types/core-modules.ts:44](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L44)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`meta`](/v4/api/interfaces/module/#meta)

#### Source

[src/types/core-modules.ts:40](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L40)

***

### name?

> `optional` **name**: `T`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`name`](/v4/api/interfaces/module/#name)

#### Source

[src/types/core-modules.ts:50](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L50)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`onEvent`](/v4/api/interfaces/module/#onevent)

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L37)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Inherited from

[`Module`](/v4/api/interfaces/module/).[`plugins`](/v4/api/interfaces/module/#plugins)

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L38)

***

### type

> **type**: [`Sern`](/v4/api/enumerations/eventtype/#sern)

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`type`](/v4/api/interfaces/module/#type)

#### Source

[src/types/core-modules.ts:51](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L51)

## Methods

### execute()

> **execute**(...`args`): `unknown`

#### Parameters

• ...**args**: [`SernEventsMapping`](/v4/api/interfaces/serneventsmapping/)\[`T`\]

#### Returns

`unknown`

#### Overrides

[`Module`](/v4/api/interfaces/module/).[`execute`](/v4/api/interfaces/module/#execute)

#### Source

[src/types/core-modules.ts:52](https://github.com/sern-handler/handler/blob/7c8e39defbafdd6312a04a2d30750d647a3ab22b/src/types/core-modules.ts#L52)
