---
title: Interface ICdcCaptureRuntimeReporter
slug: 0-1-0-preview/reference/api/cephalon-data-services-icdccaptureruntimereporter
editUrl: false
---

Namespace: [Cephalon.Data.Services](/0-1-0-preview/reference/api/cephalon-data-services/)  
Assembly: Cephalon.Data.dll  

Accepts operator-facing CDC runtime observations for active capture surfaces.

```csharp
public interface ICdcCaptureRuntimeReporter
```

## Methods

### <a id="Cephalon_Data_Services_ICdcCaptureRuntimeReporter_ReportAsync_Cephalon_Data_Services_CdcCaptureExecutionReport_System_Threading_CancellationToken_"></a> ReportAsync\(CdcCaptureExecutionReport, CancellationToken\)

Reports one CDC runtime observation for the active runtime.

```csharp
ValueTask ReportAsync(CdcCaptureExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [CdcCaptureExecutionReport](/0-1-0-preview/reference/api/cephalon-data-services-cdccaptureexecutionreport/)

The CDC runtime observation to capture.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the observation has been recorded.
