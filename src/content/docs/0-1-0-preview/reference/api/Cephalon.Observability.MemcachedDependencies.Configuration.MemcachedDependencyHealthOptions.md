---
title: Class MemcachedDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.MemcachedDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration/)  
Assembly: Cephalon.Observability.MemcachedDependencies.dll  

Configures Memcached dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class MemcachedDependencyHealthOptions : DependencyHealthOptionsBase<MemcachedDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<MemcachedDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[MemcachedDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<MemcachedDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<MemcachedDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_MemcachedDependencies_Configuration_MemcachedDependencyHealthOptions__ctor"></a> MemcachedDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MemcachedDependencies.Configuration.MemcachedDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MemcachedDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_MemcachedDependencies_Configuration_MemcachedDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Memcached dependency-health options from configuration.

```csharp
public static MemcachedDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MemcachedDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencyhealthoptions/)

The bound dependency-health options.
