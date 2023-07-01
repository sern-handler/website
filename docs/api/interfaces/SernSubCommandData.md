---
id: "SernSubCommandData"
title: "Interface: SernSubCommandData"
sidebar_label: "SernSubCommandData"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- `APIApplicationCommandOptionBase`<`ApplicationCommandOptionType.Subcommand`\>

  ↳ **`SernSubCommandData`**

## Properties

### description

• **description**: `string`

#### Inherited from

APIApplicationCommandOptionBase.description

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.d.ts:7

___

### description\_localizations

• `Optional` **description\_localizations**: ``null`` \| `Partial`<`Record`<``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\>

#### Inherited from

APIApplicationCommandOptionBase.description\_localizations

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.d.ts:8

___

### name

• **name**: `string`

#### Inherited from

APIApplicationCommandOptionBase.name

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.d.ts:5

___

### name\_localizations

• `Optional` **name\_localizations**: ``null`` \| `Partial`<`Record`<``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\>

#### Inherited from

APIApplicationCommandOptionBase.name\_localizations

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.d.ts:6

___

### options

• `Optional` **options**: [`SernOptionsData`](../modules.md#sernoptionsdata)[]

#### Defined in

[src/core/types/modules.ts:209](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L209)

___

### required

• `Optional` **required**: `boolean`

#### Inherited from

APIApplicationCommandOptionBase.required

#### Defined in

node_modules/discord-api-types/payloads/v10/_interactions/_applicationCommands/_chatInput/base.d.ts:9

___

### type

• **type**: `Subcommand`

#### Overrides

APIApplicationCommandOptionBase.type

#### Defined in

[src/core/types/modules.ts:208](https://github.com/sern-handler/handler/blob/941e1ea/src/core/types/modules.ts#L208)
