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

[src/core/structures/enums.ts:51](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/enums.ts#L51)

___

### External

• **External** = ``3``

The EventType for handling external events.
Could be for example, `process` events, database events

#### Defined in

[src/core/structures/enums.ts:60](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/enums.ts#L60)

___

### Sern

• **Sern** = ``2``

The EventType for handling sern events

#### Defined in

[src/core/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/b0399f9/src/core/structures/enums.ts#L55)
