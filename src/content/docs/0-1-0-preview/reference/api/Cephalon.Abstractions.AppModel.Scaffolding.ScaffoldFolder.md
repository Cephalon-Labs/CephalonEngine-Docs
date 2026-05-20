---
title: Class ScaffoldFolder
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel.Scaffolding](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding/)  
Assembly: Cephalon.Abstractions.dll  

Describes a folder that should exist in a scaffolded app shape.

```csharp
public sealed class ScaffoldFolder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScaffoldFolder](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ScaffoldFolder\(string, string, string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a scaffold-folder description.

```csharp
public ScaffoldFolder(string pathTemplate, string purpose, string scope, string? projectId = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`pathTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The folder path template.

`purpose` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable folder purpose.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold scope that owns the folder.

`projectId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning project identifier when the folder belongs to a project.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional folder metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder_Metadata"></a> Metadata

Gets optional folder metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder_PathTemplate"></a> PathTemplate

Gets the folder path template.

```csharp
public string PathTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder_ProjectId"></a> ProjectId

Gets the owning project identifier when the folder belongs to a project.

```csharp
public string? ProjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder_Purpose"></a> Purpose

Gets the human-readable purpose of the folder.

```csharp
public string Purpose { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder_Scope"></a> Scope

Gets the scaffold scope that owns the folder.

```csharp
public string Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
