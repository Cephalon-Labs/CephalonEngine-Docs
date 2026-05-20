---
title: Class MySqlDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.MySqlDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration/)  
Assembly: Cephalon.Observability.MySqlDependencies.dll  

Configures MySQL dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class MySqlDependencyHealthOptions : DependencyHealthOptionsBase<MySqlDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<MySqlDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[MySqlDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<MySqlDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<MySqlDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyHealthOptions__ctor"></a> MySqlDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MySqlDependencies.Configuration.MySqlDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MySqlDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds MySQL dependency-health options from configuration.

```csharp
public static MySqlDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MySqlDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencyhealthoptions/)

The bound dependency-health options.
