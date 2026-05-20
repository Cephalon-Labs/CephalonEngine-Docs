---
title: Interface IKnowledgeCatalog
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecatalog
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Exposes the merged set of knowledge collections available to the active retrieval runtime.

```csharp
public interface IKnowledgeCatalog
```

## Properties

### <a id="Cephalon_Retrieval_Services_IKnowledgeCatalog_Collections"></a> Collections

Gets the effective collection set after host options and module contributors have both been applied.

```csharp
IReadOnlyList<KnowledgeCollectionDescriptor> Collections { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)\>

## Methods

### <a id="Cephalon_Retrieval_Services_IKnowledgeCatalog_TryGet_System_String_Cephalon_Retrieval_Services_KnowledgeCollectionDescriptor__"></a> TryGet\(string, out KnowledgeCollectionDescriptor\)

Attempts to resolve a knowledge collection descriptor by identifier.

```csharp
bool TryGet(string collectionId, out KnowledgeCollectionDescriptor collection)
```

#### Parameters

`collectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier to resolve.

`collection` [KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)

When this method returns, contains the resolved collection if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the collection exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
