---
title: Class ChoreographySagaExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-choreographysagaexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the choreography-based saga pattern.
Publications returned by the behavior are staged through <xref href="Cephalon.Behaviors.Patterns.Abstractions.ISagaChoreographyPublisher" data-throw-if-not-resolved="false"></xref>
so other services or modules can continue the workflow by reacting to events.

```csharp
public sealed class ChoreographySagaExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChoreographySagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-choreographysagaexecutionstrategy/)

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

### <a id="Cephalon_Behaviors_Patterns_Strategies_ChoreographySagaExecutionStrategy__ctor_Cephalon_Behaviors_Patterns_Abstractions_ISagaChoreographyPublisher_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Patterns_Strategies_ChoreographySagaExecutionStrategy__Cephalon_Abstractions_Execution_ISagaChoreographyPublicationRuntimeStateCatalog_"></a> ChoreographySagaExecutionStrategy\(ISagaChoreographyPublisher, ILogger<ChoreographySagaExecutionStrategy\>, ISagaChoreographyPublicationRuntimeStateCatalog?\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Strategies.ChoreographySagaExecutionStrategy" data-throw-if-not-resolved="false"></xref>.

```csharp
public ChoreographySagaExecutionStrategy(ISagaChoreographyPublisher publisher, ILogger<ChoreographySagaExecutionStrategy> logger, ISagaChoreographyPublicationRuntimeStateCatalog? runtimeStateCatalog = null)
```

#### Parameters

`publisher` [ISagaChoreographyPublisher](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagachoreographypublisher/)

The publisher used to stage choreography publications.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[ChoreographySagaExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-choreographysagaexecutionstrategy/)\>

The logger used to report accepted publications.

`runtimeStateCatalog` ISagaChoreographyPublicationRuntimeStateCatalog?

An optional runtime-state catalog that can also accept operator-facing live publication
observations for choreography execution.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_ChoreographySagaExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_ChoreographySagaExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Invokes the behavior and stages any returned publications through the choreography publisher.
Behaviors may return a single <xref href="Cephalon.Behaviors.Patterns.Abstractions.SagaChoreographyPublication" data-throw-if-not-resolved="false"></xref>, a sequence of them,
or any <xref href="Cephalon.Behaviors.Patterns.Abstractions.ISagaChoreographyStepResult" data-throw-if-not-resolved="false"></xref> when they need both local output and
publications in the same step.

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

A result with HTTP 202 when at least one publication is staged; otherwise HTTP 200 or 204
based on whether the behavior produced a local output.
