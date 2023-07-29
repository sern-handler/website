---
sidebar_position: 5
---

# First Event Module
We will dissect a basic event module. <br />

:::tip
TLDR: event modules are event listeners. there are three types EventType.Discord, EventType.Sern, EventType.External
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="js" label="JavaScript">

```javascript
exports.default = eventModule({
  type: EventType.Sern,
  plugins : [],   
  name: 'module.activate',
  execute(event) {
    console.log(event);  
  }
})
```
</TabItem>

<TabItem value="ts" label="Typescript">

```typescript
export default eventModule({
  type: EventType.Sern,
  plugins : [],
  name: 'module.activate', //name of event.
  execute(event) {
    console.log(event);  
  }
})
```

</TabItem>

</Tabs>

Like command modules, the `type` property denotes what kind of event it is, which
can be found [here](https://sern.dev/docs/api/enums/EventType).

To view what each of these properties mean in depth, visit the [official documentation](https://sern.dev/docs/api/enums/EventType).

## External 

In version 2 & 3, any dependency that you have passed into makeDependencies can be registered here as well. 

```ts title="src/index.ts"
await makeDependencies({ 
    build: root => root.add({
        eventlistener: single(() => new EventEmitter())
    })
})
```

```ts title="events/myevent.ts"
export default eventModule({ 
    type: EventType.External, 
    emitter: 'eventlistener',
    execute: (args) => {
        console.log('Got event from eventlistener: ', args); 
    }

})

```


