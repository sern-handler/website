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

#### Defined in

[src/core/structures/enums.ts:20](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L20)

___

### Button

• **Button** = ``16``

#### Defined in

[src/core/structures/enums.ts:23](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L23)

___

### ChannelSelect

• **ChannelSelect** = ``1024``

#### Defined in

[src/core/structures/enums.ts:29](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L29)

___

### CtxMsg

• **CtxMsg** = ``8``

#### Defined in

[src/core/structures/enums.ts:22](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L22)

___

### CtxUser

• **CtxUser** = ``4``

#### Defined in

[src/core/structures/enums.ts:21](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L21)

___

### MentionableSelect

• **MentionableSelect** = ``512``

#### Defined in

[src/core/structures/enums.ts:28](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L28)

___

### Modal

• **Modal** = ``64``

#### Defined in

[src/core/structures/enums.ts:25](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L25)

___

### RoleSelect

• **RoleSelect** = ``256``

#### Defined in

[src/core/structures/enums.ts:27](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L27)

___

### Slash

• **Slash** = ``2``

#### Defined in

[src/core/structures/enums.ts:19](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L19)

___

### StringSelect

• **StringSelect** = ``32``

#### Defined in

[src/core/structures/enums.ts:24](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L24)

___

### Text

• **Text** = ``1``

#### Defined in

[src/core/structures/enums.ts:18](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L18)

___

### UserSelect

• **UserSelect** = ``128``

#### Defined in

[src/core/structures/enums.ts:26](https://github.com/sern-handler/handler/blob/a579e27/src/core/structures/enums.ts#L26)
