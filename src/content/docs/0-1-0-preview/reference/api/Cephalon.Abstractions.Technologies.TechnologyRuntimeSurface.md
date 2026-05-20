---
title: Class TechnologyRuntimeSurface
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimesurface
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one operator-facing runtime surface exposed by an active technology pack.

```csharp
public sealed class TechnologyRuntimeSurface
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologyRuntimeSurface](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimesurface/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry__"></a> TechnologyRuntimeSurface\(string, string, string, string, IReadOnlyList<TechnologyRuntimeEntry\>?\)

Creates a new technology runtime surface.

```csharp
[JsonConstructor]
public TechnologyRuntimeSurface(string technologyId, string surfaceId, string displayName, string description, IReadOnlyList<TechnologyRuntimeEntry>? entries = null)
```

#### Parameters

`technologyId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The owning technology identifier.

`surfaceId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable surface identifier within that technology.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing display name for the surface.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the surface.

`entries` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyRuntimeEntry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimeentry/)\>?

The entries currently projected by the surface.

## Properties

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface_Description"></a> Description

Gets the human-readable description of the surface.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface_DisplayName"></a> DisplayName

Gets the operator-facing display name for the surface.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface_Entries"></a> Entries

Gets the entries currently projected by this surface.

```csharp
public IReadOnlyList<TechnologyRuntimeEntry> Entries { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[TechnologyRuntimeEntry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimeentry/)\>

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface_SurfaceId"></a> SurfaceId

Gets the stable identifier of this surface within the owning technology.

```csharp
public string SurfaceId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeSurface_TechnologyId"></a> TechnologyId

Gets the identifier of the technology profile that owns this surface.

```csharp
public string TechnologyId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
