---
title: Class QdrantEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdranteventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Qdrant](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant/)  
Assembly: Cephalon.EventSourcing.Qdrant.dll  

Qdrant-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using vector-collection points
with 1-dimensional dummy vectors and payload-field storage.
Point IDs are derived via SHA-256 of <code>{streamId}:{streamVersion}</code> for uniqueness.
Optimistic concurrency is enforced at the application layer via a pre-append version check.

```csharp
public sealed class QdrantEventStore : IEventStore, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[QdrantEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdranteventstore/)

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
<strong>Known limitation</strong>: The version-read followed by upsert is not fully atomic.
Two concurrent writers that both observe the same <code>expectedVersion</code> will both proceed
to issue their upsert statements. The compound point-ID hash provides a structural safeguard,
but optimistic concurrency is primarily enforced at the application layer, consistent with
the ClickHouse and OpenSearch provider approaches.
</p>

## Constructors

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventStore__ctor_Qdrant_Client_QdrantClient_System_String_"></a> QdrantEventStore\(QdrantClient, string\)

Initializes a new instance of the <xref href="Cephalon.EventSourcing.Qdrant.QdrantEventStore" data-throw-if-not-resolved="false"></xref> class.

```csharp
public QdrantEventStore(QdrantClient client, string collectionName)
```

#### Parameters

`client` [QdrantClient](https://github.com/qdrant/qdrant\-dotnet/blob/17af6b7979ec3f07f4d2e6120c51bbc4069f8017/src/Qdrant.Client/QdrantClient.cs)

The Qdrant client used to manage collections and points.

`collectionName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Qdrant collection name used to persist event stream points.

## Methods

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventStore_Dispose"></a> Dispose\(\)

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp
public void Dispose()
```

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Qdrant_QdrantEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

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
