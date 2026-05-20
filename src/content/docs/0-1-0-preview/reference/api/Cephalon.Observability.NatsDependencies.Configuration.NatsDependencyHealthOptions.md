---
title: Class NatsDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.NatsDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration/)  
Assembly: Cephalon.Observability.NatsDependencies.dll  

Configures NATS dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class NatsDependencyHealthOptions : DependencyHealthOptionsBase<NatsDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<NatsDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[NatsDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<NatsDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<NatsDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyHealthOptions__ctor"></a> NatsDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.NatsDependencies.Configuration.NatsDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NatsDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_NatsDependencies_Configuration_NatsDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds NATS dependency-health options from configuration.

```csharp
public static NatsDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [NatsDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencyhealthoptions/)

The bound dependency-health options.
