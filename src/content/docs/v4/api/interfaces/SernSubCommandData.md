---
editUrl: false
next: false
prev: false
title: "SernSubCommandData"
---

## Extends

- `APIApplicationCommandOptionBase`\<`ApplicationCommandOptionType.Subcommand`\>

## Properties

### description

> **description**: `string`

#### Inherited from

`APIApplicationCommandOptionBase.description`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:7

***

### description\_localizations?

> `optional` **description\_localizations**: `null` \| `Partial`\<`Record`\<`Locale`, `null` \| `string`\>\>

#### Inherited from

`APIApplicationCommandOptionBase.description_localizations`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:8

***

### name

> **name**: `string`

#### Inherited from

`APIApplicationCommandOptionBase.name`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:5

***

### name\_localizations?

> `optional` **name\_localizations**: `null` \| `Partial`\<`Record`\<`Locale`, `null` \| `string`\>\>

#### Inherited from

`APIApplicationCommandOptionBase.name_localizations`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:6

***

### options?

> `optional` **options**: [`SernOptionsData`](/v4/api/type-aliases/sernoptionsdata/)[]

#### Source

[src/types/core-modules.ts:369](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L369)

***

### required?

> `optional` **required**: `boolean`

#### Inherited from

`APIApplicationCommandOptionBase.required`

#### Source

node\_modules/discord-api-types/payloads/v10/\_interactions/\_applicationCommands/\_chatInput/base.d.ts:9

***

### type

> **type**: `Subcommand`

#### Overrides

`APIApplicationCommandOptionBase.type`

#### Source

[src/types/core-modules.ts:368](https://github.com/sern-handler/handler/blob/3f703c17b88b6add7de919772e7b2a7faffd3910/src/types/core-modules.ts#L368)
