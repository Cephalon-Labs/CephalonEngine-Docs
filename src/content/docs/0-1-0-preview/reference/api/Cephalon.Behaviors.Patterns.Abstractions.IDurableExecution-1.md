---
title: Interface IDurableExecution
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-idurableexecution-1
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Describes the replayable state contract for one durable execution workflow.

```csharp
public interface IDurableExecution<TState> : IAggregate<TState>
```

#### Type Parameters

`TState` 

The workflow state shape.

#### Implements

IAggregate<TState\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IDurableExecution_1_CreateInitialState"></a> CreateInitialState\(\)

Creates the initial workflow state used before any events exist for the execution stream.

```csharp
TState CreateInitialState()
```

#### Returns

 TState

The initial workflow state.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IDurableExecution_1_ResolveStreamId_System_String_Cephalon_Abstractions_Behaviors_IBehaviorContext_"></a> ResolveStreamId\(string, IBehaviorContext\)

Resolves the event-store stream identifier that owns this workflow execution.

```csharp
string ResolveStreamId(string behaviorId, IBehaviorContext context)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable behavior identifier.

`context` IBehaviorContext

The ambient behavior context for the current invocation.

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier used for replay and append operations.
