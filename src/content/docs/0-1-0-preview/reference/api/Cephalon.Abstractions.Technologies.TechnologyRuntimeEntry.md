---
title: Class TechnologyRuntimeEntry
slug: 0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimeentry
editUrl: false
---

Namespace: [Cephalon.Abstractions.Technologies](/0-1-0-preview/reference/api/cephalon-abstractions-technologies/)  
Assembly: Cephalon.Abstractions.dll  

Describes one runtime-visible entry inside a technology surface.

```csharp
public sealed class TechnologyRuntimeEntry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TechnologyRuntimeEntry](/0-1-0-preview/reference/api/cephalon-abstractions-technologies-technologyruntimeentry/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> TechnologyRuntimeEntry\(string, string, string, IReadOnlyDictionary<string, string\>?\)

Creates a new technology runtime entry.

```csharp
[JsonConstructor]
public TechnologyRuntimeEntry(string id, string displayName, string description, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable entry identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing display name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

A human-readable description of the entry.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional metadata associated with the entry.

## Properties

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry_Description"></a> Description

Gets the human-readable description of the entry.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry_DisplayName"></a> DisplayName

Gets the operator-facing display name for the entry.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry_Id"></a> Id

Gets the stable identifier for the entry.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Technologies_TechnologyRuntimeEntry_Metadata"></a> Metadata

Gets additional metadata projected for the entry.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>
