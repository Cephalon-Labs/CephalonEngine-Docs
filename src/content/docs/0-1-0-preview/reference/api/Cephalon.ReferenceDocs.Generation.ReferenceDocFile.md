---
title: Class ReferenceDocFile
slug: 0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocfile
editUrl: false
---

Namespace: [Cephalon.ReferenceDocs.Generation](/0-1-0-preview/reference/api/cephalon-referencedocs-generation/)  
Assembly: Cephalon.ReferenceDocs.dll  

Represents one generated reference documentation file.

```csharp
public sealed class ReferenceDocFile
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReferenceDocFile](/0-1-0-preview/reference/api/cephalon-referencedocs-generation-referencedocfile/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocFile__ctor_System_String_System_String_"></a> ReferenceDocFile\(string, string\)

Creates a new generated reference documentation file.

```csharp
public ReferenceDocFile(string path, string contents)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The relative output path of the file.

`contents` [string](https://learn.microsoft.com/dotnet/api/system.string)

The markdown contents of the file.

## Properties

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocFile_Contents"></a> Contents

Gets the markdown contents of the file.

```csharp
public string Contents { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_ReferenceDocs_Generation_ReferenceDocFile_Path"></a> Path

Gets the relative output path of the file.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
