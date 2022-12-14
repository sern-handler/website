---
slug: 2.0.0
title: Release 2.0.0
authors: [jacoobes]
tags: [release]
---

## 2.0 Release
Wow! We're finally increasing our semantic versioning by +`1.7.9.` <br />
What does this mean?

### Plugin Support for Event Modules
You can now use plugins for event modules. Previous version would throw an error if the 
`plugins` field was populated.

```typescript 
export function commandPlTest() : SernEmitterPlugin {
    return {
        type: PluginType.Command,
        execute: ({ mod}, controller) => {
            if(mod.name === 'module.register') {
                console.log('Event Module created correctly')
                return controller.next()
            }
            console.log('event name is wrong')
            return controller.stop()
        }
    }
}
```
Applying this plugin to some `eventModule`: 
```typescript
export default eventModule({
    name: 'error',
    type: EventType.Sern,
    plugins: [commandPlTest()],
    execute(m) {
        console.log(m)
    },
})
```
## Dependency Injection and Decoupling

THIS SECTION IS PROBABLY THE MOST IMPORTANT!! <br/>
i should have eaten something before i feel hungry