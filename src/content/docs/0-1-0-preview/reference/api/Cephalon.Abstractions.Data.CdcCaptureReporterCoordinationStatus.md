---
title: Class CdcCaptureReporterCoordinationStatus
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstatus
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the reporter-coordination posture currently visible for one CDC capture or execution runtime.

```csharp
public sealed record CdcCaptureReporterCoordinationStatus : IEquatable<CdcCaptureReporterCoordinationStatus>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureReporterCoordinationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstatus/)

#### Implements

[IEquatable<CdcCaptureReporterCoordinationStatus\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus__ctor_System_String_System_String_"></a> CdcCaptureReporterCoordinationStatus\(string, string?\)

Creates a new CDC reporter-coordination status.

```csharp
public CdcCaptureReporterCoordinationStatus(string state, string? description = null)
```

#### Parameters

`state` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable reporter-coordination state, such as <code>active</code>, <code>lease-expired</code>, or <code>conflicted</code>.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional operator-facing reporter-coordination summary.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_ActiveReporterCount"></a> ActiveReporterCount

Gets the number of active reporters currently visible in the coordination story.

```csharp
public int ActiveReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_ActiveReporterId"></a> ActiveReporterId

Gets the reporter identity that currently holds the active lease when one is known.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_ActiveReporterLeaseExpiresAtUtc"></a> ActiveReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ActiveReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_DegradedReason"></a> DegradedReason

Gets the stable degraded-reason identifier when reporter coordination is currently degraded.

```csharp
public string DegradedReason { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_Description"></a> Description

Gets an optional operator-facing reporter-coordination summary.

```csharp
public string? Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_HasActiveReporter"></a> HasActiveReporter

Gets a value indicating whether the coordination answer currently has one active reporter owner.

```csharp
public bool HasActiveReporter { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_HasCompletedTakeover"></a> HasCompletedTakeover

Gets a value indicating whether the coordination answer records a completed reporter takeover.

```csharp
public bool HasCompletedTakeover { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_HasMultipleActiveReporters"></a> HasMultipleActiveReporters

Gets a value indicating whether the coordination answer currently carries more than one active reporter.

```csharp
public bool HasMultipleActiveReporters { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_HasRejectedReporters"></a> HasRejectedReporters

Gets a value indicating whether the coordination answer currently carries rejected reporter evidence.

```csharp
public bool HasRejectedReporters { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_HasStandbyReporters"></a> HasStandbyReporters

Gets a value indicating whether the coordination answer currently carries standby reporter evidence.

```csharp
public bool HasStandbyReporters { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_IsDegraded"></a> IsDegraded

Gets a value indicating whether the coordination answer currently reports degraded reporter ownership.

```csharp
public bool IsDegraded { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_LastConflictedAtUtc"></a> LastConflictedAtUtc

Gets the UTC timestamp when the last conflicting reporter was observed or rejected when one is known.

```csharp
public DateTimeOffset? LastConflictedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_LastConflictingReporterId"></a> LastConflictingReporterId

Gets the last conflicting reporter identity that was observed or rejected when one is known.

```csharp
public string? LastConflictingReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_LastTakeoverObservedAtUtc"></a> LastTakeoverObservedAtUtc

Gets the UTC timestamp when the current reporter most recently took over after the previous lease expired.

```csharp
public DateTimeOffset? LastTakeoverObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_LeaseExpiredAtUtc"></a> LeaseExpiredAtUtc

Gets the UTC timestamp when the previous reporter lease expired before failover or takeover when one is known.

```csharp
public DateTimeOffset? LeaseExpiredAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_ParticipantCount"></a> ParticipantCount

Gets the total number of reporter participants currently visible in the coordination story.

```csharp
public int ParticipantCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_PreviousReporterId"></a> PreviousReporterId

Gets the previous active reporter identity when the current reporter took over after lease expiry.

```csharp
public string? PreviousReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_RejectedReporterCount"></a> RejectedReporterCount

Gets the number of rejected reporters currently visible in the coordination story.

```csharp
public int RejectedReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_ReporterParticipants"></a> ReporterParticipants

Gets the reporter participants currently visible in the coordination story.

```csharp
public IReadOnlyList<CdcCaptureReporterParticipantStatus> ReporterParticipants { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureReporterParticipantStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereporterparticipantstatus/)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_RequiresTakeover"></a> RequiresTakeover

Gets a value indicating whether the coordination answer is currently waiting for a replacement reporter to take over.

```csharp
public bool RequiresTakeover { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_StandbyReporterCount"></a> StandbyReporterCount

Gets the number of standby reporters currently visible in the coordination story.

```csharp
public int StandbyReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_State"></a> State

Gets the stable reporter-coordination state.

```csharp
public string State { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationStatus_TakeoverState"></a> TakeoverState

Gets the stable reporter-takeover posture currently visible in the coordination story.

```csharp
public string TakeoverState { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
