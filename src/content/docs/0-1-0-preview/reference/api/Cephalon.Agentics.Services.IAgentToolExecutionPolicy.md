---
title: Interface IAgentToolExecutionPolicy
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutionpolicy
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Evaluates whether an agent-tool execution request can continue.

```csharp
public interface IAgentToolExecutionPolicy
```

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolExecutionPolicy_EvaluateAsync_Cephalon_Agentics_Services_AgentToolExecutionContext_System_Threading_CancellationToken_"></a> EvaluateAsync\(AgentToolExecutionContext, CancellationToken\)

Evaluates one resolved agent-tool execution context.

```csharp
ValueTask<AgentToolExecutionDecision> EvaluateAsync(AgentToolExecutionContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`context` [AgentToolExecutionContext](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutioncontext/)

The execution context to evaluate.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the evaluation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<[AgentToolExecutionDecision](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutiondecision/)\>

The policy decision for this execution request.
