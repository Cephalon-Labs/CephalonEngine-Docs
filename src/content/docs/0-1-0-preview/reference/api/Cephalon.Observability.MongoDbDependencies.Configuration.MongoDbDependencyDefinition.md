---
title: Class MongoDbDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.MongoDbDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration/)  
Assembly: Cephalon.Observability.MongoDbDependencies.dll  

Describes one MongoDB dependency that should contribute to runtime health.

```csharp
public sealed class MongoDbDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[MongoDbDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencydefinition/)

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

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition__ctor"></a> MongoDbDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.MongoDbDependencies.Configuration.MongoDbDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MongoDbDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_AllowInsecureTls"></a> AllowInsecureTls

Gets or sets the optional value that controls whether TLS certificate validation should be relaxed.

```csharp
public bool? AllowInsecureTls { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_AuthSource"></a> AuthSource

Gets or sets the optional authentication source used when creating credentials from discrete settings.

```csharp
public string? AuthSource { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_ConnectionString"></a> ConnectionString

Gets or sets the optional full MongoDB connection string used for the probe.

```csharp
public string? ConnectionString { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_Database"></a> Database

Gets or sets the database name used for the health command.

```csharp
public string Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_DirectConnection"></a> DirectConnection

Gets or sets the optional value that controls whether the client should connect directly to the target server.

```csharp
public bool? DirectConnection { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_HealthCommand"></a> HealthCommand

Gets or sets the MongoDB database command executed to verify the dependency.

```csharp
public string HealthCommand { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_Host"></a> Host

Gets or sets the MongoDB host name or IP address to probe when no full connection string is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication when no full connection string is supplied.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_Port"></a> Port

Gets or sets the MongoDB TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_UseTls"></a> UseTls

Gets or sets the optional value that controls whether TLS should be used for the probe.

```csharp
public bool? UseTls { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)?

### <a id="Cephalon_Observability_MongoDbDependencies_Configuration_MongoDbDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication when no full connection string is supplied.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
