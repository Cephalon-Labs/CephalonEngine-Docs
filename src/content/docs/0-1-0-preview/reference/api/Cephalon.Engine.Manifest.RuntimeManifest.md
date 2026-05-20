---
title: Class RuntimeManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Represents the immutable manifest produced when a Cephalon runtime is built.

```csharp
public sealed class RuntimeManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RuntimeManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-runtimemanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Remarks

The runtime manifest is the main contract for describing the built engine shape. It captures
the selected application profile, the effective module set, the published capabilities, and any
package-loading metadata that contributed modules to the runtime.

## Constructors

### <a id="Cephalon_Engine_Manifest_RuntimeManifest__ctor_System_String_System_String_System_DateTimeOffset_Cephalon_Abstractions_AppModel_AppProfile_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_ModuleManifest__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_CapabilityManifest__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Manifest_PackageManifest__"></a> RuntimeManifest\(string, string, DateTimeOffset, AppProfile, IReadOnlyList<ModuleManifest\>, IReadOnlyList<CapabilityManifest\>, IReadOnlyList<PackageManifest\>?\)

Creates a new runtime manifest.

```csharp
public RuntimeManifest(string manifestVersion, string engineVersion, DateTimeOffset generatedAtUtc, AppProfile appProfile, IReadOnlyList<ModuleManifest> modules, IReadOnlyList<CapabilityManifest> capabilities, IReadOnlyList<PackageManifest>? packages = null)
```

#### Parameters

`manifestVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

The manifest schema version.

`engineVersion` [string](https://learn.microsoft.com/dotnet/api/system.string)

The version of the engine that produced the manifest.

`generatedAtUtc` [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

The UTC timestamp when the manifest was created.

`appProfile` AppProfile

The resolved application profile.

`modules` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModuleManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-modulemanifest/)\>

The effective ordered module set.

`capabilities` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CapabilityManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-capabilitymanifest/)\>

The effective capability set after policy has been applied.

`packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)\>?

The package-loading metadata associated with the runtime.

## Fields

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_CurrentVersion"></a> CurrentVersion

Gets the current manifest schema version emitted by the engine.

```csharp
public const string CurrentVersion = "2.0"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_AppProfile"></a> AppProfile

Gets the resolved application profile, including blueprint, patterns, transports, technologies,
and any scaffold guidance.

```csharp
public AppProfile AppProfile { get; }
```

#### Property Value

 AppProfile

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_Capabilities"></a> Capabilities

Gets the effective capability set after capability and trust policy filtering.

```csharp
public IReadOnlyList<CapabilityManifest> Capabilities { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CapabilityManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-capabilitymanifest/)\>

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_EngineVersion"></a> EngineVersion

Gets the engine version that produced the manifest.

```csharp
public string EngineVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_GeneratedAtUtc"></a> GeneratedAtUtc

Gets the UTC timestamp when the manifest was generated.

```csharp
public DateTimeOffset GeneratedAtUtc { get; }
```

#### Property Value

 [DateTimeOffset](https://learn.microsoft.com/dotnet/api/system.datetimeoffset)

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_ManifestVersion"></a> ManifestVersion

Gets the manifest schema version.

```csharp
public string ManifestVersion { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_Modules"></a> Modules

Gets the effective module set after discovery, policy filtering, and dependency ordering.

```csharp
public IReadOnlyList<ModuleManifest> Modules { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModuleManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-modulemanifest/)\>

### <a id="Cephalon_Engine_Manifest_RuntimeManifest_Packages"></a> Packages

Gets the packages that contributed modules to the runtime, if any were loaded from packages.

```csharp
public IReadOnlyList<PackageManifest> Packages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PackageManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-packagemanifest/)\>
