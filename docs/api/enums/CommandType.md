---
id: "CommandType"
title: "Enumeration: CommandType"
sidebar_label: "CommandType"
sidebar_position: 0
custom_edit_url: null
---

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

[src/handler/structures/enums.ts:27](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L27)

___

### Button

• **Button** = ``16``

The CommandType for ButtonInteraction commands

#### Defined in

[src/handler/structures/enums.ts:39](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L39)

___

### MenuMsg

• **MenuMsg** = ``8``

The CommandType for MessageContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:35](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L35)

___

### MenuSelect

• **MenuSelect** = ``32``

The CommandType for SelectMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:43](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L43)

___

### MenuUser

• **MenuUser** = ``4``

The CommandType for UserContextMenuInteraction commands

#### Defined in

[src/handler/structures/enums.ts:31](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L31)

___

### Modal

• **Modal** = ``64``

The CommandType for ModalSubmitInteraction commands

#### Defined in

[src/handler/structures/enums.ts:47](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L47)

___

### Slash

• **Slash** = ``2``

The CommandType for slash commands

#### Defined in

[src/handler/structures/enums.ts:23](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L23)

___

### Text

• **Text** = ``1``

The CommandType for text commands

#### Defined in

[src/handler/structures/enums.ts:19](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L19)
