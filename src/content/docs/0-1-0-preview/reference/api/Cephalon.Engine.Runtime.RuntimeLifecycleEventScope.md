---
title: Enum RuntimeLifecycleEventScope
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimelifecycleeventscope
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Identifies which runtime surface produced one operator-facing lifecycle event.

```csharp
public enum RuntimeLifecycleEventScope
```

## Fields

`ExecutionGraph = 3` 

The event belongs to execution-graph visibility and active lifecycle transitions.



`HostedExecution = 4` 

The event belongs to hosted-execution visibility and host-managed activation conventions.



`Module = 1` 

The event belongs to one module lifecycle transition.



`Package = 2` 

The event belongs to package loading and package-origin visibility.



`Runtime = 0` 

The event belongs to the overall runtime lifecycle.
