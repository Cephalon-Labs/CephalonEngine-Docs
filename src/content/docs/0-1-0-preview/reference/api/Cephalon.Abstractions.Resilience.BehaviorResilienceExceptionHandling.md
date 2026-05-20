---
title: Enum BehaviorResilienceExceptionHandling
slug: 0-1-0-preview/reference/api/cephalon-abstractions-resilience-behaviorresilienceexceptionhandling
editUrl: false
---

Namespace: [Cephalon.Abstractions.Resilience](/0-1-0-preview/reference/api/cephalon-abstractions-resilience/)  
Assembly: Cephalon.Abstractions.dll  

Describes how a behavior-execution exception should participate in resilience handling.

```csharp
public enum BehaviorResilienceExceptionHandling
```

## Fields

`Ignore = 0` 

Ignore the exception for resilience accounting.



`RetryAndTrip = 2` 

Count the exception for circuit-breaker accounting and treat it as eligible for future retry handling.



`TripOnly = 1` 

Count the exception for circuit-breaker style failure accounting, but do not automatically retry it.
