---
title: Logic 
sidebar_position: 5
---

import GuideFeedback from "../../../../src/components/GuideFeedback";

## Game rules
- Two players max.
- Each player can choose rock, paper scissors
- Scissors beats paper, paper beats rock, rock beats scissors

Get the option selected, adding this to the top of your **execute** function:
```js
const opponent = ctx.options.getUser("opponent");
```
:::warning
Since we are in a Slash command, the above is valid. If we were to interoperate between Text Commands and Slash Commands,
we'd have to check if the current [Context](https://sern.dev/docs/api/classes/Context) is the correct type. 
:::

We need to ensure we're not playing against **an invalid user**. Invalid users are those that
- are bots **or**
- ourselves.

Create helper function **isInvalidUser** which returns a boolean satisfying the conditions above.

```js
const isInvalidUser = (user) => {
    return user.id === "182326315813306368" || user.bot;
}
```
:::tip 
You can easily access anyone's user id by [enabling dev mode](https://beebom.com/how-enable-disable-developer-mode-discord).
:::

Cool, now let's call it, preventing invalid users from being opponents. Put the code snippet before any of the UI logic:
```js title="tictactoe, execute function"
if(isInvalidUser(opponent)) { 
    return;
}
```
We **return**, or **stop** execution of the function if the condition `isInvalidUser` is true.
:::info 
A step further would be extracting `isInvalidUser` into a separate plugin, if multiple commands share this same logic.
:::
Before we go any further, let's test. Start up the bot again.
- Try running `/rps` with a bot.
    - What happens?
    - It may be beneficial to give the user some feedback instead of a **return**.
- Try running `/rps` with yourself
    - What happens?
    - It may be beneficial to give the user some feedback instead of a **return**.
- Try running `/rps` in a DM channel with the bot itself.
    - What happens?

Great! notice how in a DM channel, the command is entirely **useless**. 
Let's use our **channelType** plugin to ensure this doesn't happen.
- Add the **plugins** field to your commandModule, adding the channelType plugin.
```js
plugins: [channelType( )]
```
- Call it with the right parameters. 
    - All plugins come with documentation in the same file
    - In our case, we need to supply an array of ChannelTypes, and an optional message. 
```js
plugins: [channelType([ChannelType.GuildText], "You cannot execute this command here.")]
```
:::info
You can publish commands to specific guilds using special configuration. 
For more information, view the docs [here](https://sern.dev/docs/cli/publish).
For educational and simplicity purposes, I'm using a plugin here.
:::

Great! When we rerunning these test conditions, it should catch and respond to these conditions.


## Collectors
We know how to display components, but what about responding to them?
Discord.js gives us the Collector API, which at its core, listens to incoming interactions from discord.js. It essentially comes in two flavors.
- **await**
- **callback based**

**Await** is [easy](https://www.infoq.com/presentations/Simple-Made-Easy/), but it comes at the cost of only collecting `one` at a time. Also, 
it is blocking on other commands attempting to be run; When we await a component,
All other commands will be waiting as well. So, we'll be using callback based, lazily waiting. Let's create a collector to the message sent by the bot. How do we get that message?
Luckily `ctx.reply` returns the [Message](https://discord.js.org/#/docs/discord.js/main/class/Message) sent. Let's capture that in a variable.

- Capture the result of ctx.reply in a variable called **resultMessage**.
```js
const resultMessage = await ctx.reply({ message, components: grid });
```
- Create a collector from the message's property `.createMessageComponentCollector()`
    - Accept only interactions of type **Button** (we are making a tictactoe game of solely buttons),
        - Make sure to import **ComponentType** from discord.js
    - Give it a time limit of 60_000 milliseconds aka 1 minute.
```js
const collector = responseMessage.createMessageComponentCollector({ 
    componentType: ComponentType.Button,
    time: 60_000
});
```
---
<GuideFeedback />
