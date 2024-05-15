---
title: Autocomplete
sidebar:
  order: 9
---

Autocomplete is a special interaction which can happen on multiple options can be suggested for a single command.

We've implemented this functionality using a simple tree search algorithm within a nested options tree.

## Example

In this example, the option `list` will autocomplete with the cheeses `gouda`, `parmesan`, and `harvarti`.

```ts title="src/commands/cheese.ts" {13-22}
export default commandModule({
  type: CommandType.Slash,
  description: "show me cheese",
  options: [
    {
      name: "list",
      type: ApplicationCommandOptionType.String,
      description: "pick a cheese to show",
      required: true,
      autocomplete: true,
      command: {
        onEvent: [],
        execute: (ctx) => {
          // focus can be used to refine the options
          const focus = ctx.options.getFocused();
          ctx.respond(
            ["gouda", "parmesan", "harvarti"].map((cheese) => ({
              name: cheese,
              value: cheese,
            })),
          );
        },
      },
    },
  ],
  execute: (ctx, [, args]) => {
    const cheese = args.getString("list", true);
    ctx.reply("selected cheese");
  },
});
```

## Using Focus

The `focus` object can be used to refine the options. For example, if the user types `g`, the focus object will be `g`.

We can filter the cheeses based on the focus object, and return only the cheeses that start with the focus object.

You can do a lot more with the focus object, such as performing API calls, or implementing a fuzzy search.

```ts title="src/commands/cheese.ts" {13-23}
export default commandModule({
  type: CommandType.Slash,
  description: "show me cheese",
  options: [
    {
      name: "list",
      type: ApplicationCommandOptionType.String,
      description: "pick a cheese to show",
      required: true,
      autocomplete: true,
      command: {
        onEvent: [],
        execute: (ctx) => {
          const focus = ctx.options.getFocused();
          ctx.respond(
            ["gouda", "parmesan", "harvarti"]
              .filter((cheese) => cheese.startsWith(focus))
              .map((cheese) => ({
                name: cheese,
                value: cheese,
              })),
          );
        },
      },
    },
  ],
  execute: (ctx, [, args]) => {
    const cheese = args.getString("list", true);
    ctx.reply("selected cheese");
  },
});
```

:::tip
Sern will handle autocomplete interactions at arbitrary depths and subcommand levels.
:::
