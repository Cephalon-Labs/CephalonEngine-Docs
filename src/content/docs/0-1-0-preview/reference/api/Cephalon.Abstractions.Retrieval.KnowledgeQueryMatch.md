---
title: Class KnowledgeQueryMatch
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequerymatch
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Describes one ranked document match returned by the managed query engine.

```csharp
public sealed record KnowledgeQueryMatch : IEquatable<KnowledgeQueryMatch>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeQueryMatch](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequerymatch/)

#### Implements

[IEquatable<KnowledgeQueryMatch\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch__ctor_System_String_System_String_System_String_System_String_System_Int32_System_Uri_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_DateTimeOffset__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeQueryMatch\(string, string, string, string, int, Uri?, IReadOnlyList<string\>, DateTimeOffset?, IReadOnlyDictionary<string, string\>\)

Describes one ranked document match returned by the managed query engine.

```csharp
public KnowledgeQueryMatch(string CollectionId, string DocumentId, string Title, string ContentSnippet, int Score, Uri? Uri, IReadOnlyList<string> Tags, DateTimeOffset? LastModifiedAtUtc, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`CollectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier that produced the match.

`DocumentId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The matched document identifier.

`Title` [string](https://learn.microsoft.com/dotnet/api/system.string)

The matched document title.

`ContentSnippet` [string](https://learn.microsoft.com/dotnet/api/system.string)

A short content snippet around the matched text.

`Score` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The lexical relevance score assigned by the managed query engine.

`Uri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

The optional source document URI.

`Tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The normalized tags attached to the matched document.

`LastModifiedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the matched source document was last modified.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata attached to the matched document.

## Properties

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_CollectionId"></a> CollectionId

The collection identifier that produced the match.

```csharp
public string CollectionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_ContentSnippet"></a> ContentSnippet

A short content snippet around the matched text.

```csharp
public string ContentSnippet { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_DocumentId"></a> DocumentId

The matched document identifier.

```csharp
public string DocumentId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_LastModifiedAtUtc"></a> LastModifiedAtUtc

The UTC timestamp when the matched source document was last modified.

```csharp
public DateTimeOffset? LastModifiedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_Metadata"></a> Metadata

The operator-facing metadata attached to the matched document.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_Score"></a> Score

The lexical relevance score assigned by the managed query engine.

```csharp
public int Score { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_Tags"></a> Tags

The normalized tags attached to the matched document.

```csharp
public IReadOnlyList<string> Tags { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_Title"></a> Title

The matched document title.

```csharp
public string Title { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Retrieval_KnowledgeQueryMatch_Uri"></a> Uri

The optional source document URI.

```csharp
public Uri? Uri { get; init; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?
