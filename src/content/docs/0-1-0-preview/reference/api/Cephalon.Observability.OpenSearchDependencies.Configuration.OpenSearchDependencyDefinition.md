---
title: Class OpenSearchDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.OpenSearchDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration/)  
Assembly: Cephalon.Observability.OpenSearchDependencies.dll  

Describes one OpenSearch dependency that should contribute to runtime health.

```csharp
public sealed class OpenSearchDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[OpenSearchDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencydefinition/)

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

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition__ctor"></a> OpenSearchDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OpenSearchDependencies.Configuration.OpenSearchDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OpenSearchDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition_BearerToken"></a> BearerToken

Gets or sets the optional bearer token used for OpenSearch bearer-token authentication.

```csharp
public string? BearerToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition_Endpoint"></a> Endpoint

Gets or sets the absolute OpenSearch base URL or cluster-health endpoint that should be probed.

```csharp
public string Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition_Index"></a> Index

Gets or sets the optional index name or comma-delimited index list that should be checked through the cluster-health API.

```csharp
public string? Index { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for OpenSearch basic authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for OpenSearch basic authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
