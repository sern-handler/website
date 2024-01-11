---
title: command
sidebar_position: 2
---

# Commands 

## Example command
- View the command **ping.js** in `src/commands`. 
- Make a new file next to **ping.js** called **tictactoe.js**
- Copy **ping.js** contents into **tictactoe.js**.
We base **tictactoe.js** from **ping.js**

:::tip 
The name of your command will be the name of your file.
:::

Each slash command will follow this similar structure. 
In this tutorial, maybe you were smart enough to guess, but we'll be making tictactoe!

## New command, tic-tac-toe
- Instead of **CommandType.Both**, `type` property should be **CommandType.Slash**
    - This is to keep it simple. You'll see later, but slash commands work well with message components.
- Give it a description.
- run `npm run commands:publish`
- Your command should be usable on discord now!

### Result
Your command should now look something along the lines of this:
```js title=./commands/tictactoe.js
export default commandModule({ 
    type: CommandType.Slash,
    description: "I do tictactoe.",
    execute: async (ctx) => {
        await ctx.reply("Pwease wait. dis command in pwogwess"); // 👻
    }
})
```

