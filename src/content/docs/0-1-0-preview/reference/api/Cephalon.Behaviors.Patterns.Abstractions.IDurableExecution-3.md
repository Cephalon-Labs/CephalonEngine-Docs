---
title: Interface IDurableExecution
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-idurableexecution-3
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Defines one replayable durable-execution workflow step on top of the shared behavior model.

```csharp
public interface IDurableExecution<TInput, TState, TOutput> : IDurableExecution<TState>, IAggregate<TState>, IAppBehavior<TInput, TOutput>
```

#### Type Parameters

`TInput` 

The workflow input type.

`TState` 

The workflow state shape.

`TOutput` 

The local output type returned to the caller.

#### Implements

[IDurableExecution<TState\>](Cephalon.Behaviors.Patterns.Abstractions.IDurableExecution\-1.md), 
IAggregate<TState\>, 
IAppBehavior<TInput, TOutput\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IDurableExecution_3_ExecuteDurablyAsync__0_Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState__1__Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> ExecuteDurablyAsync\(TInput, DurableExecutionState<TState\>, IBehaviorContext, CancellationToken\)

Executes one durable workflow step against the replayed state snapshot.

```csharp
Task<DurableExecutionStepResult<TOutput>> ExecuteDurablyAsync(TInput input, DurableExecutionState<TState> execution, IBehaviorContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`input` TInput

The workflow input for this invocation.

`execution` [DurableExecutionState](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionState\-1.md)<TState\>

The replayed durable execution state.

`context` IBehaviorContext

The ambient behavior context for the current invocation.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the workflow step.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[DurableExecutionStepResult](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionStepResult\-1.md)<TOutput\>\>

A task that resolves to the step output plus the ordered events that should be appended durably.
