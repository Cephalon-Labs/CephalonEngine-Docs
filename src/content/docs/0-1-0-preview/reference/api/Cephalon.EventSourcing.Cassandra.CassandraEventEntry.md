---
title: Class CassandraEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Cassandra](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra/)  
Assembly: Cephalon.EventSourcing.Cassandra.dll  

Represents one persisted domain event row stored by the Cassandra event-store provider.

```csharp
public sealed class CassandraEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_AppendedAtUtc"></a> AppendedAtUtc

Gets or sets the UTC time at which the event was appended to the store.

```csharp
public DateTime AppendedAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_EventType"></a> EventType

Gets or sets the assembly-qualified CLR event type name.

```csharp
public string EventType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the UTC time at which the domain event occurred.

```csharp
public DateTime OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_Payload"></a> Payload

Gets or sets the <code>System.Text.Json</code>-serialized event payload.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_StreamId"></a> StreamId

Gets or sets the stable logical stream identifier.

```csharp
public string StreamId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventEntry_StreamVersion"></a> StreamVersion

Gets or sets the optimistic stream version for the event (1-based, monotonically increasing per stream).

```csharp
public long StreamVersion { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
