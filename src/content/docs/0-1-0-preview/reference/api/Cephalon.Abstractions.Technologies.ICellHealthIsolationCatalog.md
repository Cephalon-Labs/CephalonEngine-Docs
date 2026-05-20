---
title: Interface ICellHealthIsolationCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-icellhealthisolationcatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the cell health-isolation answers visible to the current runtime.

```csharp
public interface ICellHealthIsolationCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationCatalog_HealthIsolations"></a> HealthIsolations

Gets all cell health-isolation answers visible to the current runtime.

```csharp
IReadOnlyList<CellHealthIsolationDescriptor> HealthIsolations { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationCatalog_GetByCellId_System_String_"></a> GetByCellId\(string\)

Gets all cell health-isolation answers that govern the requested cell.

```csharp
IReadOnlyList<CellHealthIsolationDescriptor> GetByCellId(string cellId)
```

#### Parameters

`cellId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The cell identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)\>

The matching cell health-isolation answers, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationCatalog_GetByDependencyId_System_String_"></a> GetByDependencyId\(string\)

Gets all cell health-isolation answers that reference the requested dependency.

```csharp
IReadOnlyList<CellHealthIsolationDescriptor> GetByDependencyId(string dependencyId)
```

#### Parameters

`dependencyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The dependency identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)\>

The matching cell health-isolation answers, or an empty list when none are active.

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one cell health-isolation answer by its stable identifier.

```csharp
CellHealthIsolationDescriptor? GetById(string healthIsolationId)
```

#### Parameters

`healthIsolationId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The health-isolation identifier to resolve.

#### Returns

 [CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)?

The matching cell health-isolation answer, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Technologies_ICellHealthIsolationCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all cell health-isolation answers owned by the requested source module.

```csharp
IReadOnlyList<CellHealthIsolationDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source-module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellHealthIsolationDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-cellhealthisolationdescriptor/)\>

The matching cell health-isolation answers, or an empty list when none are active.
