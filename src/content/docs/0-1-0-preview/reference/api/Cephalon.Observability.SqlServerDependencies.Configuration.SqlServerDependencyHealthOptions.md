---
title: Class SqlServerDependencyHealthOptions
slug: 0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration-sqlserverdependencyhealthoptions
editUrl: false
---

Namespace: [Cephalon.Observability.SqlServerDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration/)  
Assembly: Cephalon.Observability.SqlServerDependencies.dll  

Configures SQL Server dependency probes contributed to Cephalon runtime health.

```csharp
public sealed class SqlServerDependencyHealthOptions : DependencyHealthOptionsBase<SqlServerDependencyDefinition>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyHealthOptionsBase<SqlServerDependencyDefinition\> ← 
[SqlServerDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration-sqlserverdependencyhealthoptions/)

#### Inherited Members

DependencyHealthOptionsBase<SqlServerDependencyDefinition\>.RefreshIntervalSeconds, 
DependencyHealthOptionsBase<SqlServerDependencyDefinition\>.Dependencies, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyHealthOptions__ctor"></a> SqlServerDependencyHealthOptions\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.SqlServerDependencies.Configuration.SqlServerDependencyHealthOptions" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SqlServerDependencyHealthOptions()
```

## Methods

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyHealthOptions_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Binds SQL Server dependency-health options from configuration.

```csharp
public static SqlServerDependencyHealthOptions FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The configuration section path that contains the engine settings. The default is <code>Engine</code>.

#### Returns

 [SqlServerDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration-sqlserverdependencyhealthoptions/)

The bound dependency-health options.
