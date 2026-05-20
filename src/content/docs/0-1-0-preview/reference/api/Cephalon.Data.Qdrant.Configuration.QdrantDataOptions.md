---
title: Class QdrantDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-qdrant-configuration-qdrantdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Qdrant.Configuration](/0-1-0-preview/reference/api/cephalon-data-qdrant-configuration/)  
Assembly: Cephalon.Data.Qdrant.dll  

Options controlling how <code>Cephalon.Data.Qdrant</code> connects to a Qdrant server and registers data services.

```csharp
public sealed class QdrantDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QdrantDataOptions](/0-1-0-preview/reference/api/cephalon-data-qdrant-configuration-qdrantdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_ProviderId"></a> ProviderId

The provider identifier used in capability and descriptor metadata.

```csharp
public const string ProviderId = "qdrant"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_ApiKey"></a> ApiKey

Optional Qdrant API key for authenticated clusters. Defaults to <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.

```csharp
public string? ApiKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_CollectionPrefix"></a> CollectionPrefix

Optional prefix applied to all managed collection names.

```csharp
public string CollectionPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_Host"></a> Host

The Qdrant server hostname. Defaults to <code>localhost</code>.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_Port"></a> Port

The Qdrant gRPC port. Defaults to <code>6334</code>.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_RegisterInbox"></a> RegisterInbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IInbox" data-throw-if-not-resolved="false"></xref> backed by a Qdrant vector collection.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Qdrant_Configuration_QdrantDataOptions_RegisterOutbox"></a> RegisterOutbox

When <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a>, registers <xref href="Cephalon.Abstractions.Data.IOutbox" data-throw-if-not-resolved="false"></xref> backed by a Qdrant vector collection.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)
