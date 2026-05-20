---
title: Class CassandraEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Cassandra](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra/)  
Assembly: Cephalon.EventSourcing.Cassandra.dll  

Cassandra-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a wide-column table
with a composite primary key of <code>(stream_id, stream_version)</code> and optimistic concurrency
detection via Lightweight Transaction (LWT) <code>INSERT IF NOT EXISTS</code>.

```csharp
public sealed class CassandraEventStore : IEventStore, IDisposable, IAsyncDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CassandraEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventstore/)

#### Implements

IEventStore, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IAsyncDisposable](https://learn.microsoft.com/dotnet/api/system.iasyncdisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
<strong>Known limitation</strong>: The version-read followed by LWT INSERT is not fully atomic.
Two concurrent writers that both observe the same <code>expectedVersion</code> will both proceed
to issue their LWT INSERT statements. The second writer's LWT will return <code>[applied]=false</code>
(because the clustering key is already occupied by the first writer's event), which is caught
and rethrown as <xref href="Cephalon.Abstractions.EventSourcing.EventStreamConcurrencyException" data-throw-if-not-resolved="false"></xref>. The optimistic-concurrency
guard therefore holds, but it is enforced at the LWT layer rather than through a single
atomic compare-and-swap on the version itself.
</p>

## Constructors

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore__ctor_Cassandra_ICluster_System_String_System_String_"></a> CassandraEventStore\(ICluster, string, string\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Cassandra.CassandraEventStore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CassandraEventStore(ICluster cluster, string keyspace, string tableName)
```

#### Parameters

`cluster` ICluster

The Cassandra cluster. Session is opened lazily on first operation.

`keyspace` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cassandra keyspace that contains the event-streams table.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cassandra table name used to persist event stream rows.

## Methods

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore_DisposeAsync"></a> DisposeAsync\(\)

Performs application-defined tasks associated with freeing, releasing, or
resetting unmanaged resources asynchronously.

```csharp
public ValueTask DisposeAsync()
```

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that represents the asynchronous dispose operation.

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Cassandra_CassandraEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

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
