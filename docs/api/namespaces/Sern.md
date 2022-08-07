---
id: "Sern"
title: "Namespace: Sern"
sidebar_label: "Sern"
sidebar_position: 0
custom_edit_url: null
---

## References

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

[src/handler/sern.ts:77](https://github.com/sern-handler/handler/blob/2009593/src/handler/sern.ts#L77)

## Functions

### addExternal

▸ **addExternal**<`T`\>(`emitter`): `void`

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
| `emitter` | `T` | Any external event emitter.  The object will be stored in a map, and then fetched by the name of the instance's class.  As there are infinite possibilities to adding external event emitters,  Most types aren't provided and are as narrow as possibly can. |

#### Returns

`void`

#### Defined in

[src/handler/sern.ts:67](https://github.com/sern-handler/handler/blob/2009593/src/handler/sern.ts#L67)

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
| `wrapper` | [`Wrapper`](../interfaces/Wrapper.md) | Options to pass into sern.  Function to start the handler up |

#### Returns

`void`

#### Defined in

[src/handler/sern.ts:34](https://github.com/sern-handler/handler/blob/2009593/src/handler/sern.ts#L34)
