---
title: Class KnowledgeDocumentProviderContext
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocumentprovidercontext
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Provides request context to a knowledge document provider during managed indexing.

```csharp
public sealed class KnowledgeDocumentProviderContext
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeDocumentProviderContext](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocumentprovidercontext/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext__ctor_Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor_System_String_System_DateTimeOffset_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeDocumentProviderContext\(KnowledgeCollectionDescriptor, string, DateTimeOffset, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates provider context for a managed indexing request.

```csharp
public KnowledgeDocumentProviderContext(KnowledgeCollectionDescriptor collection, string runId, DateTimeOffset requestedAtUtc, string? actorId = null, string? correlationId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`collection` [KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)

The collection being indexed.

`runId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable indexing run identifier.

`requestedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when indexing was requested.

`actorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional actor that requested indexing.

`correlationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional correlation identifier for the indexing run.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the indexing request.

## Properties

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_ActorId"></a> ActorId

Gets the optional actor that requested indexing.

```csharp
public string? ActorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_Collection"></a> Collection

Gets the collection being indexed.

```csharp
public KnowledgeCollectionDescriptor Collection { get; }
```

#### Property Value

 [KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_CorrelationId"></a> CorrelationId

Gets the optional correlation identifier for the indexing run.

```csharp
public string? CorrelationId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the indexing request.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_RequestedAtUtc"></a> RequestedAtUtc

Gets the UTC timestamp when indexing was requested.

```csharp
public DateTimeOffset RequestedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_RunId"></a> RunId

Gets the stable indexing run identifier.

```csharp
public string RunId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
