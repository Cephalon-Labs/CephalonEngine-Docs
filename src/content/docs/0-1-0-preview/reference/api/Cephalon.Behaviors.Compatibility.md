---
title: Namespace Cephalon.Behaviors.Compatibility
slug: 0-1-0-preview/reference/api/cephalon-behaviors-compatibility
editUrl: false
---

### Classes

 [Abt001SagaStepStatefulTransportRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt001sagastepstatefultransportrule/)

ABT-001: A <code>saga-step</code> behavior must be exposed through at least one stateful transport
(<code>rabbitmq</code>, <code>kafka</code>, or <code>in-memory</code>).
Stateful transports provide the durable messaging guarantees required for saga coordination.

 [Abt003ProcessManagerRequiresInboxRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt003processmanagerrequiresinboxrule/)

ABT-003: A <code>process-manager</code> behavior must have inbox deduplication enabled
to guarantee exactly-once processing across checkpoints.

 [Abt004CqrsMultipleTransportsRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt004cqrsmultipletransportsrule/)

ABT-004: A CQRS behavior with more than one transport may produce unexpected routing ambiguity.

 [Abt005SagaChoreographyOutboxRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt005sagachoreographyoutboxrule/)

ABT-005: A <code>saga-choreography</code> behavior should enable outbox staging
so choreography publications can survive transient failures and retries safely.

 [Abt006DurableExecutionRequiresEventSourcingRule](/0-1-0-preview/reference/api/cephalon-behaviors-compatibility-abt006durableexecutionrequireseventsourcingrule/)

ABT-006: A <code>durable-execution</code> behavior must declare event sourcing
so the runtime and operator surfaces stay aligned with replay semantics.
