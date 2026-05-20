---
title: Interface IEventDispatchRuntimeRegistry
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimeregistry
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Receives operator-facing durable dispatch-runtime descriptors contributed by active eventing packs.

```csharp
public interface IEventDispatchRuntimeRegistry
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventDispatchRuntimeRegistry_Add_Cephalon_Abstractions_Data_EventDispatchRuntimeDescriptor_"></a> Add\(EventDispatchRuntimeDescriptor\)

Adds one dispatch runtime to the current eventing technology composition.

```csharp
void Add(EventDispatchRuntimeDescriptor dispatchRuntime)
```

#### Parameters

`dispatchRuntime` EventDispatchRuntimeDescriptor

The dispatch runtime to register.
