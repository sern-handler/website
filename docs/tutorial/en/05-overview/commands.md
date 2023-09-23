---
title: commands
sidebar_position: 2
---

# Commands 

Every sern command is located in the commands directory.

:::caution
Any command outside the specificed directory from `Sern.init` will be ignored!
:::

### Look at ping.js (go into your tutorial rn)

Please soak in all the comments I wrote for what each field will do. We will make a brand new command.

:::tip 
The name of your command will be the name of your file. This is the ping command.
:::

We can activate this command by running `!ping` or `/ping`

Each command will follow this similar structure. 
In this tutorial, we'll be making tictactoe!

### New command 
- Make a new file 
- Call it **tictactoe.js**
- import `CommandType` and `commandModule` from `@sern/handler`
- export this command under the [**default**](https://www.geeksforgeeks.org/what-is-export-default-in-javascript) export
- give it the type `CommandType.Slash`
- Give it a description.
#### Halfway
This is what your command should look like rn

```js title=./commands/tictactoe.js
export default commandModule({ 
    type: CommandType.Slash,
    description: "I do tictactoe."
})
```
- Give it a function to execute.
    - For now, let's tell the command to execute a reply like "in progress"
- run `sern commands publish`
- Your command should be usable on discord now!

### Result
Your command should now look something along the lines of this:
```js title=./commands/tictactoe.js
export default commandModule({ 
    type: CommandType.Slash,
    description: "I do tictactoe."
    execute: (ctx) => {
        ctx.reply("Pwease wait. dis command in pwogwess");
    }
})
```

