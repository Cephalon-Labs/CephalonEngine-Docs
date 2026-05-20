---
title: Class ConsulDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.ConsulDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration/)  
Assembly: Cephalon.Observability.ConsulDependencies.dll  

Describes one Consul dependency that should contribute to runtime health.

```csharp
public sealed class ConsulDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[ConsulDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencydefinition/)

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

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyDefinition__ctor"></a> ConsulDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ConsulDependencies.Configuration.ConsulDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConsulDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyDefinition_AclToken"></a> AclToken

Gets or sets the optional Consul ACL token sent as the <code>X-Consul-Token</code> header.

```csharp
public string? AclToken { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyDefinition_Datacenter"></a> Datacenter

Gets or sets the optional Consul datacenter name added as the <code>dc</code> query parameter.

```csharp
public string? Datacenter { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyDefinition_Endpoint"></a> Endpoint

Gets or sets the absolute Consul base URL or status endpoint that should be probed.

```csharp
public string Endpoint { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
