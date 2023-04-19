---
id: "EventType"
title: "Enumeration: EventType"
sidebar_label: "EventType"
sidebar_position: 0
custom_edit_url: null
---

A bitfield that discriminates event modules

**`Example`**

```ts
export default eventModule({
    //highlight-next-line
    type : EventType.Discord,
    name : 'guildMemberAdd'
    execute(member : GuildMember) {
        console.log(member)
    }
})
```

## Enumeration Members

### Discord

• **Discord** = ``1``

The EventType for handling discord events

#### Defined in

[src/handler/structures/enums.ts:78](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L78)

___

### External

• **External** = ``3``

The EventType for handling external events.
Could be for example, `process` events, database events

#### Defined in

[src/handler/structures/enums.ts:87](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L87)

___

### Sern

• **Sern** = ``2``

The EventType for handling sern events

#### Defined in

[src/handler/structures/enums.ts:82](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L82)
