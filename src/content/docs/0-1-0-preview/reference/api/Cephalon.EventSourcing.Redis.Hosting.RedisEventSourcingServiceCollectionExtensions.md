---
title: Class RedisEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-redis-hosting-rediseventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Redis.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis-hosting/)  
Assembly: Cephalon.EventSourcing.Redis.dll  

Registers the Redis Streams event-store provider used by Cephalon hosts.

```csharp
public static class RedisEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RedisEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis-hosting-rediseventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Redis_Hosting_RedisEventSourcingServiceCollectionExtensions_AddCephalonRedisEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_"></a> AddCephalonRedisEventSourcing\(IServiceCollection, string, string\)

Adds the Redis Streams event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonRedisEventSourcing(this IServiceCollection services, string configuration, string keyPrefix = "cephalon:")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`configuration` [string](https://learn.microsoft.com/dotnet/api/system.string)

The StackExchange.Redis connection string or configuration (e.g. <code>"localhost:6379"</code>).

`keyPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key prefix applied to all stream keys. Defaults to <code>"cephalon:"</code>.
Stream keys follow the pattern <code>{keyPrefix}stream:{streamId}</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
