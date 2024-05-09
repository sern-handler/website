---
title: Good to Know
sidebar:
  order: 13
---

## sern.config.json

A `sern.config.json`, although not necessary, allows your project to communicate with our cli.

For example, when installing TypeScript plugins, the language property is necessary to install from our [open source repository](https://github.com/sern-handler/awesome-plugins).

Using the CLI and running `sern init --sync` on pre-existing projects should install this file in the your project.

Or, if this is a brand-new project, `sern init` automatically installs it.

```json title="sern.config.json"
{
  "language": "typescript",
  "paths": {
    "base": "src",
    "commands": "commands"
  }
}
```
