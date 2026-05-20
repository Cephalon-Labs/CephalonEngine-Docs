---
title: Class CqrsExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-cqrsexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the CQRS (Command Query Responsibility Segregation) pattern.
Commands produce no output (returns HTTP 202), queries return a value (HTTP 200).

```csharp
public sealed class CqrsExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CqrsExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-cqrsexecutionstrategy/)

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

### <a id="Cephalon_Behaviors_Patterns_Strategies_CqrsExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_CqrsExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Invokes the behavior slot and determines the HTTP status code based on whether output was produced.
A null output is treated as a command (202 Accepted); a non-null output is treated as a query (200 OK).

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

A result with HTTP 200 for queries or HTTP 202 for commands.
