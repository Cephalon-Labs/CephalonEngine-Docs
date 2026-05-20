---
title: Class OracleDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration-oracledependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.OracleDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration/)  
Assembly: Cephalon.Observability.OracleDependencies.dll  

Configures Oracle dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class OracleDependencyHealthOptions : DependencyHealthOptionsBase<OracleDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyHealthOptionsBase<OracleDependencyDefinition\> ← 
[OracleDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration-oracledependencyhealthoptions/)

#### Inherited Members

DependencyHealthOptionsBase<OracleDependencyDefinition\>.RefreshIntervalSeconds, 
DependencyHealthOptionsBase<OracleDependencyDefinition\>.Dependencies, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyHealthOptions__ctor"></a> OracleDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OracleDependencies.Configuration.OracleDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OracleDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Oracle dependency-health options from configuration.

```csharp
public static OracleDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [OracleDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration-oracledependencyhealthoptions/)

The bound dependency-health options.
