---
title: Choosing a package manager
---

<!-- Rephrasing and title done by Ethan -->

A package manager is like a helper for your programs. It brings all the tools for your projects and makes sure they fit and work well together. It's like having someone organize things so you can work without problems.

The most used ones are: 
- [npm](https://www.npmjs.com) 
- [Yarn](https://yarnpkg.com) 
- [pnpm](https://pnpm.io/)

For this tutorial, we'll be using **[Yarn](https://yarnpkg.com)**. It's made by Facebook.

**Advantages of Yarn:**
1. **Performance:** Yarn is fast and has efficient dependency management.
2. **Lockfile:** Yarn's `yarn.lock` file ensures deterministic builds, crucial for collaboration.
3. **Offline Mode:** Yarn offers a reliable offline mode, ideal for environments with limited internet access.
4. **Plug-n-play:** Yarn Berry (2) introduces "plug-n-play" (PnP), reducing disk space usage.