---
title: Class QdrantEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdrantevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Qdrant](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant/)  
Assembly: Cephalon.EventSourcing.Qdrant.dll  

Plain-object representation of a single event row stored in a Qdrant vector collection.

```csharp
public sealed class QdrantEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QdrantEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdrantevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_AppendedAtUtc"></a> AppendedAtUtc

UTC timestamp when the event was appended to the store.

```csharp
public DateTime AppendedAtUtc { get; init; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_CorrelationId"></a> CorrelationId

Optional correlation identifier for causality tracking.

```csharp
public string? CorrelationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_EventType"></a> EventType

The assembly-qualified CLR type name of the serialized event.

```csharp
public string EventType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_OccurredAtUtc"></a> OccurredAtUtc

UTC timestamp when the domain event occurred.

```csharp
public DateTime OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_Payload"></a> Payload

The JSON-serialized event payload.

```csharp
public string Payload { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_StreamId"></a> StreamId

The stream identifier this event belongs to.

```csharp
public string StreamId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_StreamVersion"></a> StreamVersion

The monotonically increasing version of this event within its stream.

```csharp
public long StreamVersion { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventEntry_TenantId"></a> TenantId

Optional tenant identifier for multi-tenancy scenarios.

```csharp
public string? TenantId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
