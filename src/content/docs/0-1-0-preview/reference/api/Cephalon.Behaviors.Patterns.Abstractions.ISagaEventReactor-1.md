---
title: Interface ISagaEventReactor
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagaeventreactor-1
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Provides a higher-level authoring helper for choreography-based saga steps that react to one event
and return staged publications plus optional local output through the shared choreography contracts.

```csharp
public interface ISagaEventReactor<TEvent> : IAppBehavior<TEvent, SagaChoreographyStepResult>
```

#### Type Parameters

`TEvent` 

The input event type handled by the reactor.

#### Implements

IAppBehavior<TEvent, SagaChoreographyStepResult\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaEventReactor_1_ReactAsync__0_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> ReactAsync\(TEvent, IBehaviorContext, CancellationToken\)

Reacts to one event and returns the choreography publications plus optional local output.

```csharp
Task<SagaChoreographyStepResult> ReactAsync(TEvent input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`input` TEvent

The input event for this choreography step.

`context` IBehaviorContext

The ambient behavior context.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the reaction.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[SagaChoreographyStepResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-sagachoreographystepresult/)\>

The publications and optional local output produced by the choreography step.
