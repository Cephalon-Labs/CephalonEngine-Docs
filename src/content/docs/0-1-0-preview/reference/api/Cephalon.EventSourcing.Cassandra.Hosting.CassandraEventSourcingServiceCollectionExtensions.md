---
title: Class CassandraEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-hosting-cassandraeventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Cassandra.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-hosting/)  
Assembly: Cephalon.EventSourcing.Cassandra.dll  

Registers the Cassandra event-store provider used by Cephalon hosts.

```csharp
public static class CassandraEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-hosting-cassandraeventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Cassandra_Hosting_CassandraEventSourcingServiceCollectionExtensions_AddCephalonCassandraEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_System_String_"></a> AddCephalonCassandraEventSourcing\(IServiceCollection, string, string, string\)

Adds the Cassandra event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonCassandraEventSourcing(this IServiceCollection services, string contactPoints, string keyspace, string tableName = "cephalon_event_streams")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`contactPoints` [string](https://learn.microsoft.com/dotnet/api/system.string)

One or more Cassandra contact-point host addresses, separated by commas
(e.g. <code>"localhost"</code> or <code>"node1,node2,node3"</code>).

`keyspace` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cassandra keyspace that contains the event-streams table.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cassandra table name used for event stream rows. Defaults to <code>cephalon_event_streams</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
