---
title: Class Neo4jEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Neo4j](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j/)  
Assembly: Cephalon.EventSourcing.Neo4j.dll  

Represents the fields stored on each Neo4j <code>:Event</code> node by the event-store provider.

```csharp
public sealed class Neo4jEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_AppendedAtUtc"></a> AppendedAtUtc

Gets or sets the ISO 8601 UTC timestamp at which the event was appended to the store.

```csharp
public string AppendedAtUtc { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_EventType"></a> EventType

Gets or sets the assembly-qualified CLR event type name.

```csharp
public string EventType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the ISO 8601 UTC timestamp at which the domain event occurred.

```csharp
public string OccurredAtUtc { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_Payload"></a> Payload

Gets or sets the <code>System.Text.Json</code>-serialized event payload.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_StreamId"></a> StreamId

Gets or sets the stable logical stream identifier.

```csharp
public string StreamId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventEntry_StreamVersion"></a> StreamVersion

Gets or sets the optimistic stream version for the event.

```csharp
public long StreamVersion { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
