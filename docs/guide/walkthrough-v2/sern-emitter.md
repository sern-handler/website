---
sidebar_position: 6
---

# The SernEmitter class
You're shipped with the SernEmitter. This EventEmitter listens to
- command modules executing and its status, the `module.activate` event
- command modules registered and its status, the `module.register` event
- On default, sern creates a single SernEmitter for your bot process.
- any error that occurs, the `error` event
- `warn` events, where it is possible to throw errors

You can put these and other event listeners into [event modules](./first-event.md)! 
<br/>View all <a href="https://sern.dev/docs/api/modules#serneventsmapping">events</a>