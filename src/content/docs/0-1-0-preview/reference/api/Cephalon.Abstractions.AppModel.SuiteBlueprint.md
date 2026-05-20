---
title: Class SuiteBlueprint
slug: 0-1-0-preview/reference/api/cephalon-abstractions-appmodel-suiteblueprint
editUrl: false
---

Namespace: [Cephalon.Abstractions.AppModel](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel/)  
Assembly: Cephalon.Abstractions.dll  

Describes a suite-level Cephalon blueprint composed from existing app-level contracts.

```csharp
public sealed class SuiteBlueprint
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SuiteBlueprint](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-suiteblueprint/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint__ctor_System_String_System_String_System_String_Cephalon_Abstractions_AppModel_Scaffolding_SuiteScaffoldPlan_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> SuiteBlueprint\(string, string, string, SuiteScaffoldPlan, IReadOnlyDictionary<string, string\>?\)

Creates a suite blueprint.

```csharp
[JsonConstructor]
public SuiteBlueprint(string id, string displayName, string description, SuiteScaffoldPlan scaffold, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable suite-blueprint identifier.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable suite-blueprint name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suite-blueprint description.

`scaffold` [SuiteScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldplan/)

The suite-scaffold plan associated with the suite blueprint.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional suite-blueprint metadata.

## Properties

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint_Description"></a> Description

Gets the suite-blueprint description.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint_DisplayName"></a> DisplayName

Gets the human-readable suite-blueprint name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint_Id"></a> Id

Gets the stable suite-blueprint identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint_Metadata"></a> Metadata

Gets additional suite-blueprint metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_AppModel_SuiteBlueprint_Scaffold"></a> Scaffold

Gets the suite-scaffold plan associated with the suite blueprint.

```csharp
public SuiteScaffoldPlan Scaffold { get; }
```

#### Property Value

 [SuiteScaffoldPlan](/0-1-0-preview/reference/api/cephalon-abstractions-appmodel-scaffolding-suitescaffoldplan/)
