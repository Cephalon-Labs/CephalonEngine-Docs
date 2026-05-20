---
title: Class CellTrafficAutomationSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven cell traffic-automation settings for a Cephalon app.

```csharp
public sealed class CellTrafficAutomationSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellTrafficAutomationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings__ctor_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings__"></a> CellTrafficAutomationSettings\(string?, string?, string?, string?, IReadOnlyList<CellTrafficAutomationRouteSettings\>?\)

Creates cell traffic-automation settings.

```csharp
public CellTrafficAutomationSettings(string? defaultAutomationMode = null, string? defaultTriggerMode = null, string? defaultActionMode = null, string? defaultMaterializationMode = null, IReadOnlyList<CellTrafficAutomationRouteSettings>? routes = null)
```

#### Parameters

`defaultAutomationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized automation posture for active governed routes.

`defaultTriggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized trigger posture for active governed routes.

`defaultActionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized action posture for active governed routes.

`defaultMaterializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized materialization posture for active governed routes.

`routes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRouteSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings/)\>?

The route-specific cell traffic-automation overrides.

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings__ctor_System_String_System_String_System_String_System_String_System_String_System_Collections_Generic_IReadOnlyList_System_String__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_CellTrafficAutomationRouteSettings__"></a> CellTrafficAutomationSettings\(string?, string?, string?, string?, string?, IReadOnlyList<string\>?, IReadOnlyList<CellTrafficAutomationRouteSettings\>?\)

Creates cell traffic-automation settings with provider and edge defaults.

```csharp
public CellTrafficAutomationSettings(string? defaultAutomationMode, string? defaultTriggerMode, string? defaultActionMode, string? defaultMaterializationMode, string? defaultProviderId, IReadOnlyList<string>? defaultEdgeNodeIds = null, IReadOnlyList<CellTrafficAutomationRouteSettings>? routes = null)
```

#### Parameters

`defaultAutomationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized automation posture for active governed routes.

`defaultTriggerMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized trigger posture for active governed routes.

`defaultActionMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized action posture for active governed routes.

`defaultMaterializationMode` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized materialization posture for active governed routes.

`defaultProviderId` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The optional default external provider or control-plane identifier.

`defaultEdgeNodeIds` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

The optional default edge-node identifiers.

`routes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRouteSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings/)\>?

The route-specific cell traffic-automation overrides.

## Properties

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultActionMode"></a> DefaultActionMode

Gets the default normalized action posture for active governed routes.

```csharp
public string? DefaultActionMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultAutomationMode"></a> DefaultAutomationMode

Gets the default normalized automation posture for active governed routes.

```csharp
public string? DefaultAutomationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultEdgeNodeIds"></a> DefaultEdgeNodeIds

Gets the optional default edge-node identifiers.

```csharp
public IReadOnlyList<string> DefaultEdgeNodeIds { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultMaterializationMode"></a> DefaultMaterializationMode

Gets the default normalized materialization posture for active governed routes.

```csharp
public string? DefaultMaterializationMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultProviderId"></a> DefaultProviderId

Gets the optional default external provider or control-plane identifier.

```csharp
public string? DefaultProviderId { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_DefaultTriggerMode"></a> DefaultTriggerMode

Gets the default normalized trigger posture for active governed routes.

```csharp
public string? DefaultTriggerMode { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_Empty"></a> Empty

Gets an empty cell traffic-automation settings instance.

```csharp
public static CellTrafficAutomationSettings Empty { get; }
```

#### Property Value

 [CellTrafficAutomationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings/)

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_HasDefaultValues"></a> HasDefaultValues

Gets a value indicating whether any default traffic-automation values were explicitly supplied.

```csharp
public bool HasDefaultValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_HasValues"></a> HasValues

Gets a value indicating whether any cell traffic-automation settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_Routes"></a> Routes

Gets the route-specific cell traffic-automation overrides.

```csharp
public IReadOnlyList<CellTrafficAutomationRouteSettings> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[CellTrafficAutomationRouteSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationroutesettings/)\>

## Methods

### <a id="Cephalon_Engine_Configuration_CellTrafficAutomationSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads cell traffic-automation settings from the supplied configuration section.

```csharp
public static CellTrafficAutomationSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

The configuration section that contains the cell traffic-automation settings.

#### Returns

 [CellTrafficAutomationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings/)

The parsed cell traffic-automation settings.
