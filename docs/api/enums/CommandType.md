---
id: "CommandType"
title: "Enumeration: CommandType"
sidebar_label: "CommandType"
sidebar_position: 0
custom_edit_url: null
---

A bitfield that discriminates command modules

**`Example`**

```ts
export default commandModule({
    // highlight-next-line
    type : CommandType.Text,
    name : 'a text command'
    execute(message) {
        console.log(message.content)
    }
})
```

## Enumeration Members

### Both

• **Both** = ``3``

The CommandType for hybrid commands, text and slash

#### Defined in

[src/handler/structures/enums.ts:28](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L28)

___

### Button

• **Button** = ``16``

The CommandType for ButtonInteraction commands

#### Defined in

[src/handler/structures/enums.ts:40](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L40)

___

### ChannelSelect

• **ChannelSelect** = ``256``

The CommandType for the other SelectMenuInteractions

#### Defined in

[src/handler/structures/enums.ts:52](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L52)

___

### CtxMsg

• **CtxMsg** = ``8``

The CommandType for MessageContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:36](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L36)

___

### CtxUser

• **CtxUser** = ``4``

The CommandType for UserContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:32](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L32)

___

### MentionableSelect

• **MentionableSelect** = ``512``

#### Defined in

[src/handler/structures/enums.ts:53](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L53)

___

### Modal

• **Modal** = ``64``

The CommandType for ModalSubmitInteraction commands

#### Defined in

[src/handler/structures/enums.ts:48](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L48)

___

### RoleSelect

• **RoleSelect** = ``1024``

#### Defined in

[src/handler/structures/enums.ts:54](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L54)

___

### Slash

• **Slash** = ``2``

The CommandType for slash commands

#### Defined in

[src/handler/structures/enums.ts:24](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L24)

___

### StringSelect

• **StringSelect** = ``32``

The CommandType for StringSelectMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:44](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L44)

___

### Text

• **Text** = ``1``

The CommandType for text commands

#### Defined in

[src/handler/structures/enums.ts:20](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L20)

___

### UserSelect

• **UserSelect** = ``2048``

#### Defined in

[src/handler/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/structures/enums.ts#L55)
