---
title: Class RenderedFolder
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfolder
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Represents one folder produced by scaffold generation.

```csharp
public sealed class RenderedFolder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RenderedFolder](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfolder/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> RenderedFolder\(string, string, string, string?, IReadOnlyDictionary<string, string\>?\)

Creates a new rendered folder.

```csharp
public RenderedFolder(string path, string purpose, string scope, string? projectKey = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative scaffold path of the folder.

`purpose` [string](https://learn.microsoft.com/dotnet/api/system.string)

The descriptive purpose of the folder.

`scope` [string](https://learn.microsoft.com/dotnet/api/system.string)

The scaffold scope that produced the folder.

`projectKey` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The owning rendered project key, if the folder belongs to a project.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional metadata associated with the folder.

## Properties

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder_Metadata"></a> Metadata

Gets additional metadata associated with the folder.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder_Path"></a> Path

Gets the relative scaffold path of the folder.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder_ProjectKey"></a> ProjectKey

Gets the owning rendered project key when the folder belongs to a rendered project.

```csharp
public string? ProjectKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder_Purpose"></a> Purpose

Gets the descriptive purpose of the folder.

```csharp
public string Purpose { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedFolder_Scope"></a> Scope

Gets the scaffold scope that produced the folder.

```csharp
public string Scope { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
