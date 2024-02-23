---
slug: railway-deploy
title: Deploying Sern with Railway
authors: [Duro]
tags: [guides]
---

In this guide, I'll be showing you how to deploy your Sern bot with [Railway](https://railway.app/).

This guide assumes you have a Sern bot already set up and ready to deploy. If you don't, you can follow the [Getting Started](/blog/getting-started) guide to set up your bot.

## GitHub Repository

The first thing you'll need to deploy your bot is a GitHub repository for your bot. If you don't have one, you can create one by following the [GitHub guide](https://docs.github.com/en/get-started/quickstart/create-a-repo).

Once you have your repository set up, you can push your bot's code to the repository, and you're ready to deploy using Railway.

## Railway Setup

After you have your bot's code in a GitHub repository, you'll need to create an account on Railway. You can sign up using your GitHub account at [railway.app](https://railway.app/).

Once you've created your account, navigate to the [dashboard](https://railway.app/dashboard) and click the "New Project" button. Click the "Deploy from GitHub repo" button, and select your bot's repository.

Once you've selected your repository, click the "Add Variables" button to add your bot's environment variables. You'll need your environment variables from your `.env` file to add to Railway. (You can also add these later if you want.)

## Deploy

Once you've added your environment variables, click the "Deploy" button, and Railway will start deploying your bot. Once the deployment is complete, you'll be able to see your bot's URL and logs.

:::note
Make sure you add your environment variables, and your node start script is correct in your `package.json` file.

If you have any issues deploying your bot, you can check the logs for any errors.
:::

That's it! Your bot is now deployed and running on Railway. If you have any issues or questions, feel free to ask in the [Sern Discord server](https://sern.dev/discord).
