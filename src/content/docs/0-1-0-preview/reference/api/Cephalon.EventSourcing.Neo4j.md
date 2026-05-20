---
title: Namespace Cephalon.EventSourcing.Neo4j
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j
editUrl: false
---

### Namespaces

 [Cephalon.EventSourcing.Neo4j.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-hosting/)

### Classes

 [Neo4jEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jevententry/)

Represents the fields stored on each Neo4j <code>:Event</code> node by the event-store provider.

 [Neo4jEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jeventsourcingconfiguration/)

Holds schema constants and the Cypher statement that bootstraps the event-store constraint in Neo4j.

 [Neo4jEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-neo4j-neo4jeventstore/)

Neo4j-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using graph nodes for event streams.
Each domain event is stored as an <code>:Event</code> node with a compound node key constraint on
<code>(streamId, streamVersion)</code> enforcing optimistic concurrency at the database level.
