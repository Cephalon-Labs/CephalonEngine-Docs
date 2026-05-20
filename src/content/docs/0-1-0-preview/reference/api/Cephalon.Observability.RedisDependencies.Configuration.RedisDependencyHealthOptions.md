---
title: Class RedisDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.RedisDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration/)  
Assembly: Cephalon.Observability.RedisDependencies.dll  

Configures Redis dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class RedisDependencyHealthOptions : DependencyHealthOptionsBase<RedisDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<RedisDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[RedisDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<RedisDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<RedisDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyHealthOptions__ctor"></a> RedisDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.RedisDependencies.Configuration.RedisDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RedisDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_RedisDependencies_Configuration_RedisDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Redis dependency-health options from configuration.

```csharp
public static RedisDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [RedisDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencyhealthoptions/)

The bound dependency-health options.
