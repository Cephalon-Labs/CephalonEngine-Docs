---
title: Enum DatabaseMigrationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-databasemigrationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the current execution state of one logical database-migration target.

```csharp
public enum DatabaseMigrationStatus
```

## Fields

`Failed = 3` 

The migration target failed during execution.



`Planned = 0` 

The migration target is known to the runtime but has not started executing yet.



`Running = 1` 

The migration target is currently executing.



`Succeeded = 2` 

The migration target completed successfully.



`Unsupported = 4` 

The runtime cannot execute the configured migration target with the active provider-pack registrations.
