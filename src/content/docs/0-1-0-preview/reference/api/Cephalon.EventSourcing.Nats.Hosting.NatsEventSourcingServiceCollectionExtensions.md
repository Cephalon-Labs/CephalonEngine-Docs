---
title: Class NatsEventSourcingServiceCollectionExtensions
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-nats-hosting-natseventsourcingservicecollectionextensions
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Nats.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-hosting/)  
Assembly: Cephalon.EventSourcing.Nats.dll  

Registers the NATS JetStream KV event-store provider used by Cephalon hosts.

```csharp
public static class NatsEventSourcingServiceCollectionExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsEventSourcingServiceCollectionExtensions](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-hosting-natseventsourcingservicecollectionextensions/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_EventSourcing_Nats_Hosting_NatsEventSourcingServiceCollectionExtensions_AddCephalonNatsEventSourcing_Microsoft_Extensions_DependencyInjection_IServiceCollection_System_String_System_String_"></a> AddCephalonNatsEventSourcing\(IServiceCollection, string, string\)

Adds the NATS event-store provider to the service collection.

```csharp
public static IServiceCollection AddCephalonNatsEventSourcing(this IServiceCollection services, string url, string bucketName = "cephalon-events")
```

#### Parameters

`services` [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The service collection to extend.

`url` [string](https://learn.microsoft.com/dotnet/api/system.string)

The NATS server URL (e.g. <code>"nats://localhost:4222"</code>).

`bucketName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JetStream KV bucket name used for event stream entries. Defaults to <code>cephalon-events</code>.

#### Returns

 [IServiceCollection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection)

The same service collection for fluent registration.

#### Remarks

<xref href="NATS.Client.Core.NatsConnection" data-throw-if-not-resolved="false"></xref> does not connect on construction — the connection is deferred
to the first operation. DI resolution does not require a live NATS server.
