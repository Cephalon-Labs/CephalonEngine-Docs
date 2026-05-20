---
title: Class OracleDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration-oracledependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.OracleDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration/)  
Assembly: Cephalon.Observability.OracleDependencies.dll  

Describes one Oracle dependency that should contribute to runtime health.

```csharp
public sealed class OracleDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyDefinitionBase ← 
[OracleDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-oracledependencies-configuration-oracledependencydefinition/)

#### Inherited Members

DependencyDefinitionBase.Id, 
DependencyDefinitionBase.DisplayName, 
DependencyDefinitionBase.Required, 
DependencyDefinitionBase.TimeoutSeconds, 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition__ctor"></a> OracleDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.OracleDependencies.Configuration.OracleDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public OracleDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional full Oracle connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the SQL statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_Host"></a> Host

Gets or sets the Oracle host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_Port"></a> Port

Gets or sets the Oracle TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_ServiceName"></a> ServiceName

Gets or sets the Oracle service name used in the Easy Connect data source when no full connection string is supplied.

```csharp
public string ServiceName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_OracleDependencies_Configuration_OracleDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
