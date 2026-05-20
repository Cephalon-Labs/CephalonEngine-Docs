---
title: Class ElasticsearchDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.ElasticsearchDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration/)  
Assembly: Cephalon.Observability.ElasticsearchDependencies.dll  

Configures Elasticsearch dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class ElasticsearchDependencyHealthOptions : DependencyHealthOptionsBase<ElasticsearchDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<ElasticsearchDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[ElasticsearchDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<ElasticsearchDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<ElasticsearchDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyHealthOptions__ctor"></a> ElasticsearchDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ElasticsearchDependencies.Configuration.ElasticsearchDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElasticsearchDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Elasticsearch dependency-health options from configuration.

```csharp
public static ElasticsearchDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [ElasticsearchDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencyhealthoptions/)

The bound dependency-health options.
