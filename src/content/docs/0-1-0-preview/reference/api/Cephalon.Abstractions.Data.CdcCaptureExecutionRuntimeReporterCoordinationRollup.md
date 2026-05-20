---
title: Class CdcCaptureExecutionRuntimeReporterCoordinationRollup
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportercoordinationrollup
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Describes the grouped reporter-coordination story currently visible for one CDC capture execution runtime.

```csharp
public sealed record CdcCaptureExecutionRuntimeReporterCoordinationRollup : IEquatable<CdcCaptureExecutionRuntimeReporterCoordinationRollup>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CdcCaptureExecutionRuntimeReporterCoordinationRollup](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportercoordinationrollup/)

#### Implements

[IEquatable<CdcCaptureExecutionRuntimeReporterCoordinationRollup\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationBreakdownEntry__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_CdcCaptureReporterCoordinationBreakdownEntry__"></a> CdcCaptureExecutionRuntimeReporterCoordinationRollup\(IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry\>, IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry\>\)

Describes the grouped reporter-coordination story currently visible for one CDC capture execution runtime.

```csharp
public CdcCaptureExecutionRuntimeReporterCoordinationRollup(IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry> CoordinationStateBreakdown, IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry> DegradedReasonBreakdown)
```

#### Parameters

`CoordinationStateBreakdown` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureReporterCoordinationBreakdownEntry](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry/)\>

The grouped reporter-coordination states currently visible across the execution runtime's reported CDC captures.

`DegradedReasonBreakdown` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureReporterCoordinationBreakdownEntry](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry/)\>

The grouped degraded-reason answers currently visible across the execution runtime's reported CDC captures.

## Properties

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_ActiveReporterCount"></a> ActiveReporterCount

Gets the number of distinct active reporters currently visible across the execution runtime.

```csharp
public int ActiveReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_ActiveReporterIds"></a> ActiveReporterIds

Gets the reporter identities currently visible as active owners on at least one CDC capture.

```csharp
public IReadOnlyList<string> ActiveReporterIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_CoordinationStateBreakdown"></a> CoordinationStateBreakdown

The grouped reporter-coordination states currently visible across the execution runtime's reported CDC captures.

```csharp
public IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry> CoordinationStateBreakdown { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureReporterCoordinationBreakdownEntry](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry/)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_DegradedCdcCaptureCount"></a> DegradedCdcCaptureCount

Gets the number of CDC captures currently reporting degraded coordination posture.

```csharp
public int DegradedCdcCaptureCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_DegradedCdcCaptureIds"></a> DegradedCdcCaptureIds

Gets the CDC capture identifiers whose current coordination posture is degraded.

```csharp
public IReadOnlyList<string> DegradedCdcCaptureIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_DegradedReasonBreakdown"></a> DegradedReasonBreakdown

The grouped degraded-reason answers currently visible across the execution runtime's reported CDC captures.

```csharp
public IReadOnlyList<CdcCaptureReporterCoordinationBreakdownEntry> DegradedReasonBreakdown { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureReporterCoordinationBreakdownEntry](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccapturereportercoordinationbreakdownentry/)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_Empty"></a> Empty

Gets an empty rollup for execution runtimes that have not reported state yet.

```csharp
public static CdcCaptureExecutionRuntimeReporterCoordinationRollup Empty { get; }
```

#### Property Value

 [CdcCaptureExecutionRuntimeReporterCoordinationRollup](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureexecutionruntimereportercoordinationrollup/)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_HasDegradedCdcCaptures"></a> HasDegradedCdcCaptures

Gets a value indicating whether any CDC capture currently reports degraded coordination posture for the execution runtime.

```csharp
public bool HasDegradedCdcCaptures { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_HasRejectedReporters"></a> HasRejectedReporters

Gets a value indicating whether the execution runtime currently exposes rejected reporters anywhere in its coordination story.

```csharp
public bool HasRejectedReporters { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_HasStandbyReporters"></a> HasStandbyReporters

Gets a value indicating whether the execution runtime currently exposes standby reporters anywhere in its coordination story.

```csharp
public bool HasStandbyReporters { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_RejectedReporterCount"></a> RejectedReporterCount

Gets the number of distinct rejected reporters currently visible across the execution runtime.

```csharp
public int RejectedReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_RejectedReporterIds"></a> RejectedReporterIds

Gets the reporter identities currently visible as rejected participants on at least one CDC capture.

```csharp
public IReadOnlyList<string> RejectedReporterIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_StandbyReporterCount"></a> StandbyReporterCount

Gets the number of distinct standby reporters currently visible across the execution runtime.

```csharp
public int StandbyReporterCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Data_CdcCaptureExecutionRuntimeReporterCoordinationRollup_StandbyReporterIds"></a> StandbyReporterIds

Gets the reporter identities currently visible as standby participants on at least one CDC capture.

```csharp
public IReadOnlyList<string> StandbyReporterIds { get; init; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>
