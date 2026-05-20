---
title: Interface ICellBoundaryContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundarycontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute cell boundaries to the active runtime.

```csharp
public interface ICellBoundaryContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellBoundaryContributor_RegisterCellBoundaries_Cephalon_Abstractions_Technologies_ICellBoundaryRegistry_"></a> RegisterCellBoundaries\(ICellBoundaryRegistry\)

Registers the cell boundaries owned by the contributing module.

```csharp
void RegisterCellBoundaries(ICellBoundaryRegistry cells)
```

#### Parameters

`cells` [ICellBoundaryRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundaryregistry/)

The registry that receives cell-boundary descriptors.
