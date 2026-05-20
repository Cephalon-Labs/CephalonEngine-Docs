---
title: Interface IBehaviorExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes a behavior invocation according to a specific architectural pattern.

```csharp
public interface IBehaviorExecutionStrategy
```

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IBehaviorExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier this strategy handles (e.g. "cqrs", "event-driven").

```csharp
string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IBehaviorExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Executes the behavior using pattern-specific semantics.

```csharp
Task<BehaviorExecutionResult> ExecuteAsync(BehaviorExecutionContext context, CancellationToken ct = default)
```

#### Parameters

`context` [BehaviorExecutionContext](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutioncontext/)

The execution context carrying all information needed for this invocation.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the execution.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[BehaviorExecutionResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutionresult/)\>

A task that resolves to the execution result.
