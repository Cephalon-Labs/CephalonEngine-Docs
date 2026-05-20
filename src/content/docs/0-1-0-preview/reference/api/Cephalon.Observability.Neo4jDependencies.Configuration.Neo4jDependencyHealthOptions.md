---
title: Class Neo4jDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.Neo4jDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration/)  
Assembly: Cephalon.Observability.Neo4jDependencies.dll  

Configures Neo4j dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class Neo4jDependencyHealthOptions : DependencyHealthOptionsBase<Neo4jDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<Neo4jDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[Neo4jDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<Neo4jDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<Neo4jDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyHealthOptions__ctor"></a> Neo4jDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Neo4jDependencies.Configuration.Neo4jDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Neo4jDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Neo4j dependency-health options from configuration.

```csharp
public static Neo4jDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [Neo4jDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencyhealthoptions/)

The bound dependency-health options.
