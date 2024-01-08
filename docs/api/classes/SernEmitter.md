---
id: "SernEmitter"
title: "Class: SernEmitter"
sidebar_label: "SernEmitter"
sidebar_position: 0
custom_edit_url: null
---

**`Since`**

1.0.0

## Hierarchy

- `EventEmitter`

  ↳ **`SernEmitter`**

## Constructors

### constructor

• **new SernEmitter**(): [`SernEmitter`](SernEmitter.md)

#### Returns

[`SernEmitter`](SernEmitter.md)

#### Overrides

EventEmitter.constructor

#### Defined in

[src/core/structures/sern-emitter.ts:10](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L10)

## Properties

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](SernEmitter.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:357

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:362

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:363

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](SernEmitter.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:356

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:383

___

### emit

▸ **emit**<`T`\>(`eventName`, `...args`): `boolean`

Listening to sern events with on. This event stays on until a crash or a normal exit

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](../interfaces/SernEventsMapping.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `T` |  |
| `...args` | [`SernEventsMapping`](../interfaces/SernEventsMapping.md)[`T`] | the arguments for emitting the eventName |

#### Returns

`boolean`

#### Overrides

EventEmitter.emit

#### Defined in

[src/core/structures/sern-emitter.ts:40](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L40)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:702

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](SernEmitter.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:555

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:649

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:568

___

### off

▸ **off**(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v10.0.0

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:528

___

### on

▸ **on**<`T`\>(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Listening to sern events with on. This event stays on until a crash or a normal exit

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](../interfaces/SernEventsMapping.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `T` |  |
| `listener` | (...`args`: [`SernEventsMapping`](../interfaces/SernEventsMapping.md)[`T`][]) => `void` | what to do with the data |

#### Returns

[`SernEmitter`](SernEmitter.md)

#### Overrides

EventEmitter.on

#### Defined in

[src/core/structures/sern-emitter.ts:18](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L18)

___

### once

▸ **once**<`T`\>(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Listening to sern events with on. This event stays on until a crash or a normal exit

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`SernEventsMapping`](../interfaces/SernEventsMapping.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `T` |  |
| `listener` | (...`args`: [`SernEventsMapping`](../interfaces/SernEventsMapping.md)[`T`][]) => `void` | what to do with the data |

#### Returns

[`SernEmitter`](SernEmitter.md)

#### Overrides

EventEmitter.once

#### Defined in

[src/core/structures/sern-emitter.ts:29](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L29)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:667

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v6.0.0

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:683

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:598

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`SernEmitter`](SernEmitter.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`SernEmitter`](SernEmitter.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v0.1.26

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:523

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`SernEmitter`](SernEmitter.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`SernEmitter`](SernEmitter.md)

**`Since`**

v0.3.5

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:549

___

### failure

▸ **failure**(`module?`, `reason?`): `Object`

Creates a compliant SernEmitter failure payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `module?` | `Module` |
| `reason?` | `unknown` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `module?` | `AnyModule` |
| `reason` | `string` \| `Error` |
| `type` | [`Failure`](../enums/PayloadType.md#failure) |

#### Defined in

[src/core/structures/sern-emitter.ts:59](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L59)

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:299

___

### getMaxListeners

▸ **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

**`Since`**

v18.17.0

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:328

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:271

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:254

▸ **on**<`Emitter`, `Events`\>(`eventEmitter`, `eventName`): `AsyncIterableIterator`<`Emitter` extends `Client`<`boolean`\> ? `ClientEvents`[`Events`] : `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Emitter` | extends `__module` |
| `Events` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `Emitter` |
| `eventName` | `Emitter` extends `Client`<`boolean`\> ? `Events` : `string` |

#### Returns

`AsyncIterableIterator`<`Emitter` extends `Client`<`boolean`\> ? `ClientEvents`[`Events`] : `any`\>

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/discord.js/typings/index.d.ts:243

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:194

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:195

▸ **once**<`Emitter`, `Event`\>(`eventEmitter`, `eventName`): `Promise`<`Emitter` extends `Client`<`boolean`\> ? `ClientEvents`[`Event`] : `any`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Emitter` | extends `__module` |
| `Event` | extends keyof `ClientEvents` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventEmitter` | `Emitter` |
| `eventName` | `Emitter` extends `Client`<`boolean`\> ? `Event` : `string` |

#### Returns

`Promise`<`Emitter` extends `Client`<`boolean`\> ? `ClientEvents`[`Event`] : `any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/discord.js/typings/index.d.ts:239

___

### payload

▸ **payload**<`T`\>(`type`, `module?`, `reason?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Payload`](../modules.md#payload) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`PayloadType`](../enums/PayloadType.md) |
| `module?` | `Module` |
| `reason?` | `unknown` |

#### Returns

`T`

#### Defined in

[src/core/structures/sern-emitter.ts:46](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L46)

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:346

___

### success

▸ **success**(`module`): `Object`

Creates a compliant SernEmitter module success payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `module` | `Module` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `module` | `AnyModule` |
| `type` | [`Success`](../enums/PayloadType.md#success) |

#### Defined in

[src/core/structures/sern-emitter.ts:72](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L72)

___

### warning

▸ **warning**(`reason`): `Object`

Creates a compliant SernEmitter module warning payload

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `unknown` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `reason` | `string` |
| `type` | [`Warning`](../enums/PayloadType.md#warning) |

#### Defined in

[src/core/structures/sern-emitter.ts:82](https://github.com/sern-handler/handler/blob/9d5c6c7/src/core/structures/sern-emitter.ts#L82)
