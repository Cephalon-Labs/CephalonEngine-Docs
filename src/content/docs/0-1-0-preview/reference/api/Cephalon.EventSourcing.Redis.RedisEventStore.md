---
title: Class RedisEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-redis-rediseventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Redis](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis/)  
Assembly: Cephalon.EventSourcing.Redis.dll  

Redis Streams-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> that appends domain events as stream entries.

```csharp
public sealed class RedisEventStore : IEventStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RedisEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-redis-rediseventstore/)

#### Implements

IEventStore

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
Each logical event stream is stored as a Redis Stream at key <code>{keyPrefix}stream:{streamId}</code>.
Every entry in the stream carries the fields <code>StreamVersion</code>, <code>EventType</code>, <code>Payload</code>,
<code>OccurredAtUtc</code>, and <code>AppendedAtUtc</code>.
</p>
<p>
<strong>Concurrency semantics:</strong> this provider performs an optimistic check — it reads the current
stream version before appending and throws <xref href="Cephalon.Abstractions.EventSourcing.EventStreamConcurrencyException" data-throw-if-not-resolved="false"></xref> if the version
does not match. There is no atomic test-and-set; a narrow concurrent race between the version read and the
subsequent <code>XADD</code> calls is possible. This is a known limitation of this slice. For workloads requiring
stronger guarantees, consider pairing with a Lua script or Redis transactions (MULTI/EXEC) in a future slice.
</p>

## Constructors

### <a id="Cephalon_EventSourcing_Redis_RedisEventStore__ctor_StackExchange_Redis_IConnectionMultiplexer_System_String_"></a> RedisEventStore\(IConnectionMultiplexer, string\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Redis.RedisEventStore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public RedisEventStore(IConnectionMultiplexer multiplexer, string keyPrefix = "cephalon:")
```

#### Parameters

`multiplexer` IConnectionMultiplexer

The Redis connection multiplexer.

`keyPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The key prefix applied to all stream keys (e.g. <code>"cephalon:"</code>).

## Methods

### <a id="Cephalon_EventSourcing_Redis_RedisEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Redis_RedisEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Redis_RedisEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

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
