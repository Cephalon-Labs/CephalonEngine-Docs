---
title: Class ClickHouseEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.ClickHouse](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse/)  
Assembly: Cephalon.EventSourcing.ClickHouse.dll  

Holds the DDL template for bootstrapping the ClickHouse event-store table.

```csharp
public static class ClickHouseEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClickHouseEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventSourcingConfiguration_CreateTableSql"></a> CreateTableSql

DDL template for creating the event streams table.
The <code>{0}</code> placeholder must be substituted with the fully qualified table name.

```csharp
public const string CreateTableSql = "\n        CREATE TABLE IF NOT EXISTS {0} (\n            stream_id String,\n            stream_version Int64,\n            event_type String,\n            payload String,\n            occurred_at_utc DateTime64(3, 'UTC'),\n            appended_at_utc DateTime64(3, 'UTC')\n        ) ENGINE = MergeTree()\n        ORDER BY (stream_id, stream_version)"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The <code>MergeTree</code> engine is used for event streams because domain events are immutable —
no deduplication or replacement is needed. The <code>ORDER BY (stream_id, stream_version)</code>
clause makes per-stream range scans efficient and stores events in version order within
each stream partition. Unlike <code>ReplacingMergeTree</code>, <code>MergeTree</code> does not merge
duplicate rows — each appended event row is preserved permanently.
