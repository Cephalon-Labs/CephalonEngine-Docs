---
title: Interface IDataProductContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-idataproductcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more data product descriptors to the active runtime.

```csharp
public interface IDataProductContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IDataProductContributor_RegisterDataProducts_Cephalon_Abstractions_Data_IDataProductRegistry_"></a> RegisterDataProducts\(IDataProductRegistry\)

Registers one or more data product descriptors with the supplied registry.

```csharp
void RegisterDataProducts(IDataProductRegistry dataProducts)
```

#### Parameters

`dataProducts` [IDataProductRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-data-idataproductregistry/)

The registry that collects contributed data product descriptors.
