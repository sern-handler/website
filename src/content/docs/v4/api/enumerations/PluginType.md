---
editUrl: false
next: false
prev: false
title: "PluginType"
---

A bitfield that discriminates plugins

## Example

```ts
export default function myPlugin() : EventPlugin<CommandType.Text> {
    //highlight-next-line
    type : PluginType.Event,
    execute([ctx, args], controller) {
        return controller.next();
    }
}
```

## Enumeration Members

### Control

> **Control**: `2`

The PluginType for EventPlugins

#### Source

[src/core/structures/enums.ts:86](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/structures/enums.ts#L86)

***

### Init

> **Init**: `1`

The PluginType for InitPlugins

#### Source

[src/core/structures/enums.ts:82](https://github.com/sern-handler/handler/blob/45665292ae99b70b419575eef2271e29523a30e0/src/core/structures/enums.ts#L82)
