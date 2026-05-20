---
title: Class NatsEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natsevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Nats](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats/)  
Assembly: Cephalon.EventSourcing.Nats.dll  

Plain-object representation of a single event stored in a NATS JetStream KV entry.

```csharp
public sealed class NatsEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natsevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_AppendedAtUtc"></a> AppendedAtUtc

UTC timestamp when the event was appended to the store.

```csharp
public DateTime AppendedAtUtc { get; init; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_EventType"></a> EventType

The assembly-qualified CLR type name of the serialized event.

```csharp
public string EventType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_OccurredAtUtc"></a> OccurredAtUtc

UTC timestamp when the domain event occurred.

```csharp
public DateTime OccurredAtUtc { get; init; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_Payload"></a> Payload

The JSON-serialized event payload.

```csharp
public string Payload { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_StreamId"></a> StreamId

The stream identifier this event belongs to.

```csharp
public string StreamId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Nats_NatsEventEntry_StreamVersion"></a> StreamVersion

The monotonically increasing version of this event within its stream.

```csharp
public long StreamVersion { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
