---
title: Class EventSubscriptionRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Describes the latest operator-facing runtime state reported for one declared event subscription.

```csharp
public sealed record EventSubscriptionRuntimeState : IEquatable<EventSubscriptionRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventSubscriptionRuntimeState](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionruntimestate/)

#### Implements

[IEquatable<EventSubscriptionRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState__ctor_System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventSubscriptionRuntimeState\(string, string?, DateTimeOffset?, string?, int, int, int, int, int, int, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state reported for one declared event subscription.

```csharp
public EventSubscriptionRuntimeState(string SubscriptionId, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastMessageId, int LastAttempt, int StartedCount, int SucceededCount, int FailedCount, int RetryScheduledCount, int SkippedCount, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`SubscriptionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable declared subscription identifier.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last observation was reported.

`LastMessageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last stable inbound message identifier when one was reported.

`LastAttempt` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The last reported application-managed attempt number.

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

## Properties

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_LastAttempt"></a> LastAttempt

The last reported application-managed attempt number.

```csharp
public int LastAttempt { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_LastError"></a> LastError

The last operator-facing error summary when a failure was reported.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_LastMessageId"></a> LastMessageId

The last stable inbound message identifier when one was reported.

```csharp
public string? LastMessageId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_LastOutcome"></a> LastOutcome

The last reported outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest report.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_RetryPending"></a> RetryPending

Gets a value indicating whether the latest report says another retry attempt is pending.

```csharp
public bool RetryPending { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_RetryScheduledCount"></a> RetryScheduledCount

The number of <code>retry-scheduled</code> observations reported so far.

```csharp
public int RetryScheduledCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_SkippedCount"></a> SkippedCount

The number of <code>skipped</code> observations reported so far.

```csharp
public int SkippedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_StartedCount"></a> StartedCount

The number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_SubscriptionId"></a> SubscriptionId

The stable declared subscription identifier.

```csharp
public string SubscriptionId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_SucceededCount"></a> SucceededCount

The number of <code>succeeded</code> observations reported so far.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Eventing_Services_EventSubscriptionRuntimeState_TotalReports"></a> TotalReports

Gets the total number of observations reported for this subscription.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
