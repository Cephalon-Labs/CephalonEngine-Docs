---
title: Interface IProjectionContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iprojectioncontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Contributes one or more projection descriptors to the active runtime.

```csharp
public interface IProjectionContributor
```

## Methods

### <a id="Cephalon_Abstractions_Data_IProjectionContributor_RegisterProjections_Cephalon_Abstractions_Data_IProjectionRegistry_"></a> RegisterProjections\(IProjectionRegistry\)

Registers one or more projection descriptors with the supplied registry.

```csharp
void RegisterProjections(IProjectionRegistry projections)
```

#### Parameters

`projections` [IProjectionRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-data-iprojectionregistry/)

The registry that collects contributed projection descriptors.
