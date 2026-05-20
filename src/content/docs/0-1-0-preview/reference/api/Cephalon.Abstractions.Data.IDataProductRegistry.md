---
title: Interface IDataProductRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idataproductregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Receives data product descriptors contributed by active modules or packages.

```csharp
public interface IDataProductRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDataProductRegistry_Add_Cephalon_Abstractions_Data_DataProductDescriptor_"></a> Add\(DataProductDescriptor\)

Adds a data product to the current runtime composition.

```csharp
void Add(DataProductDescriptor dataProduct)
```

#### Parameters

`dataProduct` [DataProductDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-dataproductdescriptor/)

The data product descriptor to register.
