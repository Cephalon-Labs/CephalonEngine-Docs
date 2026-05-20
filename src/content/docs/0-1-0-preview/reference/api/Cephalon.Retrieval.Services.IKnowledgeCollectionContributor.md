---
title: Interface IKnowledgeCollectionContributor
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecollectioncontributor
editUrl: false
---

Namespace: [Cephalon.Retrieval.Services](/0-1-0-preview/reference/api/cephalon-retrieval-services/)  
Assembly: Cephalon.Retrieval.dll  

Allows a module to contribute knowledge collections into the active retrieval runtime pack.

```csharp
public interface IKnowledgeCollectionContributor
```

## Methods

### <a id="Cephalon_Retrieval_Services_IKnowledgeCollectionContributor_RegisterCollections_Cephalon_Retrieval_Services_IKnowledgeCollectionRegistry_"></a> RegisterCollections\(IKnowledgeCollectionRegistry\)

Registers one or more knowledge collection descriptors with the supplied registry.

```csharp
void RegisterCollections(IKnowledgeCollectionRegistry collections)
```

#### Parameters

`collections` [IKnowledgeCollectionRegistry](/0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecollectionregistry/)

The registry that collects contributed collection descriptors.
