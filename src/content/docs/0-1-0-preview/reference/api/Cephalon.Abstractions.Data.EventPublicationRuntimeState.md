---
title: Class EventPublicationRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state reported for one event publication.

```csharp
public sealed record EventPublicationRuntimeState : IEquatable<EventPublicationRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EventPublicationRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventpublicationruntimestate/)

#### Implements

[IEquatable<EventPublicationRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState__ctor_System_String_System_String_System_String_System_String_System_Nullable_System_DateTimeOffset__System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> EventPublicationRuntimeState\(string, string?, string?, string?, DateTimeOffset?, int, int, int, int, int, int, int, int, int, int, string?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state reported for one event publication.

```csharp
public EventPublicationRuntimeState(string PublicationId, string? LastChannelId, string? LastEventType, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, int AcceptedCount, int SucceededCount, int FailedCount, int SkippedCount, int MatchedSubscriptionCount, int StartedSubscriptionCount, int SucceededSubscriptionCount, int FailedSubscriptionCount, int RetryScheduledSubscriptionCount, int SkippedSubscriptionCount, string? LastError, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`PublicationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable publication identifier.

`LastChannelId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last stable channel identifier reported for this publication.

`LastEventType` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last stable event-type identifier reported for this publication.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last reported publication outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the last publication observation was reported.

`AcceptedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>accepted</code> publication observations reported so far.

`SucceededCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>succeeded</code> publication observations reported so far.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>failed</code> publication observations reported so far.

`SkippedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>skipped</code> publication observations reported so far.

`MatchedSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscriptions matched by the latest publication observation.

`StartedSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-start observations produced by the latest publication observation.

`SucceededSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-success observations produced by the latest publication observation.

`FailedSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-failure observations produced by the latest publication observation.

`RetryScheduledSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-retry observations produced by the latest publication observation.

`SkippedSubscriptionCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of subscription-skip observations produced by the latest publication observation.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The last operator-facing error summary when a publication failure was reported.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest publication observation.

## Properties

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_AcceptedCount"></a> AcceptedCount

The number of <code>accepted</code> publication observations reported so far.

```csharp
public int AcceptedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> publication observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_FailedSubscriptionCount"></a> FailedSubscriptionCount

The number of subscription-failure observations produced by the latest publication observation.

```csharp
public int FailedSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_HasSubscriptionFailures"></a> HasSubscriptionFailures

Gets a value indicating whether the latest observation reported any subscription failures.

```csharp
public bool HasSubscriptionFailures { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_HasSubscriptionSkips"></a> HasSubscriptionSkips

Gets a value indicating whether the latest observation reported any skipped subscriptions.

```csharp
public bool HasSubscriptionSkips { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_LastChannelId"></a> LastChannelId

The last stable channel identifier reported for this publication.

```csharp
public string? LastChannelId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_LastError"></a> LastError

The last operator-facing error summary when a publication failure was reported.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_LastEventType"></a> LastEventType

The last stable event-type identifier reported for this publication.

```csharp
public string? LastEventType { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the last publication observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_LastOutcome"></a> LastOutcome

The last reported publication outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_MatchedSubscriptionCount"></a> MatchedSubscriptionCount

The number of subscriptions matched by the latest publication observation.

```csharp
public int MatchedSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest publication observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_PublicationId"></a> PublicationId

The stable publication identifier.

```csharp
public string PublicationId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_RetryScheduledSubscriptionCount"></a> RetryScheduledSubscriptionCount

The number of subscription-retry observations produced by the latest publication observation.

```csharp
public int RetryScheduledSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_SkippedCount"></a> SkippedCount

The number of <code>skipped</code> publication observations reported so far.

```csharp
public int SkippedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_SkippedSubscriptionCount"></a> SkippedSubscriptionCount

The number of subscription-skip observations produced by the latest publication observation.

```csharp
public int SkippedSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_StartedSubscriptionCount"></a> StartedSubscriptionCount

The number of subscription-start observations produced by the latest publication observation.

```csharp
public int StartedSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_SucceededCount"></a> SucceededCount

The number of <code>succeeded</code> publication observations reported so far.

```csharp
public int SucceededCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_SucceededSubscriptionCount"></a> SucceededSubscriptionCount

The number of subscription-success observations produced by the latest publication observation.

```csharp
public int SucceededSubscriptionCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_EventPublicationRuntimeState_TotalReports"></a> TotalReports

Gets the total number of publication observations reported for this publication id.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
