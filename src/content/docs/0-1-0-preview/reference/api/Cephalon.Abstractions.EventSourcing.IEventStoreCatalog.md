---
title: Interface IEventStoreCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstorecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the event-stream surfaces visible to the current runtime.

```csharp
public interface IEventStoreCatalog
```

## Properties

### <a id="Cephalon_Abstractions_EventSourcing_IEventStoreCatalog_All"></a> All

Gets all event-stream descriptors visible to the current runtime.

```csharp
IReadOnlyList<EventStreamDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_EventSourcing_IEventStoreCatalog_FindById_System_String_"></a> FindById\(string\)

Finds one event stream by its stable identifier.

```csharp
EventStreamDescriptor? FindById(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The event-stream identifier to resolve.

#### Returns

 [EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)?

The matching event stream, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_EventSourcing_IEventStoreCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets all event streams backed by the requested provider identifier.

```csharp
IReadOnlyList<EventStreamDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)\>

The matching event streams, or an empty list when the provider contributes none.
