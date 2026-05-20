---
title: Interface ICellHealthIsolationRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Collects cell health-isolation descriptors during runtime composition.

```csharp
public interface ICellHealthIsolationRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationRegistry_Add_Cephalon_Abstractions_Technologies_CellHealthIsolationDescriptor_"></a> Add\(CellHealthIsolationDescriptor\)

Adds one cell health-isolation descriptor to the active runtime composition.

```csharp
void Add(CellHealthIsolationDescriptor healthIsolation)
```

#### Parameters

`healthIsolation` [CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)

The cell health-isolation descriptor to add.
