---
editUrl: false
next: false
prev: false
title: "Module"
---

## Extended by

- [`BothCommand`](/v4/api/interfaces/bothcommand/)
- [`ContextMenuMsg`](/v4/api/interfaces/contextmenumsg/)
- [`ContextMenuUser`](/v4/api/interfaces/contextmenuuser/)
- [`SlashCommand`](/v4/api/interfaces/slashcommand/)
- [`TextCommand`](/v4/api/interfaces/textcommand/)
- [`ButtonCommand`](/v4/api/interfaces/buttoncommand/)
- [`StringSelectCommand`](/v4/api/interfaces/stringselectcommand/)
- [`MentionableSelectCommand`](/v4/api/interfaces/mentionableselectcommand/)
- [`UserSelectCommand`](/v4/api/interfaces/userselectcommand/)
- [`ChannelSelectCommand`](/v4/api/interfaces/channelselectcommand/)
- [`RoleSelectCommand`](/v4/api/interfaces/roleselectcommand/)
- [`ModalSubmitCommand`](/v4/api/interfaces/modalsubmitcommand/)
- [`DiscordEventCommand`](/v4/api/interfaces/discordeventcommand/)
- [`SernEventCommand`](/v4/api/interfaces/serneventcommand/)
- [`ExternalEventCommand`](/v4/api/interfaces/externaleventcommand/)

## Properties

### description?

> `optional` **description**: `string`

#### Source

[src/types/core-modules.ts:39](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L39)

***

### meta

> **meta**: `object`

#### absPath

> **absPath**: `string`

#### id

> **id**: `string`

#### Source

[src/types/core-modules.ts:40](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L40)

***

### name?

> `optional` **name**: `string`

#### Source

[src/types/core-modules.ts:36](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L36)

***

### onEvent

> **onEvent**: [`ControlPlugin`](/v4/api/interfaces/controlplugin/)\<`any`[]\>[]

#### Source

[src/types/core-modules.ts:37](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L37)

***

### plugins

> **plugins**: [`InitPlugin`](/v4/api/interfaces/initplugin/)\<`any`[]\>[]

#### Source

[src/types/core-modules.ts:38](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L38)

***

### type

> **type**: [`CommandType`](/v4/api/enumerations/commandtype/) \| [`EventType`](/v4/api/enumerations/eventtype/)

#### Source

[src/types/core-modules.ts:35](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L35)

## Methods

### execute()

> **execute**(...`args`): `any`

#### Parameters

• ...**args**: `any`[]

#### Returns

`any`

#### Source

[src/types/core-modules.ts:44](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/types/core-modules.ts#L44)
