---
title: Class ModuleDiscoverySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes how the engine discovers modules from assemblies, package references, and package directories.

```csharp
public sealed class ModuleDiscoverySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleDiscoverySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings__ctor_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_ModulePackageReference__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_ModulePackageDirectory__"></a> ModuleDiscoverySettings\(IReadOnlyList<string\>?, IReadOnlyList<ModulePackageReference\>?, IReadOnlyList<ModulePackageDirectory\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.ModuleDiscoverySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public ModuleDiscoverySettings(IReadOnlyList<string>? assemblies = null, IReadOnlyList<ModulePackageReference>? packages = null, IReadOnlyList<ModulePackageDirectory>? packageDirectories = null)
```

#### Parameters

`assemblies` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Assembly names or paths to scan for modules.

`packages` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)\>?

Explicit package references to load.

`packageDirectories` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModulePackageDirectory](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory/)\>?

Package directories to scan for manifests.

## Properties

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_Assemblies"></a> Assemblies

Gets assembly names or paths to scan for modules.

```csharp
public IReadOnlyList<string> Assemblies { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_Empty"></a> Empty

Gets an empty module discovery settings instance.

```csharp
public static ModuleDiscoverySettings Empty { get; }
```

#### Property Value

 [ModuleDiscoverySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings/)

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_HasValues"></a> HasValues

Gets a value indicating whether any discovery inputs were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_PackageDirectories"></a> PackageDirectories

Gets package directories to scan for manifests.

```csharp
public IReadOnlyList<ModulePackageDirectory> PackageDirectories { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModulePackageDirectory](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagedirectory/)\>

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_Packages"></a> Packages

Gets explicit package references to load.

```csharp
public IReadOnlyList<ModulePackageReference> Packages { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ModulePackageReference](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulepackagereference/)\>

## Methods

### <a id="Cephalon_Engine_Configuration_ModuleDiscoverySettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads module discovery settings from configuration.

```csharp
public static ModuleDiscoverySettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [ModuleDiscoverySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-modulediscoverysettings/)

The parsed module discovery settings.
