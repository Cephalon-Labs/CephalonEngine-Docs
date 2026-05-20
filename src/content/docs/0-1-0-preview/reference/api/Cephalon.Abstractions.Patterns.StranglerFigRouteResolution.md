---
title: Class StranglerFigRouteResolution
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrouteresolution
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes the strangler-fig routing decision made for one request.

```csharp
public sealed record StranglerFigRouteResolution : IEquatable<StranglerFigRouteResolution>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigRouteResolution](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigrouteresolution/)

#### Implements

[IEquatable<StranglerFigRouteResolution\>](https://learn.microsoft.com/dotnet/api/system.iequatable\-1)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution__ctor_System_String_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_StranglerFigTarget_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> StranglerFigRouteResolution\(string, string, string, string, string, string, StranglerFigTarget, string, string?, string?, string, IReadOnlyDictionary<string, string\>\)

Describes the strangler-fig routing decision made for one request.

```csharp
public StranglerFigRouteResolution(string RouteId, string RouteDisplayName, string SourceModuleId, string RequestedPath, string RequestedMethod, string MatchedPathPrefix, StranglerFigTarget SelectedTarget, string SelectedEndpoint, string? LegacyEndpoint, string? ModernEndpoint, string ResolutionMode, IReadOnlyDictionary<string, string> Metadata)
```

#### Parameters

`RouteId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The matched route identifier.

`RouteDisplayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing route name.

`SourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the modern boundary.

`RequestedPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized request path that was evaluated.

`RequestedMethod` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized request method that was evaluated.

`MatchedPathPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized route prefix that matched the request.

`SelectedTarget` [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

The migration boundary chosen for the request.

`SelectedEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete endpoint or boundary identifier that should receive the request.

`LegacyEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The configured legacy endpoint when one exists.

`ModernEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The configured modern endpoint when one exists.

`ResolutionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The reason the boundary was chosen, such as <code>preferred-target</code> or <code>fallback-target</code>.

`Metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Additional route metadata that traveled with the decision.

## Properties

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_LegacyEndpoint"></a> LegacyEndpoint

The configured legacy endpoint when one exists.

```csharp
public string? LegacyEndpoint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_MatchedPathPrefix"></a> MatchedPathPrefix

The normalized route prefix that matched the request.

```csharp
public string MatchedPathPrefix { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_Metadata"></a> Metadata

Additional route metadata that traveled with the decision.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; init; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_ModernEndpoint"></a> ModernEndpoint

The configured modern endpoint when one exists.

```csharp
public string? ModernEndpoint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_RequestedMethod"></a> RequestedMethod

The normalized request method that was evaluated.

```csharp
public string RequestedMethod { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_RequestedPath"></a> RequestedPath

The normalized request path that was evaluated.

```csharp
public string RequestedPath { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_ResolutionMode"></a> ResolutionMode

The reason the boundary was chosen, such as <code>preferred-target</code> or <code>fallback-target</code>.

```csharp
public string ResolutionMode { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_RouteDisplayName"></a> RouteDisplayName

The operator-facing route name.

```csharp
public string RouteDisplayName { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_RouteId"></a> RouteId

The matched route identifier.

```csharp
public string RouteId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_SelectedEndpoint"></a> SelectedEndpoint

The concrete endpoint or boundary identifier that should receive the request.

```csharp
public string SelectedEndpoint { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_SelectedTarget"></a> SelectedTarget

The migration boundary chosen for the request.

```csharp
public StranglerFigTarget SelectedTarget { get; init; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigRouteResolution_SourceModuleId"></a> SourceModuleId

The Cephalon module that owns the modern boundary.

```csharp
public string SourceModuleId { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
