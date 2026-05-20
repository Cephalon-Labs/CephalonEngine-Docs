---
title: Interface ICellTrafficAutomationMaterializationReportSink
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icelltrafficautomationmaterializationreportsink
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Accepts live cell traffic automation materialization observations that should merge back into the active runtime catalog.

```csharp
public interface ICellTrafficAutomationMaterializationReportSink
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationMaterializationReportSink_ReportEdgeAsync_System_String_System_String_Cephalon_Abstractions_Technologies_CellTrafficAutomationMaterializationResult_System_Threading_CancellationToken_"></a> ReportEdgeAsync\(string, string, CellTrafficAutomationMaterializationResult, CancellationToken\)

Reports an edge-managed materialization observation for one traffic automation answer.

```csharp
ValueTask ReportEdgeAsync(string automationId, string materializerId, CellTrafficAutomationMaterializationResult result, CancellationToken cancellationToken = default)
```

#### Parameters

`automationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable traffic-automation identifier that the observation applies to.

`materializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable edge materializer identifier that produced the observation.

`result` [CellTrafficAutomationMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationmaterializationresult/)

The observed edge-managed materialization result.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to observe cancellation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

### <a id="Cephalon_Abstractions_Technologies_ICellTrafficAutomationMaterializationReportSink_ReportProviderAsync_System_String_System_String_Cephalon_Abstractions_Technologies_CellTrafficAutomationProviderMaterializationResult_System_Threading_CancellationToken_"></a> ReportProviderAsync\(string, string, CellTrafficAutomationProviderMaterializationResult, CancellationToken\)

Reports a provider-managed materialization observation for one traffic automation answer.

```csharp
ValueTask ReportProviderAsync(string automationId, string materializerId, CellTrafficAutomationProviderMaterializationResult result, CancellationToken cancellationToken = default)
```

#### Parameters

`automationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable traffic-automation identifier that the observation applies to.

`materializerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable provider materializer identifier that produced the observation.

`result` [CellTrafficAutomationProviderMaterializationResult](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-celltrafficautomationprovidermaterializationresult/)

The observed provider-managed materialization result.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token used to observe cancellation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)
