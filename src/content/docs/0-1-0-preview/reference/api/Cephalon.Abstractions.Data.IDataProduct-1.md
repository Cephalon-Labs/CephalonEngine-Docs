---
title: Interface IDataProduct
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idataproduct-1
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes a module-owned queryable data product.

```csharp
public interface IDataProduct<T>
```

#### Type Parameters

`T` 

The result shape returned by the data product.

## Methods

### <a id="Cephalon_Abstractions_Data_IDataProduct_1_QueryAsync_System_Threading_CancellationToken_"></a> QueryAsync\(CancellationToken\)

Queries the current value of the data product.

```csharp
ValueTask<T> QueryAsync(CancellationToken cancellationToken = default)
```

#### Parameters

`cancellationToken` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

The token that cancels the operation.

#### Returns

 [ValueTask](https://learn.microsoft.com/dotnet/api/system.threading.tasks.valuetask\-1)<T\>

A task that completes with the current data product value.
