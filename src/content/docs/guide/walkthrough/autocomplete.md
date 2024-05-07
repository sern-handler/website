---
title: Autocomplete
sidebar:
  order: 9
---

Autocomplete is a special interaction where it can happen on multiple options on a single command. We've handled this with a simple
tree search algorithm in a nested options tree.

## Example

```ts title="src/commands/cheese.ts" {13-21}
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
            ["gouda", "parmesan", "harvati"].map((cheese) => ({
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

Sern will handle autocomplete interactions at arbitrary depths and subcommand levels.
