---
id: "SernError"
title: "Enumeration: SernError"
sidebar_label: "SernError"
sidebar_position: 0
custom_edit_url: null
---

## Enumeration Members

### InvalidModuleType

• **InvalidModuleType** = ``"Detected an unknown module type"``

Throws when registering an invalid module.
This means it is undefined or an invalid command type was provided

#### Defined in

[src/handler/structures/errors.ts:9](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L9)

___

### MismatchEvent

• **MismatchEvent** = ``"You cannot use message when an interaction fired or vice versa"``

A crash that occurs when accessing an invalid property of Context

#### Defined in

[src/handler/structures/errors.ts:29](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L29)

___

### MismatchModule

• **MismatchModule** = ``"A module type mismatched with event emitted!"``

Attempted to lookup module in command module store. Nothing was found!

#### Defined in

[src/handler/structures/errors.ts:17](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L17)

___

### MissingRequired

• **MissingRequired** = ``"@sern/client is required but was not found"``

Required Dependency not found

#### Defined in

[src/handler/structures/errors.ts:37](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L37)

___

### NotSupportedInteraction

• **NotSupportedInteraction** = ``"This interaction is not supported."``

Unsupported interaction at this moment.

#### Defined in

[src/handler/structures/errors.ts:21](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L21)

___

### NotSupportedYet

• **NotSupportedYet** = ``"This feature is not supported yet"``

Unsupported feature attempted to access at this time

#### Defined in

[src/handler/structures/errors.ts:33](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L33)

___

### PluginFailure

• **PluginFailure** = ``"A plugin failed to call controller.next()"``

One plugin called `controller.stop()` (end command execution / loading)

#### Defined in

[src/handler/structures/errors.ts:25](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L25)

___

### UndefinedModule

• **UndefinedModule** = ``"A module could not be detected"``

Attempted to lookup module in command module store. Nothing was found!

#### Defined in

[src/handler/structures/errors.ts:13](https://github.com/sern-handler/handler/blob/b641472/src/handler/structures/errors.ts#L13)
