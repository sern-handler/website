---
id: "Sern"
title: "Namespace: Sern"
sidebar_label: "Sern"
sidebar_position: 0
custom_edit_url: null
---

## References

### CommandExecutable

Re-exports [CommandExecutable](../classes/CommandExecutable.md)

___

### EventExecutable

Re-exports [EventExecutable](../classes/EventExecutable.md)

___

### commandModule

Re-exports [commandModule](../modules.md#commandmodule-1)

___

### controller

Re-exports [controller](../modules.md#controller)

___

### discordEvent

Re-exports [discordEvent](../modules.md#discordevent)

___

### eventModule

Re-exports [eventModule](../modules.md#eventmodule-1)

## Functions

### init

▸ **init**(`wrapper`): `void`

**`Example`**

```ts title="src/index.ts"
Sern.init({
    defaultPrefix: '!',
    commands: 'dist/commands',
    events: 'dist/events',
    containerConfig : {
        get: useContainer
    }
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | [`Wrapper`](../interfaces/Wrapper.md) | Options to pass into sern.  Function to start the handler up |

#### Returns

`void`

#### Defined in

[src/handler/sern.ts:39](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L39)

___

### makeDependencies

▸ **makeDependencies**<`T`\>(`conf`): <V\>(...`keys`: [...V[]]) => [`MapDeps`](../modules.md#mapdeps)<`T`, `V`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dependencies`](../interfaces/Dependencies.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `Object` | a configuration for creating your project dependencies |
| `conf.build` | (`root`: `Container`<`Record`<`string`, `any`\>, {}\>) => `Container`<`Partial`<`T`\>, `T`\> | - |
| `conf.exclude?` | `Set`<``"@sern/logger"``\> | - |

#### Returns

`fn`

▸ <`V`\>(...`keys`): [`MapDeps`](../modules.md#mapdeps)<`T`, `V`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | extends keyof `T`[] |

##### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | [...V[]] |

##### Returns

[`MapDeps`](../modules.md#mapdeps)<`T`, `V`\>

#### Defined in

[src/handler/sern.ts:108](https://github.com/sern-handler/handler/blob/404a8c7/src/handler/sern.ts#L108)
