---
id: "PluginType"
title: "Enumeration: PluginType"
sidebar_label: "PluginType"
sidebar_position: 0
custom_edit_url: null
---

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

The PluginType for CommandPlugins

#### Defined in

[src/handler/structures/enums.ts:97](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L97)

___

### Event

• **Event** = ``2``

The PluginType for EventPlugins

#### Defined in

[src/handler/structures/enums.ts:101](https://github.com/sern-handler/handler/blob/2009593/src/handler/structures/enums.ts#L101)
