---
title: Class ClickHouseEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-hosting-clickhouseeventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.ClickHouse.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-hosting/)  
Assembly: Cephalon.EventSourcing.ClickHouse.dll  

Registers the ClickHouse event-store provider used by Cephalon hosts.

```csharp
public static class ClickHouseEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClickHouseEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-hosting-clickhouseeventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_ClickHouse_Hosting_ClickHouseEventSourcingServiceCollectionExtensions_AddCephalonClickHouseEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_System_String_System_String_System_String_"></a> AddCephalonClickHouseEventSourcing\(IServiceCollection, string, string, string, string, string\)

Adds the ClickHouse event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonClickHouseEventSourcing(this IServiceCollection services, string host, string database, string tableName = "cephalon_event_streams", string username = "default", string password = "")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse host address (e.g. <code>"localhost"</code>).

`database` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse database that contains the event-streams table.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse table name used for event stream rows. Defaults to <code>cephalon_event_streams</code>.

`username` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse username. Defaults to <code>"default"</code>.

`password` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse password. Defaults to empty.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.

#### Remarks

<xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> is registered using <code>TryAdd</code> semantics — a host that already
registered a shared <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> keeps its own instance.

<p>
<strong>Connection behaviour</strong>: A new <code>ClickHouseConnection</code> is created per operation.
No long-lived connection object is held. Service resolution is safe without a live ClickHouse server —
connections are only opened when operations are actually invoked.
</p>
