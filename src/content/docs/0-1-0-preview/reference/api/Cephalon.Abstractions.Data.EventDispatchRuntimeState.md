---
title: Class EventDispatchRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state reported for one durable event-dispatch path.

```csharp
public sealed record EventDispatchRuntimeState : IEquatable<EventDispatchRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)

#### Implements

[IEquatable<EventDispatchRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState__ctor_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Int32_"></a> EventDispatchRuntimeState\(string, string?, string?, DateTimeOffset?, string?, int, int, int, int, int, int, string?, IReadOnlyDictionary<string, string\>, int\)

Describes the latest operator-facing runtime state reported for one durable event-dispatch path.

```csharp
public EventDispatchRuntimeState(string OutboxId, string? LastChannelId, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastMessageId, int LastAttempt, int StartedCount, int SucceededCount, int FailedCount, int RetryScheduledCount, int SkippedCount, string? LastError, IReadOnlyDictionary<string, string> Metadata, int TerminalFailureCount = 0)
```

#### Parameters

`OutboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outbox identifier that owns the dispatch path.

`LastChannelId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last stable channel identifier reported for this dispatch path.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last observation was reported.

`LastMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last stable outbound message identifier when one was reported.

`LastAttempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The last reported dispatch attempt number.

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

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last operator-facing error summary when a failure was reported.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest report.

`TerminalFailureCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of failed observations reported with terminal-failure posture so far.

## Properties

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastAttempt"></a> LastAttempt

The last reported dispatch attempt number.

```csharp
public int LastAttempt { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastChannelId"></a> LastChannelId

The last stable channel identifier reported for this dispatch path.

```csharp
public string? LastChannelId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastError"></a> LastError

The last operator-facing error summary when a failure was reported.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastMessageId"></a> LastMessageId

The last stable outbound message identifier when one was reported.

```csharp
public string? LastMessageId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_LastOutcome"></a> LastOutcome

The last reported outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest report.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_OutboxId"></a> OutboxId

The stable outbox identifier that owns the dispatch path.

```csharp
public string OutboxId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_RetryPending"></a> RetryPending

Gets a value indicating whether the latest report says another retry attempt is pending.

```csharp
public bool RetryPending { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_RetryScheduledCount"></a> RetryScheduledCount

The number of <code>retry-scheduled</code> observations reported so far.

```csharp
public int RetryScheduledCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_SkippedCount"></a> SkippedCount

The number of <code>skipped</code> observations reported so far.

```csharp
public int SkippedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_StartedCount"></a> StartedCount

The number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_SucceededCount"></a> SucceededCount

The number of <code>succeeded</code> observations reported so far.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_TerminalFailure"></a> TerminalFailure

Gets a value indicating whether the latest report marks the dispatch path as terminally failed.

```csharp
public bool TerminalFailure { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_TerminalFailureCount"></a> TerminalFailureCount

The number of failed observations reported with terminal-failure posture so far.

```csharp
public int TerminalFailureCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeState_TotalReports"></a> TotalReports

Gets the total number of observations reported for this dispatch path.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
