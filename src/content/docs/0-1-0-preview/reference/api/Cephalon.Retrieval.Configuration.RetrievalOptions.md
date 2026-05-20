---
title: Class RetrievalOptions
slug: 0-1-0-preview/reference/api/cephalon-retrieval-configuration-retrievaloptions
editUrl: false
---

Namespace: [Cephalon.Retrieval.Configuration](/0-1-0-preview/reference/api/cephalon-retrieval-configuration/)  
Assembly: Cephalon.Retrieval.dll  

Configures the built-in retrieval runtime pack.

```csharp
public sealed class RetrievalOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RetrievalOptions](/0-1-0-preview/reference/api/cephalon-retrieval-configuration-retrievaloptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

These options seed the host-owned part of the retrieval runtime. Installed modules can still
contribute additional knowledge collections through <xref href="Cephalon.Retrieval.Services.IKnowledgeCollectionContributor" data-throw-if-not-resolved="false"></xref>.

## Constructors

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions__ctor"></a> RetrievalOptions\(\)

Creates retrieval options with the default host-owned features enabled.

```csharp
public RetrievalOptions()
```

## Properties

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_BackgroundReindexCollectionIds"></a> BackgroundReindexCollectionIds

Gets the optional collection ids included in background reindexing. When empty, every registered collection is included.

```csharp
public IList<string> BackgroundReindexCollectionIds { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_BackgroundReindexInitialDelaySeconds"></a> BackgroundReindexInitialDelaySeconds

Gets or sets the startup delay, in seconds, before the first background reindex run.

```csharp
public int BackgroundReindexInitialDelaySeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_BackgroundReindexIntervalSeconds"></a> BackgroundReindexIntervalSeconds

Gets or sets the interval, in seconds, between background reindex runs. Values less than one disable repeated runs after the optional startup run.

```csharp
public int BackgroundReindexIntervalSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_Collections"></a> Collections

Gets the host-defined knowledge collections that should be available to the retrieval runtime.

```csharp
public IList<KnowledgeCollectionDescriptor> Collections { get; }
```

#### Property Value

 [IList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist\-1)<[KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)\>

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_DefaultQueryLimit"></a> DefaultQueryLimit

Gets or sets the default maximum number of matches returned when a query request does not choose one explicitly.

```csharp
public int DefaultQueryLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_EnableBackgroundReindexing"></a> EnableBackgroundReindexing

Gets or sets a value indicating whether Cephalon should run the opt-in background reindex scheduler.

```csharp
public bool EnableBackgroundReindexing { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_EnableIngestion"></a> EnableIngestion

Gets or sets a value indicating whether ingestion features are enabled.

```csharp
public bool EnableIngestion { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_EnableQuerying"></a> EnableQuerying

Gets or sets a value indicating whether query features are enabled.

```csharp
public bool EnableQuerying { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_FreshnessStaleAfterSeconds"></a> FreshnessStaleAfterSeconds

Gets or sets the number of seconds after which the latest successful index is considered stale for operator reporting.

```csharp
public int FreshnessStaleAfterSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_MaximumQueryLimit"></a> MaximumQueryLimit

Gets or sets the upper bound applied to query result limits.

```csharp
public int MaximumQueryLimit { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Retrieval_Configuration_RetrievalOptions_RunBackgroundReindexOnStartup"></a> RunBackgroundReindexOnStartup

Gets or sets a value indicating whether the scheduler should run once when the host starts.

```csharp
public bool RunBackgroundReindexOnStartup { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
