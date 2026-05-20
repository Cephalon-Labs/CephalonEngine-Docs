---
title: Interface IReadStore
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-ireadstore
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Executes read-side requests against the active data implementation.

```csharp
public interface IReadStore
```

## Methods

### <a id="Cephalon_Abstractions_Data_IReadStore_ExecuteAsync__1_Cephalon_Abstractions_Data_IQuery___0__System_Threading_CancellationToken_"></a> ExecuteAsync<TResult\>\(IQuery<TResult\>, CancellationToken\)

Executes the supplied query on the read side.

```csharp
ValueTask<TResult> ExecuteAsync<TResult>(IQuery<TResult> query, CancellationToken cancellationToken = default)
```

#### Parameters

`query` [IQuery](Cephalon.Abstractions.Data.IQuery\-1.md)<TResult\>

The query to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<TResult\>

A task that completes with the requested result.

#### Type Parameters

`TResult` 

The result type returned by the query.
