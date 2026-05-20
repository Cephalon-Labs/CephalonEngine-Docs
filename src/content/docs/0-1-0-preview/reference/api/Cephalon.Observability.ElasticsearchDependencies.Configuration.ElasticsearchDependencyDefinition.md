---
title: Class ElasticsearchDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.ElasticsearchDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration/)  
Assembly: Cephalon.Observability.ElasticsearchDependencies.dll  

Describes one Elasticsearch dependency that should contribute to runtime health.

```csharp
public sealed class ElasticsearchDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[ElasticsearchDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencydefinition/)

#### Inherited Members

[DependencyDefinitionBase.Id](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Id), 
[DependencyDefinitionBase.DisplayName](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_DisplayName), 
[DependencyDefinitionBase.Required](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Required), 
[DependencyDefinitionBase.TimeoutSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_TimeoutSeconds), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition__ctor"></a> ElasticsearchDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ElasticsearchDependencies.Configuration.ElasticsearchDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ElasticsearchDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition_ApiKey"></a> ApiKey

Gets or sets the optional API key used for Elasticsearch API-key authentication.

```csharp
public string? ApiKey { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition_BearerToken"></a> BearerToken

Gets or sets the optional bearer token used for Elasticsearch bearer-token authentication.

```csharp
public string? BearerToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition_Endpoint"></a> Endpoint

Gets or sets the absolute Elasticsearch base URL or cluster-health endpoint that should be probed.

```csharp
public string Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for Elasticsearch basic authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ElasticsearchDependencies_Configuration_ElasticsearchDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for Elasticsearch basic authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
