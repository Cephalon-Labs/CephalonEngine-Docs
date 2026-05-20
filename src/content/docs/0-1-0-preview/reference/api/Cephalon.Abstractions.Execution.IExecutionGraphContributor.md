---
title: Interface IExecutionGraphContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutiongraphcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more execution graphs to the active runtime.

```csharp
public interface IExecutionGraphContributor
```

## Methods

### <a id="Cephalon_Abstractions_Execution_IExecutionGraphContributor_RegisterExecutionGraphs_Cephalon_Abstractions_Execution_IExecutionGraphRegistry_"></a> RegisterExecutionGraphs\(IExecutionGraphRegistry\)

Registers one or more execution graphs owned by the contributor.

```csharp
void RegisterExecutionGraphs(IExecutionGraphRegistry graphs)
```

#### Parameters

`graphs` [IExecutionGraphRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutiongraphregistry/)

The execution-graph registry receiving graph descriptors.
