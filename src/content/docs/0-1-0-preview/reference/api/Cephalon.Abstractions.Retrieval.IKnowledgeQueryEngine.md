---
title: Interface IKnowledgeQueryEngine
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgequeryengine
editUrl: false
---

Namespace: [Cephalon.Abstractions.Retrieval](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval/)  
Assembly: Cephalon.Abstractions.dll  

Executes managed retrieval queries over indexed knowledge documents.

```csharp
public interface IKnowledgeQueryEngine
```

## Methods

### <a id="Cephalon_Abstractions_Retrieval_IKnowledgeQueryEngine_QueryAsync_Cephalon_Abstractions_Retrieval_KnowledgeQueryRequest_System_Threading_CancellationToken_"></a> QueryAsync\(KnowledgeQueryRequest, CancellationToken\)

Queries the active managed index for a collection.

```csharp
ValueTask<KnowledgeQueryResult> QueryAsync(KnowledgeQueryRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [KnowledgeQueryRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryrequest/)

The query request to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the query execution.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[KnowledgeQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryresult/)\>

The query result, including any ranked matches found in the current index.
