---
title: Class MigrationSettings
slug: 0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings
editUrl: false
---

Namespace: [Cephalon.Engine.Configuration](/0-1-0-preview/reference/api/cephalon-engine-configuration/)  
Assembly: Cephalon.Engine.dll  

Describes configuration-driven migration settings for a Cephalon app.

```csharp
public sealed class MigrationSettings
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)

#### Inherited Members

[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Constructors

### <a id="Cephalon_Engine_Configuration_MigrationSettings__ctor_Cephalon_Engine_Configuration_StranglerFigMigrationSettings_"></a> MigrationSettings\(StranglerFigMigrationSettings?\)

Initializes a new instance of the <xref href="Cephalon.Engine.Configuration.MigrationSettings" data-throw-if-not-resolved="false"></xref> class.

```csharp
public MigrationSettings(StranglerFigMigrationSettings? stranglerFig = null)
```

#### Parameters

`stranglerFig` [StranglerFigMigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings/)?

The strangler-fig migration settings resolved for the app.

## Properties

### <a id="Cephalon_Engine_Configuration_MigrationSettings_Empty"></a> Empty

Gets an empty migration-settings instance.

```csharp
public static MigrationSettings Empty { get; }
```

#### Property Value

 [MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)

### <a id="Cephalon_Engine_Configuration_MigrationSettings_HasValues"></a> HasValues

Gets a value indicating whether any migration settings were explicitly supplied.

```csharp
public bool HasValues { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="Cephalon_Engine_Configuration_MigrationSettings_StranglerFig"></a> StranglerFig

Gets the strangler-fig migration settings resolved for the app.

```csharp
public StranglerFigMigrationSettings StranglerFig { get; }
```

#### Property Value

 [StranglerFigMigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-stranglerfigmigrationsettings/)

## Methods

### <a id="Cephalon_Engine_Configuration_MigrationSettings_FromConfiguration_Microsoft_Extensions_Configuration_IConfiguration_System_String_"></a> FromConfiguration\(IConfiguration, string\)

Reads migration settings from configuration.

```csharp
public static MigrationSettings FromConfiguration(IConfiguration configuration, string sectionPath = "Engine")
```

#### Parameters

`configuration` [IConfiguration](https://learn.microsoft.com/dotnet/api/microsoft.extensions.configuration.iconfiguration)

The configuration source that contains the engine section.

`sectionPath` [string](https://learn.microsoft.com/dotnet/api/system.string)

The root configuration section path to read from.

#### Returns

 [MigrationSettings](/0-1-0-preview/reference/api/cephalon-engine-configuration-migrationsettings/)

The parsed migration settings.
