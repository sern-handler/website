# Your first event module
We will dissect a basic event module. <br>
Typescript:
```typescript
export default eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate', //name of event.
  execute(event) {
    console.log(event);  
  }
})
```
Javascript:
```javascript
exports.default = eventModule({
  type: EventType.Sern,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'module.activate',
  execute(event) {
    console.log(event);  
  }
})
```
Like command modules, the `type` property denotes what kind of event it is.
```
EventType.Sern = an event listening to the SernEmitter
EventType.Discord = an event listening to the discord.js Client
EventType.External = an event listening to any class extending an EventEmitter
```
### Essential properties of an event module

- **module.type** (Required)
    - The type of your module. ( Check previous message ^^^)
- **module.execute** (Required)
    - This function is called when the event module is triggered. Do your logic here!
- **module.name** (Optional)
    - The name of the event. **(defaults to its filename, however it is recommended to fill this out!!)**
- **module.description** (Optional)
    - Give your command a description. **(defaults to `..`)**
- **module.plugins** (Optional)
- A list of [plugins](plugins.md) that will modify and change the behavior of your command. <br>

<br>
Event modules are laid out similarly to command modules. These listen to any and all event you provide. 
In the current version 1.1.0-beta, plugins are not supported.

### Another example of an event module

Typescript:
```typescript
export default eventModule({
  type: EventType.Discord,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'guildMemberAdd', //name of event.
  async execute(member) {
    await member.client.channels.fetch('channel-id').send(`Welcome, ${member}`); 
  }
})
```

Javascript:
```typescript
exports.default = eventModule({
  type: EventType.Discord,
  plugins : [], //NOT SUPPORTED YET!!
  name: 'guildMemberAdd', //name of event.
  async execute(member) {
    await member.client.channels.fetch('channel-id').send(`Welcome, ${member}`); 
  }
})
```