---
title: Interface IAgentToolDispatcher
slug: 0-1-0-preview/reference/api/cephalon-abstractions-agentics-iagenttooldispatcher
editUrl: false
---

Namespace: [Cephalon.Abstractions.Agentics](/0-1-0-preview/reference/api/cephalon-abstractions-agentics/)  
Assembly: Cephalon.Abstractions.dll  

Dispatches registered agent tools through Cephalon-managed execution, policy, and run-state services.

```csharp
public interface IAgentToolDispatcher
```

## Methods

### <a id="Cephalon_Abstractions_Agentics_IAgentToolDispatcher_ExecuteAsync_Cephalon_Abstractions_Agentics_AgentToolExecutionRequest_System_Threading_CancellationToken_"></a> ExecuteAsync\(AgentToolExecutionRequest, CancellationToken\)

Executes one registered agent tool.

```csharp
ValueTask<AgentToolExecutionResult> ExecuteAsync(AgentToolExecutionRequest request, CancellationToken cancellationToken = default)
```

#### Parameters

`request` [AgentToolExecutionRequest](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionrequest/)

The execution request to dispatch.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the current execution attempt.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AgentToolExecutionResult](/0-1-0-preview/reference/api/cephalon-abstractions-agentics-agenttoolexecutionresult/)\>

The result produced by the managed execution path.
