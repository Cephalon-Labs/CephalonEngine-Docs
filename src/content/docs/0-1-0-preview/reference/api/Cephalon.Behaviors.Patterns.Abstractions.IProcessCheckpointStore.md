---
title: Interface IProcessCheckpointStore
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-iprocesscheckpointstore
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Provides process checkpoint persistence for the process-manager execution pattern.

```csharp
public interface IProcessCheckpointStore
```

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IProcessCheckpointStore_DeleteAsync_System_String_System_Threading_CancellationToken_"></a> DeleteAsync\(string, CancellationToken\)

Removes the checkpoint for the given process identifier.

```csharp
Task DeleteAsync(string processId, CancellationToken ct = default)
```

#### Parameters

`processId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the process instance to remove.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the checkpoint has been removed.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IProcessCheckpointStore_GetAsync_System_String_System_Threading_CancellationToken_"></a> GetAsync\(string, CancellationToken\)

Retrieves the checkpoint for the given process identifier.

```csharp
Task<ProcessCheckpoint?> GetAsync(string processId, CancellationToken ct = default)
```

#### Parameters

`processId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the process instance.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[ProcessCheckpoint](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint/)?\>

The checkpoint, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_IProcessCheckpointStore_SaveAsync_System_String_Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_System_Threading_CancellationToken_"></a> SaveAsync\(string, ProcessCheckpoint, CancellationToken\)

Persists the checkpoint for the given process identifier.

```csharp
Task SaveAsync(string processId, ProcessCheckpoint checkpoint, CancellationToken ct = default)
```

#### Parameters

`processId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the process instance.

`checkpoint` [ProcessCheckpoint](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint/)

The checkpoint to persist.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the checkpoint has been persisted.
