---
title: Class KnowledgeIndexingRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes a managed indexing request for one knowledge collection.

```csharp
public sealed class KnowledgeIndexingRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeIndexingRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest__ctor_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeIndexingRequest\(string, string, string?, string?, DateTimeOffset?, IReadOnlyDictionary<string, string\>?\)

Creates a managed indexing request.

```csharp
public KnowledgeIndexingRequest(string collectionId, string runId, string? actorId = null, string? correlationId = null, DateTimeOffset? requestedAtUtc = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`collectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier to index.

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier for this indexing attempt.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional actor that requested indexing.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for this indexing attempt.

`requestedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The optional UTC timestamp when indexing was requested.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the indexing request.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_ActorId"></a> ActorId

Gets the optional actor that requested indexing.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_CollectionId"></a> CollectionId

Gets the collection identifier to index.

```csharp
public string CollectionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for this indexing attempt.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the indexing request.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_RequestedAtUtc"></a> RequestedAtUtc

Gets the UTC timestamp when indexing was requested.

```csharp
public DateTimeOffset RequestedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_RunId"></a> RunId

Gets the stable run identifier for this indexing attempt.

```csharp
public string RunId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
