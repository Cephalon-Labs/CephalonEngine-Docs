---
title: Class DurableExecutionRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one active durable-execution workflow visible to the current runtime.

```csharp
public sealed class DurableExecutionRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

This runtime-facing surface keeps durable workflow truth derived from the shared behavior
topology and registered implementation types instead of inventing a host-only workflow
registry. It is intentionally static and operator-facing: it describes the active durable
contract shape, ownership, transports, and replay semantics rather than per-invocation state.

## Constructors

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Boolean_System_Boolean_System_Collections_Generic_IReadOnlyList_System_Int32__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DurableExecutionRuntimeDescriptor\(string, string, string, string, string, string, string, string, string?, IReadOnlyList<string\>?, IReadOnlyList<string\>?, bool, bool, IReadOnlyList<int\>?, IReadOnlyDictionary<string, string\>?\)

Creates a durable-execution runtime descriptor.

```csharp
public DurableExecutionRuntimeDescriptor(string id, string displayName, string description, string behaviorType, string inputType, string stateType, string outputType, string executionMode, string? sourceModuleId = null, IReadOnlyList<string>? transportIds = null, IReadOnlyList<string>? requiredFeatureFlagIds = null, bool eventSourcingEnabled = true, bool requiresEventStore = true, IReadOnlyList<int>? successStatusCodes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable behavior identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing durable workflow name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the durable workflow.

`behaviorType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete durable behavior implementation type name.

`inputType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The durable workflow input type name.

`stateType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The durable workflow replay-state type name.

`outputType` [string](https://learn.microsoft.com/dotnet/api/system.string)

The durable workflow local output type name.

`executionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The replay mode used by the runtime, such as <code>event-store-replay</code>.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when the workflow came from an explicit module-owned behavior.

`transportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The transport identifiers that expose the durable workflow.

`requiredFeatureFlagIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The ordered feature-flag identifiers that must resolve to enabled before the workflow can
execute.

`eventSourcingEnabled` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the authored behavior topology explicitly enables event sourcing for the
workflow.

`requiresEventStore` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the runtime contract requires an <code>IEventStore</code> to execute truthfully.

`successStatusCodes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>?

The HTTP success status codes the shared durable execution strategy can return for local
output, continuation-only work, pending timer/signal coordination, or completion without
output.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional operator-facing metadata describing replay semantics.

## Properties

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_BehaviorType"></a> BehaviorType

Gets the concrete durable behavior implementation type name.

```csharp
public string BehaviorType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_Description"></a> Description

Gets the human-readable durable workflow description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing durable workflow name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_EventSourcingEnabled"></a> EventSourcingEnabled

Gets a value indicating whether the authored behavior topology explicitly enables event sourcing.

```csharp
public bool EventSourcingEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_ExecutionMode"></a> ExecutionMode

Gets the replay mode used by the active runtime.

```csharp
public string ExecutionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_Id"></a> Id

Gets the stable durable behavior identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_InputType"></a> InputType

Gets the durable workflow input type name.

```csharp
public string InputType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_Metadata"></a> Metadata

Gets additional operator-facing metadata describing replay semantics.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_OutputType"></a> OutputType

Gets the durable workflow local output type name.

```csharp
public string OutputType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_RequiredFeatureFlagIds"></a> RequiredFeatureFlagIds

Gets the ordered feature-flag identifiers that gate workflow execution.

```csharp
public IReadOnlyList<string> RequiredFeatureFlagIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_RequiresEventStore"></a> RequiresEventStore

Gets a value indicating whether the runtime contract requires an <code>IEventStore</code>.

```csharp
public bool RequiresEventStore { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the owning module identifier when one is known at runtime.

```csharp
public string? SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_StateType"></a> StateType

Gets the durable workflow replay-state type name.

```csharp
public string StateType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_SuccessStatusCodes"></a> SuccessStatusCodes

Gets the HTTP success status codes the shared durable strategy can return.

```csharp
public IReadOnlyList<int> SuccessStatusCodes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeDescriptor_TransportIds"></a> TransportIds

Gets the transport identifiers that expose the durable workflow.

```csharp
public IReadOnlyList<string> TransportIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
