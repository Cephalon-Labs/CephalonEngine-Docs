---
title: Class ClickHouseDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.ClickHouseDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration/)  
Assembly: Cephalon.Observability.ClickHouseDependencies.dll  

Configures ClickHouse dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class ClickHouseDependencyHealthOptions : DependencyHealthOptionsBase<ClickHouseDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<ClickHouseDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[ClickHouseDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<ClickHouseDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<ClickHouseDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyHealthOptions__ctor"></a> ClickHouseDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ClickHouseDependencies.Configuration.ClickHouseDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClickHouseDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds ClickHouse dependency-health options from configuration.

```csharp
public static ClickHouseDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [ClickHouseDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencyhealthoptions/)

The bound dependency-health options.
