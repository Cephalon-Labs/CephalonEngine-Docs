---
title: Interface IDomainEvent
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-idomainevent
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Represents one immutable domain event stored in an append-only stream.

```csharp
public interface IDomainEvent
```

## Properties

### <a id="Cephalon_Abstractions_EventSourcing_IDomainEvent_OccurredAtUtc"></a> OccurredAtUtc

Gets the time at which the event occurred in UTC.

```csharp
DateTime OccurredAtUtc { get; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_Abstractions_EventSourcing_IDomainEvent_StreamId"></a> StreamId

Gets the stable stream identifier that owns the event.

```csharp
string StreamId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_EventSourcing_IDomainEvent_StreamVersion"></a> StreamVersion

Gets the optimistic stream version assigned to the event.

```csharp
long StreamVersion { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
