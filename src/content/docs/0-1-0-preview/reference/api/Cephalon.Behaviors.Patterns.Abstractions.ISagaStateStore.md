---
title: Interface ISagaStateStore
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagastatestore
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Abstractions](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

Provides saga state persistence for the saga-step execution pattern.

```csharp
public interface ISagaStateStore
```

## Methods

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaStateStore_DeleteAsync_System_String_System_Threading_CancellationToken_"></a> DeleteAsync\(string, CancellationToken\)

Removes the saga state for the given saga identifier.

```csharp
Task DeleteAsync(string sagaId, CancellationToken ct = default)
```

#### Parameters

`sagaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the saga instance to remove.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the state has been removed.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaStateStore_GetAsync__1_System_String_System_Threading_CancellationToken_"></a> GetAsync<T\>\(string, CancellationToken\)

Retrieves the saga state for the given saga identifier.

```csharp
Task<T?> GetAsync<T>(string sagaId, CancellationToken ct = default)
```

#### Parameters

`sagaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the saga instance.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<T?\>

The deserialized saga state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

#### Type Parameters

`T` 

The saga state type.

### <a id="Cephalon_Behaviors_Patterns_Abstractions_ISagaStateStore_SaveAsync__1_System_String___0_System_Threading_CancellationToken_"></a> SaveAsync<T\>\(string, T, CancellationToken\)

Persists the saga state for the given saga identifier.

```csharp
Task SaveAsync<T>(string sagaId, T state, CancellationToken ct = default)
```

#### Parameters

`sagaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the saga instance.

`state` T

The state to persist.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A task that completes when the state has been persisted.

#### Type Parameters

`T` 

The saga state type.
