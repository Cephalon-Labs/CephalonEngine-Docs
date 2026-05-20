---
title: Class DurableExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-durableexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes replayable durable workflows by rebuilding state from an event-store stream,
invoking the workflow step, and appending the emitted domain events with optimistic concurrency.

```csharp
public sealed class DurableExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-durableexecutionstrategy/)

#### Implements

[IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Strategies_DurableExecutionStrategy__ctor_Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_"></a> DurableExecutionStrategy\(IDurableExecutionRuntimeStateCatalog?\)

Creates a durable execution strategy.

```csharp
public DurableExecutionStrategy(IDurableExecutionRuntimeStateCatalog? runtimeStateCatalog = null)
```

#### Parameters

`runtimeStateCatalog` IDurableExecutionRuntimeStateCatalog?

An optional runtime-state catalog that can also accept operator-facing observations for active durable streams.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_DurableExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_DurableExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Replays the durable workflow stream, executes one workflow step, validates the returned domain events,
and appends them through <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContext.EventStore" data-throw-if-not-resolved="false"></xref>.

```csharp
public Task<BehaviorExecutionResult> ExecuteAsync(BehaviorExecutionContext context, CancellationToken ct = default)
```

#### Parameters

`context` [BehaviorExecutionContext](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutioncontext/)

The execution context for this invocation.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the execution.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[BehaviorExecutionResult](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-behaviorexecutionresult/)\>

A result with HTTP 200 when local output exists, HTTP 202 when durable continuation work or
pending timer/signal coordination remains without local output, or HTTP 204 when no local
output remains and the step completed without follow-up work.

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when durable execution is selected for a behavior that does not implement
<code>IDurableExecution&lt;TInput, TState, TOutput&gt;</code>, when the behavior context does not carry an event store,
or when the returned events do not match the expected stream identity or version sequence.
