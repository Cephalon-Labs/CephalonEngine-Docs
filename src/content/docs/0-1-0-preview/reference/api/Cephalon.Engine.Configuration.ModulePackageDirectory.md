---
title: Class ModulePackageDirectory
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes a directory that should be scanned for Cephalon package manifests.

```csharp
public sealed class ModulePackageDirectory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModulePackageDirectory](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_ModulePackageDirectory__ctor_System_String_System_String_System_Boolean_"></a> ModulePackageDirectory\(string, string?, bool\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.ModulePackageDirectory" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModulePackageDirectory(string path, string? manifestFileName = null, bool includeSubdirectories = true)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The directory path to scan.

`manifestFileName` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The manifest file name to look for inside the directory.

`includeSubdirectories` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether nested directories should also be scanned.

## Fields

### <a id="Cephalon_Engine_Configuration_ModulePackageDirectory_DefaultManifestFileName"></a> DefaultManifestFileName

Gets the default manifest file name expected inside package directories.

```csharp
public const string DefaultManifestFileName = "cephalon.package.json"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Engine_Configuration_ModulePackageDirectory_IncludeSubdirectories"></a> IncludeSubdirectories

Gets a value indicating whether nested directories should also be scanned.

```csharp
public bool IncludeSubdirectories { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_ModulePackageDirectory_ManifestFileName"></a> ManifestFileName

Gets the manifest file name to look for inside the directory.

```csharp
public string ManifestFileName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_ModulePackageDirectory_Path"></a> Path

Gets the directory path to scan.

```csharp
public string Path { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
