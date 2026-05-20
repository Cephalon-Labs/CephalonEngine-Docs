---
title: Class OpenSearchDataEngineBuilderExtensions
slug: 0-1-0-preview/reference/api/cephalon-data-opensearch-registration-opensearchdataenginebuilderextensions
editUrl: false
---

Namespace: [Cephalon.Data.OpenSearch.Registration](/0-1-0-preview/reference/api/cephalon-data-opensearch-registration/)  
Assembly: Cephalon.Data.OpenSearch.dll  

Registers the OpenSearch data companion pack with an <xref href="Cephalon.Engine.Composition.EngineBuilder" data-throw-if-not-resolved="false"></xref>.

```csharp
public static class OpenSearchDataEngineBuilderExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OpenSearchDataEngineBuilderExtensions](/0-1-0-preview/reference/api/cephalon-data-opensearch-registration-opensearchdataenginebuilderextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Data_OpenSearch_Registration_OpenSearchDataEngineBuilderExtensions_AddOpenSearchData_Cephalon_Engine_Composition_EngineBuilder_System_String_System_Action_Cephalon_Data_OpenSearch_Configuration_OpenSearchDataOptions__"></a> AddOpenSearchData\(EngineBuilder, string, Action<OpenSearchDataOptions\>?\)

Adds the OpenSearch data pack with the supplied node URI.

```csharp
public static EngineBuilder AddOpenSearchData(this EngineBuilder builder, string uri, Action<OpenSearchDataOptions>? configure = null)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The OpenSearch node URI.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OpenSearchDataOptions](/0-1-0-preview/reference/api/cephalon-data-opensearch-configuration-opensearchdataoptions/)\>?

An optional callback that configures the host-owned OpenSearch pack options.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

### <a id="Cephalon_Data_OpenSearch_Registration_OpenSearchDataEngineBuilderExtensions_AddOpenSearchData_Cephalon_Engine_Composition_EngineBuilder_System_Action_Cephalon_Data_OpenSearch_Configuration_OpenSearchDataOptions__"></a> AddOpenSearchData\(EngineBuilder, Action<OpenSearchDataOptions\>\)

Adds the OpenSearch data pack using an options callback that can bind from configuration.

```csharp
public static EngineBuilder AddOpenSearchData(this EngineBuilder builder, Action<OpenSearchDataOptions> configure)
```

#### Parameters

`builder` [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The engine builder to extend.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[OpenSearchDataOptions](/0-1-0-preview/reference/api/cephalon-data-opensearch-configuration-opensearchdataoptions/)\>

The callback that configures the host-owned OpenSearch pack options, including
<xref href="Cephalon.Data.OpenSearch.Configuration.OpenSearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref> and
<xref href="Cephalon.Data.OpenSearch.Configuration.OpenSearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref>.

#### Returns

 [EngineBuilder](/0-1-0-preview/reference/api/cephalon-engine-composition-enginebuilder/)

The same engine builder for fluent composition.

#### Remarks

Use either <xref href="Cephalon.Data.OpenSearch.Configuration.OpenSearchDataOptions.UriName" data-throw-if-not-resolved="false"></xref> or
<xref href="Cephalon.Data.OpenSearch.Configuration.OpenSearchDataOptions.Uri" data-throw-if-not-resolved="false"></xref>. Leaving both unset falls back to
<code>http://localhost:9200</code>.
