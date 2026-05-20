---
title: Class ElasticsearchDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-elasticsearch-registration-elasticsearchdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.Elasticsearch.Registration](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-registration/)  
Assembly: Cephalon.Data.Elasticsearch.dll  

Registers the Elasticsearch data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class ElasticsearchDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ElasticsearchDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-registration-elasticsearchdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_Elasticsearch_Registration_ElasticsearchDataEngineBuilderExtensions_AddElasticsearchData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_Action_Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions__"></a> AddElasticsearchData\(EngineBuilder, string, Action<ElasticsearchDataOptions\>?\)

Adds the Elasticsearch data pack with the supplied node URI.

```csharp
public static EngineBuilder AddElasticsearchData(this EngineBuilder builder, string uri, Action<ElasticsearchDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Elasticsearch node URI.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ElasticsearchDataOptions](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-configuration-elasticsearchdataoptions/)\>?

An optional callback that configures the host-owned Elasticsearch pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

### <a id="Cephalon_Data_Elasticsearch_Registration_ElasticsearchDataEngineBuilderExtensions_AddElasticsearchData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_Elasticsearch_Configuration_ElasticsearchDataOptions__"></a> AddElasticsearchData\(EngineBuilder, Action<ElasticsearchDataOptions\>\)

Adds the Elasticsearch data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddElasticsearchData(this EngineBuilder builder, Action<ElasticsearchDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ElasticsearchDataOptions](/0-1-0-preview/reference/api/cephalon-data-elasticsearch-configuration-elasticsearchdataoptions/)\>

The callback that configures the host-owned Elasticsearch pack options, including
<xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref> and
<xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.Elasticsearch.Configuration.ElasticsearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>http://localhost:9200</code>.
