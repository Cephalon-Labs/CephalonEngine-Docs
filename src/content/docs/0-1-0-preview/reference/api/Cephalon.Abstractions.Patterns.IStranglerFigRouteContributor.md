---
title: Interface IStranglerFigRouteContributor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigroutecontributor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Allows a module to contribute strangler-fig routes into the active runtime.

```csharp
public interface IStranglerFigRouteContributor
```

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRouteContributor_RegisterRoutes_Cephalon_Abstractions_Patterns_IStranglerFigRouteRegistry_"></a> RegisterRoutes\(IStranglerFigRouteRegistry\)

Registers one or more strangler-fig route descriptors with the supplied registry.

```csharp
void RegisterRoutes(IStranglerFigRouteRegistry routes)
```

#### Parameters

`routes` [IStranglerFigRouteRegistry](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigrouteregistry/)

The registry that collects contributed route descriptors.
