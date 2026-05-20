---
title: Class EventDrivenExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-eventdrivenexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the event-driven (fire-and-forget) pattern.
Returns HTTP 202 Accepted immediately while the behavior runs in the background.

```csharp
public sealed class EventDrivenExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDrivenExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-eventdrivenexecutionstrategy/)

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

### <a id="Cephalon_Behaviors_Patterns_Strategies_EventDrivenExecutionStrategy__ctor_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Patterns_Strategies_EventDrivenExecutionStrategy__"></a> EventDrivenExecutionStrategy\(ILogger<EventDrivenExecutionStrategy\>\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Strategies.EventDrivenExecutionStrategy" data-throw-if-not-resolved="false"></xref>.

```csharp
public EventDrivenExecutionStrategy(ILogger<EventDrivenExecutionStrategy> logger)
```

#### Parameters

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[EventDrivenExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-eventdrivenexecutionstrategy/)\>

The logger used to report background faults.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_EventDrivenExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_EventDrivenExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Dispatches the behavior invocation on a background thread and immediately returns 202 Accepted.
Any exception thrown synchronously before the background task is launched propagates to the caller.
Background faults are caught and logged; they do not surface to the caller.

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

A fire-and-forget result with HTTP 202.
