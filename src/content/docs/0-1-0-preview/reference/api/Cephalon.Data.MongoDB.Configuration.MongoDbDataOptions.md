---
title: Class MongoDbDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.MongoDB.Configuration](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration/)  
Assembly: Cephalon.Data.MongoDB.dll  

Configuration options for the MongoDB data provider (Engine:Data:MongoDB).

```csharp
public sealed class MongoDbDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbDataOptions](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_DefaultConnectionString"></a> DefaultConnectionString

Gets the default MongoDB connection string used when neither connection setting is supplied.

```csharp
public const string DefaultConnectionString = "mongodb://localhost:27017"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "mongodb"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for MongoDB data settings.

```csharp
public const string SectionPath = "Engine:Data:MongoDB"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_ChangeStreamCaptures"></a> ChangeStreamCaptures

Gets the provider-native MongoDB change-stream captures that should be contributed to the active CDC runtime.

```csharp
public IList<MongoDbChangeStreamCaptureOptions> ChangeStreamCaptures { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[MongoDbChangeStreamCaptureOptions](/0-1-0-preview/reference/api/cephalon-data-mongodb-configuration-mongodbchangestreamcaptureoptions/)\>

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_CollectionPrefix"></a> CollectionPrefix

Gets or sets an optional prefix for all Cephalon-managed collections (e.g. "app_").

```csharp
public string CollectionPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_ConnectionString"></a> ConnectionString

Gets or sets the inline MongoDB connection string.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_ConnectionStringName"></a> ConnectionStringName

Gets or sets the root <code>ConnectionStrings</code> entry name to resolve for MongoDB.

```csharp
public string? ConnectionStringName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionStringName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.MongoDB.Configuration.MongoDbDataOptions.ConnectionString" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_DatabaseName"></a> DatabaseName

Gets or sets the target database name.

```csharp
public string DatabaseName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_RegisterInbox"></a> RegisterInbox

Gets or sets a value indicating whether the pack should register the MongoDB-backed inbox implementation.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_MongoDB_Configuration_MongoDbDataOptions_RegisterOutbox"></a> RegisterOutbox

Gets or sets a value indicating whether the pack should register the MongoDB-backed outbox implementation.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
