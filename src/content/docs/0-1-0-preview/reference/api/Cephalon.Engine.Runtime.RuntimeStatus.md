---
title: Enum RuntimeStatus
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimestatus
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Represents the current lifecycle phase of the runtime.

```csharp
public enum RuntimeStatus
```

## Fields

`Created = 0` 

The runtime has been created but not initialized.



`Failed = 7` 

The runtime captured a lifecycle failure.



`Initialized = 2` 

The runtime finished initialization but has not started.



`Initializing = 1` 

The runtime is initializing modules.



`Started = 4` 

The runtime is fully started.



`Starting = 3` 

The runtime is starting modules.



`Stopped = 6` 

The runtime is stopped.



`Stopping = 5` 

The runtime is stopping started modules.
