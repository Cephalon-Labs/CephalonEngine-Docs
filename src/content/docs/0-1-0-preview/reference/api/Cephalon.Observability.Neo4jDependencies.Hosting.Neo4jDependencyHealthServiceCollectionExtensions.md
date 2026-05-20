---
title: Class Neo4jDependencyHealthServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-hosting-neo4jdependencyhealthservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.Observability.Neo4jDependencies.Hosting](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-hosting/)  
Assembly: Cephalon.Observability.Neo4jDependencies.dll  

Adds Neo4j dependency-health services to a Cephalon host.

```csharp
public static class Neo4jDependencyHealthServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jDependencyHealthServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-hosting-neo4jdependencyhealthservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Observability_Neo4jDependencies_Hosting_Neo4jDependencyHealthServiceCollectionExtensions_AddCephalonNeo4jDependencyHealth_Microsoft_Extensions_DependencyInjection_IServiceCollection_Microsoft_Extensions_Configuration_IConfiguration_System_Action_Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyHealthOptions__"></a> AddCephalonNeo4jDependencyHealth\(IServiceCollection, IConfiguration, Action<Neo4jDependencyHealthOptions\>?\)

Adds Neo4j dependency-health services using configuration as the primary source of probe settings.

```csharp
public static IServiceCollection AddCephalonNeo4jDependencyHealth(this IServiceCollection services, IConfiguration configuration, Action<Neo4jDependencyHealthOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The application configuration root.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[Neo4jDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencyhealthoptions/)\>?

An optional callback that can extend or override the configuration-driven dependency-health setup.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.

### <a id="Cephalon_Observability_Neo4jDependencies_Hosting_Neo4jDependencyHealthServiceCollectionExtensions_AddCephalonNeo4jDependencyHealth_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_Action_Cephalon_Observability_Neo4jDependencies_Configuration_Neo4jDependencyHealthOptions__"></a> AddCephalonNeo4jDependencyHealth\(IServiceCollection, Action<Neo4jDependencyHealthOptions\>?\)

Adds Neo4j dependency-health services using code-first configuration.

```csharp
public static IServiceCollection AddCephalonNeo4jDependencyHealth(this IServiceCollection services, Action<Neo4jDependencyHealthOptions>? configure = null)
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The target service collection.

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[Neo4jDependencyHealthOptions](/0-1-0-preview/reference/api/cephalon-observability-neo4jdependencies-configuration-neo4jdependencyhealthoptions/)\>?

An optional callback that configures dependency-health options.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for further registration.
