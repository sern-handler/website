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

Re-exports [commandModule](../modules.md#commandmodule)

___

### eventModule

Re-exports [eventModule](../modules.md#eventmodule)

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

[src/handler/sern.ts:82](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L82)

## Functions

### addExternal

▸ **addExternal**<`T`\>(`emitter`): `void`

**`Deprecated`**

- use Sern#makeDependencies instead

**`Example`**

```ts title="src/index.ts"
//Add this before initiating Sern!
Sern.addExternal(new Level())
```

**`Example`**

```ts title="events/level.ts"
 export default eventModule({
     emitter: 'Level',
     type : EventType.External,
     name: 'error',
     execute(args) {
         console.log(args)
     }
 })
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `__module` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `T` | Any external event emitter. The object will be stored in a map, and then fetched by the name of the instance's class. As there are infinite possibilities to adding external event emitters, Most types aren't provided and are as narrow as possibly can. |

#### Returns

`void`

#### Defined in

[src/handler/sern.ts:72](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L72)

___

### init

▸ **init**(`wrapper`): `void`

**`Example`**

```ts title="src/index.ts"
Sern.init({
    client,
    defaultPrefix: '!',
    commands: 'dist/commands',
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | [`Wrapper`](../interfaces/Wrapper.md) | Options to pass into sern. Function to start the handler up |

#### Returns

`void`

#### Defined in

[src/handler/sern.ts:39](https://github.com/sern-handler/handler/blob/4074274/src/handler/sern.ts#L39)
