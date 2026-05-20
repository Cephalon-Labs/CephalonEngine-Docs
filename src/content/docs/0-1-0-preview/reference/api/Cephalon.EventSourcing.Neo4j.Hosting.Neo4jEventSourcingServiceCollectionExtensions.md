---
title: Class Neo4jEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-hosting-neo4jeventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Neo4j.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-hosting/)  
Assembly: Cephalon.EventSourcing.Neo4j.dll  

Registers the Neo4j event-store provider used by Cephalon hosts.

```csharp
public static class Neo4jEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Neo4jEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-hosting-neo4jeventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Neo4j_Hosting_Neo4jEventSourcingServiceCollectionExtensions_AddCephalonNeo4jEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_System_String_System_String_"></a> AddCephalonNeo4jEventSourcing\(IServiceCollection, string, string, string, string\)

Adds the Neo4j event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonNeo4jEventSourcing(this IServiceCollection services, string uri, string username, string password, string eventLabel = "Event")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`uri` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j Bolt URI (e.g. <code>bolt://localhost:7687</code>).

`username` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j username.

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Neo4j password.

`eventLabel` [string](https://learn.microsoft.com/dotnet/api/system.string)

The node label used for event nodes. Defaults to <code>Event</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
