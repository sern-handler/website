---
title: Create your Discord Application
sidebar_position: 2
---
import GuideFeedback from "../../../../src/components/GuideFeedback";

Welcome back!

Before we do anything, we need to edit some code in our bot to make it read the Discord token safely and securely.

# Installing dotenv

The npm package [`dotenv`](https://npm.im/dotenv) lets us use environment variables defined in a `.env` file inside a Node.JS application.
On the newest versions of node.js you can do it without this package, but for the sake of simplicity this will be used.

Alright, enough rambling. Let's open up a terminal (your favorite thing I know...)
```sh
yarn add dotenv
```
This command will add dotenv to the dependencies. Awesome!  
Let's now go to our `index.js` file and add a new import:
```js
import 'dotenv/config'
```
And create a blank `.env` file in the root of your project directory (the directory where, for example, your `package.json` file is)

```
.
├── .env
├── .gitignore      
├── .npmignore      
├── README.md       
├── package.json    
├── sern.config.json
├── src
│   ├── commands
│   │   └── ping.js
│   ├── dependencies.d.ts
│   └── index.js
└── yarn.lock
```

## Setting up your Discord Application

You have your bot (almost) ready to go, but first we need a bot token.

First go to Discord Developer's homepage (you can type [discord.dev](https://discord.dev) in your browser and then click on "Applications" on the sidebar)

Click on "New Application" in the top right.

Then, fill in your application's name:  
![](https://img.srizan.dev/brave_QYp7LQe5xd.png)

Click on "Bot" in the sidebar, then the "Reset Token" button and copy the token.



---
Written by [Sr Izan](../intro/who-are-we#ethan)  
Get the [source code](https://github.com/sern-handler/tutorial-bot/tree/setting-up-bot/creating-discord-app)!
<GuideFeedback />