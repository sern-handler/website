---
editUrl: false
next: false
prev: false
title: "CommandInitPlugin"
---

> **CommandInitPlugin**\<`I`\>(`execute`): [`Plugin`](/v4/api/interfaces/plugin/)

Creates an initialization plugin for command preprocessing and modification

## Type parameters

• **I** *extends* [`CommandType`](/v4/api/enumerations/commandtype/)

Extends CommandType to enforce type safety for command modules

## Parameters

• **execute**

Function to execute during command initialization

## Returns

[`Plugin`](/v4/api/interfaces/plugin/)

A plugin that runs during command initialization

## Since

2.5.0

## Example

```ts
// Plugin to update command description
export const updateDescription = (description: string) => {
  return CommandInitPlugin(({ deps }) => {
    if(description.length > 100) {
      deps.logger?.info({ message: "Invalid description" })
      return controller.stop("From updateDescription: description is invalid");
    }
    module.description = description;
    return controller.next();
  });
};
```

## Example

```ts
// Plugin to store registration date in module locals
export const dateRegistered = () => {
  return CommandInitPlugin(({ module }) => {
    module.locals.registered = Date.now()
    return controller.next();
  });
};
```

## Remarks

- Init plugins can modify how commands are loaded and perform preprocessing
- The module.locals object can be used to store custom plugin-specific data
- Be careful when modifying module fields as multiple plugins may interact with them
- Use controller.next() to continue to the next plugin
- Use controller.stop(reason) to halt plugin execution

## Source

[src/core/plugin.ts:62](https://github.com/sern-handler/handler/blob/513ac8edf4d89ef8d6a1ed18ea3d08f31adf7ddb/src/core/plugin.ts#L62)
