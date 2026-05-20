---
title: Class HttpDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.HttpDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration/)  
Assembly: Cephalon.Observability.HttpDependencies.dll  

Describes one external HTTP dependency that should contribute to runtime health.

```csharp
public sealed class HttpDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[HttpDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencydefinition/)

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

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyDefinition__ctor"></a> HttpDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.HttpDependencies.Configuration.HttpDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public HttpDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyDefinition_Endpoint"></a> Endpoint

Gets or sets the absolute endpoint that should be probed for this dependency.

```csharp
public string Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyDefinition_ExpectedStatusCodes"></a> ExpectedStatusCodes

Gets or sets the explicit HTTP status codes that should be treated as healthy.

```csharp
public IReadOnlyList<int> ExpectedStatusCodes { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Observability_HttpDependencies_Configuration_HttpDependencyDefinition_Method"></a> Method

Gets or sets the HTTP method used for the probe request.

```csharp
public string Method { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
