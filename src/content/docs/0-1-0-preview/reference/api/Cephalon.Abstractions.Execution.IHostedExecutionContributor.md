---
title: Interface IHostedExecutionContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutioncontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more hosted or background execution descriptors to the active runtime.

```csharp
public interface IHostedExecutionContributor
```

## Methods

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionContributor_RegisterHostedExecutions_Cephalon_Abstractions_Execution_IHostedExecutionRegistry_"></a> RegisterHostedExecutions\(IHostedExecutionRegistry\)

Registers one or more hosted execution descriptors owned by the contributor.

```csharp
void RegisterHostedExecutions(IHostedExecutionRegistry hostedExecutions)
```

#### Parameters

`hostedExecutions` [IHostedExecutionRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutionregistry/)

The hosted-execution registry receiving hosted-execution descriptors.
