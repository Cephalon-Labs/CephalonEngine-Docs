---
title: Interface IDurableExecutionRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-idurableexecutionruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the active durable-execution workflows visible to the current runtime.

```csharp
public interface IDurableExecutionRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeCatalog_DurableExecutions"></a> DurableExecutions

Gets all active durable-execution workflows visible to the current runtime.

```csharp
IReadOnlyList<DurableExecutionRuntimeDescriptor> DurableExecutions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one durable-execution workflow by its stable behavior identifier.

```csharp
DurableExecutionRuntimeDescriptor? GetById(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The durable behavior identifier to resolve.

#### Returns

 [DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)?

The matching durable workflow descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all durable-execution workflows contributed by the requested module.

```csharp
IReadOnlyList<DurableExecutionRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)\>

The matching durable workflows, or an empty list when the module contributed none.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets all durable-execution workflows exposed over the requested transport.

```csharp
IReadOnlyList<DurableExecutionRuntimeDescriptor> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimedescriptor/)\>

The matching durable workflows, or an empty list when none expose that transport.
