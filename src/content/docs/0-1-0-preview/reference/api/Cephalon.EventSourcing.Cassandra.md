---
title: Namespace Cephalon.EventSourcing.Cassandra
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra
editUrl: false
---

### Namespaces

 [Cephalon.EventSourcing.Cassandra.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-hosting/)

### Classes

 [CassandraEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraevententry/)

Represents one persisted domain event row stored by the Cassandra event-store provider.

 [CassandraEventSourcingConfiguration](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventsourcingconfiguration/)

Holds the CQL DDL template for bootstrapping the Cassandra event-store table.

 [CassandraEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-cassandra-cassandraeventstore/)

Cassandra-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref> using a wide-column table
with a composite primary key of <code>(stream_id, stream_version)</code> and optimistic concurrency
detection via Lightweight Transaction (LWT) <code>INSERT IF NOT EXISTS</code>.
