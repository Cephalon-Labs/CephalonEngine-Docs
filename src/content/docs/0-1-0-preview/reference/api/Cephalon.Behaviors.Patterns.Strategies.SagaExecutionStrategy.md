---
title: Class SagaExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-sagaexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the saga-step pattern.
Loads saga state before invocation and persists it after a successful execution.
On exception, state is NOT saved so that explicit compensation logic can be applied.

```csharp
public sealed class SagaExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-sagaexecutionstrategy/)

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

### <a id="Cephalon_Behaviors_Patterns_Strategies_SagaExecutionStrategy__ctor_Cephalon_Behaviors_Patterns_Abstractions_ISagaStateStore_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Patterns_Strategies_SagaExecutionStrategy__"></a> SagaExecutionStrategy\(ISagaStateStore, ILogger<SagaExecutionStrategy\>\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Strategies.SagaExecutionStrategy" data-throw-if-not-resolved="false"></xref>.

```csharp
public SagaExecutionStrategy(ISagaStateStore store, ILogger<SagaExecutionStrategy> logger)
```

#### Parameters

`store` [ISagaStateStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagastatestore/)

The saga state store used to load and persist saga state.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[SagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-sagaexecutionstrategy/)\>

The logger used to report warnings and errors.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_SagaExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_SagaExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Loads saga state, invokes the behavior slot, and saves the updated state on success.
If the behavior throws, state is not persisted so compensation can be applied externally.
The saga identifier is read from <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContext.CorrelationId" data-throw-if-not-resolved="false"></xref>;
if not set, a new <xref href="System.Guid" data-throw-if-not-resolved="false"></xref> is generated and a warning is logged.

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

A result with HTTP 200 and the behavior output.
