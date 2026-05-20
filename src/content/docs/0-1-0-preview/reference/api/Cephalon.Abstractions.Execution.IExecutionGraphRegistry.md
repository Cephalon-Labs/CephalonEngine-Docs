---
title: Interface IExecutionGraphRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutiongraphregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Receives execution graphs contributed by active modules.

```csharp
public interface IExecutionGraphRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Execution_IExecutionGraphRegistry_Add_Cephalon_Abstractions_Execution_ExecutionGraphDescriptor_"></a> Add\(ExecutionGraphDescriptor\)

Adds an execution graph to the current runtime composition.

```csharp
void Add(ExecutionGraphDescriptor graph)
```

#### Parameters

`graph` [ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)

The execution graph to register.
