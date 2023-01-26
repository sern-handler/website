---
id: "DependencyConfiguration"
title: "Interface: DependencyConfiguration<T>"
sidebar_label: "DependencyConfiguration"
sidebar_position: 0
custom_edit_url: null
---

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Dependencies`](Dependencies.md) |

## Properties

### build

• **build**: (`root`: `Container`<`Omit`<[`Dependencies`](Dependencies.md), ``"@sern/client"``\>, {}\>) => `Container`<`T`, {}\>

#### Type declaration

▸ (`root`): `Container`<`T`, {}\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `Container`<`Omit`<[`Dependencies`](Dependencies.md), ``"@sern/client"``\>, {}\> |

##### Returns

`Container`<`T`, {}\>

#### Defined in

[src/types/handler.ts:68](https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L68)

___

### exclude

• `Optional` **exclude**: `Set`<``"@sern/logger"``\>

#### Defined in

[src/types/handler.ts:67](https://github.com/sern-handler/handler/blob/33f1446/src/types/handler.ts#L67)
