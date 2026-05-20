---
title: Class InMemorySagaStateStore
slug: 0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemorysagastatestore
editUrl: false
---

Namespace: [Cephalon.Behaviors.Patterns.Stores](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores/)  
Assembly: Cephalon.Behaviors.Patterns.dll  

An in-memory implementation of <xref href="Cephalon.Behaviors.Patterns.Abstractions.ISagaStateStore" data-throw-if-not-resolved="false"></xref> backed by a
<xref href="System.Collections.Concurrent.ConcurrentDictionary%602" data-throw-if-not-resolved="false"></xref> with JSON serialization.
Suitable for development and testing; replace with a durable store for production use.

```csharp
public sealed class InMemorySagaStateStore : ISagaStateStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InMemorySagaStateStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-stores-inmemorysagastatestore/)

#### Implements

[ISagaStateStore](/0-1-0-preview/reference/api/cephalon-behaviors-patterns-abstractions-isagastatestore/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Methods

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemorySagaStateStore_DeleteAsync_System_String_System_Threading_CancellationToken_"></a> DeleteAsync\(string, CancellationToken\)

Removes the saga state for the given saga identifier.

```csharp
public Task DeleteAsync(string sagaId, CancellationToken ct = default)
```

#### Parameters

`sagaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the saga instance to remove.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

A completed task.

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemorySagaStateStore_GetAsync__1_System_String_System_Threading_CancellationToken_"></a> GetAsync<T\>\(string, CancellationToken\)

Retrieves and deserializes the saga state for the given saga identifier.

```csharp
public Task<T?> GetAsync<T>(string sagaId, CancellationToken ct = default)
```

#### Parameters

`sagaId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique identifier of the saga instance.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A token that cancels the operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task\-1)<T?\>

The deserialized state, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> if not found.

#### Type Parameters

`T` 

The saga state type.

### <a id="Cephalon_Behaviors_Patterns_Stores_InMemorySagaStateStore_SaveAsync__1_System_String___0_System_Threading_CancellationToken_"></a> SaveAsync<T\>\(string, T, CancellationToken\)

Serializes and upserts the saga state for the given saga identifier.

```csharp
public Task SaveAsync<T>(string sagaId, T state, CancellationToken ct = default)
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

A completed task.

#### Type Parameters

`T` 

The saga state type.
