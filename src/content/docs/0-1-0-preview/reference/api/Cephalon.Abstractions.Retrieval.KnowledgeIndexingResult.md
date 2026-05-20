---
title: Class KnowledgeIndexingResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes the result of a managed indexing attempt.

```csharp
public sealed record KnowledgeIndexingResult : IEquatable<KnowledgeIndexingResult>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeIndexingResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingresult/)

#### Implements

[IEquatable<KnowledgeIndexingResult\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult__ctor_System_String_System_String_System_String_System_DateTimeOffset_System_Nullable_System_DateTimeOffset__System_Nullable_System_DateTimeOffset__System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeIndexingResult\(string, string, string, DateTimeOffset, DateTimeOffset?, DateTimeOffset?, int, string?, IReadOnlyDictionary<string, string\>\)

Describes the result of a managed indexing attempt.

```csharp
public KnowledgeIndexingResult(string CollectionId, string RunId, string Outcome, DateTimeOffset ObservedAtUtc, DateTimeOffset? IndexedAtUtc, DateTimeOffset? SourceFreshnessUtc, int DocumentCount, string? Error, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`CollectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier that was indexed.

`RunId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable indexing run identifier.

`Outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable indexing outcome identifier.

`ObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the outcome was observed.

`IndexedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the replacement index was published.

`SourceFreshnessUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The newest source-document timestamp observed during indexing.

`DocumentCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of documents stored in the replacement index.

`Error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when indexing failed.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Optional operator-facing metadata captured with the result.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_CollectionId"></a> CollectionId

The collection identifier that was indexed.

```csharp
public string CollectionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_DocumentCount"></a> DocumentCount

The number of documents stored in the replacement index.

```csharp
public int DocumentCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_Error"></a> Error

The operator-facing error summary when indexing failed.

```csharp
public string? Error { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_IndexedAtUtc"></a> IndexedAtUtc

The UTC timestamp when the replacement index was published.

```csharp
public DateTimeOffset? IndexedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_Metadata"></a> Metadata

Optional operator-facing metadata captured with the result.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_ObservedAtUtc"></a> ObservedAtUtc

The UTC timestamp when the outcome was observed.

```csharp
public DateTimeOffset ObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_Outcome"></a> Outcome

The stable indexing outcome identifier.

```csharp
public string Outcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_RunId"></a> RunId

The stable indexing run identifier.

```csharp
public string RunId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeIndexingResult_SourceFreshnessUtc"></a> SourceFreshnessUtc

The newest source-document timestamp observed during indexing.

```csharp
public DateTimeOffset? SourceFreshnessUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?
