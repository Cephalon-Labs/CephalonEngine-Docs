---
title: Interface IProjectionCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-data-iprojectioncatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Data](/0-1-0-preview/reference/api/cephalon-abstractions-data/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the projections visible to the current runtime.

```csharp
public interface IProjectionCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Data_IProjectionCatalog_Projections"></a> Projections

Gets all projections visible to the current runtime.

```csharp
IReadOnlyList<ProjectionDescriptor> Projections { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Data_IProjectionCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one projection by its stable identifier.

```csharp
ProjectionDescriptor? GetById(string projectionId)
```

#### Parameters

`projectionId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The projection identifier to resolve.

#### Returns

 [ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)?

The matching projection, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Data_IProjectionCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all projections contributed by the requested module.

```csharp
IReadOnlyList<ProjectionDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)\>

The matching projections, or an empty list when the module contributed none.

### <a id="Cephalon_Abstractions_Data_IProjectionCatalog_GetByTargetStore_System_String_"></a> GetByTargetStore\(string\)

Gets all projections that target the requested store identifier.

```csharp
IReadOnlyList<ProjectionDescriptor> GetByTargetStore(string targetStoreId)
```

#### Parameters

`targetStoreId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The target store identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ProjectionDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-data-projectiondescriptor/)\>

The matching projections, or an empty list when no projection targets the store.
