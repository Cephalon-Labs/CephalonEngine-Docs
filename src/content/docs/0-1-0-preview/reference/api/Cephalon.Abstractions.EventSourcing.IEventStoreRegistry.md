---
title: Interface IEventStoreRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstoreregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Receives event-stream descriptors contributed by active modules or packages.

```csharp
public interface IEventStoreRegistry
```

## Methods

### <a id="Cephalon_Abstractions_EventSourcing_IEventStoreRegistry_Register_Cephalon_Abstractions_EventSourcing_EventStreamDescriptor_"></a> Register\(EventStreamDescriptor\)

Registers one event stream with the current runtime composition.

```csharp
void Register(EventStreamDescriptor descriptor)
```

#### Parameters

`descriptor` [EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)

The event-stream descriptor to register.
