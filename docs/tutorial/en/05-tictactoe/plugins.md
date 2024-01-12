---
title: plugins
sidebar_position: 3
---


# What are plugins? 

## Code ran before a command to modify output.


sern has a bunch of premade plugins thanks to our awesome community, which you can install via the cli!

## Forward: 

- Run: `sern plugins`, selecting the **channelType** plugin
- Thank the creator(s) of the plugin. (Thank you)
- Import your plugin at the top of the file like this
```js
import { channelType } from '../plugins/channelType.js'
```

Once you download the `channelType` plugin, You may continue.

## Aside:

### How to use plugins?
Lets take an aside to show how to install plugins.
- Run: `sern plugins`, selecting plugins
- Thank the creator(s) of the plugin. (Thank you)

```js 
import { commandModule, CommandType } from '@sern/handler'
import { channelType } from '../plugins/channelType.js'

export default commandModule({ 
    type: CommandType.Slash,
    description: "haliburt",
    // here:
    plugins: [channelType([ChannelType.GuildText], 'This cannot be used here')]
})

```
Keep in mind some plugins cannot run for every type of interaction sern handles.
For example, the **channelType** plugin will probably not work in a modal, and if you are using typescript, 
the type checker won't allow it. However, there are some more generic plugins, one being **fromCallback**, which can 
run in any command / component.

### How to contribute plugins?:
- view [here](../../../guide/walkthrough/plugins).

