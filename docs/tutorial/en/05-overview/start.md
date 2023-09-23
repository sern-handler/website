---
title: index
sidebar_position: 1
---

# start

## initiate
We start at the humble index.js. This is where this bot will start. Notice the Sern.init, hmm... I wonder what that does. (it initiates sern)
A few options are availible, which are **conveniently labeled already**. Make sure to glance here.

## dependencies
This requires a little more explaning. In `makeDependencies`, add necessary objects to run your application. you and sern, will use these structures. In the [template](../04-setting-up-bot/create-bot) you have now, we only initiate the client, which is necessary for the handler to run.

```js
await makeDependencies({
    build: (root) => root.add({
        '@sern/client': single(() => client) // we register our client into sern 
    })
})
```


