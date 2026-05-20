---
title: Class PackageDistributionManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-packagedistributionmanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes where an independently shipped package is distributed from.

```csharp
public sealed class PackageDistributionManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PackageDistributionManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagedistributionmanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_PackageDistributionManifest__ctor_System_String_System_String_System_String_"></a> PackageDistributionManifest\(string?, string?, string?\)

Creates a package distribution manifest entry.

```csharp
public PackageDistributionManifest(string? channel, string? manifestUri, string? packageUri)
```

#### Parameters

`channel` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The release channel declared by the package manifest, when available.

`manifestUri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The externally reachable package-manifest URI declared by the package manifest, when available.

`packageUri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The externally reachable package archive or feed URI declared by the package manifest, when available.

## Properties

### <a id="Cephalon_Engine_Manifest_PackageDistributionManifest_Channel"></a> Channel

Gets the declared release channel, when available.

```csharp
public string? Channel { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageDistributionManifest_ManifestUri"></a> ManifestUri

Gets the declared externally reachable package-manifest URI, when available.

```csharp
public string? ManifestUri { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_PackageDistributionManifest_PackageUri"></a> PackageUri

Gets the declared externally reachable package archive or feed URI, when available.

```csharp
public string? PackageUri { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
