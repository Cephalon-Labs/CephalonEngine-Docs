---
title: Class StranglerFigMigrationSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven strangler-fig migration settings for a Cephalon app.

```csharp
public sealed class StranglerFigMigrationSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[StranglerFigMigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings__ctor_System_Nullable_Cephalon_Abstractions_Patterns_StranglerFigTarget__System_String_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_Cephalon_Engine_Configuration_StranglerFigRoutePolicySettings__"></a> StranglerFigMigrationSettings\(StranglerFigTarget?, string?, int?, IReadOnlyList<StranglerFigRoutePolicySettings\>?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.StranglerFigMigrationSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public StranglerFigMigrationSettings(StranglerFigTarget? defaultTarget = null, string? defaultProgressState = null, int? defaultProgressPercent = null, IReadOnlyList<StranglerFigRoutePolicySettings>? routes = null)
```

#### Parameters

`defaultTarget` StranglerFigTarget?

The default target to request for routes without an explicit route-level override.

`defaultProgressState` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The default normalized progress state for routes without an explicit route-level override.

`defaultProgressPercent` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The default normalized progress percent for routes without an explicit route-level override.

`routes` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigRoutePolicySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigroutepolicysettings/)\>?

The route-specific strangler-fig migration-policy entries.

## Properties

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_DefaultProgressPercent"></a> DefaultProgressPercent

Gets the default normalized progress percent for routes without an explicit route-level override.

```csharp
public int? DefaultProgressPercent { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_DefaultProgressState"></a> DefaultProgressState

Gets the default normalized progress state for routes without an explicit route-level override.

```csharp
public string? DefaultProgressState { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_DefaultTarget"></a> DefaultTarget

Gets the default target to request for routes without an explicit route-level override.

```csharp
public StranglerFigTarget? DefaultTarget { get; }
```

#### Property Value

 StranglerFigTarget?

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_Empty"></a> Empty

Gets an empty strangler-fig migration-settings instance.

```csharp
public static StranglerFigMigrationSettings Empty { get; }
```

#### Property Value

 [StranglerFigMigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings/)

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_HasValues"></a> HasValues

Gets a value indicating whether any strangler-fig migration settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_Routes"></a> Routes

Gets the route-specific strangler-fig migration-policy entries.

```csharp
public IReadOnlyList<StranglerFigRoutePolicySettings> Routes { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[StranglerFigRoutePolicySettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigroutepolicysettings/)\>

## Methods

### <a id="Cephalon_Engine_Configuration_StranglerFigMigrationSettings_FromSection_Microsoft_Extensions_Configuration_IConfigurationSection_"></a> FromSection\(IConfigurationSection?\)

Reads strangler-fig migration settings from the supplied configuration section.

```csharp
public static StranglerFigMigrationSettings FromSection(IConfigurationSection? section)
```

#### Parameters

`section` [IConfigurationSection](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfigurationsection)?

The configuration section that contains the strangler-fig migration settings.

#### Returns

 [StranglerFigMigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings/)

The parsed strangler-fig migration settings.
