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

### eventModule

Re-exports [eventModule](../modules.md#eventmodule-1)

## Variables

### controller

• `Const` **controller**: `Object`

The object passed into every plugin to control a command's behavior

#### Type declaration

| Name | Type |
| :------ | :------ |
| `next` | () => `OkImpl`<`void`\> |
| `stop` | () => `ErrImpl`<`void`\> |

#### Defined in

[src/handler/sern.ts:55](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/sern.ts#L55)

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

[src/handler/sern.ts:38](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/sern.ts#L38)

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
| `conf.build` | (`root`: `Container`<`Record`<`string`, `unknown`\>, {}\>) => `Container`<`Partial`<`T`\>, {}\> | - |
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

[src/handler/sern.ts:87](https://github.com/sern-handler/handler/blob/eb2924c/src/handler/sern.ts#L87)
