---
title: Class CdcCaptureRuntimeState
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the latest operator-facing runtime state visible for one active CDC capture.

```csharp
public sealed record CdcCaptureRuntimeState : IEquatable<CdcCaptureRuntimeState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimestate/)

#### Implements

[IEquatable<CdcCaptureRuntimeState\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Nullable_System_DateTimeOffset__System_String_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int32_System_Int64_System_Int64_System_String_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureLagStatus_Cephalon_Abstractions_Data_CdcCapturePublicationStatus_Cephalon_Abstractions_Data_EventDispatchRuntimeState_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CdcCaptureRuntimeState\(string, string, string, string, string, string, string, IReadOnlyList<string\>, string?, DateTimeOffset?, string?, int, int, int, int, int, int, long, long, string?, string?, string?, CdcCaptureFreshnessStatus, CdcCaptureFreshnessStatus, CdcCaptureLagStatus, CdcCapturePublicationStatus, EventDispatchRuntimeState?, IReadOnlyDictionary<string, string\>\)

Describes the latest operator-facing runtime state visible for one active CDC capture.

```csharp
public CdcCaptureRuntimeState(string CdcCaptureId, string SourceModuleId, string Provider, string SourceId, string OutboxId, string Mode, string EventFormat, IReadOnlyList<string> ResourceIds, string? LastOutcome, DateTimeOffset? LastObservedAtUtc, string? LastReportId, int LastCapturedChangeCount, int LastProducedMessageCount, int StartedCount, int CapturedCount, int IdleCount, int FailedCount, long TotalCapturedChangeCount, long TotalProducedMessageCount, string? LastChangeId, string? LastCheckpoint, string? LastError, CdcCaptureFreshnessStatus Freshness, CdcCaptureFreshnessStatus ObservationFreshness, CdcCaptureLagStatus Lag, CdcCapturePublicationStatus Publication, EventDispatchRuntimeState? OutboxDispatchState, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`CdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The identifier of the module that owns the CDC capture.

`Provider` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical provider identifier that supplies the change feed.

`SourceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The logical source stream, database, or feed identifier.

`OutboxId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The outbox identifier that receives captured publications.

`Mode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capture mode such as <code>wal</code>, <code>change-stream</code>, or <code>table-tail</code>.

`EventFormat` [string](https://learn.microsoft.com/dotnet/api/system.string)

The emitted change-event format such as <code>debezium-envelope</code>.

`ResourceIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The resource identifiers observed by the capture.

`LastOutcome` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest reported capture outcome identifier when one exists.

`LastObservedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

The UTC timestamp when the latest capture observation was reported.

`LastReportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest stable report identifier when the active runtime supplied one.

`LastCapturedChangeCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of source changes observed in the latest report.

`LastProducedMessageCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of outbox messages produced by the latest report.

`StartedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>started</code> observations reported so far.

`CapturedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>captured</code> observations reported so far.

`IdleCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>idle</code> observations reported so far.

`FailedCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of <code>failed</code> observations reported so far.

`TotalCapturedChangeCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The total number of source changes reported so far.

`TotalProducedMessageCount` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The total number of outbox messages produced so far.

`LastChangeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing change identifier when one was reported.

`LastCheckpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing checkpoint or cursor when one was reported.

`LastError` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest operator-facing error summary when one was reported.

`Freshness` [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

The latest provider-facing freshness answer reported for the capture.

`ObservationFreshness` [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

The latest report-freshness answer visible for the capture observation itself.

`Lag` [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)

The latest provider-facing lag answer reported for the capture.

`Publication` [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)

The latest publication posture answer reported for the capture.

`OutboxDispatchState` [EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)?

The latest linked outbox dispatch state when the active runtime also reports publication posture for the capture's outbox.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

The operator-facing metadata captured by the latest report.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_CapturedCount"></a> CapturedCount

The number of <code>captured</code> observations reported so far.

```csharp
public int CapturedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_CdcCaptureId"></a> CdcCaptureId

The stable CDC capture identifier.

```csharp
public string CdcCaptureId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_EventFormat"></a> EventFormat

The emitted change-event format such as <code>debezium-envelope</code>.

```csharp
public string EventFormat { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_ExecutionBinding"></a> ExecutionBinding

Gets the authored or effective execution-binding answer for the CDC capture.

```csharp
public CdcCaptureExecutionBindingDescriptor ExecutionBinding { get; init; }
```

#### Property Value

 [CdcCaptureExecutionBindingDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionbindingdescriptor/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_FailedCount"></a> FailedCount

The number of <code>failed</code> observations reported so far.

```csharp
public int FailedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Freshness"></a> Freshness

The latest provider-facing freshness answer reported for the capture.

```csharp
public CdcCaptureFreshnessStatus Freshness { get; init; }
```

#### Property Value

 [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasActiveReporterOwner"></a> HasActiveReporterOwner

Gets a value indicating whether the capture's execution runtime currently has one active reporter owner.

```csharp
public bool HasActiveReporterOwner { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasDispatchReports"></a> HasDispatchReports

Gets a value indicating whether the linked outbox dispatch path has reported runtime state.

```csharp
public bool HasDispatchReports { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasFreshnessWindow"></a> HasFreshnessWindow

Gets a value indicating whether the capture still has a provider-reported freshness window.

```csharp
public bool HasFreshnessWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasObservationFreshnessWindow"></a> HasObservationFreshnessWindow

Gets a value indicating whether the capture observation still has a report-freshness window.

```csharp
public bool HasObservationFreshnessWindow { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasPendingChanges"></a> HasPendingChanges

Gets a value indicating whether the capture still has provider-reported pending source changes.

```csharp
public bool HasPendingChanges { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasPendingPublications"></a> HasPendingPublications

Gets a value indicating whether the capture still has provider-reported pending publications.

```csharp
public bool HasPendingPublications { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasReporterCoordinationIssue"></a> HasReporterCoordinationIssue

Gets a value indicating whether the capture's execution runtime currently reports degraded reporter ownership.

```csharp
public bool HasReporterCoordinationIssue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasReporterLease"></a> HasReporterLease

Gets a value indicating whether the capture currently carries reporter-lease metadata.

```csharp
public bool HasReporterLease { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_HasReports"></a> HasReports

Gets a value indicating whether the capture has reported any runtime observations yet.

```csharp
public bool HasReports { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_IdleCount"></a> IdleCount

The number of <code>idle</code> observations reported so far.

```csharp
public int IdleCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_IsFailed"></a> IsFailed

Gets a value indicating whether the latest reported capture posture is failed.

```csharp
public bool IsFailed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_IsObservationStale"></a> IsObservationStale

Gets a value indicating whether the latest report is now stale according to the execution-runtime reporting policy.

```csharp
public bool IsObservationStale { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Lag"></a> Lag

The latest provider-facing lag answer reported for the capture.

```csharp
public CdcCaptureLagStatus Lag { get; init; }
```

#### Property Value

 [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastCapturedChangeCount"></a> LastCapturedChangeCount

The number of source changes observed in the latest report.

```csharp
public int LastCapturedChangeCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastChangeId"></a> LastChangeId

The latest provider-facing change identifier when one was reported.

```csharp
public string? LastChangeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastCheckpoint"></a> LastCheckpoint

The latest provider-facing checkpoint or cursor when one was reported.

```csharp
public string? LastCheckpoint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastEdgeNodeId"></a> LastEdgeNodeId

Gets the latest edge-node identifier visible for the capture when one was reported.

```csharp
public string? LastEdgeNodeId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastError"></a> LastError

The latest operator-facing error summary when one was reported.

```csharp
public string? LastError { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastObservedAtUtc"></a> LastObservedAtUtc

The UTC timestamp when the latest capture observation was reported.

```csharp
public DateTimeOffset? LastObservedAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastOutcome"></a> LastOutcome

The latest reported capture outcome identifier when one exists.

```csharp
public string? LastOutcome { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastProducedMessageCount"></a> LastProducedMessageCount

The number of outbox messages produced by the latest report.

```csharp
public int LastProducedMessageCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastReportId"></a> LastReportId

The latest stable report identifier when the active runtime supplied one.

```csharp
public string? LastReportId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_LastReporterId"></a> LastReporterId

Gets the latest reporter identity visible for the capture when one was reported.

```csharp
public string? LastReporterId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Metadata"></a> Metadata

The operator-facing metadata captured by the latest report.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Mode"></a> Mode

The capture mode such as <code>wal</code>, <code>change-stream</code>, or <code>table-tail</code>.

```csharp
public string Mode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_ObservationFreshness"></a> ObservationFreshness

The latest report-freshness answer visible for the capture observation itself.

```csharp
public CdcCaptureFreshnessStatus ObservationFreshness { get; init; }
```

#### Property Value

 [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_OutboxDispatchState"></a> OutboxDispatchState

The latest linked outbox dispatch state when the active runtime also reports publication posture for the capture's outbox.

```csharp
public EventDispatchRuntimeState? OutboxDispatchState { get; init; }
```

#### Property Value

 [EventDispatchRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-data-eventdispatchruntimestate/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_OutboxId"></a> OutboxId

The outbox identifier that receives captured publications.

```csharp
public string OutboxId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Provider"></a> Provider

The logical provider identifier that supplies the change feed.

```csharp
public string Provider { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_Publication"></a> Publication

The latest publication posture answer reported for the capture.

```csharp
public CdcCapturePublicationStatus Publication { get; init; }
```

#### Property Value

 [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_ReporterCoordination"></a> ReporterCoordination

Gets the reporter-coordination posture currently visible for the capture's execution runtime.

```csharp
public CdcCaptureReporterCoordinationStatus ReporterCoordination { get; init; }
```

#### Property Value

 [CdcCaptureReporterCoordinationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationstatus/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_ReporterLeaseExpiresAtUtc"></a> ReporterLeaseExpiresAtUtc

Gets the UTC timestamp when the latest reporter lease expires when one is known.

```csharp
public DateTimeOffset? ReporterLeaseExpiresAtUtc { get; init; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_ResourceIds"></a> ResourceIds

The resource identifiers observed by the capture.

```csharp
public IReadOnlyList<string> ResourceIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_SourceId"></a> SourceId

The logical source stream, database, or feed identifier.

```csharp
public string SourceId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_SourceModuleId"></a> SourceModuleId

The identifier of the module that owns the CDC capture.

```csharp
public string SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_StartedCount"></a> StartedCount

The number of <code>started</code> observations reported so far.

```csharp
public int StartedCount { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_TotalCapturedChangeCount"></a> TotalCapturedChangeCount

The total number of source changes reported so far.

```csharp
public long TotalCapturedChangeCount { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_TotalProducedMessageCount"></a> TotalProducedMessageCount

The total number of outbox messages produced so far.

```csharp
public long TotalProducedMessageCount { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeState_TotalReports"></a> TotalReports

Gets the total number of capture observations reported for the CDC capture.

```csharp
public int TotalReports { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)
