---
title: Class MongoDbEventEntry
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-mongodbevententry
editUrl: false
---

Namespace: [Cephalon.EventSourcing.MongoDB](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb/)  
Assembly: Cephalon.EventSourcing.MongoDB.dll  

Represents one persisted domain event document stored by the MongoDB event-store provider.

```csharp
public sealed class MongoDbEventEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MongoDbEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-mongodb-mongodbevententry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_AppendedAtUtc"></a> AppendedAtUtc

Gets or sets the UTC time at which the event was appended to the store.

```csharp
public DateTime AppendedAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_CorrelationId"></a> CorrelationId

Gets or sets the correlation identifier associated with the event when known.

```csharp
public string? CorrelationId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_EventType"></a> EventType

Gets or sets the assembly-qualified CLR event type.

```csharp
public string EventType { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_Id"></a> Id

Gets or sets the database-assigned document identifier.

```csharp
[BsonId]
public ObjectId Id { get; set; }
```

#### Property Value

 ObjectId

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_OccurredAtUtc"></a> OccurredAtUtc

Gets or sets the UTC time at which the domain event occurred.

```csharp
public DateTime OccurredAtUtc { get; set; }
```

#### Property Value

 [DateTime](https://learn.microsoft.com/dotnet/api/system.datetime)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_Payload"></a> Payload

Gets or sets the serialized event payload.

```csharp
public string Payload { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_StreamId"></a> StreamId

Gets or sets the stable logical stream identifier.

```csharp
public string StreamId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_StreamVersion"></a> StreamVersion

Gets or sets the optimistic stream version for the event.

```csharp
public long StreamVersion { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_EventSourcing_MongoDB_MongoDbEventEntry_TenantId"></a> TenantId

Gets or sets the tenant identifier associated with the event when known.

```csharp
public string? TenantId { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
