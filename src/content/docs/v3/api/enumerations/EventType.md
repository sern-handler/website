---
editUrl: false
next: false
prev: false
title: "EventType"
---

A bitfield that discriminates event modules

## Example

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

> **Discord**: `1`

The EventType for handling discord events

#### Source

[src/core/structures/enums.ts:51](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/structures/enums.ts#L51)

***

### External

> **External**: `3`

The EventType for handling external events.
Could be for example, `process` events, database events

#### Source

[src/core/structures/enums.ts:60](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/structures/enums.ts#L60)

***

### Sern

> **Sern**: `2`

The EventType for handling sern events

#### Source

[src/core/structures/enums.ts:55](https://github.com/sern-handler/handler/blob/04c4625bfa2f746935f4a8cee62b77cdffd86684/src/core/structures/enums.ts#L55)
