---
title: Interface IStranglerFigRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the strangler-fig routes visible to the current runtime.

```csharp
public interface IStranglerFigRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRuntimeCatalog_Routes"></a> Routes

Gets all strangler-fig routes visible to the current runtime.

```csharp
IReadOnlyList<StranglerFigRouteDescriptor> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one strangler-fig route by its stable identifier.

```csharp
StranglerFigRouteDescriptor? GetById(string routeId)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route identifier to resolve.

#### Returns

 [StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)?

The matching route descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all strangler-fig routes owned by the requested module.

```csharp
IReadOnlyList<StranglerFigRouteDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)\>

The matching route descriptors, or an empty list when none are active.
