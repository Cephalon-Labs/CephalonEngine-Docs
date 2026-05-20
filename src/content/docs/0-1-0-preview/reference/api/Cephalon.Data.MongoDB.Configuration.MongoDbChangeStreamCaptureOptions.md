---
title: Class MongoDbChangeStreamCaptureOptions
slug: 0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbchangestreamcaptureoptions
editUrl: false
---

Namespace: [Cephalon.Data.MongoDB.Configuration](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration/)  
Assembly: Cephalon.Data.MongoDB.dll  

Declares one provider-native MongoDB change-stream capture for the active runtime.

```csharp
public sealed class MongoDbChangeStreamCaptureOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbChangeStreamCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbchangestreamcaptureoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_BatchSize"></a> BatchSize

Gets or sets the optional batch size for each provider-native change-stream batch.

```csharp
public int? BatchSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_ChannelId"></a> ChannelId

Gets or sets the logical outbox channel that receives emitted publications.

```csharp
public string ChannelId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_CollectionName"></a> CollectionName

Gets or sets the collection name that the provider-native change stream should watch.

```csharp
public string CollectionName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_DatabaseName"></a> DatabaseName

Gets or sets the database name to watch. When omitted, the pack-level database name is used.

```csharp
public string? DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_Description"></a> Description

Gets or sets the human-readable CDC capture description.

```csharp
public string Description { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_DisplayName"></a> DisplayName

Gets or sets the operator-facing CDC capture name.

```csharp
public string DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_EventFormat"></a> EventFormat

Gets or sets the operator-facing event format projected on the CDC descriptor.

```csharp
public string EventFormat { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_FullDocumentMode"></a> FullDocumentMode

Gets or sets the MongoDB full-document mode, such as <code>update-lookup</code> or <code>when-available</code>.

```csharp
public string FullDocumentMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_Id"></a> Id

Gets or sets the stable CDC capture identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_MaxAwaitTimeSeconds"></a> MaxAwaitTimeSeconds

Gets or sets the maximum await time, in seconds, for one provider-native change-stream batch.

```csharp
public int MaxAwaitTimeSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_MessageType"></a> MessageType

Gets or sets the logical message type emitted for each captured change event.

```csharp
public string MessageType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_Metadata"></a> Metadata

Gets arbitrary operator-facing metadata that should flow through the capture descriptor.

```csharp
public IDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_OutboxId"></a> OutboxId

Gets or sets the outbox identifier that receives emitted publications.

```csharp
public string OutboxId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_ResourceIds"></a> ResourceIds

Gets the resource identifiers observed by the capture.

```csharp
public IList<string> ResourceIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_SourceId"></a> SourceId

Gets or sets the logical source identifier when it should differ from the watched collection path.

```csharp
public string SourceId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_SourceModuleId"></a> SourceModuleId

Gets or sets the module identifier that owns the capture surface.

```csharp
public string SourceModuleId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbChangeStreamCaptureOptions_Tags"></a> Tags

Gets the descriptive tags associated with the capture.

```csharp
public IList<string> Tags { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
