---
title: Namespace Cephalon.Abstractions.EventSourcing
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing
editUrl: false
---

### Classes

 [DomainEvent](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-domainevent/)

Provides a minimal record base for immutable domain events.

 [EventStreamConcurrencyException](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamconcurrencyexception/)

Represents an optimistic concurrency failure while appending events to a stream.

 [EventStreamDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-eventstreamdescriptor/)

Describes one logical event stream visible to the current runtime.

### Interfaces

 [IAggregate<TState\>](Cephalon.Abstractions.EventSourcing.IAggregate\-1.md)

Applies domain events to an aggregate state projection.

 [IDomainEvent](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-idomainevent/)

Represents one immutable domain event stored in an append-only stream.

 [IEventStore](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstore/)

Appends and replays immutable domain events for one logical event store.

 [IEventStoreCatalog](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstorecatalog/)

Exposes the event-stream surfaces visible to the current runtime.

 [IEventStoreContributor](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstorecontributor/)

Contributes one or more event-stream descriptors to the active runtime.

 [IEventStoreRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-ieventstoreregistry/)

Receives event-stream descriptors contributed by active modules or packages.

 [ISnapshotStore](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-isnapshotstore/)

Persists and rehydrates optional aggregate snapshots for event-sourced workloads.
