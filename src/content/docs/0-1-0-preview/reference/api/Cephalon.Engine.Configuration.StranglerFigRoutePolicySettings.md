---
title: Class StranglerFigRoutePolicySettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigroutepolicysettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one route-specific strangler-fig migration-policy override.

```csharp
public sealed class StranglerFigRoutePolicySettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigRoutePolicySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigroutepolicysettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings__ctor_System_String_System_Nullable_Cephalon_Abstractions_Patterns_StranglerFigTarget__System_String_System_Nullable_System_Int32__System_String_"></a> StranglerFigRoutePolicySettings\(string, StranglerFigTarget?, string?, int?, string?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.StranglerFigRoutePolicySettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StranglerFigRoutePolicySettings(string routeId, StranglerFigTarget? target = null, string? progressState = null, int? progressPercent = null, string? notes = null)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable strangler-fig route identifier to target.

`target` StranglerFigTarget?

The route-specific requested target override.

`progressState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The route-specific normalized migration-progress state.

`progressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The route-specific normalized migration-progress percentage.

`notes` [string](https://learn.microsoft.com/dotnet/api/system.string)?

Optional operator-facing notes that explain the route-specific override.

## Properties

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_Notes"></a> Notes

Gets optional operator-facing notes that explain the route-specific override.

```csharp
public string? Notes { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_ProgressPercent"></a> ProgressPercent

Gets the route-specific normalized migration-progress percentage.

```csharp
public int? ProgressPercent { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_ProgressState"></a> ProgressState

Gets the route-specific normalized migration-progress state.

```csharp
public string? ProgressState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_RouteId"></a> RouteId

Gets the stable strangler-fig route identifier to target.

```csharp
public string RouteId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_Target"></a> Target

Gets the route-specific requested target override.

```csharp
public StranglerFigTarget? Target { get; }
```

#### Property Value

 StranglerFigTarget?

## Methods

### <a id="Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads one route-specific strangler-fig migration-policy override from configuration.

```csharp
public static StranglerFigRoutePolicySettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section to read.

#### Returns

 [StranglerFigRoutePolicySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigroutepolicysettings/)

The parsed route-policy settings.
