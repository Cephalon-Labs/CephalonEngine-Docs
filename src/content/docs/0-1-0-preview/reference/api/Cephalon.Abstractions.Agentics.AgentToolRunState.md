---
title: Class AgentToolRunState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state reported for one agent-tool run.

```csharp
public sealed record AgentToolRunState : IEquatable<AgentToolRunState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AgentToolRunState](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolrunstate/)

#### Implements

[IEquatable<AgentToolRunState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState__ctor_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AgentToolRunState\(string, string, string?, DateTimeOffset?, string?, string?, int, int, int, int, int, int, int, int, string?, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state reported for one agent-tool run.

```csharp
public AgentToolRunState(string ToolId, string RunId, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastActorId, string? LastCorrelationId, int LastAttempt, int StartedCount, int SucceededCount, int FailedCount, int RetryScheduledCount, int SkippedCount, int ApprovalRequiredCount, int DeniedCount, string? LastOutputSummary, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`ToolId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable tool identifier.

`RunId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable run identifier.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last observation was reported.

`LastActorId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The actor identifier from the latest observation when one was reported.

`LastCorrelationId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The correlation identifier from the latest observation when one was reported.

`LastAttempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The last reported execution attempt number.

`StartedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>started</code> observations reported so far.

`SucceededCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>succeeded</code> observations reported so far.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>failed</code> observations reported so far.

`RetryScheduledCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>retry-scheduled</code> observations reported so far.

`SkippedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>skipped</code> observations reported so far.

`ApprovalRequiredCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>approval-required</code> observations reported so far.

`DeniedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>denied</code> observations reported so far.

`LastOutputSummary` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing output summary when one was reported.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when one was reported.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest report.

## Properties

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_ApprovalRequiredCount"></a> ApprovalRequiredCount

The number of <code>approval-required</code> observations reported so far.

```csharp
public int ApprovalRequiredCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_DeniedCount"></a> DeniedCount

The number of <code>denied</code> observations reported so far.

```csharp
public int DeniedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_DuplicateCompleted"></a> DuplicateCompleted

Gets a value indicating whether the latest report represents a process-local duplicate-completed suppression.

```csharp
public bool DuplicateCompleted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_IsTerminal"></a> IsTerminal

Gets a value indicating whether the latest report represents a terminal outcome for this run.

```csharp
public bool IsTerminal { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastActorId"></a> LastActorId

The actor identifier from the latest observation when one was reported.

```csharp
public string? LastActorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastAttempt"></a> LastAttempt

The last reported execution attempt number.

```csharp
public int LastAttempt { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastCorrelationId"></a> LastCorrelationId

The correlation identifier from the latest observation when one was reported.

```csharp
public string? LastCorrelationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastError"></a> LastError

The latest operator-facing error summary when one was reported.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastOutcome"></a> LastOutcome

The last reported outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_LastOutputSummary"></a> LastOutputSummary

The latest operator-facing output summary when one was reported.

```csharp
public string? LastOutputSummary { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest report.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_RequiresApproval"></a> RequiresApproval

Gets a value indicating whether the latest report says explicit approval is required before execution can continue.

```csharp
public bool RequiresApproval { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_RetryPending"></a> RetryPending

Gets a value indicating whether the latest report says another process-local attempt is pending.

```csharp
public bool RetryPending { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_RetryScheduledCount"></a> RetryScheduledCount

The number of <code>retry-scheduled</code> observations reported so far.

```csharp
public int RetryScheduledCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_RunId"></a> RunId

The stable run identifier.

```csharp
public string RunId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_SkippedCount"></a> SkippedCount

The number of <code>skipped</code> observations reported so far.

```csharp
public int SkippedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_StartedCount"></a> StartedCount

The number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_SucceededCount"></a> SucceededCount

The number of <code>succeeded</code> observations reported so far.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_TerminalFailure"></a> TerminalFailure

Gets a value indicating whether the latest report represents a terminal failed outcome for this run.

```csharp
public bool TerminalFailure { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_ToolId"></a> ToolId

The stable tool identifier.

```csharp
public string ToolId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Agentics_AgentToolRunState_TotalReports"></a> TotalReports

Gets the total number of observations reported for this run.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
