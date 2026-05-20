---
title: Class CdcCaptureExecutionRuntimeSummary
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest aggregate operator-facing runtime summary for one CDC capture execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeSummary : IEquatable<CdcCaptureExecutionRuntimeSummary>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeSummary\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_String_System_Nullable_System_DateTimeOffset__System_String_System_String_System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int64_System_Int64_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_"></a> CdcCaptureExecutionRuntimeSummary\(IReadOnlyList<string\>, string?, string?, DateTimeOffset?, string?, string?, string?, int, int, int, int, long, long, string?, string?, CdcCaptureFreshnessStatus\)

Describes the latest aggregate operator-facing runtime summary for one CDC capture execution runtime.

```csharp
public CdcCaptureExecutionRuntimeSummary(IReadOnlyList<string> ReportedCdcCaptureIds, string? LastCdcCaptureId, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastReportId, string? LastChangeId, string? LastCheckpoint, int StartedCount, int CapturedCount, int IdleCount, int FailedCount, long TotalCapturedChangeCount, long TotalProducedMessageCount, string? LastAcknowledgement, string? LastError, CdcCaptureFreshnessStatus ObservationFreshness)
```

#### Parameters

`ReportedCdcCaptureIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The CDC capture identifiers that have reported runtime state for the execution runtime.

`LastCdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The CDC capture identifier that produced the latest runtime observation.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest reported capture outcome visible for the execution runtime.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest runtime observation was reported.

`LastReportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest stable report identifier visible for the execution runtime when one was reported.

`LastChangeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing change identifier visible for the execution runtime.

`LastCheckpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing checkpoint visible for the execution runtime.

`StartedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>started</code> observations visible for the execution runtime.

`CapturedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>captured</code> observations visible for the execution runtime.

`IdleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>idle</code> observations visible for the execution runtime.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The total number of <code>failed</code> observations visible for the execution runtime.

`TotalCapturedChangeCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The total number of source changes reported for the execution runtime.

`TotalProducedMessageCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The total number of produced outbox messages reported for the execution runtime.

`LastAcknowledgement` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest acknowledgement posture reported for the execution runtime when one is known.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary visible for the execution runtime.

