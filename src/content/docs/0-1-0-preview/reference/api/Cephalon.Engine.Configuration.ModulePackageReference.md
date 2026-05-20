---
title: Class ModulePackageReference
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes a package input that can be loaded into the engine runtime.

```csharp
public sealed class ModulePackageReference
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_ModulePackageReference__ctor_System_String_System_String_System_String_"></a> ModulePackageReference\(string, string?, string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.ModulePackageReference" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModulePackageReference(string path, string? id = null, string? kind = null)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembly or manifest path.

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional package identifier override.

`kind` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The package input kind.

## Fields

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_AssemblyPathKind"></a> AssemblyPathKind

Identifies a package input that points directly to an assembly path.

```csharp
public const string AssemblyPathKind = "assembly-path"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_DirectoryManifestKind"></a> DirectoryManifestKind

Identifies a package input that was discovered from a directory manifest scan.

```csharp
public const string DirectoryManifestKind = "directory-manifest"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_ManifestFileKind"></a> ManifestFileKind

Identifies a package input that points directly to a manifest file.

```csharp
public const string ManifestFileKind = "manifest-file"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_Id"></a> Id

Gets the optional package identifier override.

```csharp
public string? Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_IsAssemblyPath"></a> IsAssemblyPath

Gets a value indicating whether this reference points directly to an assembly path.

```csharp
public bool IsAssemblyPath { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_IsManifestFile"></a> IsManifestFile

Gets a value indicating whether this reference points to a manifest-backed package input.

```csharp
public bool IsManifestFile { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_Kind"></a> Kind

Gets the normalized package input kind.

```csharp
public string Kind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_Path"></a> Path

Gets the assembly or manifest path.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="Cephalon_Engine_Configuration_ModulePackageReference_FromManifest_System_String_System_String_"></a> FromManifest\(string, string?\)

Creates a manifest-backed package reference.

```csharp
public static ModulePackageReference FromManifest(string manifestPath, string? id = null)
```

#### Parameters

`manifestPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The manifest path to load.

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional package identifier override.

#### Returns

 [ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)

A manifest-backed package reference.
