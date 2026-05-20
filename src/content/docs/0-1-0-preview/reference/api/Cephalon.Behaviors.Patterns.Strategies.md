---
title: Namespace Cephalon.Behaviors.Patterns.Strategies
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies
editUrl: false
---

### Classes

 [ChoreographySagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-choreographysagaexecutionstrategy/)

Executes behaviors that follow the choreography-based saga pattern.
Publications returned by the behavior are staged through <xref href="Cephalon.Behaviors.Patterns.Abstractions.ISagaChoreographyPublisher" data-throw-if-not-resolved="false"></xref>
so other services or modules can continue the workflow by reacting to events.

 [CqrsExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-cqrsexecutionstrategy/)

Executes behaviors that follow the CQRS (Command Query Responsibility Segregation) pattern.
Commands produce no output (returns HTTP 202), queries return a value (HTTP 200).

 [DirectExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-directexecutionstrategy/)

Executes behaviors that follow the direct (request/response) pattern.
Returns HTTP 200 when output is non-null, or HTTP 204 No Content when output is null.

 [DurableExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-durableexecutionstrategy/)

Executes replayable durable workflows by rebuilding state from an event-store stream,
invoking the workflow step, and appending the emitted domain events with optimistic concurrency.

 [EventDrivenExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-eventdrivenexecutionstrategy/)

Executes behaviors that follow the event-driven (fire-and-forget) pattern.
Returns HTTP 202 Accepted immediately while the behavior runs in the background.

 [ProcessManagerExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-processmanagerexecutionstrategy/)

Executes behaviors that follow the process-manager pattern.
Loads the process checkpoint before invocation, saves it after a successful step,
and deletes it when the process signals completion via <xref href="Cephalon.Abstractions.Behaviors.IProcessCompletion" data-throw-if-not-resolved="false"></xref>.

 [SagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-sagaexecutionstrategy/)

Executes behaviors that follow the saga-step pattern.
Loads saga state before invocation and persists it after a successful execution.
On exception, state is NOT saved so that explicit compensation logic can be applied.
