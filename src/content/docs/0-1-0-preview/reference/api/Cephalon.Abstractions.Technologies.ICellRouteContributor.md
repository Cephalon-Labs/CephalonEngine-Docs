---
title: Interface ICellRouteContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellroutecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute cell routes to the active runtime.

```csharp
public interface ICellRouteContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellRouteContributor_RegisterCellRoutes_Cephalon_Abstractions_Technologies_ICellRouteRegistry_"></a> RegisterCellRoutes\(ICellRouteRegistry\)

Registers the cell routes owned by the contributing module.

```csharp
void RegisterCellRoutes(ICellRouteRegistry routes)
```

#### Parameters

`routes` [ICellRouteRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellrouteregistry/)

The registry that receives cell-route descriptors.
