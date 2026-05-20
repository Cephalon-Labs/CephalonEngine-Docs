---
title: Interface IStranglerFigIngressRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-istranglerfigingressruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the normalized strangler-fig ingress materialization answers visible to the current runtime.

```csharp
public interface IStranglerFigIngressRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigIngressRuntimeCatalog_Routes"></a> Routes

Gets all effective strangler-fig ingress answers visible to the current runtime.

```csharp
IReadOnlyList<StranglerFigIngressRuntimeDescriptor> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigIngressRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor/)\>

## Methods

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigIngressRuntimeCatalog_GetById_System_String_"></a> GetById\(string\)

Gets one effective strangler-fig ingress answer by its stable route identifier.

```csharp
StranglerFigIngressRuntimeDescriptor? GetById(string routeId)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The route identifier to resolve.

#### Returns

 [StranglerFigIngressRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor/)?

The matching runtime descriptor, or <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> when it is not active.

### <a id="Cephalon_Abstractions_Patterns_IStranglerFigIngressRuntimeCatalog_GetBySourceModule_System_String_"></a> GetBySourceModule\(string\)

Gets all effective strangler-fig ingress answers owned by the requested module.

```csharp
IReadOnlyList<StranglerFigIngressRuntimeDescriptor> GetBySourceModule(string sourceModuleId)
```

#### Parameters

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigIngressRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor/)\>

The matching runtime descriptors, or an empty list when none are active.
