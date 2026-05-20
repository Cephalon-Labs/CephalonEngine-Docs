---
title: Class EventStreamCatalog
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-services-eventstreamcatalog
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Services](/0-1-0-preview/reference/api/cephalon-eventsourcing-services/)  
Assembly: Cephalon.EventSourcing.dll  

Exposes the merged set of event-stream descriptors contributed to the active runtime.

```csharp
public sealed class EventStreamCatalog : IEventStoreCatalog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventStreamCatalog](/0-1-0-preview/reference/api/cephalon-eventsourcing-services-eventstreamcatalog/)

#### Implements

IEventStoreCatalog

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_Services_EventStreamCatalog__ctor_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_EventSourcing_IEventStoreContributor__"></a> EventStreamCatalog\(IEnumerable<IEventStoreContributor\>\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Services.EventStreamCatalog" data-throw-if-not-resolved="false"></xref> class.

```csharp
public EventStreamCatalog(IEnumerable<IEventStoreContributor> contributors)
```

#### Parameters

`contributors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<IEventStoreContributor\>

The contributors that project event-stream descriptors.

## Properties

### <a id="Cephalon_EventSourcing_Services_EventStreamCatalog_All"></a> All

Gets all event-stream descriptors contributed to the current runtime.

```csharp
public IReadOnlyList<EventStreamDescriptor> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventStreamDescriptor\>

## Methods

### <a id="Cephalon_EventSourcing_Services_EventStreamCatalog_FindById_System_String_"></a> FindById\(string\)

Finds one event-stream descriptor by its stable identifier.

```csharp
public EventStreamDescriptor? FindById(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The event-stream identifier to resolve.

#### Returns

 EventStreamDescriptor?

The matching descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when none match.

### <a id="Cephalon_EventSourcing_Services_EventStreamCatalog_GetByProvider_System_String_"></a> GetByProvider\(string\)

Gets the event-stream descriptors backed by the requested provider identifier.

```csharp
public IReadOnlyList<EventStreamDescriptor> GetByProvider(string provider)
```

#### Parameters

`provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The provider identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<EventStreamDescriptor\>

The matching descriptors, or an empty list when the provider contributes none.
