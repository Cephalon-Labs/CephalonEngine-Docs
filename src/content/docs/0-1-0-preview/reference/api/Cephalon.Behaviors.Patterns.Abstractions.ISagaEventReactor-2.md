---
title: Interface ISagaEventReactor
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagaeventreactor-2
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Provides a higher-level authoring helper for choreography-based saga steps that react to one event
and return a typed local output alongside staged publications.

```csharp
public interface ISagaEventReactor<TEvent, TOutput> : IAppBehavior<TEvent, SagaChoreographyStepResult<TOutput>>
```

#### Type Parameters

`TEvent` 

The input event type handled by the reactor.

`TOutput` 

The local output type returned by the reactor.

#### Implements

IAppBehavior<TEvent, SagaChoreographyStepResult<TOutput\>\>

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaEventReactor_2_ReactAsync__0_Cephalon_Abstractions_Behaviors_IBehaviorContext_System_Threading_CancellationToken_"></a> ReactAsync\(TEvent, IBehaviorContext, CancellationToken\)

Reacts to one event and returns typed local output plus choreography publications.

```csharp
Task<SagaChoreographyStepResult<TOutput>> ReactAsync(TEvent input, IBehaviorContext context, CancellationToken ct = default)
```

#### Parameters

`input` TEvent

The input event for this choreography step.

`context` IBehaviorContext

The ambient behavior context.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the reaction.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[SagaChoreographyStepResult](Cephalon.Behaviors.Patterns.Abstractions.SagaChoreographyStepResult\-1.md)<TOutput\>\>

The typed local output and publications produced by the choreography step.
