---
title: Class ElasticsearchDataOptions
slug: 0-1-0-preview/reference/api/cephalon-data-elasticsearch-configuration-elasticsearchdataoptions
editUrl: false
---

Namespace: [Cephalon.Data.Elasticsearch.Configuration](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-configuration/)  
Assembly: Cephalon.Data.Elasticsearch.dll  

Configuration options for the Elasticsearch data provider (Engine:Data:Elasticsearch).

```csharp
public sealed class ElasticsearchDataOptions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ElasticsearchDataOptions](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-configuration-elasticsearchdataoptions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Fields

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_DefaultUri"></a> DefaultUri

Gets the default Elasticsearch node URI used when neither URI setting is supplied.

```csharp
public const string DefaultUri = "http://localhost:9200"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_ProviderId"></a> ProviderId

Gets the canonical provider identifier emitted by the pack.

```csharp
public const string ProviderId = "elasticsearch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_SectionPath"></a> SectionPath

Gets the configuration section path used by default for Elasticsearch data settings.

```csharp
public const string SectionPath = "Engine:Data:Elasticsearch"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_IndexPrefix"></a> IndexPrefix

Gets or sets an optional prefix applied to all Cephalon-managed index names (e.g. "app-").

```csharp
public string IndexPrefix { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_Password"></a> Password

Gets or sets an optional password for Basic authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_RegisterInbox"></a> RegisterInbox

Gets or sets a value indicating whether the pack should register the Elasticsearch-backed inbox implementation.

```csharp
public bool RegisterInbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_RegisterOutbox"></a> RegisterOutbox

Gets or sets a value indicating whether the pack should register the Elasticsearch-backed outbox implementation.

```csharp
public bool RegisterOutbox { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_Uri"></a> Uri

Gets or sets the inline Elasticsearch node URI.

```csharp
public string? Uri { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_UriName"></a> UriName

Gets or sets the root <code>Uris</code> entry name to resolve for Elasticsearch.

```csharp
public string? UriName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

#### Remarks

Use either <xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or <xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.

### <a id="Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions_Username"></a> Username

Gets or sets an optional username for Basic authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
