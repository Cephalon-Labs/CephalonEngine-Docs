---
title: Interface ISnapshotStore
slug: 0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing-isnapshotstore
editUrl: false
---

Namespace: [Cephalon.Abstractions.EventSourcing](/0-1-0-preview/reference/api/cephalon-abstractions-eventsourcing/)  
Assembly: Cephalon.Abstractions.dll  

Persists and rehydrates optional aggregate snapshots for event-sourced workloads.

```csharp
public interface ISnapshotStore
```

## Methods

### <a id="Cephalon_Abstractions_EventSourcing_ISnapshotStore_LoadSnapshotAsync__1_System_String_System_Threading_CancellationToken_"></a> LoadSnapshotAsync<TState\>\(string, CancellationToken\)

Loads the latest snapshot for the requested stream.

```csharp
Task<(TState? State, long Version)> LoadSnapshotAsync<TState>(string streamId, CancellationToken cancellationToken = default)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<\(TState? [State](https://learn.microsoft.com/dotnet/api/system.valuetuple\-\-\-0,system.int64\-.state), [long](https://learn.microsoft.com/dotnet/api/system.int64) [Version](https://learn.microsoft.com/dotnet/api/system.valuetuple\-\-\-0,system.int64\-.version)\)\>

A task that returns the snapshot state and version, or the default state and <code>-1</code> when none exists.

#### Type Parameters

`TState` 

The aggregate state type.

### <a id="Cephalon_Abstractions_EventSourcing_ISnapshotStore_SaveSnapshotAsync__1_System_String_System_Int64___0_System_Threading_CancellationToken_"></a> SaveSnapshotAsync<TState\>\(string, long, TState, CancellationToken\)

Saves one snapshot for the requested stream.

```csharp
Task SaveSnapshotAsync<TState>(string streamId, long version, TState state, CancellationToken cancellationToken = default)
```

#### Parameters

`streamId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable stream identifier.

`version` [long](https://learn.microsoft.com/dotnet/api/system.int64)

The stream version represented by the snapshot.

`state` TState

The state payload to persist.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the snapshot has been persisted.

#### Type Parameters

`TState` 

The aggregate state type.
