---
title: Enum HealthState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-health-healthstate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Health](/0-1-0-preview/reference/api/cephalon-abstractions-health/)  
Assembly: Cephalon.Abstractions.dll  

Describes the runtime health state of a dependency or probe.

```csharp
public enum HealthState
```

## Fields

`Degraded = 1` 

Indicates the dependency is degraded but still available.



`Healthy = 0` 

Indicates the dependency is healthy.



`Unhealthy = 2` 

Indicates the dependency is unhealthy.
