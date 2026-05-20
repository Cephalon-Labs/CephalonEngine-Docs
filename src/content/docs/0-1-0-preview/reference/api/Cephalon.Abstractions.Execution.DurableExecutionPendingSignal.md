---
title: Class DurableExecutionPendingSignal
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingsignal
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one durable-execution signal that is currently pending for a workflow stream.

```csharp
public sealed class DurableExecutionPendingSignal
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionPendingSignal](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingsignal/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DurableExecutionPendingSignal\(string, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Execution.DurableExecutionPendingSignal" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurableExecutionPendingSignal(string id, string? displayName = null, string? description = null, string? payloadType = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable signal identifier within the durable workflow.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing signal name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

A human-readable description of why the signal is awaited.

`payloadType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The expected payload type name for the awaited signal when one is known.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional operator-facing metadata describing the signal.

## Properties

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal_Description"></a> Description

Gets the human-readable signal description when one was supplied.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal_DisplayName"></a> DisplayName

Gets the operator-facing signal name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal_Id"></a> Id

Gets the stable signal identifier within the durable workflow.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal_Metadata"></a> Metadata

Gets additional operator-facing metadata describing the signal.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingSignal_PayloadType"></a> PayloadType

Gets the expected payload type name when the awaited signal declares one.

```csharp
public string? PayloadType { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
