---
title: Class RenderedScaffold
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedscaffold
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Represents the fully rendered output of a scaffold generation request.

```csharp
public sealed class RenderedScaffold
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RenderedScaffold](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedscaffold/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold__ctor_Cephalon_Abstractions_AppModel_AppProfile_Cephalon_Scaffolding_Generation_ScaffoldRequest_System_Collections_Generic_IReadOnlyList_Cephalon_Scaffolding_Generation_RenderedProject__System_Collections_Generic_IReadOnlyList_Cephalon_Scaffolding_Generation_RenderedFolder__System_Collections_Generic_IReadOnlyList_Cephalon_Scaffolding_Generation_RenderedFile__"></a> RenderedScaffold\(AppProfile, ScaffoldRequest, IReadOnlyList<RenderedProject\>, IReadOnlyList<RenderedFolder\>, IReadOnlyList<RenderedFile\>\)

Creates a new rendered scaffold.

```csharp
public RenderedScaffold(AppProfile appProfile, ScaffoldRequest request, IReadOnlyList<RenderedProject> projects, IReadOnlyList<RenderedFolder> folders, IReadOnlyList<RenderedFile> files)
```

#### Parameters

`appProfile` [AppProfile](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appprofile/)

The application profile used to drive generation.

`request` [ScaffoldRequest](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldrequest/)

The original scaffold request.

`projects` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedProject](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedproject/)\>

The rendered projects.

`folders` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedFolder](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfolder/)\>

The rendered folders.

`files` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedFile](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfile/)\>

The rendered files.

## Properties

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold_AppProfile"></a> AppProfile

Gets the application profile used to drive generation.

```csharp
public AppProfile AppProfile { get; }
```

#### Property Value

 [AppProfile](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appprofile/)

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold_Files"></a> Files

Gets the rendered files.

```csharp
public IReadOnlyList<RenderedFile> Files { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedFile](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfile/)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold_Folders"></a> Folders

Gets the rendered folders.

```csharp
public IReadOnlyList<RenderedFolder> Folders { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedFolder](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfolder/)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold_Projects"></a> Projects

Gets the rendered projects.

```csharp
public IReadOnlyList<RenderedProject> Projects { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[RenderedProject](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedproject/)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedScaffold_Request"></a> Request

Gets the original scaffold request.

```csharp
public ScaffoldRequest Request { get; }
```

#### Property Value

 [ScaffoldRequest](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-scaffoldrequest/)
