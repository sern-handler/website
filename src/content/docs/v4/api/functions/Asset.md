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
fs.promises.readFile is called. The default encoding is utf8.

### Parameters

• **p**: `string`

• **opts?**

• **opts.encoding?**: `PartialAssetEncoding`

• **opts.name?**: `undefined`

### Returns

`Promise`\<`string`\>

### Source

[src/index.ts:70](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/index.ts#L70)

## Asset(p, opts)

> **Asset**(`p`, `opts`?): `Promise`\<`any`\>

### Parameters

• **p**: `string`

• **opts?**

• **opts.encoding?**: `"json"`

• **opts.name?**: `undefined`

### Returns

`Promise`\<`any`\>

### Source

[src/index.ts:71](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/index.ts#L71)

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

[src/index.ts:72](https://github.com/sern-handler/handler/blob/222ecd9b61ad0b94830a2a9444118f01e1b7d6cd/src/index.ts#L72)
