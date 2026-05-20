---
title: Class PackageDependencyManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-packagedependencymanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes a package-to-package dependency declared by a loaded Cephalon package.

```csharp
public sealed class PackageDependencyManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageDependencyManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagedependencymanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_PackageDependencyManifest__ctor_System_String_System_String_System_String_"></a> PackageDependencyManifest\(string, string?, string?\)

Creates a new package dependency manifest entry.

```csharp
public PackageDependencyManifest(string id, string? minimumVersion = null, string? maximumVersion = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable identifier of the required package.

`minimumVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The minimum acceptable version of the required package, when declared.

`maximumVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The maximum acceptable version of the required package, when declared.

## Properties

### <a id="Cephalon_Engine_Manifest_PackageDependencyManifest_Id"></a> Id

Gets the stable identifier of the required package.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_PackageDependencyManifest_MaximumVersion"></a> MaximumVersion

Gets the maximum acceptable version of the required package, when declared.

```csharp
public string? MaximumVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageDependencyManifest_MinimumVersion"></a> MinimumVersion

Gets the minimum acceptable version of the required package, when declared.

```csharp
public string? MinimumVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
