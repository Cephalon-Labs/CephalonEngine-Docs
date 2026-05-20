---
title: Interface ICellBoundaryCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellboundarycatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the cell boundaries visible to the current runtime.

```csharp
public interface ICellBoundaryCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellBoundaryCatalog_CellBoundaries"></a> CellBoundaries

Gets all cell boundaries visible to the current runtime.

```csharp
IReadOnlyList<CellBoundaryDescriptor> CellBoundaries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellBoundaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellBoundaryCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one cell boundary by its stable identifier.

```csharp
CellBoundaryDescriptor? GetById(string cellId)
```

#### Parameters

`cellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cell identifier to resolve.

#### Returns

 [CellBoundaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor/)?

The matching cell boundary, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Technologies_ICellBoundaryCatalog_GetByModule_System_String_"></a> GetByModule\(string\)

Gets all cell boundaries that include the requested module.

```csharp
IReadOnlyList<CellBoundaryDescriptor> GetByModule(string moduleId)
```

#### Parameters

`moduleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellBoundaryDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellboundarydescriptor/)\>

The matching cell boundaries, or an empty list when none are active.
