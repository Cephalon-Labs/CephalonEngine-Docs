---
title: Class OracleLogMinerCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oraclelogminercaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.Oracle.Configuration](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration/)  
Assembly: Cephalon.Data.Oracle.dll  

Declares one provider-native Oracle LogMiner capture for the active runtime.

```csharp
public sealed class OracleLogMinerCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OracleLogMinerCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-oracle-configuration-oraclelogminercaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_ChannelId"></a> ChannelId

Gets or sets the logical outbox channel that receives emitted publications.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the CDC descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_ExpectedDatabaseId"></a> ExpectedDatabaseId

Gets or sets the expected Oracle database identifier when the capture should fail fast if the runtime connects to a different upstream.

```csharp
public decimal? ExpectedDatabaseId { get; set; }
```

#### Property Value

 [decimal](https://learn.microsoft.com/dotnet/api/system.decimal)?

#### Remarks

Leave this unset when the capture should observe Oracle database identity for diagnostics only. When set, the provider-native runner
validates the live <code>DBID</code> before it starts or resumes LogMiner execution.

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_ExpectedDatabaseUniqueName"></a> ExpectedDatabaseUniqueName

Gets or sets the expected Oracle database unique name when the capture should fail fast if the runtime connects to a different upstream.

```csharp
public string ExpectedDatabaseUniqueName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Leave this blank when the capture should observe Oracle database identity for diagnostics only. When set, the provider-native runner
validates the live <code>DB_UNIQUE_NAME</code> before it starts or resumes LogMiner execution.

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_InitialPosition"></a> InitialPosition

Gets or sets the initial position used when no durable checkpoint exists yet.

```csharp
public string InitialPosition { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Supported values are <code>latest-available</code> and <code>earliest-available</code>.

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_MaxAwaitTimeSeconds"></a> MaxAwaitTimeSeconds

Gets or sets the maximum number of seconds to await committed redo during one provider-native iteration.

```csharp
public int MaxAwaitTimeSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_MaxChangesPerRead"></a> MaxChangesPerRead

Gets or sets the maximum number of captured row changes to stage during one provider-native iteration.

```csharp
public int MaxChangesPerRead { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_MessageType"></a> MessageType

Gets or sets the logical message type emitted for each captured change event.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that receives emitted publications.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, between hosted-service iterations.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_ResumeFromEarliestAvailableScnIfCheckpointUnavailable"></a> ResumeFromEarliestAvailableScnIfCheckpointUnavailable

Gets or sets a value indicating whether the provider-native runner should reseed from the earliest retained SCN when a durable checkpoint is older than the retained archive-log window.

```csharp
public bool ResumeFromEarliestAvailableScnIfCheckpointUnavailable { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

The default is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> so Oracle LogMiner fails fast instead of silently skipping the gap between the durable checkpoint and the earliest retained archive-log SCN.

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the watched table path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_TableName"></a> TableName

Gets or sets the table name of the tracked table.

```csharp
public string TableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_TableSchema"></a> TableSchema

Gets or sets the Oracle schema name of the tracked table.

```csharp
public string TableSchema { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Oracle_Configuration_OracleLogMinerCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
