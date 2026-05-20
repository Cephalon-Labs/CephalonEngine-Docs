---
title: Class BuiltInBlueprints
slug: 0-1-0-preview/reference/api/cephalon-engine-appmodel-builtinblueprints
editUrl: false
---

Namespace: [Cephalon.Engine.AppModel](/0-1-0-preview/reference/api/cephalon-engine-appmodel/)  
Assembly: Cephalon.Engine.dll  

Provides the built-in Cephalon app blueprints.

```csharp
public static class BuiltInBlueprints
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BuiltInBlueprints](/0-1-0-preview/reference/api/cephalon-engine-appmodel-builtinblueprints/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_All"></a> All

Gets all built-in blueprints.

```csharp
public static IReadOnlyList<AppBlueprint> All { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<AppBlueprint\>

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_Microservice"></a> Microservice

Gets the built-in microservice blueprint.

```csharp
public static AppBlueprint Microservice { get; }
```

#### Property Value

 AppBlueprint

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_ModularMonolith"></a> ModularMonolith

Gets the built-in modular-monolith blueprint.

```csharp
public static AppBlueprint ModularMonolith { get; }
```

#### Property Value

 AppBlueprint

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_ModularVerticalSlice"></a> ModularVerticalSlice

Gets the built-in modular-vertical-slice blueprint.

```csharp
public static AppBlueprint ModularVerticalSlice { get; }
```

#### Property Value

 AppBlueprint

## Methods

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_Resolve_System_String_"></a> Resolve\(string\)

Resolves a blueprint identifier, display name, or alias.

```csharp
public static AppBlueprint Resolve(string value)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The blueprint identifier, display name, or alias to resolve.

#### Returns

 AppBlueprint

The resolved blueprint.

### <a id="Cephalon_Engine_AppModel_BuiltInBlueprints_TryResolve_System_String_Cephalon_Abstractions_AppModel_AppBlueprint__"></a> TryResolve\(string, out AppBlueprint\)

Attempts to resolve a blueprint identifier, display name, or alias.

```csharp
public static bool TryResolve(string value, out AppBlueprint blueprint)
```

#### Parameters

`value` [string](https://learn.microsoft.com/dotnet/api/system.string)

The blueprint identifier, display name, or alias to resolve.

`blueprint` AppBlueprint

The resolved blueprint when the lookup succeeds.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> when the blueprint was resolved; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.
