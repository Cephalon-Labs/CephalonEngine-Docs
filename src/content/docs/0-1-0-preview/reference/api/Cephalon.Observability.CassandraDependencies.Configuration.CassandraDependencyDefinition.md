---
title: Class CassandraDependencyDefinition
slug: 0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration-cassandradependencydefinition
editUrl: false
---

Namespace: [Cephalon.Observability.CassandraDependencies.Configuration](/0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration/)  
Assembly: Cephalon.Observability.CassandraDependencies.dll  

Describes one Cassandra dependency that should contribute to runtime health.

```csharp
public sealed class CassandraDependencyDefinition : DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
DependencyDefinitionBase ← 
[CassandraDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-cassandradependencies-configuration-cassandradependencydefinition/)

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

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition__ctor"></a> CassandraDependencyDefinition\(\)

Initializes a new instance of the <xref href="Cephalon.Observability.CassandraDependencies.Configuration.CassandraDependencyDefinition" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CassandraDependencyDefinition()
```

## Properties

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_ContactPoints"></a> ContactPoints

Gets or sets the Cassandra contact points used to establish the probe session.

```csharp
public IReadOnlyList<string> ContactPoints { get; set; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_HealthQuery"></a> HealthQuery

Gets or sets the CQL statement executed to verify the dependency.

```csharp
public string HealthQuery { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_Keyspace"></a> Keyspace

Gets or sets the optional Cassandra keyspace used when opening the probe session.

```csharp
public string? Keyspace { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_Password"></a> Password

Gets or sets the optional password used for authentication.

```csharp
public string? Password { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_Port"></a> Port

Gets or sets the Cassandra native-protocol TCP port.

```csharp
public int Port { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Observability_CassandraDependencies_Configuration_CassandraDependencyDefinition_Username"></a> Username

Gets or sets the optional user name used for authentication.

```csharp
public string? Username { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
