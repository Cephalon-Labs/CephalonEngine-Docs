---
title: Class InMemoryProcessCheckpointStore
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemoryprocesscheckpointstore
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Stores](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

An in-memory implementation of <xref href="Cephalon.Behaviors.Patterns.Abstractions.IProcessCheckpointStore" data-throw-if-not-resolved="false"></xref> backed by a
<xref href="System.Collections.Concurrent.ConcurrentDictionary%602" data-throw-if-not-resolved="false"></xref>.
Suitable for development and testing; replace with a durable store for production use.

```csharp
public sealed class InMemoryProcessCheckpointStore : IProcessCheckpointStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InMemoryProcessCheckpointStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemoryprocesscheckpointstore/)

#### Implements

[IProcessCheckpointStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-iprocesscheckpointstore/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemoryProcessCheckpointStore_DeleteAsync_System_String_System_Threading_CancellationToken_"></a> DeleteAsync\(string, CancellationToken\)

Removes the checkpoint for the given process identifier.

```csharp
public Task DeleteAsync(string processId, CancellationToken ct = default)
```

#### Parameters

`processId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the process instance to remove.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A completed task.

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemoryProcessCheckpointStore_GetAsync_System_String_System_Threading_CancellationToken_"></a> GetAsync\(string, CancellationToken\)

Retrieves the checkpoint for the given process identifier.

```csharp
public Task<ProcessCheckpoint?> GetAsync(string processId, CancellationToken ct = default)
```

#### Parameters

`processId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the process instance.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<[ProcessCheckpoint](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-processcheckpoint/)?\>

The checkpoint, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemoryProcessCheckpointStore_SaveAsync_System_String_Cephalon_Behaviors_Patterns_Abstractions_ProcessCheckpoint_System_Threading_CancellationToken_"></a> SaveAsync\(string, ProcessCheckpoint, CancellationToken\)

Upserts the checkpoint for the given process identifier.

```csharp
public Task SaveAsync(string processId, ProcessCheckpoint checkpoint, CancellationToken ct = default)
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

A completed task.
