---
title: Class ClickHouseDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.ClickHouseDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration/)  
Assembly: Cephalon.Observability.ClickHouseDependencies.dll  

Describes one ClickHouse dependency that should contribute to runtime health.

```csharp
public sealed class ClickHouseDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[ClickHouseDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencydefinition/)

#### Inherited Members

[DependencyDefinitionBase.Id](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Id), 
[DependencyDefinitionBase.DisplayName](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_DisplayName), 
[DependencyDefinitionBase.Required](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_Required), 
[DependencyDefinitionBase.TimeoutSeconds](Cephalon.Observability.DependencyHealth.Core.Configuration.DependencyDefinitionBase.md\#Cephalon\_Observability\_DependencyHealth\_Core\_Configuration\_DependencyDefinitionBase\_TimeoutSeconds), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition__ctor"></a> ClickHouseDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.ClickHouseDependencies.Configuration.ClickHouseDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClickHouseDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional full ClickHouse connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Database"></a> Database

Gets or sets the optional ClickHouse database to select for the probe session.

```csharp
public string? Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the SQL statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Host"></a> Host

Gets or sets the ClickHouse host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Port"></a> Port

Gets or sets the ClickHouse TCP port used by the selected protocol.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Protocol"></a> Protocol

Gets or sets the ClickHouse protocol used for the probe, such as <code>http</code> or <code>https</code>.

```csharp
public string Protocol { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_ClickHouseDependencies_Configuration_ClickHouseDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
