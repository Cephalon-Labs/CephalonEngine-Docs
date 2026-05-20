---
title: Interface IKnowledgeIndexCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgeindexcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Exposes operator-facing index and query execution state for the active retrieval runtime.

```csharp
public interface IKnowledgeIndexCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Retrieval_IKnowledgeIndexCatalog_States"></a> States

Gets the latest index state reported for registered knowledge collections.

```csharp
IReadOnlyList<KnowledgeIndexState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[KnowledgeIndexState](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate/)\>

## Methods

### <a id="Cephalon_Abstractions_Retrieval_IKnowledgeIndexCatalog_GetByCollectionId_System_String_"></a> GetByCollectionId\(string\)

Gets the latest index state for a collection when one exists.

```csharp
KnowledgeIndexState? GetByCollectionId(string collectionId)
```

#### Parameters

`collectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier to resolve.

#### Returns

 [KnowledgeIndexState](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate/)?

The latest state for the collection, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when no activity has been recorded.

### <a id="Cephalon_Abstractions_Retrieval_IKnowledgeIndexCatalog_TryGet_System_String_Cephalon_Abstractions_Retrieval_KnowledgeIndexState__"></a> TryGet\(string, out KnowledgeIndexState?\)

Attempts to resolve the latest index state for a collection.

```csharp
bool TryGet(string collectionId, out KnowledgeIndexState? state)
```

#### Parameters

`collectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The collection identifier to resolve.

`state` [KnowledgeIndexState](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate/)?

When this method returns, contains the state if one was recorded.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when state exists; otherwise <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
