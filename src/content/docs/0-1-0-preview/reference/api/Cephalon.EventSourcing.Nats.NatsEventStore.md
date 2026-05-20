---
title: Class NatsEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natseventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Nats](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats/)  
Assembly: Cephalon.EventSourcing.Nats.dll  

NATS JetStream KV-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref>.
Each event is stored as a KV entry with key format <code>{streamId}/{streamVersion:D20}</code>.
Zero-padding ensures correct lexicographic ordering of version keys.
Optimistic concurrency is enforced via a pre-append version check and <code>CreateAsync</code>
which throws <xref href="NATS.Client.KeyValueStore.NatsKVCreateException" data-throw-if-not-resolved="false"></xref> if the key already exists.

```csharp
public sealed class NatsEventStore : IEventStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[NatsEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natseventstore/)

#### Implements

IEventStore

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_EventSourcing_Nats_NatsEventStore__ctor_NATS_Client_Core_INatsConnection_System_String_"></a> NatsEventStore\(INatsConnection, string\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Nats.NatsEventStore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public NatsEventStore(INatsConnection nats, string bucketName)
```

#### Parameters

`nats` INatsConnection

The NATS connection (connection is deferred to first use).

`bucketName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The JetStream KV bucket name used to persist event stream entries.

## Methods

### <a id="Cephalon_EventSourcing_Nats_NatsEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

Appends one or more events to the requested stream after checking the expected version.

```csharp
public Task AppendAsync(string streamId, IReadOnlyCollection<IDomainEvent> events, long expectedVersion, CancellationToken cancellationToken = default)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`events` [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection\-1)<IDomainEvent\>

The events to append.

`expectedVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The current stream version expected by the caller. Use <code>-1</code> to require a brand-new stream.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the append finishes.

### <a id="Cephalon_EventSourcing_Nats_NatsEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

Gets the latest version known for the requested stream.

```csharp
public Task<long> GetVersionAsync(string streamId, CancellationToken cancellationToken = default)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[long](https://learn.microsoft.com/dotnet/api/system.int64)\>

A task that returns the current stream version, or <code>-1</code> when the stream does not exist.

### <a id="Cephalon_EventSourcing_Nats_NatsEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

Reads the requested stream from the supplied version onward.

```csharp
public IAsyncEnumerable<IDomainEvent> ReadStreamAsync(string streamId, long fromVersion = 0, CancellationToken cancellationToken = default)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`fromVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The first stream version to include. The default is <code>0</code>.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [IAsyncEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.iasyncenumerable\-1)<IDomainEvent\>

An async sequence of domain events in ascending stream-version order.
