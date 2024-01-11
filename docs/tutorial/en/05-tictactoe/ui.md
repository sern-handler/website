---
title: UI 
sidebar_position: 4
---


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
const createButton = (customId, label) => {
   return ButtonBuilder.from({ 
        customId,
        label,
        style: ButtonStyle.Secondary
   }); 
}
```
The name is pretty self explanatory.

In our **execute** function, let's build the Action Rows.
```js
const message = "Tic Tac Toe";
const rows = [];
for(let i = 0; i < 3; i++) {
    rows.push(new ActionRowBuilder([ 
        createButton(i),
        createButton(i+1),
        createButton(i+2),
    ]));
}
```
> Question: Does this satisfy the rules stated above?

> Answer: Yes! We have 3 Action Rows in total, with 3 Buttons in each.

