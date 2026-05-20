---
title: Interface IHostedExecutionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-ihostedexecutionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the hosted executions visible to the current runtime.

```csharp
public interface IHostedExecutionRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionRuntimeCatalog_HostedExecutions"></a> HostedExecutions

Gets all hosted executions visible to the current runtime.

```csharp
IReadOnlyList<HostedExecutionDescriptor> HostedExecutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionRuntimeCatalog_GetByExecutionGraph_System_String_"></a> GetByExecutionGraph\(string\)

Gets all hosted executions linked to one execution graph.

```csharp
IReadOnlyList<HostedExecutionDescriptor> GetByExecutionGraph(string executionGraphId)
```

#### Parameters

`executionGraphId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution-graph identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)\>

The matching hosted executions, or an empty list when none link to that graph.

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one hosted execution by its stable identifier.

```csharp
HostedExecutionDescriptor? GetById(string hostedExecutionId)
```

#### Parameters

`hostedExecutionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The hosted-execution identifier to resolve.

#### Returns

 [HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)?

The matching hosted execution, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Execution_IHostedExecutionRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all hosted executions contributed by the requested module.

```csharp
IReadOnlyList<HostedExecutionDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[HostedExecutionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-hostedexecutiondescriptor/)\>

The matching hosted executions, or an empty list when the module contributed none.
