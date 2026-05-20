---
title: Namespace Cephalon.Behaviors.Patterns.Stores
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores
editUrl: false
---

### Classes

 [InMemoryProcessCheckpointStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemoryprocesscheckpointstore/)

An in-memory implementation of <xref href="Cephalon.Behaviors.Patterns.Abstractions.IProcessCheckpointStore" data-throw-if-not-resolved="false"></xref> backed by a
<xref href="System.Collections.Concurrent.ConcurrentDictionary%602" data-throw-if-not-resolved="false"></xref>.
Suitable for development and testing; replace with a durable store for production use.

 [InMemorySagaStateStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemorysagastatestore/)

An in-memory implementation of <xref href="Cephalon.Behaviors.Patterns.Abstractions.ISagaStateStore" data-throw-if-not-resolved="false"></xref> backed by a
<xref href="System.Collections.Concurrent.ConcurrentDictionary%602" data-throw-if-not-resolved="false"></xref> with JSON serialization.
Suitable for development and testing; replace with a durable store for production use.
