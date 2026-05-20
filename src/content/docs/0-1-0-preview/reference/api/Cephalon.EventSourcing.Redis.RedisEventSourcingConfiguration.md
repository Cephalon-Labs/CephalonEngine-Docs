---
title: Class RedisEventSourcingConfiguration
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-redis-rediseventsourcingconfiguration
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Redis](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis/)  
Assembly: Cephalon.EventSourcing.Redis.dll  

Provides key-naming conventions for the Redis Streams event-store provider.

```csharp
public static class RedisEventSourcingConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RedisEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis-rediseventsourcingconfiguration/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Redis_RedisEventSourcingConfiguration_StreamKey_System_String_System_String_"></a> StreamKey\(string, string\)

Computes the Redis Stream key for the given stream identifier and key prefix.

```csharp
public static string StreamKey(string keyPrefix, string streamId)
```

#### Parameters

`keyPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key prefix configured for the Redis provider (e.g. <code>"cephalon:"</code>).

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable logical stream identifier.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified Redis key for the stream (e.g. <code>"cephalon:stream:orders-42"</code>).
