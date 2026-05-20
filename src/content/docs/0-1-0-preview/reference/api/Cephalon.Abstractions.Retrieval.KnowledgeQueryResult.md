---
title: Class KnowledgeQueryResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes the result of a managed retrieval query.

```csharp
public sealed record KnowledgeQueryResult : IEquatable<KnowledgeQueryResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryresult/)

#### Implements

[IEquatable<KnowledgeQueryResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult__ctor_System_String_System_String_System_DateTimeOffset_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch__System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeQueryResult\(string, string, DateTimeOffset, IReadOnlyList<KnowledgeQueryMatch\>, int, IReadOnlyDictionary<string, string\>\)

Describes the result of a managed retrieval query.

```csharp
public KnowledgeQueryResult(string CollectionId, string QueryText, DateTimeOffset QueriedAtUtc, IReadOnlyList<KnowledgeQueryMatch> Matches, int TotalIndexedDocuments, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`CollectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier that was queried.

`QueryText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The query text supplied by the caller.

`QueriedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the query executed.

`Matches` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[KnowledgeQueryMatch](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequerymatch/)\>

The ranked matches returned by the managed query engine.

`TotalIndexedDocuments` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of indexed documents available at query time.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Optional operator-facing metadata captured with the query result.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_CollectionId"></a> CollectionId

The collection identifier that was queried.

```csharp
public string CollectionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_HasMatches"></a> HasMatches

Gets a value indicating whether the query returned at least one match.

```csharp
public bool HasMatches { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_Matches"></a> Matches

The ranked matches returned by the managed query engine.

```csharp
public IReadOnlyList<KnowledgeQueryMatch> Matches { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[KnowledgeQueryMatch](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequerymatch/)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_Metadata"></a> Metadata

Optional operator-facing metadata captured with the query result.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_QueriedAtUtc"></a> QueriedAtUtc

The UTC timestamp when the query executed.

```csharp
public DateTimeOffset QueriedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_QueryText"></a> QueryText

The query text supplied by the caller.

```csharp
public string QueryText { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryResult_TotalIndexedDocuments"></a> TotalIndexedDocuments

The number of indexed documents available at query time.

```csharp
public int TotalIndexedDocuments { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
