---
title: Class CellSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven cell-based architecture settings for a Cephalon app.

```csharp
public sealed class CellSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_CellSettings__ctor_Cephalon_Engine_Configuration_CellTrafficAutomationSettings_"></a> CellSettings\(CellTrafficAutomationSettings?\)

Creates cell settings.

```csharp
public CellSettings(CellTrafficAutomationSettings? trafficAutomation = null)
```

#### Parameters

`trafficAutomation` [CellTrafficAutomationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings/)?

The configuration-driven traffic-automation settings for governed cell routes.

## Properties

### <a id="Cephalon_Engine_Configuration_CellSettings_Empty"></a> Empty

Gets an empty cell settings instance.

```csharp
public static CellSettings Empty { get; }
```

#### Property Value

 [CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)

### <a id="Cephalon_Engine_Configuration_CellSettings_HasValues"></a> HasValues

Gets a value indicating whether any cell settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_CellSettings_TrafficAutomation"></a> TrafficAutomation

Gets the configuration-driven traffic-automation settings for governed cell routes.

```csharp
public CellTrafficAutomationSettings TrafficAutomation { get; }
```

#### Property Value

 [CellTrafficAutomationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-celltrafficautomationsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_CellSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads cell settings from configuration.

```csharp
public static CellSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [CellSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-cellsettings/)

The parsed cell settings.
