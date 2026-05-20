---
title: Namespace Cephalon.Abstractions.Retrieval
slug: 0-1-0-preview/reference/api/cephalon-abstractions-retrieval
editUrl: false
---

### Classes

 [KnowledgeIndexFreshnessStates](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexfreshnessstates/)

Defines stable freshness state identifiers for managed retrieval indexes.

 [KnowledgeIndexState](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexstate/)

Describes the latest managed index and query execution state for one knowledge collection.

 [KnowledgeIndexingOutcomes](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingoutcomes/)

Defines stable outcome identifiers emitted by managed retrieval indexing.

 [KnowledgeIndexingRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingrequest/)

Describes a managed indexing request for one knowledge collection.

 [KnowledgeIndexingResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgeindexingresult/)

Describes the result of a managed indexing attempt.

 [KnowledgeQueryMatch](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequerymatch/)

Describes one ranked document match returned by the managed query engine.

 [KnowledgeQueryRequest](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryrequest/)

Describes a managed retrieval query request for one knowledge collection.

 [KnowledgeQueryResult](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-knowledgequeryresult/)

Describes the result of a managed retrieval query.

### Interfaces

 [IKnowledgeIndexCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgeindexcatalog/)

Exposes operator-facing index and query execution state for the active retrieval runtime.

 [IKnowledgeIndexer](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgeindexer/)

Builds and replaces managed indexes for registered knowledge collections.

 [IKnowledgeQueryEngine](/0-1-0-preview/reference/api/cephalon-abstractions-retrieval-iknowledgequeryengine/)

Executes managed retrieval queries over indexed knowledge documents.
