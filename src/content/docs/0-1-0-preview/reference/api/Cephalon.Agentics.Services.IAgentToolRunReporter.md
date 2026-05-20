---
title: Interface IAgentToolRunReporter
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolrunreporter
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Records runtime observations for agent-tool runs.

```csharp
public interface IAgentToolRunReporter
```

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolRunReporter_ReportAsync_Cephalon_Agentics_Services_AgentToolExecutionReport_System_Threading_CancellationToken_"></a> ReportAsync\(AgentToolExecutionReport, CancellationToken\)

Records one runtime observation for an agent-tool run.

```csharp
ValueTask ReportAsync(AgentToolExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [AgentToolExecutionReport](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutionreport/)

The runtime observation to record.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the observation has been recorded.
