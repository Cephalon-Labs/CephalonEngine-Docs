---
title: Interface IQueryHandler
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iqueryhandler-2
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Handles a read-side request and returns the requested result.

```csharp
public interface IQueryHandler<in TQuery, TResult> where TQuery : IQuery<TResult>
```

#### Type Parameters

`TQuery` 

The query type handled by the contract.

`TResult` 

The result type returned by the query.

## Methods

### <a id="Cephalon_Abstractions_Data_IQueryHandler_2_HandleAsync__0_System_Threading_CancellationToken_"></a> HandleAsync\(TQuery, CancellationToken\)

Handles the supplied query.

```csharp
ValueTask<TResult> HandleAsync(TQuery query, CancellationToken cancellationToken = default)
```

#### Parameters

`query` TQuery

The query to execute.

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<TResult\>

A task that completes with the result produced by the query.
