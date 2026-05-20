---
title: Interface IAgentToolExecutor
slug: 0-1-0-preview/reference/api/cephalon-agentics-services-iagenttoolexecutor
editUrl: false
---

Namespace: [Cephalon.Agentics.Services](/0-1-0-preview/reference/api/cephalon-agentics-services/)  
Assembly: Cephalon.Agentics.dll  

Executes one registered agent tool through the Cephalon-managed agentics runtime.

```csharp
public interface IAgentToolExecutor
```

## Properties

### <a id="Cephalon_Agentics_Services_IAgentToolExecutor_ToolId"></a> ToolId

Gets the stable tool identifier owned by this executor.

```csharp
string ToolId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Agentics_Services_IAgentToolExecutor_ExecuteAsync_Cephalon_Agentics_Services_AgentToolExecutionContext_System_Threading_CancellationToken_"></a> ExecuteAsync\(AgentToolExecutionContext, CancellationToken\)

Executes the tool against the supplied context.

```csharp
ValueTask<AgentToolExecutionResult> ExecuteAsync(AgentToolExecutionContext context, CancellationToken cancellationToken = default)
```

#### Parameters

`context` [AgentToolExecutionContext](/0-1-0-preview/reference/api/cephalon-agentics-services-agenttoolexecutioncontext/)

The host-agnostic execution context for the current tool run.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The cancellation token for the current execution attempt.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<AgentToolExecutionResult\>

The result reported by the executor.
