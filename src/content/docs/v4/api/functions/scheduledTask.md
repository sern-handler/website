---
editUrl: false
next: false
prev: false
title: "scheduledTask"
---

> **scheduledTask**(`ism`): [`ScheduledTask`](/v4/api/interfaces/scheduledtask/)

Creates a scheduled task that can be executed at specified intervals using cron patterns

## Parameters

• **ism**: [`ScheduledTask`](/v4/api/interfaces/scheduledtask/)

The scheduled task configuration object

## Returns

[`ScheduledTask`](/v4/api/interfaces/scheduledtask/)

The configured scheduled task

## Example

```ts
// Create a task that runs every minute
export default scheduledTask({
  trigger: "* * * * *",
  execute: (context) => {
    console.log("Task executed!");
  }
});
```

## Remarks

- Tasks must be placed in the 'tasks' directory specified in your config
- The file name serves as a unique identifier for the task
- Tasks can be cancelled using deps['@sern/scheduler'].kill(uuid)

## See

[https://crontab.guru/](https://crontab.guru/) for testing and creating cron patterns

## Source

[src/core/modules.ts:132](https://github.com/sern-handler/handler/blob/70c6236802295980123056f2e84579aa6f6e5dbd/src/core/modules.ts#L132)
