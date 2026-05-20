---
title: Class ScaffoldProject
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel.Scaffolding](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding/)  
Assembly: Cephalon.Abstractions.dll  

Describes one project emitted by a scaffold plan.

```csharp
public sealed class ScaffoldProject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScaffoldProject](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ScaffoldProject\(string, string, string, string, string, string, IReadOnlyList<string\>?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a scaffold-project description.

```csharp
public ScaffoldProject(string id, string nameTemplate, string pathTemplate, string scope, string role, string template, IReadOnlyList<string>? dependsOn = null, IReadOnlyList<string>? packages = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable project identifier.

`nameTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The project-name template.

`pathTemplate` [string](https://learn.microsoft.com/dotnet/api/system.string)

The project-path template.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold scope that owns the project.

`role` [string](https://learn.microsoft.com/dotnet/api/system.string)

The canonical project role.

`template` [string](https://learn.microsoft.com/dotnet/api/system.string)

The template used to create the project.

`dependsOn` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The project identifiers this project depends on.

`packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The package hints associated with the project.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional project metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_DependsOn"></a> DependsOn

Gets the project identifiers this project depends on.

```csharp
public IReadOnlyList<string> DependsOn { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Id"></a> Id

Gets the stable project identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Metadata"></a> Metadata

Gets optional project metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_NameTemplate"></a> NameTemplate

Gets the project-name template.

```csharp
public string NameTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Packages"></a> Packages

Gets the package hints associated with the project.

```csharp
public IReadOnlyList<string> Packages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_PathTemplate"></a> PathTemplate

Gets the project-path template.

```csharp
public string PathTemplate { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Role"></a> Role

Gets the canonical project role.

```csharp
public string Role { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Scope"></a> Scope

Gets the scaffold scope that owns the project.

```csharp
public string Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject_Template"></a> Template

Gets the template used to create the project.

```csharp
public string Template { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
