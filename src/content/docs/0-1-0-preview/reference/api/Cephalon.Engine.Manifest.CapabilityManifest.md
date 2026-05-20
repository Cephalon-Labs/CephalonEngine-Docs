---
title: Class CapabilityManifest
slug: 0-1-0-preview/reference/api/cephalon-engine-manifest-capabilitymanifest
editUrl: false
---

Namespace: [Cephalon.Engine.Manifest](/0-1-0-preview/reference/api/cephalon-engine-manifest/)  
Assembly: Cephalon.Engine.dll  

Describes a capability exposed by a module in the runtime manifest.

```csharp
public sealed class CapabilityManifest
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CapabilityManifest](/0-1-0-preview/reference/api/cephalon-engine-manifest-capabilitymanifest/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Manifest_CapabilityManifest__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CapabilityManifest\(string, string, string, string, IReadOnlyDictionary<string, string\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Manifest.CapabilityManifest" data-throw-if-not-resolved="false"></xref> class.

```csharp
public CapabilityManifest(string key, string displayName, string description, string sourceModuleId, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable capability key.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing capability name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A description of the capability behavior.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The identifier of the module that contributed the capability.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional capability metadata.

## Properties

### <a id="Cephalon_Engine_Manifest_CapabilityManifest_Description"></a> Description

Gets the capability description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_CapabilityManifest_DisplayName"></a> DisplayName

Gets the operator-facing capability name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_CapabilityManifest_Key"></a> Key

Gets the stable capability key.

```csharp
public string Key { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Manifest_CapabilityManifest_Metadata"></a> Metadata

Gets additional capability metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Manifest_CapabilityManifest_SourceModuleId"></a> SourceModuleId

Gets the identifier of the module that contributed the capability.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
