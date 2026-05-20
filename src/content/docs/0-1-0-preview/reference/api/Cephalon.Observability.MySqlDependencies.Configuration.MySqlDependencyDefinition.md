---
title: Class MySqlDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.MySqlDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration/)  
Assembly: Cephalon.Observability.MySqlDependencies.dll  

Describes one MySQL dependency that should contribute to runtime health.

```csharp
public sealed class MySqlDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[MySqlDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencydefinition/)

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

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition__ctor"></a> MySqlDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MySqlDependencies.Configuration.MySqlDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MySqlDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_AllowPublicKeyRetrieval"></a> AllowPublicKeyRetrieval

Gets or sets the optional value that controls whether the server RSA public key may be requested automatically.

```csharp
public bool? AllowPublicKeyRetrieval { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional full MySQL connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_Database"></a> Database

Gets or sets the database name used for the health query.

```csharp
public string Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the SQL statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_Host"></a> Host

Gets or sets the MySQL host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_Port"></a> Port

Gets or sets the MySQL TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_SslMode"></a> SslMode

Gets or sets the optional MySQL SSL mode such as <code>Preferred</code>, <code>Required</code>, <code>VerifyCA</code>, or <code>VerifyFull</code>.

```csharp
public string? SslMode { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MySqlDependencies_Configuration_MySqlDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
