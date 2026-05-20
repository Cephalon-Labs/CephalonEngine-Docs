---
title: Namespace Cephalon.EventSourcing.Nats
slug: 0-1-0-preview/reference/api/cephalon-eventsourcing-nats
editUrl: false
---

### Namespaces

 [Cephalon.EventSourcing.Nats.Hosting](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-hosting/)

### Classes

 [NatsEventEntry](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natsevententry/)

Plain-object representation of a single event stored in a NATS JetStream KV entry.

 [NatsEventStore](/0-1-0-preview/reference/api/cephalon-eventsourcing-nats-natseventstore/)

NATS JetStream KV-backed implementation of <xref href="Cephalon.Abstractions.EventSourcing.IEventStore" data-throw-if-not-resolved="false"></xref>.
Each event is stored as a KV entry with key format <code>{streamId}/{streamVersion:D20}</code>.
Zero-padding ensures correct lexicographic ordering of version keys.
Optimistic concurrency is enforced via a pre-append version check and <code>CreateAsync</code>
which throws <xref href="NATS.Client.KeyValueStore.NatsKVCreateException" data-throw-if-not-resolved="false"></xref> if the key already exists.
