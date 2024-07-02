---
editUrl: false
next: false
prev: false
title: "ContextMenuMsg"
---

## Extends

- `Module`

## Properties

### description?

> `optional` **description**: `string`

#### Inherited from

`Module.description`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L36)

***

### execute()

> **execute**: (`ctx`) => `unknown`

#### Parameters

• **ctx**: `MessageContextMenuCommandInteraction`\<`CacheType`\>

#### Returns

`unknown`

#### Overrides

`Module.execute`

#### Source

[src/types/core-modules.ts:60](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L60)

***

### name?

> `optional` **name**: `string`

#### Inherited from

`Module.name`

#### Source

[src/types/core-modules.ts:33](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L33)

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

> **type**: [`CtxMsg`](/v3/api/enumerations/commandtype/#ctxmsg)

#### Overrides

`Module.type`

#### Source

[src/types/core-modules.ts:59](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/types/core-modules.ts#L59)
