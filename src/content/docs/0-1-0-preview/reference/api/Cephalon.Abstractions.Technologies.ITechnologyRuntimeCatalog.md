---
title: Interface ITechnologyRuntimeCatalog
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-itechnologyruntimecatalog
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Exposes the merged runtime surfaces projected by active technology packs.

```csharp
public interface ITechnologyRuntimeCatalog
```

## Properties

### <a id="Cephalon_Abstractions_Technologies_ITechnologyRuntimeCatalog_Surfaces"></a> Surfaces

Gets all active technology runtime surfaces visible to the current runtime.

```csharp
IReadOnlyList<TechnologyRuntimeSurface> Surfaces { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyRuntimeSurface](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimesurface/)\>

## Methods

### <a id="Cephalon_Abstractions_Technologies_ITechnologyRuntimeCatalog_GetByTechnology_System_String_"></a> GetByTechnology\(string\)

Gets the runtime surfaces associated with a specific technology identifier.

```csharp
IReadOnlyList<TechnologyRuntimeSurface> GetByTechnology(string technologyId)
```

#### Parameters

`technologyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier to filter by.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyRuntimeSurface](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimesurface/)\>

The matching runtime surfaces, or an empty collection when none are active.
