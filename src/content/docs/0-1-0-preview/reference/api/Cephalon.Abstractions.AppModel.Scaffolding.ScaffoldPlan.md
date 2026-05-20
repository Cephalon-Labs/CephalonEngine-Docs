---
title: Class ScaffoldPlan
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel.Scaffolding](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding/)  
Assembly: Cephalon.Abstractions.dll  

Describes the blueprint-driven scaffold plan for an app shape.

```csharp
public sealed class ScaffoldPlan
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldProject__System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldFolder__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ScaffoldPlan\(string, string, string, IReadOnlyList<ScaffoldProject\>, IReadOnlyList<ScaffoldFolder\>, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a scaffold plan.

```csharp
public ScaffoldPlan(string id, string displayName, string description, IReadOnlyList<ScaffoldProject> projects, IReadOnlyList<ScaffoldFolder> folders, IReadOnlyList<string>? conventions = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable scaffold-plan identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable scaffold-plan name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold-plan description.

`projects` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldProject](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject/)\>

The projects emitted by the scaffold.

`folders` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldFolder](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder/)\>

The folders emitted by the scaffold.

`conventions` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The conventions implied by the scaffold.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional scaffold metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Conventions"></a> Conventions

Gets the conventions implied by the scaffold.

```csharp
public IReadOnlyList<string> Conventions { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Description"></a> Description

Gets the scaffold-plan description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_DisplayName"></a> DisplayName

Gets the human-readable scaffold-plan name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Folders"></a> Folders

Gets the folders emitted by the scaffold.

```csharp
public IReadOnlyList<ScaffoldFolder> Folders { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldFolder](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldfolder/)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Id"></a> Id

Gets the stable scaffold-plan identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Metadata"></a> Metadata

Gets optional scaffold metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_Projects"></a> Projects

Gets the projects emitted by the scaffold.

```csharp
public IReadOnlyList<ScaffoldProject> Projects { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ScaffoldProject](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldproject/)\>
