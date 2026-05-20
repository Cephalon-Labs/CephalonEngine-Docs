---
title: Class CellTrafficAutomationRouteSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes one configuration-driven cell traffic-automation route override.

```csharp
public sealed class CellTrafficAutomationRouteSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationRouteSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__"></a> CellTrafficAutomationRouteSettings\(string, string?, string?, string?, string?, string?, IReadOnlyDictionary<string, string\>?\)

Creates cell traffic-automation route settings.

```csharp
public CellTrafficAutomationRouteSettings(string routeId, string? automationMode = null, string? triggerMode = null, string? actionMode = null, string? materializationMode = null, string? notes = null, IReadOnlyDictionary<string, string>? metadata = null)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governed route identifier.

`automationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized automation posture for this route.

`triggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized trigger posture for this route.

`actionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized action posture for this route.

`materializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized materialization posture for this route.

`notes` [string](https://learn.microsoft.com/dotnet/api/system.string)?

Optional operator-facing notes for this route-specific overlay.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional route-specific runtime metadata.

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings__ctor_System_String_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyDictionary_System_String_System_String__System_String_System_Collections_Generic_IReadOnlyList_System_String__"></a> CellTrafficAutomationRouteSettings\(string, string?, string?, string?, string?, string?, IReadOnlyDictionary<string, string\>?, string?, IReadOnlyList<string\>?\)

Creates cell traffic-automation route settings with provider and edge targeting.

```csharp
public CellTrafficAutomationRouteSettings(string routeId, string? automationMode, string? triggerMode, string? actionMode, string? materializationMode, string? notes, IReadOnlyDictionary<string, string>? metadata, string? providerId, IReadOnlyList<string>? edgeNodeIds = null)
```

#### Parameters

`routeId` [string](https://learn.microsoft.com/dotnet/api/system.string)

The stable governed route identifier.

`automationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized automation posture for this route.

`triggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized trigger posture for this route.

`actionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized action posture for this route.

`materializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional normalized materialization posture for this route.

`notes` [string](https://learn.microsoft.com/dotnet/api/system.string)?

Optional operator-facing notes for this route-specific overlay.

`metadata` [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional route-specific runtime metadata.

`providerId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional external provider or control-plane identifier for this route.

`edgeNodeIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional edge-node identifiers for this route.

## Properties

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_ActionMode"></a> ActionMode

Gets the optional normalized action posture for this route.

```csharp
public string? ActionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_AutomationMode"></a> AutomationMode

Gets the optional normalized automation posture for this route.

```csharp
public string? AutomationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_EdgeNodeIds"></a> EdgeNodeIds

Gets the optional edge-node identifiers for this route.

```csharp
public IReadOnlyList<string> EdgeNodeIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_MaterializationMode"></a> MaterializationMode

Gets the optional normalized materialization posture for this route.

```csharp
public string? MaterializationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_Metadata"></a> Metadata

Gets optional route-specific runtime metadata.

```csharp
public IReadOnlyDictionary<string, string> Metadata { get; }
```

#### Property Value

 [IReadOnlyDictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlydictionary\-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_Notes"></a> Notes

Gets optional operator-facing notes for this route-specific overlay.

```csharp
public string? Notes { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_ProviderId"></a> ProviderId

Gets the optional external provider or control-plane identifier for this route.

```csharp
public string? ProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_RouteId"></a> RouteId

Gets the stable governed route identifier.

```csharp
public string RouteId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_TriggerMode"></a> TriggerMode

Gets the optional normalized trigger posture for this route.

```csharp
public string? TriggerMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection\)

Reads one cell traffic-automation route override from configuration.

```csharp
public static CellTrafficAutomationRouteSettings FromSection(IConfigurationSection section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)

The configuration section that contains the route override.

#### Returns

 [CellTrafficAutomationRouteSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings/)

The parsed route settings.
