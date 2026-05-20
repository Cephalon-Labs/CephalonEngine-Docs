---
title: Class DurableExecutionCompensationAction
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutioncompensationaction
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing durable-execution compensation action available for a workflow stream.

```csharp
public sealed class DurableExecutionCompensationAction
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionCompensationAction](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutioncompensationaction/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DurableExecutionCompensationAction\(string, string?, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Execution.DurableExecutionCompensationAction" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurableExecutionCompensationAction(string id, string? displayName = null, string? description = null, string? triggerKind = null, string? compensationBehaviorId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable compensation-action identifier within the durable workflow.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing compensation-action name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

A human-readable description of what the compensation action does.

`triggerKind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing trigger kind for the compensation action, such as <code>manual</code> or <code>on-failure</code>.

`compensationBehaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The stable behavior identifier to invoke when the compensation action maps to another Cephalon behavior.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional operator-facing metadata describing the compensation action.

## Properties

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_CompensationBehaviorId"></a> CompensationBehaviorId

Gets the stable behavior identifier to invoke when the compensation action maps to another Cephalon behavior.

```csharp
public string? CompensationBehaviorId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_Description"></a> Description

Gets the human-readable compensation-action description when one was supplied.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_DisplayName"></a> DisplayName

Gets the operator-facing compensation-action name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_Id"></a> Id

Gets the stable compensation-action identifier within the durable workflow.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_Metadata"></a> Metadata

Gets additional operator-facing metadata describing the compensation action.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionCompensationAction_TriggerKind"></a> TriggerKind

Gets the operator-facing trigger kind for the compensation action.

```csharp
public string TriggerKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
