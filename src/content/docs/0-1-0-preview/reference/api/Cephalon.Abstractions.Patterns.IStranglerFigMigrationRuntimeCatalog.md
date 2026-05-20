---
title: Interface IStranglerFigMigrationRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigmigrationruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the effective strangler-fig migration policy visible to the current runtime.

```csharp
public interface IStranglerFigMigrationRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigMigrationRuntimeCatalog_Routes"></a> Routes

Gets all effective strangler-fig migration-policy answers visible to the current runtime.

```csharp
IReadOnlyList<StranglerFigMigrationRuntimeDescriptor> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigMigrationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigMigrationRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one effective strangler-fig migration-policy answer by its stable route identifier.

```csharp
StranglerFigMigrationRuntimeDescriptor? GetById(string routeId)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route identifier to resolve.

#### Returns

 [StranglerFigMigrationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigMigrationRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all effective strangler-fig migration-policy answers owned by the requested module.

```csharp
IReadOnlyList<StranglerFigMigrationRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigMigrationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.
