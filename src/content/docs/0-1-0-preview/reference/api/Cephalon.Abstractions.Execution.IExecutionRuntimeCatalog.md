---
title: Interface IExecutionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-iexecutionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the execution graphs visible to the current runtime.

```csharp
public interface IExecutionRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_IExecutionRuntimeCatalog_Graphs"></a> Graphs

Gets all execution graphs visible to the current runtime.

```csharp
IReadOnlyList<ExecutionGraphDescriptor> Graphs { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_IExecutionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one execution graph by its stable identifier.

```csharp
ExecutionGraphDescriptor? GetById(string graphId)
```

#### Parameters

`graphId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The execution-graph identifier to resolve.

#### Returns

 [ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)?

The matching graph, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Execution_IExecutionRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all execution graphs contributed by the requested module.

```csharp
IReadOnlyList<ExecutionGraphDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ExecutionGraphDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-executiongraphdescriptor/)\>

The matching execution graphs, or an empty list when the module contributed none.
