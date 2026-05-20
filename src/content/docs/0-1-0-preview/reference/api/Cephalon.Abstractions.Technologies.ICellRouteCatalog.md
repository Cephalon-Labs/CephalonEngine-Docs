---
title: Interface ICellRouteCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellroutecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the cell-to-cell routing and governance answers visible to the current runtime.

```csharp
public interface ICellRouteCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellRouteCatalog_Routes"></a> Routes

Gets all cell routes visible to the current runtime.

```csharp
IReadOnlyList<CellRouteDescriptor> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellRouteCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one cell route by its stable identifier.

```csharp
CellRouteDescriptor? GetById(string routeId)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cell-route identifier to resolve.

#### Returns

 [CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)?

The matching cell route, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Technologies_ICellRouteCatalog_GetBySourceCellId_System_String_"></a> GetBySourceCellId\(string\)

Gets all cell routes that originate from the requested source cell.

```csharp
IReadOnlyList<CellRouteDescriptor> GetBySourceCellId(string sourceCellId)
```

#### Parameters

`sourceCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source-cell identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)\>

The matching cell routes, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellRouteCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all cell routes owned by the requested source module.

```csharp
IReadOnlyList<CellRouteDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)\>

The matching cell routes, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellRouteCatalog_GetByTargetCellId_System_String_"></a> GetByTargetCellId\(string\)

Gets all cell routes that target the requested cell.

```csharp
IReadOnlyList<CellRouteDescriptor> GetByTargetCellId(string targetCellId)
```

#### Parameters

`targetCellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target-cell identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellroutedescriptor/)\>

The matching cell routes, or an empty list when none are active.
