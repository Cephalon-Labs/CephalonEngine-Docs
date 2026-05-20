---
title: Class DependencyDefinitionBase
slug: 0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase
editUrl: false
---

Namespace: [Cephalon.Observability.DependencyHealth.Core.Configuration](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration/)  
Assembly: Cephalon.Observability.DependencyHealth.Core.dll  

Base class for all dependency definitions that contribute to Cephalon runtime health.

```csharp
public abstract class DependencyDefinitionBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyDefinitionBase](/0-1-0-preview/reference/api/cephalon-observability-dependencyhealth-core-configuration-dependencydefinitionbase/)

#### Derived

[ClickHouseDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-clickhousedependencies-configuration-clickhousedependencydefinition/), 
[ConsulDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-consuldependencies-configuration-consuldependencydefinition/), 
[ElasticsearchDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-elasticsearchdependencies-configuration-elasticsearchdependencydefinition/), 
[HttpDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-httpdependencies-configuration-httpdependencydefinition/), 
[KafkaDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-kafkadependencies-configuration-kafkadependencydefinition/), 
[MemcachedDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-memcacheddependencies-configuration-memcacheddependencydefinition/), 
[MongoDbDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mongodbdependencies-configuration-mongodbdependencydefinition/), 
[MqttDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mqttdependencies-configuration-mqttdependencydefinition/), 
[MySqlDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-mysqldependencies-configuration-mysqldependencydefinition/), 
[NatsDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-natsdependencies-configuration-natsdependencydefinition/), 
[Neo4jDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencydefinition/), 
[OpenSearchDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-opensearchdependencies-configuration-opensearchdependencydefinition/), 
[PostgresDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-postgresdependencies-configuration-postgresdependencydefinition/), 
[RabbitMqDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-rabbitmqdependencies-configuration-rabbitmqdependencydefinition/), 
[RedisDependencyDefinition](/0-1-0-preview/reference/api/cephalon-observability-redisdependencies-configuration-redisdependencydefinition/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyDefinitionBase_DisplayName"></a> DisplayName

Gets or sets the human-readable dependency name.

```csharp
public string? DisplayName { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyDefinitionBase_Id"></a> Id

Gets or sets the stable dependency identifier.

```csharp
public string Id { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyDefinitionBase_Required"></a> Required

Gets or sets a value indicating whether this dependency is required for readiness.

```csharp
public bool Required { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Observability_DependencyHealth_Core_Configuration_DependencyDefinitionBase_TimeoutSeconds"></a> TimeoutSeconds

Gets or sets the per-probe timeout in seconds.

```csharp
public int TimeoutSeconds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
