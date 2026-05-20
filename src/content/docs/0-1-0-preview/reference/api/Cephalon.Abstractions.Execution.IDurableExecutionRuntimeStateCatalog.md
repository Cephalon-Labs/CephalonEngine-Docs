---
title: Interface IDurableExecutionRuntimeStateCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-execution-idurableexecutionruntimestatecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Execution](/0-1-0-preview/reference/api/cephalon-abstractions-execution/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the operator-facing durable-execution runtime state currently reported for active streams.

```csharp
public interface IDurableExecutionRuntimeStateCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_States"></a> States

Gets the reported durable-execution state entries visible to the current runtime.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> States { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

## Methods

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByBehaviorId_System_String_"></a> GetByBehaviorId\(string\)

Gets the reported durable-execution state entries for one durable behavior.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetByBehaviorId(string behaviorId)
```

#### Parameters

`behaviorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable durable behavior identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when the behavior has not reported runtime state.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByCompensationActionId_System_String_"></a> GetByCompensationActionId\(string\)

Gets the reported durable-execution state entries that currently include the requested compensation action.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetByCompensationActionId(string compensationActionId)
```

#### Parameters

`compensationActionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable compensation-action identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports that compensation action.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByPendingSignalId_System_String_"></a> GetByPendingSignalId\(string\)

Gets the reported durable-execution state entries that currently include the requested pending signal.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetByPendingSignalId(string signalId)
```

#### Parameters

`signalId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable signal identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports that signal.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByPendingTimerId_System_String_"></a> GetByPendingTimerId\(string\)

Gets the reported durable-execution state entries that currently include the requested pending timer.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetByPendingTimerId(string timerId)
```

#### Parameters

`timerId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable timer identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports that timer.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets the reported durable-execution state entries contributed by one source module.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when the module has not reported runtime state.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByStreamId_System_String_"></a> GetByStreamId\(string\)

Gets the latest reported durable-execution state for one stream.

```csharp
DurableExecutionRuntimeState? GetByStreamId(string streamId)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier to resolve.

#### Returns

 [DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)?

The latest reported state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when that stream has not reported runtime state.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetByTransportId_System_String_"></a> GetByTransportId\(string\)

Gets the reported durable-execution state entries exposed over one transport.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetByTransportId(string transportId)
```

#### Parameters

`transportId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable transport identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when none reported runtime state for that transport.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetWithCompensationActions"></a> GetWithCompensationActions\(\)

Gets the reported durable-execution state entries that currently expose one or more compensation actions.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetWithCompensationActions()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports compensation actions.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetWithPendingSignals"></a> GetWithPendingSignals\(\)

Gets the reported durable-execution state entries that currently have one or more pending signals.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetWithPendingSignals()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports pending signals.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_GetWithPendingTimers"></a> GetWithPendingTimers\(\)

Gets the reported durable-execution state entries that currently have one or more pending timers.

```csharp
IReadOnlyList<DurableExecutionRuntimeState> GetWithPendingTimers()
```

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)\>

The matching state entries, or an empty list when no stream currently reports pending timers.

### <a id="Cephalon_Abstractions_Execution_IDurableExecutionRuntimeStateCatalog_TryGetByStreamId_System_String_Cephalon_Abstractions_Execution_DurableExecutionRuntimeState__"></a> TryGetByStreamId\(string, out DurableExecutionRuntimeState?\)

Tries to get the latest reported durable-execution state for one stream.

```csharp
bool TryGetByStreamId(string streamId, out DurableExecutionRuntimeState? state)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier to resolve.

`state` [DurableExecutionRuntimeState](/0-1-0-preview/reference/api/cephalon-abstractions-execution-durableexecutionruntimestate/)?

Receives the latest reported state when the stream has reported one.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when a reported state exists; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
