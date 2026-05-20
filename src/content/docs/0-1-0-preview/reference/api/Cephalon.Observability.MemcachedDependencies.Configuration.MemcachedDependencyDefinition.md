---
title: Class MemcachedDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.MemcachedDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration/)  
Assembly: Cephalon.Observability.MemcachedDependencies.dll  

Describes one Memcached dependency that should contribute to runtime health.

```csharp
public sealed class MemcachedDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[MemcachedDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencydefinition/)

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

### <a id="Cephalon_Observability_MemcachedDependencies_Configuration_MemcachedDependencyDefinition__ctor"></a> MemcachedDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MemcachedDependencies.Configuration.MemcachedDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MemcachedDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_MemcachedDependencies_Configuration_MemcachedDependencyDefinition_Host"></a> Host

Gets or sets the Memcached host name or IP address to probe.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MemcachedDependencies_Configuration_MemcachedDependencyDefinition_Port"></a> Port

Gets or sets the Memcached TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
