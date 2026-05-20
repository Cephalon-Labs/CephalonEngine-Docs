---
title: Class RenderedProject
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedproject
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Represents one project produced by scaffold generation.

```csharp
public sealed class RenderedProject
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RenderedProject](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedproject/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Scaffolding_Generation_RenderedProject__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> RenderedProject\(string, string, string, string, string, string, string, IReadOnlyList<string\>, IReadOnlyList<string\>, IReadOnlyDictionary<string, string\>?\)

Creates a new rendered project.

```csharp
public RenderedProject(string key, string sourceProjectId, string name, string path, string scope, string role, string template, IReadOnlyList<string> packages, IReadOnlyList<string> projectReferences, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The unique key of the rendered project instance.

`sourceProjectId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source scaffold project identifier that produced this instance.

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

The generated project name.

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative scaffold path of the project directory.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold scope that produced the project.

`role` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold role of the project.

`template` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold template used to generate the project.

`packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The package references implied by the scaffold plan.

`projectReferences` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The project references implied by the scaffold plan.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional metadata associated with the project.

## Properties

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Key"></a> Key

Gets the unique key of the rendered project instance.

```csharp
public string Key { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Metadata"></a> Metadata

Gets additional metadata associated with the project.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Name"></a> Name

Gets the generated project name.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Packages"></a> Packages

Gets the package references implied by the scaffold plan.

```csharp
public IReadOnlyList<string> Packages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Path"></a> Path

Gets the relative scaffold path of the project directory.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_ProjectReferences"></a> ProjectReferences

Gets the project references implied by the scaffold plan.

```csharp
public IReadOnlyList<string> ProjectReferences { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Role"></a> Role

Gets the scaffold role of the project.

```csharp
public string Role { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Scope"></a> Scope

Gets the scaffold scope that produced the project.

```csharp
public string Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_SourceProjectId"></a> SourceProjectId

Gets the source scaffold project identifier that produced this instance.

```csharp
public string SourceProjectId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedProject_Template"></a> Template

Gets the scaffold template that was used to generate the project.

```csharp
public string Template { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
