---
title: Class CassandraEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Cassandra](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra/)  
Assembly: Cephalon.EventSourcing.Cassandra.dll  

Holds the CQL DDL template for bootstrapping the Cassandra event-store table.

```csharp
public static class CassandraEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventSourcingConfiguration_CreateTableCql"></a> CreateTableCql

CQL DDL template for creating the event streams table.
The <code>{0}</code> placeholder must be substituted with the fully qualified table name
(optionally including keyspace prefix).

```csharp
public const string CreateTableCql = "\n        CREATE TABLE IF NOT EXISTS {0} (\n            stream_id text,\n            stream_version bigint,\n            event_type text,\n            payload text,\n            occurred_at_utc timestamp,\n            appended_at_utc timestamp,\n            PRIMARY KEY (stream_id, stream_version)\n        ) WITH CLUSTERING ORDER BY (stream_version ASC)"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The composite primary key <code>(stream_id, stream_version)</code> with clustering order
<code>ASC</code> on <code>stream_version</code> makes per-stream range scans efficient and
enforces uniqueness at the partition/clustering-key level. LWT <code>INSERT IF NOT EXISTS</code>
uses this same uniqueness constraint to detect concurrent-write conflicts.
