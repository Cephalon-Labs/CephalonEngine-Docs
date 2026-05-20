---
title: Class PostgresDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-postgresdependencies-configuration-postgresdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.PostgresDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-postgresdependencies-configuration/)  
Assembly: Cephalon.Observability.PostgresDependencies.dll  

Configures Postgres dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class PostgresDependencyHealthOptions : DependencyHealthOptionsBase<PostgresDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<PostgresDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[PostgresDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-postgresdependencies-configuration-postgresdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<PostgresDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<PostgresDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_PostgresDependencies_Configuration_PostgresDependencyHealthOptions__ctor"></a> PostgresDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.PostgresDependencies.Configuration.PostgresDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public PostgresDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_PostgresDependencies_Configuration_PostgresDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Postgres dependency-health options from configuration.

```csharp
public static PostgresDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [PostgresDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-postgresdependencies-configuration-postgresdependencyhealthoptions/)

The bound dependency-health options.
