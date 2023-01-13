---
slug: 2.5.0
title: Release 2.5.0
authors: [jacoobes]
tags: [release]
---

## 2.5 Release

### Join our [discord](https://sern.dev/discord) <br />

Wow! We're increasing our semantic versioning by +0.3.9 <br />
What does this mean?

### Breaking changes
- CommandPlugin and EventPlugin have been named [InitPlugin](docs/api/interfaces/InitPlugin) and [ControlPlugin](docs/api/interfaces/ControlPlugin), respectively
    - The naming of plugins was getting too complex. For example, CommandModuleCommandPlugin, CommandModuleEventPlugin was part of the big mess
    - The old names still exist in the codebase but will be removed in the next minor.
- I realize that this affects all plugins. I have updated all [plugins](https://github.com/sern-handler/awesome-plugins/pull/68) to match these changes
- The old way of declaring plugins has been deprecated in favor of newer functions that facilitate and ease typings
  - [CommandControlPlugin](docs/api/modules#commandcontrolplugin)
  - [CommandInitPlugin](docs/api/modules#commandinitplugin)
  - [EventControlPlugin](docs/api/modules#eventcontrolplugin)
  - [EventInitPlugin](docs/api/modules#eventinitplugin)
  - Long are the days of confusing plugin names and types!
- [controller](docs/api/modules#controller) parameter for plugins has been removed
    - You'll need to import it instead