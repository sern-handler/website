---
slug: getting-started
title: How to get started with sern!
authors: [Sr Izan]
tags: [guides]
---

## Hello everyone!

I'm Sr Izan, your fellow sern-handler user and contributor.

Today I'm going to show you how to get started with sern and all its cool features.

### Step 1: Install the CLI.

Just run:
```
npm i -g @sern/cli
```
then just use
```
sern init
```
The CLI is written in Typescript and open-sourced on [Github](https://github.com/sern-handler/cli). (thanks evo!)

### Step 2: Have some way to store secrets.

Normally you'd need a way to store secrets, and the best way to do that is by installing another package: `dotenv`

just `npm i dotenv` in the project folder and add `require('dotenv').config()` to your import section. Then, when you login, `process.env.TOKEN` (or however you have it named on your `.env` file) should do the trick.

### And... that's it?

Yes, that's it. Here's a little FAQ to get you started. You can also join the [Discord](https://sern-handler.js.org/discord) for any problems.

### Extra: Video tutorial!

<video width="400" controls>
  <source src="https://srizan.s-ul.eu/wtJBVsZU" type="video/mp4" />
</video>

## FAQ

**Q**: How do I publish a slash command?  
**A**: Install the publish extension. Little video:  
<video width="400" controls>
  <source src="https://srizan.s-ul.eu/uHzPhfcS" type="video/mp4" />
</video>

**Q**: Any snippet VSCode extension?  
**A**: Yeah, just search `sern Snippets` made by a verified publisher called Sr Izan (haha yeah me funny!1!)  

**Q**: HEEEELLLPPPP!!!!
**A**: Hey, don't panic! We're here to help so, join the [Discord](https://sern-handler.js.org/discord). We're trying to get to 100 members!