`ObservationFreshness` [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

The latest aggregate report-freshness posture visible for the execution runtime.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ActiveReporterId"></a> ActiveReporterId

Gets the currently active reporter identity when one reporter still holds an active lease for the execution runtime.

```csharp
public string? ActiveReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_CapturedCount"></a> CapturedCount

The total number of <code>captured</code> observations visible for the execution runtime.

```csharp
public int CapturedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_Empty"></a> Empty

Gets an empty summary for execution runtimes that have not reported state yet.

```csharp
public static CdcCaptureExecutionRuntimeSummary Empty { get; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeSummary](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimesummary/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_FailedCount"></a> FailedCount

The total number of <code>failed</code> observations visible for the execution runtime.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasActiveReporterLease"></a> HasActiveReporterLease

Gets a value indicating whether the execution runtime currently has an active reporter lease.

```csharp
public bool HasActiveReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasBlockingRemediation"></a> HasBlockingRemediation

Gets a value indicating whether the execution runtime is currently blocked by failed CDC captures.

```csharp
public bool HasBlockingRemediation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasFullCaptureCoverage"></a> HasFullCaptureCoverage

Gets a value indicating whether the execution runtime has reported every declared CDC capture it currently owns.

```csharp
public bool HasFullCaptureCoverage { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasReporterCoordinationIssue"></a> HasReporterCoordinationIssue

Gets a value indicating whether the execution runtime currently reports degraded reporter ownership.

```csharp
public bool HasReporterCoordinationIssue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasReports"></a> HasReports

Gets a value indicating whether the execution runtime has reported any runtime observations yet.

```csharp
public bool HasReports { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasStaleObservations"></a> HasStaleObservations

Gets a value indicating whether at least one reported capture observation is now stale.

```csharp
public bool HasStaleObservations { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_HasUnreportedDeclaredCaptures"></a> HasUnreportedDeclaredCaptures

Gets a value indicating whether any declared CDC captures still have not reported runtime state.

```csharp
public bool HasUnreportedDeclaredCaptures { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_IdleCount"></a> IdleCount

The total number of <code>idle</code> observations visible for the execution runtime.

```csharp
public int IdleCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastAcknowledgement"></a> LastAcknowledgement

The latest acknowledgement posture reported for the execution runtime when one is known.

```csharp
public string? LastAcknowledgement { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastCdcCaptureId"></a> LastCdcCaptureId

The CDC capture identifier that produced the latest runtime observation.

```csharp
public string? LastCdcCaptureId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastChangeId"></a> LastChangeId

The latest provider-facing change identifier visible for the execution runtime.

```csharp
public string? LastChangeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastCheckpoint"></a> LastCheckpoint

The latest provider-facing checkpoint visible for the execution runtime.

```csharp
public string? LastCheckpoint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastEdgeNodeId"></a> LastEdgeNodeId

Gets the latest edge-node identifier visible for the execution runtime when one was reported.

```csharp
public string? LastEdgeNodeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastError"></a> LastError

The latest operator-facing error summary visible for the execution runtime.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the latest runtime observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastOutcome"></a> LastOutcome

The latest reported capture outcome visible for the execution runtime.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastReportId"></a> LastReportId

The latest stable report identifier visible for the execution runtime when one was reported.

```csharp
public string? LastReportId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_LastReporterId"></a> LastReporterId

Gets the latest reporter identity visible for the execution runtime when one was reported.

```csharp
public string? LastReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ObservationFreshness"></a> ObservationFreshness

The latest aggregate report-freshness posture visible for the execution runtime.

```csharp
public CdcCaptureFreshnessStatus ObservationFreshness { get; init; }
```

#### Property Value

 [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ObservedEdgeNodeIds"></a> ObservedEdgeNodeIds

Gets the declared or observed edge-node identifiers that most recently reported runtime state for the execution runtime.

```csharp
public IReadOnlyList<string> ObservedEdgeNodeIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_Remediation"></a> Remediation

Gets the aggregate remediation posture currently visible for the execution runtime.

```csharp
public CdcCaptureExecutionRuntimeRemediationStatus Remediation { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeRemediationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimeremediationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReportedCaptureCount"></a> ReportedCaptureCount

Gets the number of distinct CDC captures that have reported runtime state for the execution runtime.

```csharp
public int ReportedCaptureCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReportedCdcCaptureIds"></a> ReportedCdcCaptureIds

The CDC capture identifiers that have reported runtime state for the execution runtime.

```csharp
public IReadOnlyList<string> ReportedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReporterCoordination"></a> ReporterCoordination

Gets the reporter-coordination posture currently visible for the execution runtime.

```csharp
public CdcCaptureReporterCoordinationStatus ReporterCoordination { get; init; }
```

#### Property Value

 [CdcCaptureReporterCoordinationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReporterCoordinationRollup"></a> ReporterCoordinationRollup

Gets the grouped reporter-coordination rollup currently visible across the execution runtime's reported CDC captures.

```csharp
public CdcCaptureExecutionRuntimeReporterCoordinationRollup ReporterCoordinationRollup { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeReporterCoordinationRollup](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportercoordinationrollup/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReporterLeaseExpiresAtUtc"></a> ReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the active reporter lease expires when one is known.

```csharp
public DateTimeOffset? ReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_ReportingCoverage"></a> ReportingCoverage

Gets the declared-versus-reported coverage currently visible for the execution runtime.

```csharp
public CdcCaptureExecutionRuntimeReportingCoverageStatus ReportingCoverage { get; init; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeReportingCoverageStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportingcoveragestatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_RequiresRemediation"></a> RequiresRemediation

Gets a value indicating whether the execution runtime currently requires operator remediation.

```csharp
public bool RequiresRemediation { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_StartedCount"></a> StartedCount

The total number of <code>started</code> observations visible for the execution runtime.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_TotalCapturedChangeCount"></a> TotalCapturedChangeCount

The total number of source changes reported for the execution runtime.

```csharp
public long TotalCapturedChangeCount { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_TotalProducedMessageCount"></a> TotalProducedMessageCount

The total number of produced outbox messages reported for the execution runtime.

```csharp
public long TotalProducedMessageCount { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeSummary_TotalReports"></a> TotalReports

Gets the total number of runtime observations visible for the execution runtime.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
