---
title: Class Neo4jDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.Neo4jDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration/)  
Assembly: Cephalon.Observability.Neo4jDependencies.dll  

Describes one Neo4j dependency that should contribute to runtime health.

```csharp
public sealed class Neo4jDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/) ← 
[Neo4jDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencydefinition/)

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

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition__ctor"></a> Neo4jDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.Neo4jDependencies.Configuration.Neo4jDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public Neo4jDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Database"></a> Database

Gets or sets the optional Neo4j database name used when opening the probe session.

```csharp
public string? Database { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the Cypher statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Host"></a> Host

Gets or sets the Neo4j host name or IP address to probe when no full URI is supplied.

```csharp
public string Host { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Port"></a> Port

Gets or sets the Neo4j Bolt port used when no full URI is supplied.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Scheme"></a> Scheme

Gets or sets the URI scheme used when building a discrete endpoint, such as <code>neo4j</code>, <code>neo4j+s</code>, <code>bolt</code>, or <code>bolt+s</code>.

```csharp
public string Scheme { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Uri"></a> Uri

Gets or sets the optional full Neo4j endpoint URI such as <code>neo4j://graph.internal.example:7687</code> or <code>neo4j+s://graph.internal.example:7687</code>.

```csharp
public string? Uri { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
