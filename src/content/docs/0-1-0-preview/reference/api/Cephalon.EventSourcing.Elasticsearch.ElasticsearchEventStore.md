---
title: Class ElasticsearchEventStore
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch-elasticsearcheventstore
editUrl: false
---

Namespace: [Cephalon.EventSourcing.Elasticsearch](/0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch/)  
Assembly: Cephalon.EventSourcing.Elasticsearch.dll  

Elasticsearch-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a search index for event streams.

```csharp
public sealed class ElasticsearchEventStore : IEventStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ElasticsearchEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-elasticsearch-elasticsearcheventstore/)

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

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventStore__ctor_Elastic_Clients_Elasticsearch_ElasticsearchClient_System_String_"></a> ElasticsearchEventStore\(ElasticsearchClient, string\)

Elasticsearch-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a search index for event streams.

```csharp
public ElasticsearchEventStore(ElasticsearchClient client, string indexName)
```

#### Parameters

`client` ElasticsearchClient

`indexName` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventStore_AppendAsync_System_String_System_Collections_Generic_IReadOnlyCollection_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Int64_System_Threading_CancellationToken_"></a> AppendAsync\(string, IReadOnlyCollection<IDomainEvent\>, long, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventStore_GetVersionAsync_System_String_System_Threading_CancellationToken_"></a> GetVersionAsync\(string, CancellationToken\)

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

### <a id="Cephalon_EventSourcing_Elasticsearch_ElasticsearchEventStore_ReadStreamAsync_System_String_System_Int64_System_Threading_CancellationToken_"></a> ReadStreamAsync\(string, long, CancellationToken\)

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
