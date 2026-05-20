---
title: Class Capability
slug: 0-1-0-preview/reference/api/cephalon-abstractions-capabilities-capability
editUrl: false
---

Namespace: [Cephalon.Abstractions.Capabilities](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities/)  
Assembly: Cephalon.Abstractions.dll  

Describes a capability contributed by a module or package.

```csharp
public sealed class Capability
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Capability](/0-1-0-preview/reference/api/cephalon-abstractions-capabilities-capability/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Capabilities_Capability__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> Capability\(string, string, string, IReadOnlyDictionary<string, string\>?\)

Creates a capability descriptor.

```csharp
public Capability(string key, string displayName, string description, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable capability key.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable capability name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The capability description.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional capability metadata.

## Properties

### <a id="Cephalon_Abstractions_Capabilities_Capability_Description"></a> Description

Gets the capability description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Capabilities_Capability_DisplayName"></a> DisplayName

Gets the human-readable capability name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Capabilities_Capability_Key"></a> Key

Gets the stable capability key.

```csharp
public string Key { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Capabilities_Capability_Metadata"></a> Metadata

Gets optional capability metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>
