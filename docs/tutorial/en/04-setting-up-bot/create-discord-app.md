---
title: Create your Discord Application
sidebar_position: 2
---
import GuideFeedback from "../../../../src/components/GuideFeedback";

Welcome back!

Before we do anything, we need to edit some code in our bot to make it read the Discord token safely and securely.

Create a blank `.env` file in the root of your project directory (the directory where your `package.json` file is located)

```
.
├── .env
├── .env.example
├── .sern
    ├── generated
├── .gitignore      
├── .npmignore      
├── README.md       
├── package.json    
├── sern.config.json
├── jsconfig.json
├── src
│   ├── commands
│   │   └── ping.js
│   ├── dependencies.d.ts
│   └── index.js
└── package-lock.json
```

## Setting up your Discord Application
Notice the `.env.example` file? Let's open it.
```sh
DISCORD_TOKEN=YOUR_DISCORD_TOKEN
APPLICATION_ID=YOUR_DISCORD_BOT_USER_ID
NODE_ENV=<production OR development>
```
We need to fill this out, but in another file.
- Create a file `.env` next to `.env.example`
- Copy `.env.example` contents into `.env`, we'll fill this out now.

### Discord Token
You have your bot (almost) ready to go, but first we need a bot token.

- Go to Discord Developer's homepage (you can type [discord.dev](https://discord.dev) in your browser and then click on "Applications" on the sidebar)

- Click on "New Application" in the top right.

Then, fill in your application's name:  
![](https://img.srizan.dev/brave_QYp7LQe5xd.png)

- Click on "Bot" in the sidebar, then the "Reset Token" button and copy the token. The token should look something like this:
```
MTE1MjM2MDczNzczMDE5OTU2Mg.GUWUsy.dXAoO6NI1Cy3OV7IA-BTGcyzLS28-9tECNcVOg
```

- Scroll down and enable the `Message Content Intent` and `Server Members Intent` so text commands work and discord.js doesn't error out.

- Replace `YOUR_DISCORD_TOKEN` with your actual discord token:
```
DISCORD_TOKEN=MTE1MjM2MDczNzczMDE5OTU2Mg.GUWUsy.dXAoO6NI1Cy3OV7IA-BTGcyzLS28-9tECNcVOg
```
### APPLICATION_ID 
- Go to "General Information" and find your "APPLICATION ID". Copy That!
- Place it into your .env file.
- In future versions of sern, this may not be needed, but bear with me.
```
APPLICATION_ID=12345632432423987432987
```

### Mode 
With sern, there are two stages, development and production. Production is when we ship it to a hosting server and development is 
for ...developing. Let's set our NODE_ENV to development. For a more formal explanation, read [this](https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production)

```
NODE_ENV=development
```

### Final
Your `.env` file should looks something like this.
```
DISCORD_TOKEN=MTE1MjM2MDczNzczMDE5OTU2Mg.GUWUsy.dXAoO6NI1Cy3OV7IA-BTGcyzLS28-9tECNcVOg
APPLICATION_ID=12345632432423987432987
NODE_ENV=development
```

:::danger
Please do NOT commit this file! It basically contains the bot's password and, even though Discord will notice and create another token, other services will most probably not have that privilege!  
To fix this, create a `.gitignore` file and add an entry for `.env` [and `node_modules` while we're there](https://i.redd.it/tfugj4n3l6ez.png).
:::

## Inviting your bot to a Discord server.

This is the last stretch!

On the sidebar of the Discord Developer Portal, click `OAuth2` and then on `URL Generator`.  
On scopes, tick only `bot`:  
![](https://img.srizan.dev/brave_7ApMibw2KM.png)  
Then on `Bot permissions` tick `Send Messages` and `Read Message History`. If you need others for your specific use-case, add them here.  
![](https://img.srizan.dev/brave_7ApMibw2KM.png)

Finally, scroll down, copy the generated URL, paste it on the address bar and invite your bot as usual.

## Starting the bot
Since we use slash commands, we need to let Discord know we want to use their user interface.
- Run `npm run commands:publish`

:::info 
This script uses our command line utility, [publish](https://sern.dev/docs/cli/publish).
:::

There's an npm script that's called `start`, so we're going to be running that.
Execute in your terminal:
```
npm start
```
And your bot should start up in no time! **Congrats!**

---
Written by [Sr Izan](../intro/who-are-we#ethan)  
Get the [source code](https://github.com/sern-handler/tutorial-bot/tree/setting-up-bot/creating-discord-app)!
<GuideFeedback />
