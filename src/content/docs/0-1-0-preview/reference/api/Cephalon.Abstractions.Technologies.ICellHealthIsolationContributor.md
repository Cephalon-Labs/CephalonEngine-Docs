---
title: Interface ICellHealthIsolationContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationcontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute cell health-isolation answers to the active runtime.

```csharp
public interface ICellHealthIsolationContributor
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationContributor_RegisterCellHealthIsolations_Cephalon_Abstractions_Technologies_ICellHealthIsolationRegistry_"></a> RegisterCellHealthIsolations\(ICellHealthIsolationRegistry\)

Registers the cell health-isolation answers owned by the contributing module.

```csharp
void RegisterCellHealthIsolations(ICellHealthIsolationRegistry healthIsolations)
```

#### Parameters

`healthIsolations` [ICellHealthIsolationRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationregistry/)

The registry that receives cell health-isolation descriptors.
