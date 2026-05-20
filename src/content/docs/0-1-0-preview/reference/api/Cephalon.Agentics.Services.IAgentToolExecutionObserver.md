---
title: Interface IAgentToolExecutionObserver
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutionobserver
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Observes agent-tool execution reports for audit, telemetry, or host-specific projection.

```csharp
public interface IAgentToolExecutionObserver
```

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolExecutionObserver_ObserveAsync_Cephalon_Agentics_Services_AgentToolExecutionReport_System_Threading_CancellationToken_"></a> ObserveAsync\(AgentToolExecutionReport, CancellationToken\)

Observes one execution report after it has been accepted by the runtime catalog.

```csharp
ValueTask ObserveAsync(AgentToolExecutionReport report, CancellationToken cancellationToken = default)
```

#### Parameters

`report` [AgentToolExecutionReport](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutionreport/)

The execution report to observe.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the observation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask)

A task that completes when the report has been observed.
