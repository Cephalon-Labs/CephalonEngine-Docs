---
title: Interface IKnowledgeDocumentProvider
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgedocumentprovider
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Loads documents for one knowledge collection so the retrieval runtime can build a managed index.

```csharp
public interface IKnowledgeDocumentProvider
```

## Properties

### <a id="Cephalon_Retrieval_Services_IKnowledgeDocumentProvider_CollectionId"></a> CollectionId

Gets the collection identifier served by this provider.

```csharp
string CollectionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Retrieval_Services_IKnowledgeDocumentProvider_LoadDocumentsAsync_Cephalon_Retrieval_Services_KnowledgeDocumentProviderContext_System_Threading_CancellationToken_"></a> LoadDocumentsAsync\(KnowledgeDocumentProviderContext, CancellationToken\)

Loads the current document set for the requested collection.

```csharp
ValueTask<IReadOnlyList<KnowledgeDocument>> LoadDocumentsAsync(KnowledgeDocumentProviderContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`context` [KnowledgeDocumentProviderContext](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocumentprovidercontext/)

The provider context for the current indexing request.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that can cancel the document load.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[KnowledgeDocument](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocument/)\>\>

The current document set that should replace the collection index.
