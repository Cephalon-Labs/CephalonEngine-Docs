---
title: Class RenderedFile
slug: 0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfile
editUrl: false
---

Namespace: [Cephalon.Scaffolding.Generation](/0-1-0-preview/reference/api/cephalon-scaffolding-generation/)  
Assembly: Cephalon.Scaffolding.dll  

Represents one file produced by scaffold generation.

```csharp
public sealed class RenderedFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RenderedFile](/0-1-0-preview/reference/api/cephalon-scaffolding-generation-renderedfile/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Scaffolding_Generation_RenderedFile__ctor_System_String_System_String_"></a> RenderedFile\(string, string\)

Creates a new rendered file.

```csharp
public RenderedFile(string path, string contents)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative scaffold path of the file.

`contents` [string](https://learn.microsoft.com/dotnet/api/system.string)

The file contents that should be written.

## Properties

### <a id="Cephalon_Scaffolding_Generation_RenderedFile_Contents"></a> Contents

Gets the contents that should be written to the file.

```csharp
public string Contents { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Scaffolding_Generation_RenderedFile_Path"></a> Path

Gets the relative scaffold path of the file.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
