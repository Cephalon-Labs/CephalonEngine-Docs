---
title: Class SqlServerDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration-sqlserverdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.SqlServerDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration/)  
Assembly: Cephalon.Observability.SqlServerDependencies.dll  

Describes one SQL Server dependency that should contribute to runtime health.

```csharp
public sealed class SqlServerDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyDefinitionBase ← 
[SqlServerDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-sqlserverdependencies-configuration-sqlserverdependencydefinition/)

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

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition__ctor"></a> SqlServerDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.SqlServerDependencies.Configuration.SqlServerDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public SqlServerDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional full SQL Server connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Database"></a> Database

Gets or sets the database name used for the health query.

```csharp
public string Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Encrypt"></a> Encrypt

Gets or sets the optional SQL Server encryption mode such as <code>Optional</code>, <code>Mandatory</code>, or <code>Strict</code>.

```csharp
public string? Encrypt { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the SQL statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Host"></a> Host

Gets or sets the SQL Server host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Port"></a> Port

Gets or sets the SQL Server TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_TrustServerCertificate"></a> TrustServerCertificate

Gets or sets the optional value that controls whether server certificate validation should be bypassed.

```csharp
public bool? TrustServerCertificate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Observability_SqlServerDependencies_Configuration_SqlServerDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
