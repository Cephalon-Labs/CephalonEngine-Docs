---
title: Class TechnologyRuntimeCatalogSnapshot
slug: 0-1-0-preview/reference/api/cephalon-engine-technologies-technologyruntimecatalogsnapshot
editUrl: false
---

Namespace: [Cephalon.Engine.Technologies](/0-1-0-preview/reference/api/cephalon-engine-technologies/)  
Assembly: Cephalon.Engine.dll  

Provides a lookup-friendly view of the active technology runtime surfaces.

```csharp
public sealed class TechnologyRuntimeCatalogSnapshot : ITechnologyRuntimeCatalog
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologyRuntimeCatalogSnapshot](/0-1-0-preview/reference/api/cephalon-engine-technologies-technologyruntimecatalogsnapshot/)

#### Implements

ITechnologyRuntimeCatalog

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Technologies_TechnologyRuntimeCatalogSnapshot__ctor_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface__"></a> TechnologyRuntimeCatalogSnapshot\(IReadOnlyList<TechnologyRuntimeSurface\>\)

Initializes a new instance of the <xref href="Cephalon.Engine.Technologies.TechnologyRuntimeCatalogSnapshot" data-throw-if-not-resolved="false"></xref> class.

```csharp
public TechnologyRuntimeCatalogSnapshot(IReadOnlyList<TechnologyRuntimeSurface> surfaces)
```

#### Parameters

`surfaces` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyRuntimeSurface\>

The active technology runtime surfaces.

### <a id="Cephalon_Engine_Technologies_TechnologyRuntimeCatalogSnapshot__ctor_System_Collections_Generic_IEnumerable_Cephalon_Abstractions_Technologies_ITechnologyRuntimeContributor__"></a> TechnologyRuntimeCatalogSnapshot\(IEnumerable<ITechnologyRuntimeContributor\>\)

Initializes a new instance of the <xref href="Cephalon.Engine.Technologies.TechnologyRuntimeCatalogSnapshot" data-throw-if-not-resolved="false"></xref> class from runtime contributors.

```csharp
public TechnologyRuntimeCatalogSnapshot(IEnumerable<ITechnologyRuntimeContributor> contributors)
```

#### Parameters

`contributors` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<ITechnologyRuntimeContributor\>

The technology runtime contributors that should be projected on demand.

## Properties

### <a id="Cephalon_Engine_Technologies_TechnologyRuntimeCatalogSnapshot_Surfaces"></a> Surfaces

Gets the active technology runtime surfaces.

```csharp
public IReadOnlyList<TechnologyRuntimeSurface> Surfaces { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyRuntimeSurface\>

## Methods

### <a id="Cephalon_Engine_Technologies_TechnologyRuntimeCatalogSnapshot_GetByTechnology_System_String_"></a> GetByTechnology\(string\)

Gets the runtime surfaces for a specific technology.

```csharp
public IReadOnlyList<TechnologyRuntimeSurface> GetByTechnology(string technologyId)
```

#### Parameters

`technologyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The technology identifier to resolve.

#### Returns

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<TechnologyRuntimeSurface\>

The runtime surfaces registered for the specified technology.
