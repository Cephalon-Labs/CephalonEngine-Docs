---
title: Namespace Cephalon.EventSourcing.Qdrant
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant
editUrl: false
---

### Namespaces

 [Cephalon.EventSourcing.Qdrant.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-hosting/)

### Classes

 [QdrantEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdrantevententry/)

Plain-object representation of a single event row stored in a Qdrant vector collection.

 [QdrantEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-qdrant-qdranteventstore/)

Qdrant-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using vector-collection points
with 1-dimensional dummy vectors and payload-field storage.
Point IDs are derived via SHA-256 of <code>{streamId}:{streamVersion}</code> for uniqueness.
Optimistic concurrency is enforced at the application layer via a pre-append version check.
