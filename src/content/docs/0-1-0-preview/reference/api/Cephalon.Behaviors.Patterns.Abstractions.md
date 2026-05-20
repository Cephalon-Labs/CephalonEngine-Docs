---
title: Namespace Cephalon.Behaviors.Patterns.Abstractions
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions
editUrl: false
---

### Classes

 [BehaviorExecutionContext](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutioncontext/)

Carries all information needed to execute one behavior invocation.

 [BehaviorExecutionResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutionresult/)

The result of a pattern-executed behavior invocation.

 [DurableExecutionState<TState\>](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionState\-1.md)

Carries the replayed durable-execution state for one workflow invocation.

 [DurableExecutionStepResult<TOutput\>](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionStepResult\-1.md)

Describes the next durable-execution outcome after one workflow step runs.

 [ProcessCheckpoint](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint/)

Represents a snapshot of a process manager's current step and metadata.

 [SagaChoreographyPublication](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographypublication/)

Describes one event publication produced by a choreography-based saga step.

 [SagaChoreographyStepResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographystepresult/)

Carries the local output and event publications produced by one choreography-based saga step.

 [SagaChoreographyStepResult<TOutput\>](Cephalon.Behaviors.Patterns.Abstractions.SagaChoreographyStepResult\-1.md)

Carries typed local output and event publications produced by one choreography-based saga step.

### Interfaces

 [IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)

Executes a behavior invocation according to a specific architectural pattern.

 [IDurableExecution<TState\>](Cephalon.Behaviors.Patterns.Abstractions.IDurableExecution\-1.md)

Describes the replayable state contract for one durable execution workflow.

 [IDurableExecution<TInput, TState, TOutput\>](Cephalon.Behaviors.Patterns.Abstractions.IDurableExecution\-3.md)

Defines one replayable durable-execution workflow step on top of the shared behavior model.

 [IProcessCheckpointStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-iprocesscheckpointstore/)

Provides process checkpoint persistence for the process-manager execution pattern.

 [ISagaChoreographyPublisher](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographypublisher/)

Publishes choreography publications produced by a saga choreography behavior step.

 [ISagaChoreographyStepResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographystepresult/)

Describes the local output and staged publications produced by one choreography-based saga step.

 [ISagaEventReactor<TEvent\>](Cephalon.Behaviors.Patterns.Abstractions.ISagaEventReactor\-1.md)

Provides a higher-level authoring helper for choreography-based saga steps that react to one event
and return staged publications plus optional local output through the shared choreography contracts.

 [ISagaEventReactor<TEvent, TOutput\>](Cephalon.Behaviors.Patterns.Abstractions.ISagaEventReactor\-2.md)

Provides a higher-level authoring helper for choreography-based saga steps that react to one event
and return a typed local output alongside staged publications.

 [ISagaStateStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagastatestore/)

Provides saga state persistence for the saga-step execution pattern.
