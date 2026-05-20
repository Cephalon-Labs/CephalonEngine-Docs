---
title: Class EventDispatchRuntimeSummary
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimesummary
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest aggregate operator-facing state reported for one durable event-dispatch runtime.

```csharp
public sealed class EventDispatchRuntimeSummary
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventDispatchRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimesummary/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Int32_System_Int32_"></a> EventDispatchRuntimeSummary\(IReadOnlyList<string\>?, string?, string?, string?, DateTimeOffset?, string?, int, int, int, int, int, int, int, string?, int, int\)

Creates a new aggregate runtime summary.

```csharp
public EventDispatchRuntimeSummary(IReadOnlyList<string>? reportedOutboxIds = null, string? lastOutboxId = null, string? lastChannelId = null, string? lastOutcome = null, DateTimeOffset? lastObservedAtUtc = null, string? lastMessageId = null, int lastAttempt = 0, int startedCount = 0, int succeededCount = 0, int failedCount = 0, int retryScheduledCount = 0, int skippedCount = 0, int retryPendingCount = 0, string? lastError = null, int terminalFailureCount = 0, int terminalOutboxCount = 0)
```

#### Parameters

`reportedOutboxIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The outbox identifiers that have reported state for the runtime.

`lastOutboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The outbox identifier that produced the latest observation.

`lastChannelId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest reported channel identifier.

`lastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest reported dispatch outcome identifier.

`lastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest observation was reported.

`lastMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest outbound message identifier when one was reported.

`lastAttempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The latest reported dispatch attempt number.

`startedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>started</code> observations reported so far.

`succeededCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>succeeded</code> observations reported so far.

`failedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>failed</code> observations reported so far.

`retryScheduledCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>retry-scheduled</code> observations reported so far.

`skippedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>skipped</code> observations reported so far.

`retryPendingCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of owned outboxes whose latest report still says another retry is pending.

`lastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when one was reported.

`terminalFailureCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of failed observations reported with terminal-failure posture.

`terminalOutboxCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of owned outboxes whose latest report marks the dispatch path as terminally failed.

## Properties

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_Empty"></a> Empty

Gets an empty runtime summary when no dispatch observations have been reported yet.

```csharp
public static EventDispatchRuntimeSummary Empty { get; }
```

#### Property Value

 [EventDispatchRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimesummary/)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_FailedCount"></a> FailedCount

Gets the total number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_HasReports"></a> HasReports

Gets a value indicating whether the dispatch runtime has reported any observations yet.

```csharp
public bool HasReports { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_HasTerminalFailures"></a> HasTerminalFailures

Gets a value indicating whether the dispatch runtime has reported any terminal failures.

```csharp
public bool HasTerminalFailures { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastAttempt"></a> LastAttempt

Gets the latest reported dispatch attempt number.

```csharp
public int LastAttempt { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastChannelId"></a> LastChannelId

Gets the latest reported channel identifier when one exists.

```csharp
public string? LastChannelId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastError"></a> LastError

Gets the latest operator-facing error summary when one was reported.

```csharp
public string? LastError { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastMessageId"></a> LastMessageId

Gets the latest outbound message identifier when one was reported.

```csharp
public string? LastMessageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastObservedAtUtc"></a> LastObservedAtUtc

Gets the UTC timestamp when the latest observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastOutboxId"></a> LastOutboxId

Gets the outbox identifier that produced the latest observation when one exists.

```csharp
public string? LastOutboxId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_LastOutcome"></a> LastOutcome

Gets the latest reported dispatch outcome identifier when one exists.

```csharp
public string? LastOutcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_ReportedOutboxCount"></a> ReportedOutboxCount

Gets the number of outboxes that have reported runtime state for this dispatch runtime.

```csharp
public int ReportedOutboxCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_ReportedOutboxIds"></a> ReportedOutboxIds

Gets the outbox identifiers that have reported runtime state for the dispatch runtime.

```csharp
public IReadOnlyList<string> ReportedOutboxIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_RetryPendingCount"></a> RetryPendingCount

Gets the number of owned outboxes whose latest report still says another retry is pending.

```csharp
public int RetryPendingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_RetryScheduledCount"></a> RetryScheduledCount

Gets the total number of <code>retry-scheduled</code> observations reported so far.

```csharp
public int RetryScheduledCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_SkippedCount"></a> SkippedCount

Gets the total number of <code>skipped</code> observations reported so far.

```csharp
public int SkippedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_StartedCount"></a> StartedCount

Gets the total number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_SucceededCount"></a> SucceededCount

Gets the total number of <code>succeeded</code> observations reported so far.

```csharp
public int SucceededCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_TerminalFailureCount"></a> TerminalFailureCount

Gets the total number of failed observations reported with terminal-failure posture.

```csharp
public int TerminalFailureCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_TerminalOutboxCount"></a> TerminalOutboxCount

Gets the number of owned outboxes whose latest report marks the dispatch path as terminally failed.

```csharp
public int TerminalOutboxCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventDispatchRuntimeSummary_TotalReports"></a> TotalReports

Gets the total number of reported observations across all owned outboxes.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
