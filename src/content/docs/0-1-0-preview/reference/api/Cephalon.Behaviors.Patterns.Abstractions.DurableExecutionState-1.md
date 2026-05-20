---
title: Class DurableExecutionState
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-durableexecutionstate-1
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Carries the replayed durable-execution state for one workflow invocation.

```csharp
public sealed class DurableExecutionState<TState>
```

#### Type Parameters

`TState` 

The workflow state shape.

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionState<TState\>](Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionState\-1.md)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState_1__ctor_System_String__0_System_Int64_"></a> DurableExecutionState\(string, TState, long\)

Initializes a new instance of the <xref href="Cephalon.Behaviors.Patterns.Abstractions.DurableExecutionState%601" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurableExecutionState(string streamId, TState state, long version)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The event-store stream that owns the workflow history.

`state` TState

The replayed workflow state.

`version` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The latest replayed stream version, or <code>-1</code> when no stream exists yet.

## Properties

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState_1_Exists"></a> Exists

Gets a value indicating whether this execution already has persisted history.

```csharp
public bool Exists { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState_1_State"></a> State

Gets the replayed workflow state.

```csharp
public TState State { get; }
```

#### Property Value

 TState

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState_1_StreamId"></a> StreamId

Gets the event-store stream that owns the workflow history.

```csharp
public string StreamId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Behaviors_Patterns_Abstractions_DurableExecutionState_1_Version"></a> Version

Gets the latest replayed stream version, or <code>-1</code> when no stream exists yet.

```csharp
public long Version { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)
