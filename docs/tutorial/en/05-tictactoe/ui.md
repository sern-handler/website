---
title: UI 
sidebar_position: 4
---

import GuideFeedback from "../../../../src/components/GuideFeedback";

## Message Components

Discord has a rich api for developers, and they allow bots to use and interact with certain UI components. 
Some of these include

- Buttons
- Modals (technically not a component)
- Select Menu
- Action Rows

Let's use the mush we call [**brain**](https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain).

> **Question**: What components do we need to create a tic tac toe game?

> **Answer**: Buttons!!!!


### Rules
Obviously we can't spam the user interface with lots of components; Discord knows this as well.

Per the [**discord api documentation**](https://discord.com/developers/docs/interactions/message-components#action-rows):
- You can have up to 5 Action Rows per message
- Maximum of **5** components in an Action Row
- An Action Row cannot contain another Action Row
- Select Menus take up an entire Action Row, and cannot have buttons


Do the math, and we can have up to 5 (action rows) times 5 (per row), 25 buttons in one message 

### Custom Ids 
We also need some way to distinguish buttons between other buttons. Whenever a user clicks a button, we are notified that **some** interaction has happened, but from **where?** Custom ids to the rescue. Think of these like 'classes' or 'ids' on html tags. **Each component that we need to handle
will have to be retrieved by their custom id in order to properly handle it**


We'll get more into this in the next chapter.


### Design
Our UI will contain a message, and a total of 9 buttons, laid out in a 3x3 grid.

TODO!!! PICTURE HERE


### Implementation

How do we represent this in code? In discord.js, the library we're using, we can represent this via their builder api. Let's create some utility functions before diving straight in.

```js title="tictactoe.js"
const EMPTY = "\0"; // A little trick to show buttons with no 'label'
const button = (custom_id, label=EMPTY) => {
   return new ButtonBuilder({ 
        custom_id,
        label,
        style: ButtonStyle.Secondary
   }); 
}

const row = (...elements) => {
    return new ActionRowBuilder().addComponents(elements);
}
```
The names for these are pretty self explanatory. **EMPTY** is a placeholder for labels in a button.

In our **execute** function, let's build the Action Rows.
```js title="tictactoe.js, in the execute body"
const message = "Tic Tac Toe";

//Our TicTacToe grid. consists of 3 rows, and in each row, 3 buttons.
//Each button has a unique 'customId' of a number.
const grid = [row(button('0'), button('1'), button('2')),
              row(button('3'), button('4'), button('5')),
              row(button('6'), button('7'), button('8'))];


await ctx.reply("Pwease wait. dis command in pwogwess"); // 👻
```
> Question: Does this grid satisfy the rules stated above?

> Answer: Yes! We have 3 Action Rows in total, with 3 Buttons in each. Less than 25 Components!

Let's try displaying this to Discord. We're not just displaying plain text anymore, we need to change ctx.reply.

- Change how we call `ctx.reply`. Give it an object instead:
```js
// await ctx.reply("Pwease wait. dis command in pwogwess"); // 👻

await ctx.reply({ content: message, components: grid });
```
One more thing, we need to play against someone, so we'll need to update our commandModule.
- Add the import **ApplicationCommandOptionType** from discord.js
- Add a new **option** of type **User** to the **options** field of your commandModule. 
This will display on the user's end as an option to choose from.
```js
options: [
	{
		name: "opponent",
		description: "Opponent you would like to play with",
		type: ApplicationCommandOptionType.User,
		required: true,
	},
],
```
- Run `npm run commands:publish` once more to update it.

:::tip
Anytime we add a new slash command or its options, its a good idea to run `npm run commands:publish`
:::

Run your bot.
- Congrats! You got something to display. 
Notice how when you try to click, it will say something like `interaction failed to respond`.
**Next chapter**, let's wire everything up.

---
<GuideFeedback />