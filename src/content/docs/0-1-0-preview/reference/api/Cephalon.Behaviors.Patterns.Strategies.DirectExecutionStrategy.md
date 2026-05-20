---
title: Class DirectExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-directexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the direct (request/response) pattern.
Returns HTTP 200 when output is non-null, or HTTP 204 No Content when output is null.

```csharp
public sealed class DirectExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DirectExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-directexecutionstrategy/)

#### Implements

[IBehaviorExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-ibehaviorexecutionstrategy/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_DirectExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_DirectExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Invokes the behavior slot directly and returns the output.
Returns HTTP 200 for non-null output and HTTP 204 for null output.

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

A result with HTTP 200 for non-null output or HTTP 204 for null output.
