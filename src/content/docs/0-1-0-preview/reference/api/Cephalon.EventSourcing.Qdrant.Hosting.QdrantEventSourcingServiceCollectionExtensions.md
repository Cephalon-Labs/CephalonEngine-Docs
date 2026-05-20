---
title: Class QdrantEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-hosting-qdranteventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Qdrant.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-hosting/)  
Assembly: Cephalon.EventSourcing.Qdrant.dll  

Registers the Qdrant event-store provider used by Cephalon hosts.

```csharp
public static class QdrantEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QdrantEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-hosting-qdranteventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Qdrant_Hosting_QdrantEventSourcingServiceCollectionExtensions_AddCephalonQdrantEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_Int32_System_String_"></a> AddCephalonQdrantEventSourcing\(IServiceCollection, string, int, string\)

Adds the Qdrant event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonQdrantEventSourcing(this IServiceCollection services, string host, int port = 6334, string collectionName = "event-streams")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Qdrant server hostname (e.g. <code>"localhost"</code>).

`port` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The Qdrant gRPC port. Defaults to <code>6334</code>.

`collectionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Qdrant collection name used for event stream points. Defaults to <code>event-streams</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.
