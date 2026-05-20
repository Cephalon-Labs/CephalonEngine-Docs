---
title: Class DurableExecutionRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state reported for one durable-execution stream.

```csharp
public sealed record DurableExecutionRuntimeState : IEquatable<DurableExecutionRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)

#### Implements

[IEquatable<DurableExecutionRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Nullable_System_DateTimeOffset__System_Nullable_System_Int64__System_Nullable_System_Int64__System_Nullable_System_Int32__System_Int32_System_Boolean_System_Boolean_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionPendingTimer__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionPendingSignal__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Execution_DurableExecutionCompensationAction__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> DurableExecutionRuntimeState\(string, string, string?, IReadOnlyList<string\>, string?, string?, DateTimeOffset?, long?, long?, int?, int, bool, bool, int, int, int, int, int, IReadOnlyList<DurableExecutionPendingTimer\>, IReadOnlyList<DurableExecutionPendingSignal\>, IReadOnlyList<DurableExecutionCompensationAction\>, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state reported for one durable-execution stream.

```csharp
public DurableExecutionRuntimeState(string BehaviorId, string StreamId, string? SourceModuleId, IReadOnlyList<string> TransportIds, string? LastOutcome, string? LastStage, DateTimeOffset? LastObservedAtUtc, long? LastReplayedVersion, long? LastKnownVersion, int? LastHttpStatusCode, int LastAppendedEventCount, bool LastStepProducedOutput, bool LastStepCompleted, int StartedCount, int SucceededCount, int ContinuationCount, int CompletedCount, int FailedCount, IReadOnlyList<DurableExecutionPendingTimer> PendingTimers, IReadOnlyList<DurableExecutionPendingSignal> PendingSignals, IReadOnlyList<DurableExecutionCompensationAction> CompensationActions, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`BehaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable behavior identifier that owns the stream.

`StreamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable event-stream identifier reported by the durable workflow.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning module identifier when one is known at runtime.

`TransportIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The transport identifiers that expose the durable workflow.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported durable-execution outcome identifier when one exists.

`LastStage` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported durable-execution stage identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest observation was reported.

`LastReplayedVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The latest stream version that was fully replayed before the durable step executed.

`LastKnownVersion` [long](https://learn.microsoft.com/dotnet/api/system.int64)?

The latest stream version known after the reported durable step finished or failed.

`LastHttpStatusCode` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The latest HTTP success status code returned by the durable execution strategy when one was reported.

`LastAppendedEventCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of domain events appended by the latest successful durable step.

`LastStepProducedOutput` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the latest successful durable step produced local output.

`LastStepCompleted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the latest reported durable step declared the workflow completed.

`StartedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>started</code> observations reported so far.

`SucceededCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>succeeded</code> observations reported so far.

`ContinuationCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>continuation-staged</code> observations reported so far.

`CompletedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>completed</code> observations reported so far.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>failed</code> observations reported so far.

`PendingTimers` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionPendingTimer](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingtimer/)\>

The durable timers that are currently pending for this stream.

`PendingSignals` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionPendingSignal](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingsignal/)\>

The durable signals that are currently awaited for this stream.

`CompensationActions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionCompensationAction](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutioncompensationaction/)\>

The operator-facing compensation actions currently available for this stream.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when the durable step reported a failure.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest report.

## Properties

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_BehaviorId"></a> BehaviorId

The stable durable behavior identifier that owns the stream.

```csharp
public string BehaviorId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_CompensationActions"></a> CompensationActions

The operator-facing compensation actions currently available for this stream.

```csharp
public IReadOnlyList<DurableExecutionCompensationAction> CompensationActions { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionCompensationAction](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutioncompensationaction/)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_CompletedCount"></a> CompletedCount

The number of <code>completed</code> observations reported so far.

```csharp
public int CompletedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_ContinuationCount"></a> ContinuationCount

The number of <code>continuation-staged</code> observations reported so far.

```csharp
public int ContinuationCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_ContinuationPending"></a> ContinuationPending

Gets a value indicating whether the latest report says the workflow still has continuation work pending.

```csharp
public bool ContinuationPending { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_CoordinationPending"></a> CoordinationPending

Gets a value indicating whether the latest runtime state still has pending continuation, timer, or signal work.

```csharp
public bool CoordinationPending { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_HasCompensationActions"></a> HasCompensationActions

Gets a value indicating whether one or more operator-facing compensation actions are currently available for the stream.

```csharp
public bool HasCompensationActions { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_HasPendingSignals"></a> HasPendingSignals

Gets a value indicating whether one or more durable signals are currently awaited for the stream.

```csharp
public bool HasPendingSignals { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_HasPendingTimers"></a> HasPendingTimers

Gets a value indicating whether one or more durable timers are currently pending for the stream.

```csharp
public bool HasPendingTimers { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_IsFailed"></a> IsFailed

Gets a value indicating whether the latest report says the durable stream is currently in a failed posture.

```csharp
public bool IsFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastAppendedEventCount"></a> LastAppendedEventCount

The number of domain events appended by the latest successful durable step.

```csharp
public int LastAppendedEventCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastError"></a> LastError

The latest operator-facing error summary when the durable step reported a failure.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastHttpStatusCode"></a> LastHttpStatusCode

The latest HTTP success status code returned by the durable execution strategy when one was reported.

```csharp
public int? LastHttpStatusCode { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastKnownVersion"></a> LastKnownVersion

The latest stream version known after the reported durable step finished or failed.

```csharp
public long? LastKnownVersion { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the latest observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastOutcome"></a> LastOutcome

The last reported durable-execution outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastReplayedVersion"></a> LastReplayedVersion

The latest stream version that was fully replayed before the durable step executed.

```csharp
public long? LastReplayedVersion { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastStage"></a> LastStage

The last reported durable-execution stage identifier when one exists.

```csharp
public string? LastStage { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastStepCompleted"></a> LastStepCompleted

Indicates whether the latest reported durable step declared the workflow completed.

```csharp
public bool LastStepCompleted { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_LastStepProducedOutput"></a> LastStepProducedOutput

Indicates whether the latest successful durable step produced local output.

```csharp
public bool LastStepProducedOutput { get; init; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest report.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_NextTimerDueAtUtc"></a> NextTimerDueAtUtc

Gets the earliest UTC due timestamp across the currently pending timers when one exists.

```csharp
public DateTimeOffset? NextTimerDueAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_PendingSignals"></a> PendingSignals

The durable signals that are currently awaited for this stream.

```csharp
public IReadOnlyList<DurableExecutionPendingSignal> PendingSignals { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionPendingSignal](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingsignal/)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_PendingTimers"></a> PendingTimers

The durable timers that are currently pending for this stream.

```csharp
public IReadOnlyList<DurableExecutionPendingTimer> PendingTimers { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionPendingTimer](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionpendingtimer/)\>

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_SourceModuleId"></a> SourceModuleId

The owning module identifier when one is known at runtime.

```csharp
public string? SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_StartedCount"></a> StartedCount

The number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_StreamId"></a> StreamId

The stable event-stream identifier reported by the durable workflow.

```csharp
public string StreamId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_SucceededCount"></a> SucceededCount

The number of <code>succeeded</code> observations reported so far.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_TotalReports"></a> TotalReports

Gets the total number of observations reported for this durable-execution stream.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Execution_DurableExecutionRuntimeState_TransportIds"></a> TransportIds

The transport identifiers that expose the durable workflow.

```csharp
public IReadOnlyList<string> TransportIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
