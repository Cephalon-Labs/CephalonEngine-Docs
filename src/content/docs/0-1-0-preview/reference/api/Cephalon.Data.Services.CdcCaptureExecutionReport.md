---
title: Class CdcCaptureExecutionReport
slug: 0-1-0-preview/reference/api/cephalon-data-services-cdccaptureexecutionreport
editUrl: false
---

Namespace: [Cephalon.Data.Services](/0-1-0-preview/reference/api/cephalon-data-services/)  
Assembly: Cephalon.Data.dll  

Describes one reported runtime observation for a CDC capture.

```csharp
public sealed class CdcCaptureExecutionReport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionReport](/0-1-0-preview/reference/api/cephalon-data-services-cdccaptureexecutionreport/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport__ctor_System_String_System_String_System_DateTimeOffset_System_String_System_Int32_System_Int32_System_String_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureLagStatus_Cephalon_Abstractions_Data_CdcCapturePublicationStatus_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_"></a> CdcCaptureExecutionReport\(string, string, DateTimeOffset, string?, int, int, string?, string?, string?, CdcCaptureFreshnessStatus?, CdcCaptureFreshnessStatus?, CdcCaptureLagStatus?, CdcCapturePublicationStatus?, IReadOnlyDictionary<string, string\>?, string?, string?\)

Creates a new CDC capture runtime observation.

```csharp
public CdcCaptureExecutionReport(string cdcCaptureId, string outcome, DateTimeOffset observedAtUtc, string? reportId = null, int capturedChangeCount = 0, int producedMessageCount = 0, string? changeId = null, string? checkpoint = null, string? error = null, CdcCaptureFreshnessStatus? freshness = null, CdcCaptureFreshnessStatus? observationFreshness = null, CdcCaptureLagStatus? lag = null, CdcCapturePublicationStatus? publication = null, IReadOnlyDictionary<string, string>? metadata = null, string? reporterId = null, string? edgeNodeId = null)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier that produced the observation.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outcome identifier, such as <code>started</code>, <code>captured</code>, <code>idle</code>, or <code>failed</code>.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the observation occurred.

`reportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable report identifier used to make repeated submissions idempotent.

`capturedChangeCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of source changes observed by this report.

`producedMessageCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of outbox messages produced by this report.

`changeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing change identifier when available.

`checkpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The latest provider-facing checkpoint or cursor when available.

`error` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The operator-facing error summary when the observation represents a failure.

`freshness` CdcCaptureFreshnessStatus?

An optional typed freshness answer reported by the active provider/runtime.

`observationFreshness` CdcCaptureFreshnessStatus?

An optional report-freshness answer describing whether the observation itself is still current.

`lag` CdcCaptureLagStatus?

An optional typed lag answer reported by the active provider/runtime.

`publication` CdcCapturePublicationStatus?

An optional typed publication-posture answer reported by the active provider/runtime.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the observation.

`reporterId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable reporter identity that submitted the observation.

`edgeNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable edge-node identifier that originated the observation.

## Properties

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_CapturedChangeCount"></a> CapturedChangeCount

Gets the number of source changes observed by this report.

```csharp
public int CapturedChangeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_CdcCaptureId"></a> CdcCaptureId

Gets the stable CDC capture identifier that produced the observation.

```csharp
public string CdcCaptureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ChangeId"></a> ChangeId

Gets the latest provider-facing change identifier when one was reported.

```csharp
public string? ChangeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Checkpoint"></a> Checkpoint

Gets the latest provider-facing checkpoint or cursor when one was reported.

```csharp
public string? Checkpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_EdgeNodeId"></a> EdgeNodeId

Gets the stable edge-node identifier that originated the observation when one was supplied.

```csharp
public string? EdgeNodeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Error"></a> Error

Gets the operator-facing error summary when the observation represents a failure.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Freshness"></a> Freshness

Gets the typed freshness answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCaptureFreshnessStatus? Freshness { get; }
```

#### Property Value

 CdcCaptureFreshnessStatus?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Lag"></a> Lag

Gets the typed lag answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCaptureLagStatus? Lag { get; }
```

#### Property Value

 CdcCaptureLagStatus?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ObservationFreshness"></a> ObservationFreshness

Gets the typed report-freshness answer reported for the observation itself when one was supplied.

```csharp
public CdcCaptureFreshnessStatus? ObservationFreshness { get; }
```

#### Property Value

 CdcCaptureFreshnessStatus?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the observation occurred.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Outcome"></a> Outcome

Gets the stable outcome identifier for the observed CDC activity.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ProducedMessageCount"></a> ProducedMessageCount

Gets the number of outbox messages produced by this report.

```csharp
public int ProducedMessageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_Publication"></a> Publication

Gets the typed publication-posture answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCapturePublicationStatus? Publication { get; }
```

#### Property Value

 CdcCapturePublicationStatus?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ReportId"></a> ReportId

Gets the optional stable report identifier used to make repeated submissions idempotent.

```csharp
public string? ReportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Data_Services_CdcCaptureExecutionReport_ReporterId"></a> ReporterId

Gets the stable reporter identity that submitted the observation when one was supplied.

```csharp
public string? ReporterId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
