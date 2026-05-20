---
title: Interface IEventDispatchRuntimeContributor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimecontributor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Contributes one or more operator-facing durable dispatch runtimes to the active eventing technology.

```csharp
public interface IEventDispatchRuntimeContributor
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventDispatchRuntimeContributor_RegisterDispatchRuntimes_Cephalon_Eventing_Services_IEventDispatchRuntimeRegistry_"></a> RegisterDispatchRuntimes\(IEventDispatchRuntimeRegistry\)

Registers one or more dispatch-runtime descriptors owned by the contributor.

```csharp
void RegisterDispatchRuntimes(IEventDispatchRuntimeRegistry dispatchRuntimes)
```

#### Parameters

`dispatchRuntimes` [IEventDispatchRuntimeRegistry](/0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimeregistry/)

The dispatch-runtime registry receiving contributed descriptors.
