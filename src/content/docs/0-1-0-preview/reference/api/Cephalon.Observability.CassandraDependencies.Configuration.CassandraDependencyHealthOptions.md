---
title: Class CassandraDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration-cassandradependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.CassandraDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration/)  
Assembly: Cephalon.Observability.CassandraDependencies.dll  

Configures Cassandra dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class CassandraDependencyHealthOptions : DependencyHealthOptionsBase<CassandraDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyHealthOptionsBase<CassandraDependencyDefinition\> ← 
[CassandraDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration-cassandradependencyhealthoptions/)

#### Inherited Members

DependencyHealthOptionsBase<CassandraDependencyDefinition\>.RefreshIntervalSeconds, 
DependencyHealthOptionsBase<CassandraDependencyDefinition\>.Dependencies, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyHealthOptions__ctor"></a> CassandraDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.CassandraDependencies.Configuration.CassandraDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CassandraDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds Cassandra dependency-health options from configuration.

```csharp
public static CassandraDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [CassandraDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration-cassandradependencyhealthoptions/)

The bound dependency-health options.
