---
title: Class DomainEvent
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-domainevent
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Provides a minimal record base for immutable domain events.

```csharp
public abstract record DomainEvent : IDomainEvent, IEquatable<DomainEvent>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DomainEvent](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-domainevent/)

#### Implements

[IDomainEvent](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-idomainevent/), 
[IEquatable<DomainEvent\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_EventSourcing_DomainEvent__ctor_System_String_System_Int64_System_DateTime_"></a> DomainEvent\(string, long, DateTime\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.EventSourcing.DomainEvent" data-throw-if-not-resolved="false"></xref> record.

```csharp
protected DomainEvent(string streamId, long streamVersion, DateTime occurredAtUtc)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier that owns the event.

`streamVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The optimistic stream version assigned to the event.

`occurredAtUtc` [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

The time at which the event occurred in UTC.

## Properties

### <a id="Cephalon_Abstractions_EventSourcing_DomainEvent_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the event occurred in UTC.

```csharp
public DateTime OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_Abstractions_EventSourcing_DomainEvent_StreamId"></a> StreamId

Gets the stable stream identifier that owns the event.

```csharp
public string StreamId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_DomainEvent_StreamVersion"></a> StreamVersion

Gets the optimistic stream version assigned to the event.

```csharp
public long StreamVersion { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
