---
title: Class Neo4jEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jeventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Neo4j](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j/)  
Assembly: Cephalon.EventSourcing.Neo4j.dll  

Holds schema constants and the Cypher statement that bootstraps the event-store constraint in Neo4j.

```csharp
public static class Neo4jEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jeventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventSourcingConfiguration_ConstraintName"></a> ConstraintName

The name of the node key constraint that enforces uniqueness on <code>(streamId, streamVersion)</code> pairs.

```csharp
public const string ConstraintName = "cephalon_event_stream_version"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_Neo4j_Neo4jEventSourcingConfiguration_CreateConstraintCypher"></a> CreateConstraintCypher

The Cypher statement that creates the compound node key constraint on <code>(streamId, streamVersion)</code>.
<code>IS NODE KEY</code> enforces both uniqueness and existence, providing the primary optimistic concurrency guard.

```csharp
public const string CreateConstraintCypher = "CREATE CONSTRAINT cephalon_event_stream_version IF NOT EXISTS FOR (e:Event) REQUIRE (e.streamId, e.streamVersion) IS NODE KEY"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
