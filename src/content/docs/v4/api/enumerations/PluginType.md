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

[src/core/structures/enums.ts:85](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/enums.ts#L85)

***

### Init

> **Init**: `1`

The PluginType for InitPlugins

#### Source

[src/core/structures/enums.ts:81](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/structures/enums.ts#L81)
