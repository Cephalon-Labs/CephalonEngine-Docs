---
title: Interface IStranglerFigRouteRegistry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigrouteregistry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Collects strangler-fig route descriptors contributed to the active runtime.

```csharp
public interface IStranglerFigRouteRegistry
```

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigRouteRegistry_Add_Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_"></a> Add\(StranglerFigRouteDescriptor\)

Adds a strangler-fig route descriptor to the current runtime composition.

```csharp
void Add(StranglerFigRouteDescriptor route)
```

#### Parameters

`route` [StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)

The route descriptor to register.
