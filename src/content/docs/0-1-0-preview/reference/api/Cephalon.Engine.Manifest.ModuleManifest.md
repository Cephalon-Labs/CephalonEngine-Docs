---
title: Class ModuleManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-modulemanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes a single module that participates in the built runtime.

```csharp
public sealed class ModuleManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-modulemanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_ModuleManifest__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_Boolean_"></a> ModuleManifest\(string, string, string, string, string, string, IReadOnlyList<string\>, IReadOnlyList<string\>, IReadOnlyDictionary<string, string\>?, string?, bool\)

Creates a new module manifest entry.

```csharp
public ModuleManifest(string id, string displayName, string description, string version, string assemblyName, string typeName, IReadOnlyList<string> dependsOn, IReadOnlyList<string> tags, IReadOnlyDictionary<string, string>? metadata = null, string? packageId = null, bool isTrusted = true)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the module's role.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)

The effective module version.

`assemblyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The assembly that contains the module implementation.

`typeName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The fully qualified CLR type name for the module implementation.

`dependsOn` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The identifiers of modules this module depends on.

`tags` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

The descriptive tags published by the module descriptor.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional descriptor metadata published by the module.

`packageId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The package identifier that supplied the module, if it was package-loaded.

`isTrusted` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the module is currently considered trusted under the active trust policy.

## Properties

### <a id="Cephalon_Engine_Manifest_ModuleManifest_AssemblyName"></a> AssemblyName

Gets the assembly name that contains the module implementation.

```csharp
public string AssemblyName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_DependsOn"></a> DependsOn

Gets the identifiers of modules this module depends on.

```csharp
public IReadOnlyList<string> DependsOn { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_ModuleManifest_Description"></a> Description

Gets the human-readable description of the module.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_DisplayName"></a> DisplayName

Gets the operator-facing display name for the module.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_Id"></a> Id

Gets the stable module identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_IsTrusted"></a> IsTrusted

Gets a value indicating whether the module is trusted by the current trust policy.

```csharp
public bool IsTrusted { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_Metadata"></a> Metadata

Gets arbitrary descriptor metadata published by the module.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_ModuleManifest_PackageId"></a> PackageId

Gets the supplying package identifier when the module came from a package load.

```csharp
public string? PackageId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Manifest_ModuleManifest_Tags"></a> Tags

Gets the descriptor tags published by the module.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_ModuleManifest_TypeName"></a> TypeName

Gets the CLR type name that implements the module.

```csharp
public string TypeName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_ModuleManifest_Version"></a> Version

Gets the effective version reported for the module.

```csharp
public string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
