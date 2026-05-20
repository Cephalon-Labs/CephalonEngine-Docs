---
title: Class StranglerFigMigrationRuntimeDescriptor
slug: 0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor
editUrl: false
---

Namespace: [Cephalon.Abstractions.Patterns](/0-1-0-preview/reference/api/cephalon-abstractions-patterns/)  
Assembly: Cephalon.Abstractions.dll  

Describes the effective runtime migration policy for one strangler-fig route.

```csharp
public sealed class StranglerFigMigrationRuntimeDescriptor
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigMigrationRuntimeDescriptor](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigmigrationruntimedescriptor/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor__ctor_System_String_System_String_System_String_System_String_System_String_Cephalon_Abstractions_Patterns_StranglerFigTarget_Cephalon_Abstractions_Patterns_StranglerFigTarget_Cephalon_Abstractions_Patterns_StranglerFigTarget_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_String_System_Int32_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> StranglerFigMigrationRuntimeDescriptor\(string, string, string, string, string, StranglerFigTarget, StranglerFigTarget, StranglerFigTarget, string, string, string, string?, string?, IReadOnlyList<string\>?, string?, int, IReadOnlyDictionary<string, string\>?, IReadOnlyDictionary<string, string\>?\)

Creates a strangler-fig runtime migration descriptor.

```csharp
public StranglerFigMigrationRuntimeDescriptor(string routeId, string sourceModuleId, string displayName, string description, string pathPrefix, StranglerFigTarget authoredTarget, StranglerFigTarget requestedTarget, StranglerFigTarget effectiveTarget, string requestedTargetSource, string selectionMode, string selectedEndpoint, string? legacyEndpoint = null, string? modernEndpoint = null, IReadOnlyList<string>? methods = null, string? progressState = null, int progressPercent = 0, IReadOnlyDictionary<string, string>? metadata = null, IReadOnlyDictionary<string, string>? runtimeMetadata = null)
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

The rooted path prefix that this route matches.

`authoredTarget` [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

The target preferred by the authored route descriptor.

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

`legacyEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The legacy boundary identifier or endpoint when one is configured.

`modernEndpoint` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The modern Cephalon boundary identifier or endpoint when one is configured.

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

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_AuthoredTarget"></a> AuthoredTarget

Gets the target preferred by the authored route descriptor.

```csharp
public StranglerFigTarget AuthoredTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_Description"></a> Description

Gets the human-readable description of the migration boundary.

```csharp
public string Description { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_DisplayName"></a> DisplayName

Gets the operator-facing route name.

```csharp
public string DisplayName { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_EffectiveTarget"></a> EffectiveTarget

Gets the target that will actually receive traffic after endpoint fallback is considered.

```csharp
public StranglerFigTarget EffectiveTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_LegacyEndpoint"></a> LegacyEndpoint

Gets the legacy boundary identifier or endpoint when one is configured.

```csharp
public string? LegacyEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_Metadata"></a> Metadata

Gets the original authored route metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_Methods"></a> Methods

Gets the normalized request methods that this route matches.

```csharp
public IReadOnlyList<string> Methods { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_ModernEndpoint"></a> ModernEndpoint

Gets the modern Cephalon boundary identifier or endpoint when one is configured.

```csharp
public string? ModernEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_PathPrefix"></a> PathPrefix

Gets the rooted path prefix that matches this route.

```csharp
public string PathPrefix { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_ProgressPercent"></a> ProgressPercent

Gets the normalized migration-progress percentage for the route.

```csharp
public int ProgressPercent { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_ProgressState"></a> ProgressState

Gets the normalized migration-progress state for the route.

```csharp
public string ProgressState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_RequestedTarget"></a> RequestedTarget

Gets the target requested after applying migration-policy overlays.

```csharp
public StranglerFigTarget RequestedTarget { get; }
```

#### Property Value

 [StranglerFigTarget](/0-1-0-preview/reference/api/cephalon-abstractions-patterns-stranglerfigtarget/)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_RequestedTargetSource"></a> RequestedTargetSource

Gets the source of the requested target, such as <code>authored-route</code>, <code>migration-default</code>, or <code>migration-route</code>.

```csharp
public string RequestedTargetSource { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_RouteId"></a> RouteId

Gets the stable route identifier.

```csharp
public string RouteId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_RuntimeMetadata"></a> RuntimeMetadata

Gets runtime-only metadata such as notes or overlay provenance.

```csharp
public IReadOnlyDictionary<string, string> RuntimeMetadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_SelectedEndpoint"></a> SelectedEndpoint

Gets the concrete endpoint or boundary identifier that will receive traffic.

```csharp
public string SelectedEndpoint { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_SelectionMode"></a> SelectionMode

Gets the runtime selection result, such as <code>requested-target</code> or <code>fallback-target</code>.

```csharp
public string SelectionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Abstractions_Patterns_StranglerFigMigrationRuntimeDescriptor_SourceModuleId"></a> SourceModuleId

Gets the module that owns the modern Cephalon boundary for this route.

```csharp
public string SourceModuleId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)
