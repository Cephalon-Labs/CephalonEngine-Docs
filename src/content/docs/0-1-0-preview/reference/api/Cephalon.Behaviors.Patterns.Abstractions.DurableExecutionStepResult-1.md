---
title: Class DurableExecutionStepResult
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-durableexecutionstepresult-1
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Describes the next durable-execution outcome after one workflow step runs.

```csharp
public sealed class DurableExecutionStepResult<TOutput>
```

#### Type Parameters

`TOutput` 

The local output returned to the caller when one is available.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionStepResult<TOutput\>](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionStepResult\-1.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1__ctor__0_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_EventSourcing_IDomainEvent__System_Boolean_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionPendingTimer__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionPendingSignal__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionCompensationAction__"></a> DurableExecutionStepResult\(TOutput?, IReadOnlyList<IDomainEvent\>?, bool, IReadOnlyList<DurableExecutionPendingTimer\>?, IReadOnlyList<DurableExecutionPendingSignal\>?, IReadOnlyList<DurableExecutionCompensationAction\>?\)

Initializes a new instance of the <xref href="Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionStepResult%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurableExecutionStepResult(TOutput? output = default, IReadOnlyList<IDomainEvent>? events = null, bool isCompleted = false, IReadOnlyList<DurableExecutionPendingTimer>? pendingTimers = null, IReadOnlyList<DurableExecutionPendingSignal>? pendingSignals = null, IReadOnlyList<DurableExecutionCompensationAction>? compensationActions = null)
```

#### Parameters

`output` TOutput?

The local output to return to the caller.

`events` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IDomainEvent\>?

The ordered domain events to append durably after a successful step.

`isCompleted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Marks the workflow as complete after this step.

`pendingTimers` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionPendingTimer\>?

The durable timers that should remain pending after the step succeeds.

`pendingSignals` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionPendingSignal\>?

The durable signals that should remain pending after the step succeeds.

`compensationActions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionCompensationAction\>?

The operator-facing compensation actions that should remain available after the step succeeds.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_CompensationActions"></a> CompensationActions

Gets the operator-facing compensation actions that should remain available after the step succeeds.

```csharp
public IReadOnlyList<DurableExecutionCompensationAction> CompensationActions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionCompensationAction\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_Events"></a> Events

Gets the ordered domain events to append durably after a successful step.

```csharp
public IReadOnlyList<IDomainEvent> Events { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<IDomainEvent\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_IsCompleted"></a> IsCompleted

Gets a value indicating whether the workflow should be considered complete after this step.

```csharp
public bool IsCompleted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_Output"></a> Output

Gets the local output returned to the caller when one is available.

```csharp
public TOutput? Output { get; }
```

#### Property Value

 TOutput?

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_PendingSignals"></a> PendingSignals

Gets the durable signals that should remain pending after the step succeeds.

```csharp
public IReadOnlyList<DurableExecutionPendingSignal> PendingSignals { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionPendingSignal\>

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionStepResult_1_PendingTimers"></a> PendingTimers

Gets the durable timers that should remain pending after the step succeeds.

```csharp
public IReadOnlyList<DurableExecutionPendingTimer> PendingTimers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<DurableExecutionPendingTimer\>
