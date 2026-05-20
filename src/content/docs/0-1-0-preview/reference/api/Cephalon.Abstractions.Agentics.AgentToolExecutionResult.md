---
title: Class AgentToolExecutionResult
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Describes the result returned by one managed agent-tool executor.

```csharp
public sealed class AgentToolExecutionResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolExecutionResult\(string, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new agent-tool execution result.

```csharp
public AgentToolExecutionResult(string outcome, string? outputSummary = null, string? error = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution outcome identifier.

`outputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing output summary.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing error summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the executor.

## Properties

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Error"></a> Error

Gets the optional operator-facing error summary.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Metadata"></a> Metadata

Gets optional metadata captured by the executor.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Outcome"></a> Outcome

Gets the stable execution outcome identifier.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_OutputSummary"></a> OutputSummary

Gets the optional operator-facing output summary.

```csharp
public string? OutputSummary { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_ApprovalRequired_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ApprovalRequired\(string?, IReadOnlyDictionary<string, string\>?\)

Creates an approval-required execution result.

```csharp
public static AgentToolExecutionResult ApprovalRequired(string? outputSummary = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing output summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the policy layer.

#### Returns

 [AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

An approval-required execution result.

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Denied_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Denied\(string?, IReadOnlyDictionary<string, string\>?\)

Creates a denied execution result.

```csharp
public static AgentToolExecutionResult Denied(string? error = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing denial reason.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the policy layer.

#### Returns

 [AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

A denied execution result.

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Failed_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Failed\(string, IReadOnlyDictionary<string, string\>?\)

Creates a failed execution result.

```csharp
public static AgentToolExecutionResult Failed(string error, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing error summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the executor.

#### Returns

 [AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

A failed execution result.

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Skipped_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Skipped\(string?, IReadOnlyDictionary<string, string\>?\)

Creates a skipped execution result.

```csharp
public static AgentToolExecutionResult Skipped(string? outputSummary = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing output summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the executor.

#### Returns

 [AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

A skipped execution result.

### <a id="Cephalon_Abstractions_Agentics_AgentToolExecutionResult_Succeeded_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Succeeded\(string?, IReadOnlyDictionary<string, string\>?\)

Creates a successful execution result.

```csharp
public static AgentToolExecutionResult Succeeded(string? outputSummary = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`outputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional operator-facing output summary.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional metadata captured by the executor.

#### Returns

 [AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)

A successful execution result.
