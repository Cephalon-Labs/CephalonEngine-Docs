---
title: Interface ICdcCaptureExecutionRuntimeReportSink
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-icdccaptureexecutionruntimereportsink
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Accepts operator-facing CDC runtime observations that are reported on behalf of one execution runtime.

```csharp
public interface ICdcCaptureExecutionRuntimeReportSink
```

## Methods

### <a id="Cephalon_Abstractions_Data_ICdcCaptureExecutionRuntimeReportSink_ReportAsync_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Data_CdcCaptureRuntimeObservation__System_Threading_CancellationToken_"></a> ReportAsync\(string, IReadOnlyList<CdcCaptureRuntimeObservation\>, CancellationToken\)

Reports one or more CDC runtime observations for the supplied execution runtime.

```csharp
ValueTask ReportAsync(string executionRuntimeId, IReadOnlyList<CdcCaptureRuntimeObservation> observations, CancellationToken cancellationToken = default)
```

#### Parameters

`executionRuntimeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable execution-runtime identifier that owns the reported captures.

`observations` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CdcCaptureRuntimeObservation](/0-1-0-preview/reference/api/cephalon-abstractions-data-cdccaptureruntimeobservation/)\>

The capture observations to merge into the active runtime-state catalog.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to observe cancellation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
