---
title: Interface IEventStoreContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstorecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more event-stream descriptors to the active runtime.

```csharp
public interface IEventStoreContributor
```

## Methods

### <a id="Cephalon_Abstractions_EventSourcing_IEventStoreContributor_Contribute"></a> Contribute\(\)

Returns the event-stream descriptors contributed by the current module or package.

```csharp
IReadOnlyList<EventStreamDescriptor> Contribute()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)\>

The contributed event-stream descriptors.
