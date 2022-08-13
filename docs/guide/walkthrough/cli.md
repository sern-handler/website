---
sidebar_position: 2
---

# CLI

Setting up the [CLI](https://github.com/sern-handler/cli) is easy. <br />
- To start a brand-new project, run :
```sh
sern init (-y)
```

:::tip
It creates a directory for you so you don't need to!
:::

Include the `-y` flag if you want to set up defaults. The default langauge is [Typescript](https://www.typescriptlang.org/) <br />

- To install [plugins](plugins.md) maintained by the community [repository](https://github.com/sern-handler/awesome-plugins),
```
sern plugins
```
:::info
Make sure to have a correct [sern.config.json](./good-to-know.md#sernconfigjson)
:::
This will display a menu selection of all installable plugins. <br />
**Note**: You must have a [sern.config.json](good-to-know.md) to use this command.
If you want to view plugins, visit the repository linked above.

- To install extra utilities into your project
```
sern extra
```

