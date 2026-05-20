---
title: Class KnowledgeQueryRequest
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryrequest
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes a managed retrieval query request for one knowledge collection.

```csharp
public sealed class KnowledgeQueryRequest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeQueryRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryrequest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest__ctor_System_String_System_String_System_Nullable_System_Int32__System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeQueryRequest\(string, string, int?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a managed retrieval query request.

```csharp
public KnowledgeQueryRequest(string collectionId, string queryText, int? maxResults = null, string? actorId = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`collectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier to query.

`queryText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The text to search for.

`maxResults` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The optional maximum number of matches to return. When omitted, the runtime default is used.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional actor that requested the query.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the query.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request metadata used by provider-specific query engines.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_ActorId"></a> ActorId

Gets the optional actor that requested the query.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_CollectionId"></a> CollectionId

Gets the collection identifier to query.

```csharp
public string CollectionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the query.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_MaxResults"></a> MaxResults

Gets the optional maximum number of matches to return.

```csharp
public int? MaxResults { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_Metadata"></a> Metadata

Gets optional request metadata used by provider-specific query engines.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_QueryText"></a> QueryText

Gets the text to search for.

```csharp
public string QueryText { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
