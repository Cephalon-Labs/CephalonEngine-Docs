---
title: Class ProcessManagerExecutionStrategy
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-processmanagerexecutionstrategy
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Strategies](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Executes behaviors that follow the process-manager pattern.
Loads the process checkpoint before invocation, saves it after a successful step,
and deletes it when the process signals completion via <xref href="Cephalon.Abstractions.Behaviors.IProcessCompletion" data-throw-if-not-resolved="false"></xref>.

```csharp
public sealed class ProcessManagerExecutionStrategy : IBehaviorExecutionStrategy
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ProcessManagerExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-processmanagerexecutionstrategy/)

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

### <a id="Cephalon_Behaviors_Patterns_Strategies_ProcessManagerExecutionStrategy__ctor_Cephalon_Behaviors_Patterns_Abstractions_IProcessCheckpointStore_Microsoft_Extensions_Logging_ILogger_Cephalon_Behaviors_Patterns_Strategies_ProcessManagerExecutionStrategy__"></a> ProcessManagerExecutionStrategy\(IProcessCheckpointStore, ILogger<ProcessManagerExecutionStrategy\>\)

Initializes a new instance of <xref href="Cephalon.Behaviors.Patterns.Strategies.ProcessManagerExecutionStrategy" data-throw-if-not-resolved="false"></xref>.

```csharp
public ProcessManagerExecutionStrategy(IProcessCheckpointStore store, ILogger<ProcessManagerExecutionStrategy> logger)
```

#### Parameters

`store` [IProcessCheckpointStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-iprocesscheckpointstore/)

The checkpoint store used to load and persist process checkpoints.

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger\-1)<[ProcessManagerExecutionStrategy](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-strategies-processmanagerexecutionstrategy/)\>

The logger used to report warnings and errors.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Strategies_ProcessManagerExecutionStrategy_Pattern"></a> Pattern

Gets the pattern identifier handled by this strategy.

```csharp
public string Pattern { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Strategies_ProcessManagerExecutionStrategy_ExecuteAsync_Cephalon_Behaviors_Patterns_Abstractions_BehaviorExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(BehaviorExecutionContext, CancellationToken\)

Loads the current process checkpoint, invokes the behavior slot, and saves the resulting checkpoint.
If the output implements <xref href="Cephalon.Abstractions.Behaviors.IProcessCompletion" data-throw-if-not-resolved="false"></xref>, the checkpoint is deleted to signal completion.
If the output is null, a warning is logged and the checkpoint is preserved.
The process identifier is read from <xref href="Cephalon.Abstractions.Behaviors.IBehaviorContext.CorrelationId" data-throw-if-not-resolved="false"></xref>;
if not set, an <xref href="System.InvalidOperationException" data-throw-if-not-resolved="false"></xref> is thrown.

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

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

Thrown when <code>CorrelationId</code> is null.
