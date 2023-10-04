---
title: events 
sidebar_position: 4
---


# Events 

Every sern event listener is located in the events directory.

:::caution
Like commands, any event module outside the specificed directory from `Sern.init` will be ignored!
:::

At the moment, all of these events will be turned on at the start of an application. An event is simply an event listener. There are a few events we can listen to: `External`, `Discord`, and `Sern`.

- External events are provided by makeDependencies.
- Discord events are provided by your client, or your channel to the discord API
- Sern events are the events that we provide. 


Let's create an event module that'll listen to users joining.

```ts title="events/guildMemberAdd.js

export default discordEvent({
    name: 'guildMemberAdd',
    execute: (guildMember) => {
        console.log("A new member joined!")
        //TODO: later 
    }
})

```
Whenever we restart our bot, every time a user joins, we get a log in the terminal. Good job. If you want to play around with it, go ahead, there are many events you may want to listen to, but for the sake of the tutorial we only need guildMemberAdd.

