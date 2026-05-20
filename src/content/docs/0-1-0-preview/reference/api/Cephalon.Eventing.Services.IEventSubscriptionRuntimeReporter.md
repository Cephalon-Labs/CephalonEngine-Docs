---
title: Interface IEventSubscriptionRuntimeReporter
slug: 0-1-0-preview/reference/api/cephalon-eventing-services-ieventsubscriptionruntimereporter
editUrl: false
---

Namespace: [Cephalon.Eventing.Services](/0-1-0-preview/reference/api/cephalon-eventing-services/)  
Assembly: Cephalon.Eventing.dll  

Records application-managed runtime observations for declared event subscriptions.

```csharp
public interface IEventSubscriptionRuntimeReporter
```

## Methods

### <a id="Cephalon_Eventing_Services_IEventSubscriptionRuntimeReporter_ReportAsync_Cephalon_Eventing_Services_EventSubscriptionExecutionReport_System_Threading_CancellationToken_"></a> ReportAsync\(EventSubscriptionExecutionReport, CancellationToken\)

Records one application-managed execution observation for a declared event subscription.

```csharp
ValueTask ReportAsync(EventSubscriptionExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [EventSubscriptionExecutionReport](/0-1-0-preview/reference/api/cephalon-eventing-services-eventsubscriptionexecutionreport/)

The runtime observation to record.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the observation has been recorded.
