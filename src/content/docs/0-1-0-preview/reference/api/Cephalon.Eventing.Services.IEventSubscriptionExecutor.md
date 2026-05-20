---
title: Interface IEventSubscriptionExecutor
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionexecutor
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Executes one declared event subscription through a pack-owned managed runtime.

```csharp
public interface IEventSubscriptionExecutor
```

## Properties

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutor_SubscriptionId"></a> SubscriptionId

Gets the stable declared subscription identifier owned by this executor.

```csharp
string SubscriptionId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionExecutor_ExecuteAsync_Cephalon_Eventing_Services_EventSubscriptionExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(EventSubscriptionExecutionContext, CancellationToken\)

Executes the managed subscription against the supplied publication context.

```csharp
ValueTask ExecuteAsync(EventSubscriptionExecutionContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`context` [EventSubscriptionExecutionContext](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutioncontext/)

The host-agnostic execution context for the current subscription attempt.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the current execution attempt.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the managed subscription attempt finishes.
