---
title: CLI
sidebar:
  order: 3
---

Setting up the [CLI](https://github.com/sern-handler/cli) is easy.

The cli is your plug to the sern ecosystem. This will allow you to install plugins with ease, install extra utilities, and much more.
If you haven't yet:

```sh
npm install -g @sern/cli
```

- To install [plugins](plugins.md) maintained by the community [repository](https://github.com/sern-handler/awesome-plugins),

```sh
sern plugins
```

:::caution
Make sure to have a correct [sern.config.json](./good-to-know.md#sernconfigjson)
:::

This will display a menu selection of all installable plugins.

**Note**: You must have a [sern.config.json](good-to-know.md) to use this command.
If you want to view plugins, visit the repository linked above.

- To install extra utilities into your project

```sh
sern extra
```

We have a more in depth [guide](../../cli/README.md) of the CLI
