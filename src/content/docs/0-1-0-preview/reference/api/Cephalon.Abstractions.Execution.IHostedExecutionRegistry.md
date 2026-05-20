---
title: Interface IHostedExecutionRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutionregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Receives hosted-execution descriptors contributed by active modules.

```csharp
public interface IHostedExecutionRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionRegistry_Add_Cephalon_Abstractions_Execution_HostedExecutionDescriptor_"></a> Add\(HostedExecutionDescriptor\)

Adds a hosted execution to the current runtime composition.

```csharp
void Add(HostedExecutionDescriptor hostedExecution)
```

#### Parameters

`hostedExecution` [HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)

The hosted execution to register.
