---
title: Class PostgresLogicalReplicationCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgreslogicalreplicationcaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.Postgres.Configuration](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration/)  
Assembly: Cephalon.Data.Postgres.dll  

Declares one provider-native PostgreSQL logical-replication capture for the active runtime.

```csharp
public sealed class PostgresLogicalReplicationCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PostgresLogicalReplicationCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-postgres-configuration-postgreslogicalreplicationcaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_ChannelId"></a> ChannelId

Gets or sets the logical outbox channel that receives emitted publications.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_CreateSlotIfMissing"></a> CreateSlotIfMissing

Gets or sets a value indicating whether the pack should create the logical replication slot when it does not exist yet.

```csharp
public bool CreateSlotIfMissing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the CDC descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_InitialPosition"></a> InitialPosition

Gets or sets the initial position used when the logical replication slot must be created.

```csharp
public string InitialPosition { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Supported values are <code>slot-consistent-point</code> and <code>latest-available</code>.

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_MaxAwaitTimeSeconds"></a> MaxAwaitTimeSeconds

Gets or sets the maximum number of seconds to await committed WAL messages during one provider-native iteration.

```csharp
public int MaxAwaitTimeSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_MaxChangesPerRead"></a> MaxChangesPerRead

Gets or sets the maximum number of committed logical-replication changes to stage during one iteration.

```csharp
public int MaxChangesPerRead { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_MessageType"></a> MessageType

Gets or sets the logical message type emitted for each captured change event.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that receives emitted publications.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, between hosted-service iterations.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_PublicationName"></a> PublicationName

Gets or sets the PostgreSQL publication that should emit the tracked table changes.

```csharp
public string PublicationName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_RecreateSlotIfInvalidated"></a> RecreateSlotIfInvalidated

Gets or sets a value indicating whether the pack should drop and recreate the logical replication slot when it exists but is no longer usable.

```csharp
public bool RecreateSlotIfInvalidated { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

This only applies when the slot is inactive. Active slots still fail fast because PostgreSQL allows only one logical decoding consumer at a time.

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_SlotName"></a> SlotName

Gets or sets the PostgreSQL logical replication slot used for durable progress.

```csharp
public string SlotName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the watched table path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_TableName"></a> TableName

Gets or sets the table name of the tracked table.

```csharp
public string TableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_TableSchema"></a> TableSchema

Gets or sets the schema name of the tracked table.

```csharp
public string TableSchema { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Postgres_Configuration_PostgresLogicalReplicationCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
