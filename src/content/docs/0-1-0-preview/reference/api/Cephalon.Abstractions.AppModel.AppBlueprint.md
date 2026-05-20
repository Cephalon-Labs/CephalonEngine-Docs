---
title: Class AppBlueprint
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appblueprint
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes a shipped Cephalon blueprint together with its baseline patterns and scaffold shape.

```csharp
public sealed class AppBlueprint
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AppBlueprint](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-appblueprint/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Patterns_PatternDescriptor__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AppBlueprint\(string, string, string, IReadOnlyList<PatternDescriptor\>, IReadOnlyDictionary<string, string\>?\)

Creates a blueprint without scaffold metadata.

```csharp
public AppBlueprint(string id, string displayName, string description, IReadOnlyList<PatternDescriptor> patterns, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable blueprint identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable blueprint name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The blueprint description.

`patterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

The baseline patterns implied by the blueprint.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional blueprint metadata.

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint__ctor_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Abstractions_Patterns_PatternDescriptor__Cephalon_Abstractions_AppModel_Scaffolding_ScaffoldPlan_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> AppBlueprint\(string, string, string, IReadOnlyList<PatternDescriptor\>, ScaffoldPlan?, IReadOnlyDictionary<string, string\>?\)

Creates a blueprint with optional scaffold metadata.

```csharp
[JsonConstructor]
public AppBlueprint(string id, string displayName, string description, IReadOnlyList<PatternDescriptor> patterns, ScaffoldPlan? scaffold, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable blueprint identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable blueprint name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The blueprint description.

`patterns` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

The baseline patterns implied by the blueprint.

`scaffold` [ScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan/)?

The scaffold plan associated with the blueprint.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional blueprint metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_Description"></a> Description

Gets the blueprint description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_DisplayName"></a> DisplayName

Gets the human-readable blueprint name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_Id"></a> Id

Gets the stable blueprint identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_Metadata"></a> Metadata

Gets additional blueprint metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_Patterns"></a> Patterns

Gets the baseline patterns implied by the blueprint.

```csharp
public IReadOnlyList<PatternDescriptor> Patterns { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[PatternDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-patterndescriptor/)\>

### <a id="Cephalon_Abstractions_AppModel_AppBlueprint_Scaffold"></a> Scaffold

Gets the scaffold plan associated with the blueprint, when one is defined.

```csharp
public ScaffoldPlan? Scaffold { get; }
```

#### Property Value

 [ScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-scaffoldplan/)?
