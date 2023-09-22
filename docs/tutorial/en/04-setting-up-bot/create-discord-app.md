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

Click on "Bot" in the sidebar, then the "Reset Token" button and copy the token. The token should look something like this:
```
MTE1MjM2MDczNzczMDE5OTU2Mg.GUWUsy.dXAoO6NI1Cy3OV7IA-BTGcyzLS28-9tECNcVOg
```

:::danger
Please don't share your discord token (and probably all your other secrets)! Please `gitignore` your `.env` file and keep it safe.
:::

Also scroll down and enable the `Message Content Intent` and `Server Members Intent` so text commands work and discord.js doesn't error out.

Now, go back to your .env file and add this line:
```
DISCORD_TOKEN=(your discord token)
```
What we're essentially doing is defining a new environment variable called `DISCORD_TOKEN` that is set to `(your discord token)`.

## Inviting your bot to a Discord server.

This is the last stretch!

On the sidebar of the Discord Developer Portal, click `OAuth2` and then on `URL Generator`.  
On scopes, tick only `bot`:  
![](https://img.srizan.dev/brave_7ApMibw2KM.png)  
Then on `Bot permissions` tick `Send Messages` and `Read Message History`. If you need others for your specific use-case, add them here.  
![](https://img.srizan.dev/brave_7ApMibw2KM.png)

Finally, scroll down, copy the generated URL, paste it on the address bar and invite your bot as usual.

## Starting the bot

There's an npm script that's called `test`, so we're going to be running that.
Execute in your terminal:
```
yarn test
```
And your bot should start up in no time! Congrats!

---
Written by [Sr Izan](../intro/who-are-we#ethan)  
Get the [source code](https://github.com/sern-handler/tutorial-bot/tree/setting-up-bot/creating-discord-app)!
<GuideFeedback />