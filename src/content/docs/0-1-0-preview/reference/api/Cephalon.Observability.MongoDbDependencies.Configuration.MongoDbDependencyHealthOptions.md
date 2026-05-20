---
title: Class MongoDbDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.MongoDbDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration/)  
Assembly: Cephalon.Observability.MongoDbDependencies.dll  

Configures MongoDB dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class MongoDbDependencyHealthOptions : DependencyHealthOptionsBase<MongoDbDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<MongoDbDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[MongoDbDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<MongoDbDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<MongoDbDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyHealthOptions__ctor"></a> MongoDbDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MongoDbDependencies.Configuration.MongoDbDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MongoDbDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds MongoDB dependency-health options from configuration.

```csharp
public static MongoDbDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [MongoDbDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencyhealthoptions/)

The bound dependency-health options.
