---
title: Class StranglerFigIngressRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes the effective strangler-fig ingress materialization answer for one route.

```csharp
public sealed class StranglerFigIngressRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigIngressRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigingressruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_StranglerFigTarget_Cephalon_Abstractions_Patterns_StranglerFigTarget_System_String_System_String_System_String_System_String_System_String_System_Boolean_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> StranglerFigIngressRuntimeDescriptor\(string, string, string, string, string, StranglerFigTarget, StranglerFigTarget, string, string, string, string, string, bool, string?, string?, string?, IReadOnlyList<string\>?, string?, int, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a strangler-fig ingress runtime descriptor.

```csharp
public StranglerFigIngressRuntimeDescriptor(string routeId, string sourceModuleId, string displayName, string description, string pathPrefix, StranglerFigTarget requestedTarget, StranglerFigTarget effectiveTarget, string requestedTargetSource, string selectionMode, string selectedEndpoint, string selectedEndpointKind, string ingressMode, bool canMaterialize, string? targetPathPrefix = null, string? targetQuery = null, string? targetUri = null, IReadOnlyList<string>? methods = null, string? progressState = null, int progressPercent = 0, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyDictionary<string, string>? runtimeMetadata = null)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable route identifier.

`sourceModuleId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The Cephalon module that owns the modern boundary for this route.

`displayName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The operator-facing route name.

`description` [string](https://learn.microsoft.com/dotnet/api/system.string)

The human-readable description of the migration boundary.

`pathPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)

The rooted public path prefix that this route matches.

`requestedTarget` [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

The target requested after applying migration-policy overlays.

`effectiveTarget` [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

The target that will actually receive traffic after endpoint fallback is considered.

`requestedTargetSource` [string](https://learn.microsoft.com/dotnet/api/system.string)

The source of the requested target, such as <code>authored-route</code> or <code>migration-route</code>.

`selectionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The runtime selection result, such as <code>requested-target</code> or <code>fallback-target</code>.

`selectedEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)

The concrete endpoint or boundary identifier that will receive traffic.

`selectedEndpointKind` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized selected-endpoint kind, such as <code>local-path</code>, <code>absolute-uri</code>, or <code>opaque</code>.

`ingressMode` [string](https://learn.microsoft.com/dotnet/api/system.string)

The normalized ingress follow-through mode, such as <code>pass-through</code>, <code>rewrite-local-path</code>, <code>proxy-absolute-uri</code>, or <code>opaque-endpoint</code>.

`canMaterialize` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether a generic ingress or traffic manager can materialize this selected endpoint directly.

`targetPathPrefix` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized path prefix that traffic should land on when the selected endpoint is path-shaped.

`targetQuery` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized base query string that should flow with the selected endpoint when one exists.

`targetUri` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized absolute URI that traffic should target when the selected endpoint is absolute.

`methods` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional request methods that this route matches.

`progressState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The normalized migration-progress state for the route.

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The normalized migration-progress percentage for the route.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The original authored route metadata.

`runtimeMetadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Additional runtime-only metadata such as notes or overlay provenance.

## Properties

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_CanMaterialize"></a> CanMaterialize

Gets a value indicating whether a generic ingress or traffic manager can materialize this selected endpoint directly.

```csharp
public bool CanMaterialize { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_Description"></a> Description

Gets the human-readable description of the migration boundary.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing route name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_EffectiveTarget"></a> EffectiveTarget

Gets the target that will actually receive traffic after endpoint fallback is considered.

```csharp
public StranglerFigTarget EffectiveTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_IngressMode"></a> IngressMode

Gets the normalized ingress follow-through mode, such as <code>pass-through</code>, <code>rewrite-local-path</code>, <code>proxy-absolute-uri</code>, or <code>opaque-endpoint</code>.

```csharp
public string IngressMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_Metadata"></a> Metadata

Gets the original authored route metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_Methods"></a> Methods

Gets the normalized request methods that this route matches.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_PathPrefix"></a> PathPrefix

Gets the rooted public path prefix that matches this route.

```csharp
public string PathPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_ProgressPercent"></a> ProgressPercent

Gets the normalized migration-progress percentage for the route.

```csharp
public int ProgressPercent { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_ProgressState"></a> ProgressState

Gets the normalized migration-progress state for the route.

```csharp
public string ProgressState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_RequestedTarget"></a> RequestedTarget

Gets the target requested after applying migration-policy overlays.

```csharp
public StranglerFigTarget RequestedTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_RequestedTargetSource"></a> RequestedTargetSource

Gets the source of the requested target, such as <code>authored-route</code>, <code>migration-default</code>, or <code>migration-route</code>.

```csharp
public string RequestedTargetSource { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_RouteId"></a> RouteId

Gets the stable route identifier.

```csharp
public string RouteId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_RuntimeMetadata"></a> RuntimeMetadata

Gets runtime-only metadata such as notes or overlay provenance.

```csharp
public IReadOnlyDictionary<string, string> RuntimeMetadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_SelectedEndpoint"></a> SelectedEndpoint

Gets the concrete endpoint or boundary identifier that will receive traffic.

```csharp
public string SelectedEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_SelectedEndpointKind"></a> SelectedEndpointKind

Gets the normalized selected-endpoint kind, such as <code>local-path</code>, <code>absolute-uri</code>, or <code>opaque</code>.

```csharp
public string SelectedEndpointKind { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_SelectionMode"></a> SelectionMode

Gets the runtime selection result, such as <code>requested-target</code> or <code>fallback-target</code>.

```csharp
public string SelectionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns the modern Cephalon boundary for this route.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_TargetPathPrefix"></a> TargetPathPrefix

Gets the normalized path prefix that traffic should land on when the selected endpoint is path-shaped.

```csharp
public string? TargetPathPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_TargetQuery"></a> TargetQuery

Gets the normalized base query string that should flow with the selected endpoint when one exists.

```csharp
public string? TargetQuery { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigIngressRuntimeDescriptor_TargetUri"></a> TargetUri

Gets the normalized absolute URI that traffic should target when the selected endpoint is absolute.

```csharp
public string? TargetUri { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?
