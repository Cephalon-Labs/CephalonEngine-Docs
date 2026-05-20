---
title: Namespace Cephalon.Retrieval.Services
slug: 0-1-0-preview/reference/api/cephalon-retrieval-services
editUrl: false
---

### Classes

 [KnowledgeCollectionDescriptor](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgecollectiondescriptor/)

Describes a knowledge collection that can be surfaced through the retrieval runtime pack.

 [KnowledgeDocument](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocument/)

Describes one source document that can be indexed by the managed retrieval runtime.

 [KnowledgeDocumentProviderContext](/0-1-0-preview/reference/api/cephalon-retrieval-services-knowledgedocumentprovidercontext/)

Provides request context to a knowledge document provider during managed indexing.

### Interfaces

 [IKnowledgeCatalog](/0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecatalog/)

Exposes the merged set of knowledge collections available to the active retrieval runtime.

 [IKnowledgeCollectionContributor](/0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecollectioncontributor/)

Allows a module to contribute knowledge collections into the active retrieval runtime pack.

 [IKnowledgeCollectionRegistry](/0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgecollectionregistry/)

Collects knowledge collection descriptors contributed to the active retrieval runtime pack.

 [IKnowledgeDocumentProvider](/0-1-0-preview/reference/api/cephalon-retrieval-services-iknowledgedocumentprovider/)

Loads documents for one knowledge collection so the retrieval runtime can build a managed index.
