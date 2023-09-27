---
title: plugins
sidebar_position: 3
---


# What are plugins? 

## Code ran before a command to modify output.


sern has a bunch of premade plugins thanks to our awesome community, which you can install via the cli!


```sh
sern plugins
```
Run this to see all community plugins.

Lets make a command only meant to be run in a *nsfw channel!*

- Install the nsfwOnly plugin.
- Thank the creator of the plugin. (Thank you)
- Read the doucmentation that comes with it.
- Use it!
```ts 
export default commandModule({ 
    type: CommandType.Slash,
    description: "post very nsfw stuff",
    //WE CALL THE PLUGIN IN THE PLUGINS FIELD.
    plugins: [nsfwOnly("You cannot use this command here.", true)]
})

```
Keep in mind some plugins cannot run for every type of interaction sern handles.
For example, nsfwOnly plugin will probably not work in a modal.

To create custom plugins, view [here](../../../guide/walkthrough/plugins).

## Moving forward:
Download the `channelType` plugin, because we'll be using that for this tutorial.
