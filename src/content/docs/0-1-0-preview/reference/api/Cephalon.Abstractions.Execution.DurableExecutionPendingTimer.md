---
title: Class DurableExecutionPendingTimer
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingtimer
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes one durable-execution timer that is currently pending for a workflow stream.

```csharp
public sealed class DurableExecutionPendingTimer
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionPendingTimer](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingtimer/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer__ctor_System_String_System_DateTimeOffset_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DurableExecutionPendingTimer\(string, DateTimeOffset, string?, string?, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Abstractions.Execution.DurableExecutionPendingTimer" data-throw-if-not-resolved="false"></xref> class.

```csharp
public DurableExecutionPendingTimer(string id, DateTimeOffset dueAtUtc, string? displayName = null, string? description = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable timer identifier within the durable workflow.

`dueAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the timer is next due.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing timer name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

A human-readable description of why the timer is pending.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional operator-facing metadata describing the timer.

## Properties

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer_Description"></a> Description

Gets the human-readable timer description when one was supplied.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer_DisplayName"></a> DisplayName

Gets the operator-facing timer name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer_DueAtUtc"></a> DueAtUtc

Gets the UTC timestamp when the timer is next due.

```csharp
public DateTimeOffset DueAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer_Id"></a> Id

Gets the stable timer identifier within the durable workflow.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionPendingTimer_Metadata"></a> Metadata

Gets additional operator-facing metadata describing the timer.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>
