---
title: Class SqlServerCdcCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlservercdccaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.SqlServer.Configuration](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration/)  
Assembly: Cephalon.Data.SqlServer.dll  

Declares one provider-native SQL Server CDC capture for the active runtime.

```csharp
public sealed class SqlServerCdcCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SqlServerCdcCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-sqlserver-configuration-sqlservercdccaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_CaptureInstance"></a> CaptureInstance

Gets or sets the SQL Server CDC capture-instance name.

```csharp
public string CaptureInstance { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_ChannelId"></a> ChannelId

Gets or sets the logical outbox channel that receives emitted publications.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the CDC descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_InitialPosition"></a> InitialPosition

Gets or sets the initial position used when no durable checkpoint exists yet.

```csharp
public string InitialPosition { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

Supported values are <code>latest-available</code> and <code>earliest-available</code>.

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_MaxChangesPerPoll"></a> MaxChangesPerPoll

Gets or sets the maximum number of captured changes to stage during one polling iteration.

```csharp
public int MaxChangesPerPoll { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_MessageType"></a> MessageType

Gets or sets the logical message type emitted for each captured change event.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that receives emitted publications.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_PollingIntervalSeconds"></a> PollingIntervalSeconds

Gets or sets the polling interval, in seconds, for one provider-native SQL Server CDC iteration.

```csharp
public int PollingIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the watched table path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_TableName"></a> TableName

Gets or sets the table name of the tracked table.

```csharp
public string TableName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_TableSchema"></a> TableSchema

Gets or sets the schema name of the tracked table.

```csharp
public string TableSchema { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_SqlServer_Configuration_SqlServerCdcCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
