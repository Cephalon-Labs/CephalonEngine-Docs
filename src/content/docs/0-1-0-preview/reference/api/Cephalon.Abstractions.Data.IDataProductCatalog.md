---
title: Interface IDataProductCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idataproductcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the data products visible to the current runtime.

```csharp
public interface IDataProductCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IDataProductCatalog_DataProducts"></a> DataProducts

Gets all data products visible to the current runtime.

```csharp
IReadOnlyList<DataProductDescriptor> DataProducts { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IDataProductCatalog_GetByContractId_System_String_"></a> GetByContractId\(string\)

Gets all data products that expose the requested contract identifier.

```csharp
IReadOnlyList<DataProductDescriptor> GetByContractId(string contractId)
```

#### Parameters

`contractId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The contract identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)\>

The matching data products, or an empty list when no active data product exposes the contract.

### <a id="Cephalon_Abstractions_Data_IDataProductCatalog_GetByDomainId_System_String_"></a> GetByDomainId\(string\)

Gets all data products that belong to the requested domain.

```csharp
IReadOnlyList<DataProductDescriptor> GetByDomainId(string domainId)
```

#### Parameters

`domainId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The domain identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)\>

The matching data products, or an empty list when the domain contributed none.

### <a id="Cephalon_Abstractions_Data_IDataProductCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one data product by its stable identifier.

```csharp
DataProductDescriptor? GetById(string dataProductId)
```

#### Parameters

`dataProductId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The data product identifier to resolve.

#### Returns

 [DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)?

The matching data product, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Data_IDataProductCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all data products contributed by the requested module.

```csharp
IReadOnlyList<DataProductDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)\>

The matching data products, or an empty list when the module contributed none.
