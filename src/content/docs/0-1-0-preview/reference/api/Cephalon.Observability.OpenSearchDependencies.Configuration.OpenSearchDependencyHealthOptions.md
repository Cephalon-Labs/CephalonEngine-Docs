---
title: Class OpenSearchDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.OpenSearchDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration/)  
Assembly: Cephalon.Observability.OpenSearchDependencies.dll  

Configures OpenSearch dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class OpenSearchDependencyHealthOptions : DependencyHealthOptionsBase<OpenSearchDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyHealthOptionsBase<OpenSearchDependencyDefinition\>](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md) ← 
[OpenSearchDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencyhealthoptions/)

#### Inherited Members

[DependencyHealthOptionsBase<OpenSearchDependencyDefinition\>.RefreshIntervalSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_RefreshIntervalSeconds), 
[DependencyHealthOptionsBase<OpenSearchDependencyDefinition\>.Dependencies](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyHealthOptionsBase\-1.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyHealthOptionsBase\_1\_Dependencies), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyHealthOptions__ctor"></a> OpenSearchDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OpenSearchDependencies.Configuration.OpenSearchDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OpenSearchDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_OpenSearchDependencies_Configuration_OpenSearchDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds OpenSearch dependency-health options from configuration.

```csharp
public static OpenSearchDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [OpenSearchDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencyhealthoptions/)

The bound dependency-health options.
