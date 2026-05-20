---
title: Class MySqlBinlogCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqlbinlogcaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.MySql.Configuration](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration/)  
Assembly: Cephalon.Data.MySql.dll  

Declares one provider-native MySQL binlog capture for the active runtime.

```csharp
public sealed class MySqlBinlogCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MySqlBinlogCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-mysql-configuration-mysqlbinlogcaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_ChannelId"></a> ChannelId

Gets or sets the logical outbox channel that receives emitted publications.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the CDC descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_ExpectedSourceServerUuid"></a> ExpectedSourceServerUuid

Gets or sets the expected MySQL source-server UUID when the capture should fail fast if the runtime connects to a different upstream.

```csharp
public string ExpectedSourceServerUuid { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Leave this blank when the capture should observe source-server identity for diagnostics only. When set, the provider-native runner
validates the live server UUID before it starts or resumes binlog consumption.

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_InitialPosition"></a> InitialPosition

Gets or sets the initial position used when no durable checkpoint exists yet.

```csharp
public string InitialPosition { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Supported values are <code>latest-available</code> and <code>earliest-available</code>.

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_MaxAwaitTimeSeconds"></a> MaxAwaitTimeSeconds

Gets or sets the maximum number of seconds to await row events during one provider-native iteration.

```csharp
public int MaxAwaitTimeSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_MaxChangesPerRead"></a> MaxChangesPerRead

Gets or sets the maximum number of captured row changes to stage during one provider-native iteration.

```csharp
public int MaxChangesPerRead { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_MessageType"></a> MessageType

Gets or sets the logical message type emitted for each captured change event.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that receives emitted publications.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, between hosted-service iterations.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_ServerId"></a> ServerId

Gets or sets the replication-client server identifier used for this capture connection.

```csharp
public int ServerId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

MySQL expects a stable positive server id per replication client. When multiple captures run concurrently,
configure a distinct value for each capture.

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the watched table path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_TableName"></a> TableName

Gets or sets the table name of the tracked table.

```csharp
public string TableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_TableSchema"></a> TableSchema

Gets or sets the MySQL schema name of the tracked table.

```csharp
public string TableSchema { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

When this value is blank, the pack falls back to <xref href="Cephalon.Data.MySql.Configuration.MySqlDataOptions.DatabaseName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_MySql_Configuration_MySqlBinlogCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
