---
title: Class KnowledgeDocument
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocument
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Describes one source document that can be indexed by the managed retrieval runtime.

```csharp
public sealed class KnowledgeDocument
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[KnowledgeDocument](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocument/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument__ctor_System_String_System_String_System_String_System_Uri_System_Collections_Generic_IReadOnlyList_System_String__System_Nullable_System_DateTimeOffset__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> KnowledgeDocument\(string, string, string, Uri?, IReadOnlyList<string\>?, DateTimeOffset?, IReadOnlyDictionary<string, string\>?\)

Creates a knowledge document for managed indexing.

```csharp
public KnowledgeDocument(string id, string title, string content, Uri? uri = null, IReadOnlyList<string>? tags = null, DateTimeOffset? lastModifiedAtUtc = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable document identifier within its collection.

`title` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable document title.

`content` [string](https://learn.microsoft.com/dotnet/api/system.string)

The searchable document content.

`uri` [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?

An optional document URI for operator drill-down.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional tags that classify the document.

`lastModifiedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the source document was last modified.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata attached to the document.

## Properties

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Content"></a> Content

Gets the searchable document content.

```csharp
public string Content { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Id"></a> Id

Gets the stable document identifier within its collection.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_LastModifiedAtUtc"></a> LastModifiedAtUtc

Gets the UTC timestamp when the source document was last modified.

```csharp
public DateTimeOffset? LastModifiedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Metadata"></a> Metadata

Gets optional operator-facing metadata attached to the document.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Tags"></a> Tags

Gets the normalized tags that classify the document.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Title"></a> Title

Gets the human-readable document title.

```csharp
public string Title { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Retrieval_Services_KnowledgeDocument_Uri"></a> Uri

Gets an optional document URI for operator drill-down.

```csharp
public Uri? Uri { get; }
```

#### Property Value

 [Uri](https://learn.microsoft.com/dotnet/api/system.uri)?
