---
title: Interface IEventDispatchRuntimeReporter
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventdispatchruntimereporter
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Accepts operator-facing dispatch runtime observations for durable event publication paths.

```csharp
public interface IEventDispatchRuntimeReporter
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventDispatchRuntimeReporter_ReportAsync_Cephalon_Eventing_Services_EventDispatchExecutionReport_System_Threading_CancellationToken_"></a> ReportAsync\(EventDispatchExecutionReport, CancellationToken\)

Reports one dispatch observation for the active eventing runtime.

```csharp
ValueTask ReportAsync(EventDispatchExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [EventDispatchExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventdispatchexecutionreport/)

The dispatch observation to capture.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the observation has been recorded.
