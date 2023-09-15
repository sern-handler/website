---
title: Creating your sern bot
sidebar_position: 1
---
import GuideFeedback from "../../../../src/components/GuideFeedback";

Creating a bot with sern is a piece of cake, trust me!
As discussed in [the npm create command chapter](../setting-up-project/npm-create), we're going to be using that awesome tool to set sern up.  
So, what are we waiting for? Let's get started!

Open up a terminal in your ~~failed~~ projects directory. Then, type the following command:
```sh
npm create @sern/bot
```
After installing the package, prompts will show up on your terminal. Neat!

## Prompt walkthrough

First, choose a template. In this guide we'll be using the `js-esm` template.  
- `js` means Javascript.
- `esm` means ECMAScript Modules. ESM provides a better developer experience than the old CommonJS, so 
```js
const { Sern, makeDependencies, single } = require('@sern/handler');
``` 
would turn to
```js
import { Sern, makeDependencies, single } from '@sern/handler';
```

:::info
We primarily use Typescript but to make the tutorial easier Javascript will be used.
:::

Then, choose a project. This one should be lowercase with dashes and/or underscores (aka `kebab-case` or `snake_case`).

In the package manager prompt, select [Yarn](../preparing/package-manager)

And you're done... with that. See you in the next chapter, where you'll get your discord bot token!

---
Written by [Sr Izan](../intro/who-are-we#ethan)  
Get the [source code](https://github.com/sern-handler/tutorial-bot/tree/setting-up-bot/creating-bot)!
<GuideFeedback />