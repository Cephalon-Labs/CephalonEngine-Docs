---
title: Class ClickHouseEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.ClickHouse](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse/)  
Assembly: Cephalon.EventSourcing.ClickHouse.dll  

ClickHouse-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a <code>MergeTree</code> table
ordered by <code>(stream_id, stream_version)</code> for efficient per-stream range scans and append operations.

```csharp
public sealed class ClickHouseEventStore : IEventStore, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClickHouseEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-clickhouse-clickhouseeventstore/)

#### Implements

IEventStore, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

<p>
<strong>Known limitation — optimistic concurrency</strong>: ClickHouse <code>MergeTree</code> does NOT enforce
uniqueness on the <code>ORDER BY</code> key. Two concurrent writers that both observe the same
<code>expectedVersion</code> can both INSERT successfully — there is no database-level rejection.
The pre-read version check in <xref href="Cephalon.EventSourcing.ClickHouse.ClickHouseEventStore.AppendAsync(System.String%2cSystem.Collections.Generic.IReadOnlyCollection%7bCephalon.Abstractions.EventSourcing.IDomainEvent%7d%2cSystem.Int64%2cSystem.Threading.CancellationToken)" data-throw-if-not-resolved="false"></xref> catches most single-process conflicts
and throws <xref href="Cephalon.Abstractions.EventSourcing.EventStreamConcurrencyException" data-throw-if-not-resolved="false"></xref>, but a race window remains between
the version read and the INSERT. For strict concurrency control, wrap append operations in
application-layer distributed locking.
</p>
<p>
ClickHouse is optimized for append-heavy analytics workloads. This provider is well-suited to
high-throughput event append scenarios where occasional duplicate detection at the application
layer is acceptable.
</p>

## Constructors

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventStore__ctor_System_String_System_String_"></a> ClickHouseEventStore\(string, string\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.ClickHouse.ClickHouseEventStore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ClickHouseEventStore(string connectionString, string tableName)
```

#### Parameters

`connectionString` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse ADO.NET connection string.

`tableName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The ClickHouse table name used to persist event stream rows.

## Methods

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventStore_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_ClickHouse_ClickHouseEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

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
