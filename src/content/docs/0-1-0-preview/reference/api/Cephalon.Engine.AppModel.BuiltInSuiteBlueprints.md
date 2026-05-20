---
title: Class BuiltInSuiteBlueprints
slug: 0-1-0-preview/reference/api/cephalon-engine-appmodel-builtinsuiteblueprints
editUrl: false
---

Namespace: [Cephalon.Engine.AppModel](/0-1-0-preview/reference/api/cephalon-engine-appmodel/)  
Assembly: Cephalon.Engine.dll  

Provides the built-in Cephalon suite blueprints.

```csharp
public static class BuiltInSuiteBlueprints
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuiltInSuiteBlueprints](/0-1-0-preview/reference/api/cephalon-engine-appmodel-builtinsuiteblueprints/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Engine_AppModel_BuiltInSuiteBlueprints_All"></a> All

Gets all built-in suite blueprints.

```csharp
public static IReadOnlyList<SuiteBlueprint> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<SuiteBlueprint\>

### <a id="Cephalon_Engine_AppModel_BuiltInSuiteBlueprints_MicroserviceSuite"></a> MicroserviceSuite

Gets the built-in microservice-suite blueprint.

```csharp
public static SuiteBlueprint MicroserviceSuite { get; }
```

#### Property Value

 SuiteBlueprint

## Methods

### <a id="Cephalon_Engine_AppModel_BuiltInSuiteBlueprints_Resolve_System_String_"></a> Resolve\(string\)

Resolves a suite blueprint identifier, display name, or alias.

```csharp
public static SuiteBlueprint Resolve(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suite blueprint identifier, display name, or alias to resolve.

#### Returns

 SuiteBlueprint

The resolved suite blueprint.

### <a id="Cephalon_Engine_AppModel_BuiltInSuiteBlueprints_TryResolve_System_String_Cephalon_Abstractions_AppModel_SuiteBlueprint__"></a> TryResolve\(string, out SuiteBlueprint\)

Attempts to resolve a suite blueprint identifier, display name, or alias.

```csharp
public static bool TryResolve(string value, out SuiteBlueprint blueprint)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The suite blueprint identifier, display name, or alias to resolve.

`blueprint` SuiteBlueprint

The resolved suite blueprint when the lookup succeeds.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the suite blueprint was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
