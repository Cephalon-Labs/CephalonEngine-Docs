---
title: Class StranglerFigRouteDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes one strangler-fig route owned by a Cephalon module.

```csharp
public sealed class StranglerFigRouteDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigRouteDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigroutedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_StranglerFigTarget_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> StranglerFigRouteDescriptor\(string, string, string, string, string, StranglerFigTarget, string?, string?, IReadOnlyList<string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a strangler-fig route descriptor.

```csharp
public StranglerFigRouteDescriptor(string id, string sourceModuleId, string displayName, string description, string pathPrefix, StranglerFigTarget preferredTarget = StranglerFigTarget.Modern, string? legacyEndpoint = null, string? modernEndpoint = null, IReadOnlyList<string>? methods = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable route identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the modern boundary for this route.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing route name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the migration boundary.

`pathPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rooted path prefix that this route should match.

`preferredTarget` [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

The preferred boundary for matched requests.

`legacyEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The legacy boundary identifier or endpoint.

`modernEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The modern Cephalon boundary identifier or endpoint.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request methods that this route should match.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional route metadata.

## Properties

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_Description"></a> Description

Gets the human-readable description of the migration boundary.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing route name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_Id"></a> Id

Gets the stable route identifier.

```csharp
public string Id { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_LegacyEndpoint"></a> LegacyEndpoint

Gets the legacy boundary identifier or endpoint when one is configured.

```csharp
public string? LegacyEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_Metadata"></a> Metadata

Gets optional route metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_Methods"></a> Methods

Gets the normalized request methods that this route should match.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_ModernEndpoint"></a> ModernEndpoint

Gets the modern Cephalon boundary identifier or endpoint when one is configured.

```csharp
public string? ModernEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_PathPrefix"></a> PathPrefix

Gets the rooted path prefix that should match this route.

```csharp
public string PathPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_PreferredTarget"></a> PreferredTarget

Gets the preferred boundary for matched requests.

```csharp
public StranglerFigTarget PreferredTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns the modern Cephalon boundary for this route.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
