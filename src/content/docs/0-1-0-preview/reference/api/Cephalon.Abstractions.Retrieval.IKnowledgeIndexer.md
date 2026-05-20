---
title: Interface IKnowledgeIndexer
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgeindexer
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Builds and replaces managed indexes for registered knowledge collections.

```csharp
public interface IKnowledgeIndexer
```

## Methods

### <a id="Cephalon_Abstractions_Retrieval_IKnowledgeIndexer_IndexAsync_Cephalon_Abstractions_Retrieval_KnowledgeIndexingRequest_System_Threading_CancellationToken_"></a> IndexAsync\(KnowledgeIndexingRequest, CancellationToken\)

Indexes the documents supplied by providers for the requested collection.

```csharp
ValueTask<KnowledgeIndexingResult> IndexAsync(KnowledgeIndexingRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [KnowledgeIndexingRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingrequest/)

The indexing request to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the indexing run.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[KnowledgeIndexingResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingresult/)\>

The final indexing result recorded for operator introspection.
