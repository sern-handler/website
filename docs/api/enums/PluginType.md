---
id: "PluginType"
title: "Enumeration: PluginType"
sidebar_label: "PluginType"
sidebar_position: 0
custom_edit_url: null
---

A bitfield that discriminates plugins

**`Example`**

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

### Command

• **Command** = ``1``

**`Deprecated`**

Use PluginType.Init instead

#### Defined in

[src/handler/structures/enums.ts:113](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L113)

___

### Control

• **Control** = ``2``

The PluginType for EventPlugins

#### Defined in

[src/handler/structures/enums.ts:122](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L122)

___

### Event

• **Event** = ``2``

**`Deprecated`**

Use PluginType.Control instead

#### Defined in

[src/handler/structures/enums.ts:118](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L118)

___

### Init

• **Init** = ``1``

The PluginType for InitPlugins

#### Defined in

[src/handler/structures/enums.ts:108](https://github.com/sern-handler/handler/blob/c1f6906/src/handler/structures/enums.ts#L108)
