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

[src/types/core-modules.ts:417](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L417)

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

[src/types/core-modules.ts:416](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/types/core-modules.ts#L416)
