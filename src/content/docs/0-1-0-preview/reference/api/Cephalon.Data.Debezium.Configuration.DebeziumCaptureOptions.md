---
title: Class DebeziumCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumcaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.Debezium.Configuration](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration/)  
Assembly: Cephalon.Data.Debezium.dll  

Declares one Debezium-managed CDC capture that should publish truth through the shared Cephalon CDC runtime surfaces.

```csharp
public sealed class DebeziumCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DebeziumCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-debezium-configuration-debeziumcaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the shared descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_Mode"></a> Mode

Gets or sets the operator-facing capture mode projected on the shared descriptor.

```csharp
public string Mode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that the external managed connector logically feeds.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture, such as tables, topics, or collections.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_SnapshotMode"></a> SnapshotMode

Gets or sets the Debezium snapshot mode when the pack should publish it as operator-facing metadata.

```csharp
public string SnapshotMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the derived connector or topic path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Debezium_Configuration_DebeziumCaptureOptions_TopicName"></a> TopicName

Gets or sets the external topic name that carries the Debezium envelope for this capture.

```csharp
public string TopicName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
