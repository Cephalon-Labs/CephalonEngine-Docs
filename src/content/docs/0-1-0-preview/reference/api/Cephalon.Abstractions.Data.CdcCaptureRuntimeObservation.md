---
title: Class CdcCaptureRuntimeObservation
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimeobservation
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing runtime observation reported for a CDC capture by an execution runtime.

```csharp
public sealed class CdcCaptureRuntimeObservation
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureRuntimeObservation](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimeobservation/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation__ctor_System_String_System_String_System_DateTimeOffset_System_String_System_Int32_System_Int32_System_String_System_String_System_String_Cephalon_Abstractions_Data_CdcCaptureFreshnessStatus_Cephalon_Abstractions_Data_CdcCaptureLagStatus_Cephalon_Abstractions_Data_CdcCapturePublicationStatus_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_String_"></a> CdcCaptureRuntimeObservation\(string, string, DateTimeOffset, string?, int, int, string?, string?, string?, CdcCaptureFreshnessStatus?, CdcCaptureLagStatus?, CdcCapturePublicationStatus?, IReadOnlyDictionary<string, string\>?, string?, string?\)

Creates a new CDC capture runtime observation.

```csharp
[JsonConstructor]
public CdcCaptureRuntimeObservation(string cdcCaptureId, string outcome, DateTimeOffset observedAtUtc, string? reportId = null, int capturedChangeCount = 0, int producedMessageCount = 0, string? changeId = null, string? checkpoint = null, string? error = null, CdcCaptureFreshnessStatus? freshness = null, CdcCaptureLagStatus? lag = null, CdcCapturePublicationStatus? publication = null, IReadOnlyDictionary<string, string>? metadata = null, string? reporterId = null, string? edgeNodeId = null)
```

#### Parameters

`cdcCaptureId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable CDC capture identifier that produced the observation.

`outcome` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable outcome identifier, such as <code>started</code>, <code>captured</code>, <code>idle</code>, or <code>failed</code>.

`observedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the observation occurred.

`reportId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable report identifier used to make repeated external observation submissions idempotent.

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

`freshness` [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)?

An optional typed freshness answer reported by the active provider/runtime.

`lag` [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)?

An optional typed lag answer reported by the active provider/runtime.

`publication` [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)?

An optional typed publication-posture answer reported by the active provider/runtime.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional operator-facing metadata captured alongside the observation.

`reporterId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable reporter identity that submitted the observation, such as an external runner instance or edge agent id.

`edgeNodeId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional stable edge-node identifier that originated the observation when the runtime topology is edge-aware.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_CapturedChangeCount"></a> CapturedChangeCount

Gets the number of source changes observed by this report.

```csharp
public int CapturedChangeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_CdcCaptureId"></a> CdcCaptureId

Gets the stable CDC capture identifier that produced the observation.

```csharp
public string CdcCaptureId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_ChangeId"></a> ChangeId

Gets the latest provider-facing change identifier when one was reported.

```csharp
public string? ChangeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Checkpoint"></a> Checkpoint

Gets the latest provider-facing checkpoint or cursor when one was reported.

```csharp
public string? Checkpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_EdgeNodeId"></a> EdgeNodeId

Gets the stable edge-node identifier that originated the observation when one was supplied.

```csharp
public string? EdgeNodeId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Error"></a> Error

Gets the operator-facing error summary when the observation represents a failure.

```csharp
public string? Error { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Freshness"></a> Freshness

Gets the typed freshness answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCaptureFreshnessStatus? Freshness { get; }
```

#### Property Value

 [CdcCaptureFreshnessStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturefreshnessstatus/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Lag"></a> Lag

Gets the typed lag answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCaptureLagStatus? Lag { get; }
```

#### Property Value

 [CdcCaptureLagStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturelagstatus/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Metadata"></a> Metadata

Gets optional operator-facing metadata captured alongside the observation.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_ObservedAtUtc"></a> ObservedAtUtc

Gets the UTC timestamp when the observation occurred.

```csharp
public DateTimeOffset ObservedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Outcome"></a> Outcome

Gets the stable outcome identifier for the observed CDC activity.

```csharp
public string Outcome { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_ProducedMessageCount"></a> ProducedMessageCount

Gets the number of outbox messages produced by this report.

```csharp
public int ProducedMessageCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_Publication"></a> Publication

Gets the typed publication-posture answer reported by the active provider/runtime when one was supplied.

```csharp
public CdcCapturePublicationStatus? Publication { get; }
```

#### Property Value

 [CdcCapturePublicationStatus](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturepublicationstatus/)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_ReportId"></a> ReportId

Gets the optional stable report identifier used to make repeated submissions idempotent.

```csharp
public string? ReportId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation_ReporterId"></a> ReporterId

Gets the stable reporter identity that submitted the observation when one was supplied.

```csharp
public string? ReporterId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
