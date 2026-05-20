---
title: Class ConsulDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.ConsulDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration/)  
Assembly: Cephalon.Observability.ConsulDependencies.dll  

Configures Consul dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class ConsulDependencyHealthOptions : DependencyHealthOptionsBase<ConsulDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<ConsulDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[ConsulDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<ConsulDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<ConsulDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyHealthOptions__ctor"></a> ConsulDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ConsulDependencies.Configuration.ConsulDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ConsulDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_ConsulDependencies_Configuration_ConsulDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Consul dependency-health options from configuration.

```csharp
public static ConsulDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [ConsulDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencyhealthoptions/)

The bound dependency-health options.
