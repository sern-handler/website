---
id: "CommandType"
title: "Enumeration: CommandType"
sidebar_label: "CommandType"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

1.0.0
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

[src/handler/structures/enums.ts:29](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L29)

___

### Button

• **Button** = ``16``

The CommandType for ButtonInteraction commands

#### Defined in

[src/handler/structures/enums.ts:41](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L41)

___

### ChannelSelect

• **ChannelSelect** = ``256``

The CommandType for the other SelectMenuInteractions

#### Defined in

[src/handler/structures/enums.ts:53](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L53)

___

### CtxMsg

• **CtxMsg** = ``8``

The CommandType for MessageContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:37](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L37)

___

### CtxUser

• **CtxUser** = ``4``

The CommandType for UserContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:33](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L33)

___

### MentionableSelect

• **MentionableSelect** = ``512``

#### Defined in

[src/handler/structures/enums.ts:54](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L54)

___

### Modal

• **Modal** = ``64``

The CommandType for ModalSubmitInteraction commands

#### Defined in

[src/handler/structures/enums.ts:49](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L49)

___

### RoleSelect

• **RoleSelect** = ``1024``

#### Defined in

[src/handler/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L55)

___

### Slash

• **Slash** = ``2``

The CommandType for slash commands

#### Defined in

[src/handler/structures/enums.ts:25](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L25)

___

### StringSelect

• **StringSelect** = ``32``

The CommandType for StringSelectMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:45](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L45)

___

### Text

• **Text** = ``1``

The CommandType for text commands

#### Defined in

[src/handler/structures/enums.ts:21](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L21)

___

### UserSelect

• **UserSelect** = ``2048``

#### Defined in

[src/handler/structures/enums.ts:56](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L56)
