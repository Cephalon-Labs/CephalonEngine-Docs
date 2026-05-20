---
title: Class MongoDbEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-hosting-mongodbeventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.MongoDB.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-hosting/)  
Assembly: Cephalon.EventSourcing.MongoDB.dll  

Registers the MongoDB event-store provider used by Cephalon hosts.

```csharp
public static class MongoDbEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-hosting-mongodbeventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_MongoDB_Hosting_MongoDbEventSourcingServiceCollectionExtensions_AddCephalonMongoDbEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_System_String_"></a> AddCephalonMongoDbEventSourcing\(IServiceCollection, string, string, string\)

Adds the MongoDB event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonMongoDbEventSourcing(this IServiceCollection services, string connectionString, string databaseName, string collectionName = "event_streams")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MongoDB connection string.

`databaseName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target MongoDB database name.

`collectionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The MongoDB collection name used for event stream documents. Defaults to <code>event_streams</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
