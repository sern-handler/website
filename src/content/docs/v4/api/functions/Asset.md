---
editUrl: false
next: false
prev: false
title: "Asset"
---

## Asset(p, opts)

> **Asset**(`p`, `opts`?): `Promise`\<`string`\>

Reads an asset file from the 'assets' directory.
If encoding is 'attachment', a discord.js AttachmentBuilder is provided, else 
fs.promises.readFile is called. The default is utf8.

### Parameters

• **p**: `string`

• **opts?**

• **opts.encoding?**: `"utf8"` \| `"base64"` \| `"binary"`

• **opts.name?**: `string`

### Returns

`Promise`\<`string`\>

### Source

[src/index.ts:71](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/index.ts#L71)

## Asset(p, opts)

> **Asset**(`p`, `opts`?): `Promise`\<`AttachmentBuilder`\>

### Parameters

• **p**: `string`

• **opts?**

• **opts.encoding?**: `"attachment"`

• **opts.name?**: `string`

### Returns

`Promise`\<`AttachmentBuilder`\>

### Source

[src/index.ts:72](https://github.com/sern-handler/handler/blob/2120b18c4e53e298bc3568422781c1bda05a7177/src/index.ts#L72)
