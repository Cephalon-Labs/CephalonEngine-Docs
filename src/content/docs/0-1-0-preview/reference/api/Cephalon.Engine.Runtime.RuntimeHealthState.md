---
title: Enum RuntimeHealthState
slug: 0-1-0-preview/reference/api/cephalon-engine-runtime-runtimehealthstate
editUrl: false
---

Namespace: [Cephalon.Engine.Runtime](/0-1-0-preview/reference/api/cephalon-engine-runtime/)  
Assembly: Cephalon.Engine.dll  

Represents the overall health state of the runtime.

```csharp
public enum RuntimeHealthState
```

## Fields

`Degraded = 1` 

The runtime is available, but one or more dependencies need attention.



`Healthy = 0` 

The runtime and its dependencies are healthy.



`Unhealthy = 2` 

The runtime is not healthy enough to serve traffic.
