---
title: Class ModuleDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-modules-moduledescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Modules](/0-1-0-preview/reference/api/cephalon-abstractions-modules/)  
Assembly: Cephalon.Abstractions.dll  

Describes a module for discovery, ordering, manifest generation, and diagnostics.

```csharp
public sealed class ModuleDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModuleDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-modules-moduledescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor__ctor_System_String_System_String_System_String_System_Collections_Generic_IEnumerable_System_Type__System_Collections_Generic_IEnumerable_System_String__System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> ModuleDescriptor\(string, string, string, IEnumerable<Type\>?, IEnumerable<string\>?, string?, IReadOnlyDictionary<string, string\>?\)

Creates a module descriptor.

```csharp
public ModuleDescriptor(string id, string displayName, string description, IEnumerable<Type>? dependsOn = null, IEnumerable<string>? tags = null, string? version = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable module identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable module name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The module description.

`dependsOn` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[Type](https://learn.microsoft.com/dotnet/api/system.type)\>?

The module types this module depends on.

`tags` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The tags associated with the module.

`version` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The declared module version.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional module metadata.

## Properties

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_DependsOn"></a> DependsOn

Gets the module types this module depends on.

```csharp
public IReadOnlyList<Type> DependsOn { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[Type](https://learn.microsoft.com/dotnet/api/system.type)\>

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_Description"></a> Description

Gets the module description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_DisplayName"></a> DisplayName

Gets the human-readable module name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_Id"></a> Id

Gets the stable module identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_Metadata"></a> Metadata

Gets optional module metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_Tags"></a> Tags

Gets the tags associated with the module.

```csharp
public IReadOnlyList<string> Tags { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Modules_ModuleDescriptor_Version"></a> Version

Gets the declared module version, when one is available.

```csharp
public string? Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
