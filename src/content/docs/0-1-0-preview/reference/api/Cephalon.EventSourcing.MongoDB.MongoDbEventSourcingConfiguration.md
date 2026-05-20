---
title: Class MongoDbEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-mongodbeventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.MongoDB](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb/)  
Assembly: Cephalon.EventSourcing.MongoDB.dll  

Applies the Cephalon event-store schema to a MongoDB collection.

```csharp
public static class MongoDbEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-mongodbeventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventSourcingConfiguration_EnsureIndexesAsync_MongoDB_Driver_IMongoCollection_Cephalon_EventSourcing_MongoDB_MongoDbEventEntry__System_Threading_CancellationToken_"></a> EnsureIndexesAsync\(IMongoCollection<MongoDbEventEntry\>, CancellationToken\)

Creates the compound unique index on <code>(StreamId, StreamVersion)</code> required by the MongoDB event-store provider.

```csharp
public static Task EnsureIndexesAsync(IMongoCollection<MongoDbEventEntry> collection, CancellationToken cancellationToken = default)
```

#### Parameters

`collection` IMongoCollection<[MongoDbEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-mongodbevententry/)\>

The MongoDB collection to configure.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when all indexes have been created.
