---
editUrl: false
next: false
prev: false
title: "CommandType"
---

## Since

1.0.0
A bitfield that discriminates command modules

## Example

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

> **Both**: `3`

#### Source

[src/core/structures/enums.ts:20](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L20)

***

### Button

> **Button**: `16`

#### Source

[src/core/structures/enums.ts:23](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L23)

***

### ChannelSelect

> **ChannelSelect**: `1024`

#### Source

[src/core/structures/enums.ts:29](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L29)

***

### CtxMsg

> **CtxMsg**: `8`

#### Source

[src/core/structures/enums.ts:22](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L22)

***

### CtxUser

> **CtxUser**: `4`

#### Source

[src/core/structures/enums.ts:21](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L21)

***

### MentionableSelect

> **MentionableSelect**: `512`

#### Source

[src/core/structures/enums.ts:28](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L28)

***

### Modal

> **Modal**: `64`

#### Source

[src/core/structures/enums.ts:25](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L25)

***

### RoleSelect

> **RoleSelect**: `256`

#### Source

[src/core/structures/enums.ts:27](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L27)

***

### Slash

> **Slash**: `2`

#### Source

[src/core/structures/enums.ts:19](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L19)

***

### StringSelect

> **StringSelect**: `32`

#### Source

[src/core/structures/enums.ts:24](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L24)

***

### Text

> **Text**: `1`

#### Source

[src/core/structures/enums.ts:18](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L18)

***

### UserSelect

> **UserSelect**: `128`

#### Source

[src/core/structures/enums.ts:26](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/core/structures/enums.ts#L26)
